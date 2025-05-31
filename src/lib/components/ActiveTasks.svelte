<script lang="ts">
    import Task from './Task.svelte';

    const activeTasks = [
        {
            title: 'Пройти тренировку',
            points: 100,
            description: 'Выполните тренировку и получите бонусные баллы'
        },
        {
            title: 'Заполнить профиль',
            points: 50,
            description: 'Добавьте информацию о себе в профиль'
        }
    ];
</script>

<div class="active-tasks">
    {#each activeTasks as task}
        <Task {...task} />
    {/each}
</div>

<style>
    .active-tasks {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        /* margin-top: 16px; */
    }
</style> 