<script lang="ts">
    import Task from './Task.svelte';

    const activeTasks = [
        {
            title: 'Начни свое утро с пользой!',
            points: 80,
            description: 'Снимите историю в соцсети про вашу косметичку',
            timeLeft: '1:23',
            progress: 73,
            company: 'Магнит Косметик',
            companyDescription: 'Сервис доставки товаров для дома',
            image: 'https://example.com/cosmetics.jpg'
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
    }
</style> 