<script lang="ts">
    import subscriptionImage from '../../assets/subscription.png';
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

    function goBack() {
        window.dispatchEvent(new CustomEvent('navigate', { 
            detail: { component: 'catalog' }
        }));
    }
</script>

<div class="main-container">
    <button class="back-button" on:click={goBack}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Информация о подписке
    </button>

    <div class="content">
        <div class="subscription-info">
            <img src={subscriptionImage} alt="PRO subscription features" />
            <h2>7 дней бесплатно</h2>
            <p class="subtitle">Тройная выгода по подписке Pro для пользователей нашей системе</p>
            <button class="try-button">Попробовать бесплатно</button>
            <p class="price">1 нед. бесплатно, потом 649 руб/неделя</p>
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
        flex: 1;
    }

    .back-button {
        font-size: 16px;
        color: #313E56;
        display: flex;
        align-items: center;
        gap: 4px;
        background: none;
        border: none;
        font-size: 16px;
        cursor: pointer;
        padding: 8px 0;
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .subscription-info {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        /* padding: 20px; */
    }

    .subscription-info img {
        width: 100%;
        max-width: 300px;
        height: auto;
    }

    h2 {
        font-size: 32px;
        font-weight: 700;
        margin: 0;
        margin-top: 32px;
    }

    .subtitle {
        font-size: 14px;
        color: #313E56;
        margin: 0;
        max-width: 300px;
        margin-top: 16px;
    }

    .try-button {
        width: 100%;
        margin-top: 24px;
        height: 42px;
        background-color: #2556FF;
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .try-button:hover {
        background-color: #1e45cc;
    }

    .price {
        font-size: 12px;
        margin: 0;
        margin-top: 8px;
    }

</style> 