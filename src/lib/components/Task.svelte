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
    export let companyLogo: string = "";
    export let showDetails: boolean = true;

    let imageError = false;
    let logoError = false;

    function handleImageError() {
        console.error('Failed to load task image:', image);
        imageError = true;
    }

    function handleLogoError() {
        console.error('Failed to load company logo:', companyLogo);
        logoError = true;
    }

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
    {#if image && !imageError}
        <div class="task-image">
            <img 
                src={image} 
                alt={title}
                class="background-image"
                on:error={handleImageError}
            />
            <div class="task-title">
                <h2>{title}</h2>
            </div>
        </div>
    {/if}
    <div class="task-content">
        <div class="company-info">
            <div class="company-logo">
                {#if companyLogo && !logoError}
                    <img 
                        src={companyLogo} 
                        alt={company}
                        on:error={handleLogoError}
                    />
                {:else}
                    <div class="fallback-logo">{company[0]}</div>
                {/if}
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
        position: relative;
        display: flex;
        align-items: flex-end;
        padding: 16px;
        overflow: hidden;
    }

    .background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
    }

    .task-title {
        position: relative;
        z-index: 1;
    }

    .task-title h2 {
        color: white;
        font-size: 20px;
        font-weight: 600;
        text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        margin: 0;
    }

    .fallback-logo {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #e9ecef;
        color: #6c757d;
        font-weight: 600;
        font-size: 16px;
        border-radius: 8px;
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