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

    function handlePurchase() {
        // Purchase logic will be implemented here
        console.log('Purchase initiated');
    }

    function goBack() {
        window.dispatchEvent(new CustomEvent('navigate', { 
            detail: { component: 'catalog' }
        }));
    }
</script>

<div class="main-container">
    <button class="back-button" on:click={goBack}>
        ← Вернуться в кабинет
    </button>

    <div class="header">
        <div class="top-header">
            <div class="date">{currentDate}</div>
        </div>
        <div class="low-header">
            <h1>Подписка</h1>
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
        <div class="subscription-card">
            <div class="card-header">
                <h2>Iron Pro</h2>
                <div class="price">
                    <span class="amount">2999₽</span>
                    <span class="period">/месяц</span>
                </div>
            </div>
            
            <div class="features">
                <div class="feature-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#2B5BDA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Доступ ко всем бонусам</span>
                </div>
                <div class="feature-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#2B5BDA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Персональные предложения</span>
                </div>
                <div class="feature-item">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="#2B5BDA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Лучшая выгода</span>
                </div>
            </div>

            <button class="purchase-button" on:click={handlePurchase}>
                Купить подписку
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

    .subscription-card {
        background-color: white;
        border-radius: 10px;
        padding: 32px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;
    }

    .price {
        display: flex;
        align-items: baseline;
        gap: 4px;
    }

    .amount {
        font-size: 32px;
        font-weight: 700;
        color: #2B5BDA;
    }

    .period {
        color: #6c757d;
    }

    .features {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 32px;
    }

    .feature-item {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 16px;
    }

    .purchase-button {
        width: 100%;
        height: 48px;
        background: #2B5BDA;
        border: none;
        border-radius: 8px;
        color: white;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.2s;
    }

    .purchase-button:hover {
        opacity: 0.9;
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

    .back-button {
        background: none;
        border: none;
        color: #2B5BDA;
        font-size: 16px;
        cursor: pointer;
        padding: 10px 0;
        margin-bottom: 0;
        text-align: left;
    }

    .back-button:hover {
        text-decoration: underline;
    }
</style> 