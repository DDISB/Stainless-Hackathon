<script lang="ts">
    import type { Prize } from '../interfaces';
    
    export let prize: Prize;
</script>

<div class="prize-info">
    <div class="prize-logo">
        {#if prize.image}
            <img src={prize.image} alt={prize.name} />
        {/if}
    </div>
    <div class="prize-content">
        <span class="prize-name">{prize.name}</span>
        <span class="prize-description">{prize.description}</span>
    </div>
</div>

<style>
    .prize-info {
        display: flex;
        flex-direction: column;
        background-color: #F3F4F6;
        border-radius: 8px;
        width: 100px;
        height: 100px;
        overflow: hidden;
        margin: 0;
        position: relative;
    }

    .prize-logo {
        width: 100%;
        height: 60px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
    }

    .prize-logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .prize-content {
        padding: 6px 8px;
        display: flex;
        flex-direction: column;
        gap: 1px;
        height: 40px;
    }

    .prize-name {
        font-weight: 600;
        font-size: 11px;
        color: #1F2937;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .prize-description {
        font-size: 10px;
        color: #6B7280;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style> 