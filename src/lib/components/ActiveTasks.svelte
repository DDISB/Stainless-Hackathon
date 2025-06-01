<script lang="ts">
    import { onMount } from 'svelte';
    import { auth } from '../stores/auth';
    import Task from './Task.svelte';

    // Типы данных для задач
    interface Partner {
        id: number;
        name: string;
        description: string;
        logoUrl: string;
    }

    interface IntegrationTask {
        guid: string;
        title: string;
        description: string;
        expiredAt: string;
        amount: number;
        type: string;
        priority: number;
        logo: string;
        partner: Partner;
    }

    interface ApiTask {
        guid: string;
        marker: boolean;
        iTaskGuid: string;
        premiseId: number;
        integrationTask: IntegrationTask;
    }

    // Состояние компонента
    let tasks: ApiTask[] = [];
    let isLoading = true;
    let error: string | null = null;

    // Форматирование оставшегося времени
    function formatTimeLeft(expiredAt: string): string {
        const now = new Date();
        const expireDate = new Date(expiredAt);
        const diff = expireDate.getTime() - now.getTime();
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        return days > 0 ? `${days}д ${hours}ч` : `${hours}ч`;
    }

    // Преобразование данных API в формат компонента Task
    function adaptTask(apiTask: ApiTask) {
        const { integrationTask } = apiTask;
        return {
            title: integrationTask.title,
            points: integrationTask.amount,
            description: integrationTask.description,
            image: integrationTask.logo,
            timeLeft: formatTimeLeft(integrationTask.expiredAt),
            progress: apiTask.marker ? 100 : 0,
            company: integrationTask.partner?.name,
            companyDescription: integrationTask.partner?.description
        };
    }

    // Получение задач с сервера
    async function fetchTasks() {
        try {
            isLoading = true;
            error = null;

            if (!$auth.user) {
                throw new Error('Пользователь не авторизован');
            }
            
            const response = await fetch(`http://10.168.126.75:3000/api/task/list/?premiseId=${$auth.user.premiseId}`, {
                headers: {
                    'Authorization': `Bearer ${$auth.token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Ошибка получения данных: ${response.status}`);
            }

            const data = await response.json();
            tasks = data.tasks || [];
        } catch (err) {
            console.error('Ошибка при загрузке задач:', err);
            error = err instanceof Error ? err.message : 'Неизвестная ошибка';
        } finally {
            isLoading = false;
        }
    }

    onMount(fetchTasks);
</script>

<div class="tasks-container">
    {#if isLoading}
        <div class="loading">Загрузка задач...</div>
    {:else if error}
        <div class="error">{error}</div>
    {:else if tasks.length === 0}
        <div class="empty">Нет активных задач</div>
    {:else}
        {#each tasks as task}
            <Task {...adaptTask(task)} />
        {/each}
    {/if}
</div>

<style>
    .tasks-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
    }

    .loading,
    .error,
    .empty {
        text-align: center;
        padding: 20px;
        background: white;
        border-radius: 12px;
        color: #666;
    }

    .error {
        color: #dc3545;
        background: #ffe5e5;
    }

    .empty {
        color: #666;
        background: #f8f9fa;
    }
</style> 