<script lang="ts">
</script>

<div class="main-container">
    <div class="header">
        <h1>Магазин</h1>
    </div>

    <div class="content">
        <div class="content-block">
            Магазин content
        </div>
    </div>
</div>

<style>    
.main-container {
    max-width: 1000px;
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.header {
    width: 100%;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px;
}

.content-block {
    background-color: lightgray;
    width: 100%;
    border-radius: 10px;
    min-height: 100px;
    padding: 10px;
}
</style> 