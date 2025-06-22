<script lang="ts">
    import type { TaskData } from '../interfaces';
    // import crownIcon from '../../assets/crown.svg';
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
                    <!-- <img src={crownIcon} alt="Crown icon" class="crown-icon" />-->
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="#2B5BDA">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5587 6.91771L13.4059 8.5412C13.1542 11.2163 13.0283 12.5538 12.2399 13.3603C11.4514 14.1668 10.2698 14.1668 7.90653 14.1668H6.0933C3.73003 14.1668 2.54839 14.1668 1.75998 13.3603C0.97157 12.5538 0.845687 11.2163 0.59392 8.5412L0.441124 6.91771C0.321119 5.64263 0.261116 5.00509 0.479242 4.74155C0.597238 4.59898 0.75769 4.51163 0.929243 4.49656C1.24638 4.46871 1.64464 4.9221 2.44117 5.82888C2.8531 6.29782 3.05906 6.5323 3.28883 6.56861C3.41615 6.58873 3.54587 6.56805 3.66342 6.50888C3.87559 6.40211 4.01705 6.11224 4.29997 5.53251L5.79121 2.47673C6.32582 1.38124 6.59312 0.833496 6.99992 0.833496C7.40672 0.833496 7.67402 1.38124 8.20863 2.47673L9.69987 5.53251C9.98279 6.11224 10.1242 6.40211 10.3364 6.50888C10.454 6.56805 10.5837 6.58873 10.711 6.56861C10.9408 6.5323 11.1467 6.29782 11.5587 5.82888C12.3552 4.9221 12.7535 4.46871 13.0706 4.49656C13.2421 4.51163 13.4026 4.59898 13.5206 4.74155C13.7387 5.00509 13.6787 5.64263 13.5587 6.91771ZM4.49992 11.5002C4.49992 11.224 4.72378 11.0002 4.99992 11.0002H8.99992C9.27606 11.0002 9.49992 11.224 9.49992 11.5002C9.49992 11.7763 9.27606 12.0002 8.99992 12.0002H4.99992C4.72378 12.0002 4.49992 11.7763 4.49992 11.5002Z" fill="#2B5BDA"/>
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