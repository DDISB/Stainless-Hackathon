<script lang="ts">
    import type { Prize } from '../interfaces';
    
    export let prize: Prize;
    let imageError = false;

    function handleImageError() {
        imageError = true;
    }
</script>

<div class="prize-info">
    <div class="prize-logo">
        {#if prize.image && !imageError}
            <img 
                src={prize.image} 
                alt={prize.name}
                on:error={handleImageError}
            />
        {:else}
            <div class="fallback-image">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 9H9.01" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 9H15.01" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 14H16" stroke="#9CA3AF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        {/if}
    </div>
    <div class="prize-content">
        <span class="prize-name">{prize.name}</span>
    </div>
</div>

<style>
    .prize-info {
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 12px;
        width: 120px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .prize-logo {
        width: 100%;
        aspect-ratio: 1;
        height: 90px;
        /* background-color: white; */
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }

    .prize-logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .fallback-image {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F3F4F6;
        border-radius: 8px;
    }

    .prize-content {
        padding: 8px 12px;
        background-color: white;
        /* border-top: 1px solid #F3F4F6; */
    }

    .prize-name {
        font-weight: 500;
        font-size: 12px;
        color: #374151;
        text-align: center;
        display: block;
    }
</style> 