<script lang="ts">
    import ActiveTasks from '../components/ActiveTasks.svelte';
    import NewTasks from '../components/NewTasks.svelte';
    
    let currentDate: string;
    let activeTab = 'active'; // 'active' or 'new'

    function formatDate(date: Date): string {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        
        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        
        return `${dayName}, ${day} ${month}`;
    }

    $: currentDate = formatDate(new Date());

    function navigateToSubscription() {
        window.dispatchEvent(new CustomEvent('navigate', { 
            detail: { component: 'subscription' }
        }));
    }

    function setActiveTab(tab: string) {
        activeTab = tab;
    }
</script>

<div class="main-container">
    <div class="header">
        <div class="top-header">
            <div class="date">{currentDate}</div>
        </div>
        <div class="low-header">
            <h1>Кабинет</h1>
            

        <div class="balance" role="status" aria-label="Current balance">
            <span class="balance-number">2880</span>
            <img
                class="box-minimalistic"
                src="https://c.animaapp.com/mbc14gzx2SIMy8/img/box-minimalistic.svg"
                alt="Balance icon"
            />
        </div>
        </div>
    </div>

    <div class="content">
        <div class="content-block">
            <div class="white-block-button">
                <button class="subscription-block" on:click={navigateToSubscription}>
                    <div class="subscription-info">
                        <span>Подписка</span>
                        <span class="text-wrapper">PRO</span>
                    </div>
                    <div class="arrow-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </button>
            </div>
        </div>

        <div class="content-block">
            <h2>Карта бонусов</h2>
            <div class="white-block">
                <p class="gray-text">Выполняй задания <br> и получай бонусы</p>
                <div class="level-progress">
                    <div class="level-indicators">
                        <span class="level-text">3 уровень</span>
                        <span class="level-text">4 уровень</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: 75%"></div>
                    </div>
                    <div class="points-display">
                        <span class="points current">1500 баллов</span>
                        <span class="points target">2000 баллов</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="content-block">
            <h2>Горящие задания</h2>
            <div class="tasks-toggle">
                <button 
                    class:active={activeTab === 'active'} 
                    on:click={() => setActiveTab('active')}
                >
                    Активные
                </button>
                <button 
                    class:active={activeTab === 'new'} 
                    on:click={() => setActiveTab('new')}
                >
                    Новые
                </button>
            </div>
            {#if activeTab === 'active'}
                <ActiveTasks />
            {:else}
                <NewTasks />
            {/if}
        </div>
    </div>
</div>

<style>
    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 20px;
        font-weight: 600;
    }

    .gray-text {
        color: #313E56;
        font-size: 20px;
    }

    .main-container {
        max-width: 1000px;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
    }

    .header {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .low-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .content-block {
        width: 100%;
        min-height: 50px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .white-block {
        width: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 32px 16px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .white-block-button {
        width: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 0px 16px;
    }

    .subscription-block {
        height: 64px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        transition: background-color 0.2s;
        border: none;
        background: none;
        padding: 0;
    }

    .subscription-block:hover {
        background-color: #f8f9fa;
    }

    .subscription-info {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .text-wrapper {
        background: #2B5BDA;
        border-radius: 6px;
        padding: 4px 8px;
        color: white;
        font-weight: 700;
    }

    .arrow-button {
        width: 40px;
        height: 40px;
        border: none;
        background: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2B5BDA;
        border-radius: 8px;
        transition: background-color 0.2s;
    }

    .arrow-button:hover {
        background-color: #f0f3ff;
    }

    .balance-number {
        position: relative;
        width: fit-content;
        font-family: "Lato", Helvetica;
        font-weight: 600;
        color: #ffffff;
        font-size: 14px;
        text-align: right;
        letter-spacing: 0;
        line-height: normal;
    }

    .balance {
        display: flex;
        height: 38px;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 4px 10px 4px 12px;
        background-color: #2B5BDA;
        border-radius: 8px;
        transition: background-color 0.3s ease;
    }

    .balance:hover {
        background-color: #1e45cc;
    }

    .balance .box-minimalistic {
        width: 16px;
        height: 16px;
    }

    .date {
        font-size: 12px;
        color: #6c757d;
    }

    .level-progress {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 8px;
    }

    .level-indicators {
        display: flex;
        justify-content: space-between;
    }

    .level-text {
        color: #6c757d;
        font-size: 14px;
    }

    .progress-bar {
        width: 100%;
        height: 8px;
        background-color: #EFF2F7;
        border-radius: 4px;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background-color: #2B5BDA;
        border-radius: 4px;
        transition: width 0.3s ease;
    }

    .points-display {
        display: flex;
        justify-content: space-between;
    }

    .points {
        font-size: 14px;
        padding: 4px 8px;
        border-radius: 4px;
    }

    .points.current {
        background-color: #EFF2F7;
        color: #6c757d;
    }

    .points.target {
        background-color: #2B5BDA;
        color: white;
    }

    @media (max-width: 768px) {
        .content {
            padding-bottom: 60px;
        }

        .balance {
            padding: 4px 8px;
        }

        .balance .box-minimalistic {
            width: 14px;
            height: 14px;
        }
    }

    .tasks-toggle {
        display: flex;
        gap: 8px;
    }

    .tasks-toggle button {
        padding: 8px 16px;
        font-size: 14px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        background-color: white;
        color: #313E56;
        transition: all 0.2s ease;
    }

    .tasks-toggle button.active {
        background-color: #2B5BDA;
        color: white;
    }
</style>
