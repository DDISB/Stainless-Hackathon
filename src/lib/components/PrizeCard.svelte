<script lang="ts">
    import type { Prize } from '../interfaces';
    
    export let prize: Prize;
    let imageError = false;

    function handleImageError() {
        imageError = true;
    }
</script>

<div class="prize-info">
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

    .prize-content {
        padding: 12px;
        background-color: white;
        min-height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .prize-name {
        font-weight: 500;
        font-size: 14px;
        color: #374151;
        text-align: center;
        display: block;
    }
</style> 