<script lang="ts">
    import shopLater from '../../assets/shop later.png';
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
        height: calc(100vh - 48px); /* Учитываем padding контента в Layout */
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

        .balance {
            padding: 4px 8px;
        }

        .balance .box-minimalistic {
            width: 14px;
            height: 14px;
        }
    }
</style> 