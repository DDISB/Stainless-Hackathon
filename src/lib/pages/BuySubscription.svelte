<script lang="ts">
    function goBack() {
        window.dispatchEvent(new CustomEvent('navigate', { 
            detail: { component: 'subscription' }
        }));
    }
</script>

<div class="main-container">
    <button class="back-button" on:click={goBack}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Оформление подписки
    </button>

    <div class="content">
        <div class="subscription-details">
            <h2>Подписка PRO</h2>
            <div class="price-block">
                <div class="price-info">
                    <span class="period">Неделя</span>
                    <span class="price">649 ₽</span>
                </div>
                <div class="benefits">
                    <div class="benefit-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#2B5BDA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Доступ ко всем заданиям</span>
                    </div>
                    <div class="benefit-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#2B5BDA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Тройные бонусы</span>
                    </div>
                    <div class="benefit-item">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="#2B5BDA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Приоритетная поддержка</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="buy-button-container">
        <button class="buy-button">
            Оплатить 649 ₽
        </button>
    </div>
</div>

<style>
    .main-container {
        max-width: 1000px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 16px;
        gap: 24px;
    }

    .back-button {
        font-size: 16px;
        color: #313E56;
        display: flex;
        align-items: center;
        gap: 4px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px 0;
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .subscription-details {
        background: white;
        border-radius: 16px;
        padding: 24px;
    }

    h2 {
        font-size: 24px;
        font-weight: 600;
        margin: 0;
        margin-bottom: 24px;
        color: #313E56;
    }

    .price-block {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .price-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        background: #F8F9FA;
        border-radius: 12px;
    }

    .period {
        font-size: 16px;
        color: #313E56;
    }

    .price {
        font-size: 20px;
        font-weight: 600;
        color: #313E56;
    }

    .benefits {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .benefit-item {
        display: flex;
        align-items: center;
        gap: 12px;
        color: #313E56;
    }

    .buy-button-container {
        position: fixed;
        bottom: 84px;
        left: 0;
        right: 0;
        padding: 16px 24px;
        background: white;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
    }

    .buy-button {
        width: 100%;
        max-width: 400px;
        height: 48px;
        background: #2B5BDA;
        color: white;
        border: none;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .buy-button:hover {
        background: #1e4bc6;
    }

    .buy-button:active {
        background: #183c9e;
    }
</style> 