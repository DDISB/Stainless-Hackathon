<script lang="ts">
    import Task from '../components/Task.svelte';
    import type { TaskData } from '../interfaces';

    export let taskData: TaskData;

    function goBack() {
        window.dispatchEvent(new CustomEvent('navigate', { 
            detail: { component: 'cabinet' }
        }));
    }
</script>

<div class="task-details">
    <button class="back-button" on:click={goBack}>
        ← Вернуться в кабинет
    </button>

    <div class="task-container">
        <Task 
            title={taskData.title}
            points={taskData.points}
            description={taskData.description}
            isNew={taskData.isNew}
            image={taskData.image}
            timeLeft={taskData.timeLeft}
            progress={taskData.progress}
            company={taskData.company}
            companyDescription={taskData.companyDescription}
            showDetails={false}
        />

        <div class="company-info">
            <h2>{taskData.company}</h2>
            <p>{taskData.companyDescription}</p>
        </div>
    </div>
</div>

<style>
    .task-details {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
    }

    .back-button {
        background: none;
        border: none;
        color: #2B5BDA;
        font-size: 16px;
        cursor: pointer;
        padding: 10px 0;
        margin-bottom: 20px;
    }

    .back-button:hover {
        text-decoration: underline;
    }

    .task-container {
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .company-info {
        margin-top: 24px;
        padding: 24px;
        border-top: 1px solid #EFF2F7;
    }

    .company-info h2 {
        color: #2B5BDA;
        margin-bottom: 12px;
    }

    .company-info p {
        color: #666;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        .task-details {
            padding-bottom: 60px;
        }
    }
</style> 