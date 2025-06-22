<script lang="ts">
    import Balance from '../components/Balance.svelte';
    import { auth } from '../stores/auth';
    let currentDate: string;

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

    function handleLogout() {
        auth.logout();
        window.dispatchEvent(new CustomEvent('navigate', { 
            detail: { component: 'auth' }
        }));
    }
</script>

<div class="main-container">
    <div class="header">
        <div class="top-header">
            <div class="date">{currentDate}</div>
        </div>
        <div class="low-header">
            <h1>Профиль</h1>
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
            <div class="white-block">
                <h2>Информация о вашей квартире</h2>
                <div class="info-row">
                    <span class="info-label">Этаж:</span>
                    <span class="info-value">№6</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Квартира:</span>
                    <span class="info-value">№56</span>
                </div>
            </div>
        </div>

        <div class="content-block">
            <button class="rewards-block" on:click={() => {}}>
                <span>Полученные награды</span>
                <div class="arrow-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </button>
        </div>

        <div class="content-block">
            <button class="logout-button" on:click={handleLogout}>
                Выйти из аккаунта
            </button>
        </div>
    </div>
</div>

<style>
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
        gap: 12px;
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

    h1 {
        font-size: 32px;
        font-weight: 700;
        margin: 0;
    }

    .date {
        font-size: 12px;
        color: #6c757d;
    }

    .content-block {
        width: 100%;
        min-height: 50px;
        display: flex;
        flex-direction: column;
        gap: 16px;
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
        font-size: 16px;
        color: #313E56;
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

    .white-block {
        width: 100%;
        background-color: white;
        border-radius: 16px;
        padding: 16px;
    }

    .info-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #EFF2F7;
    }

    .info-row:last-child {
        border-bottom: none;
    }

    .info-label {
        color: #313E56;
        font-size: 14px;
    }

    .info-value {
        color: #313E56;
        font-size: 14px;
        font-weight: 500;
    }

    .rewards-block {
        width: 100%;
        height: 56px;
        background-color: white;
        border-radius: 16px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #313E56;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .rewards-block:hover {
        background-color: #f8f9fa;
    }

    h2 {
        font-size: 16px;
        /* font-weight: 600; */
        color: #313E56;
        margin: 0 0 8px 0;
    }

    .logout-button {
        width: 100%;
        height: 48px;
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .logout-button:hover {
        background-color: #c82333;
    }

    @media (max-width: 768px) {
        .content {
            padding-bottom: 60px;
        }
    }
</style> 