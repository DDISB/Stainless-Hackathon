<script lang="ts">
    import Task from './Task.svelte';

    const newTasks = [
        {
            title: 'Расскажите о любимом продукте',
            points: 100,
            description: 'Поделитесь отзывом о вашем любимом продукте в соцсетях',
            timeLeft: '23:45',
            progress: 0,
            company: 'Магнит Косметик',
            companyDescription: 'Сервис доставки товаров для дома',
            image: 'https://example.com/cosmetics2.jpg',
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
    }
</style> 