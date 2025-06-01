<script lang="ts">
    import type { TaskData } from '../interfaces';

    export let title: string;
    export let points: number;
    export let description: string;
    export let isNew: boolean = false;
    export let image: string = "";
    export let timeLeft: string = "";
    export let progress: number = 0;
    export let company: string = "";
    export let companyDescription: string = "";
    export let showDetails: boolean = true;

    function navigateToDetails() {
        if (showDetails) {
            const taskData: TaskData = {
                title,
                points,
                description,
                isNew,
                image,
                timeLeft,
                progress,
                company,
                companyDescription
            };
            window.dispatchEvent(new CustomEvent('navigate', { 
                detail: { 
                    component: 'task-details',
                    taskData
                }
            }));
        }
    }
</script>

<div 
    class="task" 
    class:clickable={showDetails} 
    on:click={navigateToDetails}
    on:keydown={e => e.key === 'Enter' && navigateToDetails()}
    role="button"
    tabindex="0"
>
    {#if image}
        <div class="task-image" style="background-image: url({image})">
            <div class="task-title">
                <img src="task-image" alt="">
                <!-- <img src="https://downloader.disk.yandex.ru/preview/1545f02a7071859b40c875086ce92a064c26cd823c62d5e31a35354e0a09fe53/683bce4f/P1Uu3IBvn2J_059WhlC9XydbkJ2sC_KEk2e_VtbYAOfuuRRO_ACnqYduWLfxvvz5VgHzs7xBXDvk4Qqe7B86gQ%3D%3D?uid=0&filename=%D0%93%D0%BE%D1%80%D1%8B.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v3&size=2048x2048" alt=""> -->
            </div>
        </div>
    {/if}
    <div class="task-content">
        <div class="company-info">
            <div class="company-logo">
                <img src="https://c.animaapp.com/mbc14gzx2SIMy8/img/box-minimalistic.svg" alt="{company}" />
            </div>
            <div class="company-details">
                <div class="company-name">{company}</div>
                <div class="company-description">{companyDescription}</div>
            </div>
        </div>
        <p class="description">{description}</p>
        <div class="task-footer">
            <div class="progress-info">
                <div class="time-left">Осталось {timeLeft}</div>
                <div class="points-info">
                    <span>Вы получите +{points}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1L10 5L14 6L11 9L12 13L8 11L4 13L5 9L2 6L6 5L8 1Z" fill="#2B5BDA"/>
                    </svg>
                </div>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: {progress}%"></div>
            </div>
        </div>
        <button class="cancel-button">
            Отменить задание
        </button>
    </div>
</div>

<style>
    .task {
        background-color: white;
        border-radius: 16px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        width: 100%;
        text-align: left;
    }

    .task.clickable {
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .task.clickable:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }

    .task-image {
        height: 160px;
        background-size: cover;
        background-position: center;
        position: relative;
        display: flex;
        align-items: flex-end;
        padding: 16px;
    }

    .task-title {
        color: white;
        font-size: 20px;
        font-weight: 600;
        text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .task-content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .company-info {
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .company-logo {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: #f8f9fa;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .company-logo img {
        width: 24px;
        height: 24px;
    }

    .company-details {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .company-name {
        font-weight: 600;
        color: #313E56;
    }

    .company-description {
        color: #6c757d;
        font-size: 14px;
    }

    .description {
        color: #313E56;
        font-size: 16px;
        margin: 0;
        line-height: 1.5;
    }

    .task-footer {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .progress-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .time-left {
        color: #6c757d;
        font-size: 14px;
    }

    .points-info {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #2B5BDA;
        font-weight: 600;
    }

    .progress-bar {
        width: 100%;
        height: 4px;
        background-color: #EFF2F7;
        border-radius: 2px;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background-color: #2B5BDA;
        border-radius: 2px;
        transition: width 0.3s ease;
    }

    .cancel-button {
        width: 100%;
        padding: 12px;
        border: none;
        background-color: #f8f9fa;
        color: #6c757d;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .cancel-button:hover {
        background-color: #e9ecef;
    }
</style> 