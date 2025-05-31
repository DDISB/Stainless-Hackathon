<script lang="ts">
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
</script>

<div class="main-container">
    <div class="header">
        <div class="top-header">
            <div class="date">{currentDate}</div>
        </div>
        <div class="low-header">
            <h1>Профиль</h1>
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
            Профиль content
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

    h1 {
        font-size: 32px;
        margin: 0;
    }

    .date {
        font-size: 12px;
        color: #6c757d;
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

    .balance .box-minimalistic {
        width: 16px;
        height: 16px;
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
</style> 