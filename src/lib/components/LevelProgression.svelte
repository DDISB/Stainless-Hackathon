<script lang="ts">
    import type { Bonus, Prize, LevelInfo } from '../interfaces';
    import PrizeCard from './PrizeCard.svelte';
    import { onMount } from 'svelte';
    
    export let currentLevel: number;
    export let bonuses: Bonus[];
    export let prizes: Prize[];
    export let totalLevels: number = 30;

    let levelsContainer: HTMLElement;

    $: levels = Array.from({ length: totalLevels }, (_, i) => {
        const level = i + 1;
        return {
            level,
            isCompleted: level <= currentLevel,
            bonus: bonuses.find(b => b.level === level),
            prize: prizes.find(p => p.level === level)
        } as LevelInfo;
    });

    $: isLineCompleted = (level: LevelInfo, index: number) => {
        return level.isCompleted && levels[index + 1]?.isCompleted;
    };

    $: shouldShowLine = (level: number) => level < totalLevels;

    onMount(() => {
        // Find the current level element
        const currentLevelElement = document.querySelector(`[data-level="${currentLevel}"]`);
        if (currentLevelElement) {
            // Calculate the scroll position to center the current level
            const containerHeight = window.innerHeight - 74; // Subtract header height
            const elementTop = currentLevelElement.getBoundingClientRect().top;
            const elementHeight = currentLevelElement.getBoundingClientRect().height;
            const scrollTo = elementTop - (containerHeight - elementHeight) / 2;
            
            // Smooth scroll to the position
            window.scrollTo({
                top: window.scrollY + scrollTo,
                behavior: 'smooth'
            });
        }
    });
</script>

<div class="progression-container">
    <div class="levels-track" bind:this={levelsContainer}>
        {#each levels as level, index}
            <div class="level-item" data-level={level.level}>
                <div class="level-content">
                    <div class="left-content">
                        {#if level.prize}
                            <PrizeCard prize={level.prize} />
                        {/if}
                    </div>
                    <div class="ball-container">
                        {#if shouldShowLine(level.level)}
                            <div class="line" class:completed={isLineCompleted(level, index)}>
                                <div class="line-inner"></div>
                            </div>
                        {/if}
                        <div class="ball" class:completed={level.isCompleted}>
                            <span class="level-number">{level.level}</span>
                        </div>
                    </div>
                    <div class="right-content">
                        {#if level.bonus}
                            <div class="bonus-info">
                                <div class="bonus-points" class:completed={level.isCompleted}>
                                    <span class="points">+{level.bonus.points}</span>
                                    <img src="https://c.animaapp.com/mbc14gzx2SIMy8/img/box-minimalistic.svg" alt="bonus" class="bonus-icon" />
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .progression-container {
        width: 100%;
        padding: 20px 0;
        display: flex;
        justify-content: center;
    }

    .levels-track {
        position: relative;
        width: 100%;
        max-width: 800px;
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .level-item {
        width: 100%;
        min-height: 180px;
        position: relative;
    }

    .level-content {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: 16px;
        padding: 0 20px;
        height: 180px;
        position: relative;
    }

    .left-content {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
        min-width: 200px;
        transform: translateY(-30px);
    }

    .right-content {
        flex: 1;
        /* padding-left: 20px; */
        min-width: 200px;
        transform: translateY(12px);
        display: flex;
        align-items: center;
    }

    .ball-container {
        position: relative;
        width: 64px;
        height: 180px;
        display: flex;
        justify-content: center;
        flex-shrink: 0;
    }

    .line {
        width: 8px;
        height: 180px;
        background-color: #E5E7EB;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }

    .line.completed .line-inner {
        width: 100%;
        height: 100%;
        background-color: #2556FF;
        transition: height 0.3s ease;
    }

    .ball {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: #E5E7EB;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 2;
    }

    .ball.completed {
        background-color: #2556FF;
        color: white;
    }

    .level-number {
        font-weight: 600;
        font-size: 20px;
    }

    .bonus-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .bonus-points {
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: #E5E7EB;
        padding: 6px 12px;
        border-radius: 100px;
        color: #6B7280;
    }

    .bonus-points.completed {
        background-color: #2556FF;
        color: white;
    }

    .bonus-icon {
        width: 20px;
        height: 20px;
        filter: brightness(0) saturate(100%) invert(23%) sepia(90%) saturate(5391%) hue-rotate(227deg) brightness(97%) contrast(101%);
    }

    .bonus-points.completed .bonus-icon {
        filter: brightness(0) invert(1);
    }

    .points {
        font-size: 14px;
        color: #2556FF;
    }

    .bonus-points.completed .points {
        color: white;
    }

    .level-item:last-child .ball-container {
        height: 64px;
    }

    @media (max-width: 768px) {
        .levels-track {
            max-width: 100%;
        }

        .level-content {
            padding: 0 12px;
        }

        .left-content, .right-content {
            min-width: 120px;
        }

        .left-content {
            padding-right: 12px;
        }

        .right-content {
            /* padding-left: 12px; */
        }
    }
</style> 