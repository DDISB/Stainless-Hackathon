<script lang="ts">
    import Task from './Task.svelte';

    const newTasks = [
        {
            title: 'Подключить уведомления',
            points: 150,
            description: 'Включите уведомления, чтобы не пропустить важные события',
            isNew: true
        },
        {
            title: 'Пригласить друга',
            points: 200,
            description: 'Пригласите друга и получите дополнительные баллы',
            isNew: true
        }
    ];
</script>

<div class="new-tasks">
    {#each newTasks as task}
        <Task {...task} />
    {/each}
</div>

<style>
    .new-tasks {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 16px;
    }
</style> 