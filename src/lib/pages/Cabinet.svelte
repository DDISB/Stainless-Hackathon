<script lang="ts">
    import { auth } from '../stores/auth';
    import ActiveTasks from '../components/ActiveTasks.svelte';
    import NewTasks from '../components/NewTasks.svelte';
    import Balance from '../components/Balance.svelte';
    import crownIcon from '../../assets/crown.svg';
    import cabinetIcon from '../../assets/cabinet.svg';
    import bonusIcon from '../../assets/bonus.svg';
    import shopIcon from '../../assets/shop.svg';
    import profileIcon from '../../assets/profile.svg';
    import { onMount } from 'svelte';
    
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

    onMount(() => {
        console.log($auth.user);
    });

    $: currentDate = formatDate(new Date());

    function navigateToSubscription() {
        window.dispatchEvent(new CustomEvent('navigate', { 
            detail: { component: 'subscription' }
        }));
    }

    function setActiveTab(tab: string) {
        activeTab = tab;
    }

    function navigate(component: string) {
        window.dispatchEvent(new CustomEvent('navigate', { 
            detail: { component }
        }));
    }

    function setActiveComponent(component: string) {
        navigate(component);
    }
</script>

<div class="main-container">
    <div class="header">
        <div class="top-header">
            <div class="date">{currentDate}</div>
        </div>
        <div class="low-header">
            <h1>Кабинет</h1>
            <Balance points={2880} />
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
            <div class="white-block bonus-card" on:click={() => setActiveComponent('iron-pass')} on:keydown={e => e.key === 'Enter' && setActiveComponent('iron-pass')} role="button" tabindex="0">
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
                        <span class="points current">
                            <img src={crownIcon} alt="Crown icon" class="crown-icon" />
                            1500
                        </span>
                        <span class="points target">
                            <img src={crownIcon} alt="Crown icon" class="crown-icon" />
                            2000
                        </span>
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

<nav class="bottom-nav">
    <button class="active" on:click={() => navigate('catalog')}>
        <img src={cabinetIcon} alt="Cabinet icon" />
        <span>Кабинет</span>
    </button>
    <button on:click={() => navigate('iron-pass')}>
        <img src={bonusIcon} alt="Iron-Pass icon" />
        <span>Бонусы</span>
    </button>
    <button on:click={() => navigate('shop')}>
        <img src={shopIcon} alt="Shop icon" />
        <span>Магазин</span>
    </button>
    <button on:click={() => navigate('profile')}>
        <img src={profileIcon} alt="Profile icon" />
        <span>Профиль</span>
    </button>
</nav>

<style>
    :global(body) {
        font-family: 'Lato', sans-serif;
        color: #313E56;
        background-color: #EFF2F7;
        margin: 0;
        padding: 0;
    }

    h1 {
        font-size: 32px;
        font-weight: 700;
    }

    h2 {
        font-size: 20px;
        font-weight: 600;
    }

    .gray-text {
        font-size: 20px;
    }

    .main-container {
        max-width: 1000px;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        /* padding: 24px; */
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        padding-bottom: 84px;
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
        border-radius: 16px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .white-block-button {
        width: 100%;
        background-color: white;
        border-radius: 16px;
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
        font-size: 16px;
    }

    .text-wrapper {
        background: #2B5BDA;
        border-radius: 12px;
        padding: 4px 8px;
        color: white;
        font-weight: 700;
        font-size: 12px;
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
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .crown-icon {
        width: 14px;
        height: 14px;
    }

    .points.current {
        background-color: #EFF2F7;
        color: #6c757d;
    }

    .points.target {
        background-color: #2B5BDA;
        color: white;
    }

    .points.target .crown-icon {
        filter: brightness(0) invert(1);
    }

    @media (max-width: 768px) {
        .content {
            padding-bottom: 60px;
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

    .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #f8f9fa;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
        padding: 10px;
        z-index: 100;
    }

    .bottom-nav button {
        background: none;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 10px;
        transition: all 0.3s ease;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        color: #9299A699;
    }

    .bottom-nav button img {
        width: 24px;
        height: 24px;
        opacity: 0.6;
        transition: opacity 0.3s ease;
    }

    .bottom-nav button:hover {
        background-color: #e9ecef;
    }

    .bottom-nav button:hover img {
        opacity: 1;
    }

    .bottom-nav button.active {
        background-color: #e9ecef;
        color: #2B5BDA;
    }

    .bottom-nav button.active img {
        opacity: 1;
    }

    .bonus-card {
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .bonus-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }

    .bonus-card:focus {
        outline: none;
        box-shadow: 0 0 0 2px #2B5BDA;
    }
</style> 