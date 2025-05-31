<script lang="ts">
    export let points: number;
</script>

<div class="balance" role="status" aria-label="Current balance">
    <span class="balance-number">{points}</span>
    <img
        class="box-minimalistic"
        src="https://c.animaapp.com/mbc14gzx2SIMy8/img/box-minimalistic.svg"
        alt="Balance icon"
    />
</div>

<style>
    .balance-number {
        position: relative;
        width: fit-content;
        font-family: "Lato", Helvetica;
        font-weight: 600;
        color: #ffffff;
        font-size: 12px;
        text-align: right;
        letter-spacing: 0;
        line-height: normal;
    }

    .balance {
        display: flex;
        height: 32px;
        width: 72px;
        align-items: center;
        justify-content: center;
        gap: 4px;
        background-color: #2B5BDA;
        border-radius: 12px;
        transition: background-color 0.3s ease;
    }

    .balance:hover {
        background-color: #1e45cc;
    }

    .balance .box-minimalistic {
        width: 16px;
        height: 16px;
    }

    @media (max-width: 768px) {
        .balance {
            padding: 4px 8px;
        }

        .balance .box-minimalistic {
            width: 14px;
            height: 14px;
        }
    }
</style> 