<script lang="ts">
    import shopLater from '../../assets/shop later.png';
    import Balance from '../components/Balance.svelte';
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
</script>

<div class="main-container">
    <div class="header">
        <div class="top-header">
            <div class="date">{currentDate}</div>
        </div>
        <div class="low-header">
            <h1>Магазин</h1>
            <Balance points={2880} />
        </div>
    </div>

    <div class="content">
        <div class="content-block">
            <div class="shop-later">
                <img src={shopLater} alt="Shop Later" />
                <p>Ожидайте, когда разработчик подключит API магазина</p>
            </div>
        </div>
    </div>
</div>

<style>
    .main-container {
        max-width: 1000px;
        width: 100%;
        /* height: calc(100vh - 48px); Учитываем padding контента в Layout */
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        overflow: hidden;
    }

    .content {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        overflow: hidden;
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
        font-weight: 700;
        font-size: 32px;
        margin: 0;
    }

    .date {
        font-size: 12px;
        color: #6c757d;
    }

    .content-block {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    .shop-later {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        width: 100%;
    }

    .shop-later img {
        width: 100%;
        height: auto;
        max-width: 600px;
        max-height: 50vh;
        object-fit: contain;
    }

    .shop-later p {
        color: #313E56;
        font-size: 20px;
        text-align: center;
        margin: 0;
    }

    @media (max-width: 768px) {
        .main-container {
            height: calc(100vh - 108px); /* Учитываем нижнюю навигацию и padding */
        }

        .content {
            /* padding-bottom: 60px; */
        }
    }
</style> 