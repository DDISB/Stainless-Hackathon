<script lang="ts">
    export let title: string;
    export let points: number;
    export let description: string;
    export let isNew: boolean = false;
</script>

<div class="task">
    <div class="task-header">
        <div class="task-info">
            <h3>{title}</h3>
            <div class="points">
                <span class="points-value">{points}</span>
                <span class="points-label">баллов</span>
            </div>
        </div>
        {#if isNew}
            <span class="new-badge">Новое</span>
        {/if}
    </div>
    <p class="description">{description}</p>
    <button class="task-button">
        Выполнить
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
</div>

<style>
    .task {
        background-color: white;
        border-radius: 10px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .task-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .task-info {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    h3 {
        font-size: 16px;
        font-weight: 600;
        margin: 0;
        color: #313E56;
    }

    .points {
        display: flex;
        align-items: baseline;
        gap: 4px;
    }

    .points-value {
        color: #2B5BDA;
        font-weight: 600;
        font-size: 16px;
    }

    .points-label {
        color: #6c757d;
        font-size: 14px;
    }

    .new-badge {
        background-color: #2B5BDA;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 500;
    }

    .description {
        color: #6c757d;
        font-size: 14px;
        margin: 0;
        line-height: 1.5;
    }

    .task-button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: none;
        border: none;
        color: #2B5BDA;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        padding: 0;
        transition: opacity 0.2s;
    }

    .task-button:hover {
        opacity: 0.8;
    }
</style> 