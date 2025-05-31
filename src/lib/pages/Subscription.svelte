<script lang="ts">
    function handlePurchase() {
        // Purchase logic will be implemented here
        console.log('Purchase initiated');
    }
</script>

<div class="main-container">
    <div class="header">
        <h1>Подписка</h1>
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
        gap: 20px;
    }

    .header {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        padding: 0;
    }

    h1 {
        font-size: 32px;
        font-weight: 600;
        margin: 0;
    }

    h2 {
        font-size: 24px;
        margin: 0;
        color: #2B5BDA;
    }

    .content {
        width: 100%;
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
</style> 