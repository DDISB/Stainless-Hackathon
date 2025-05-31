export function navigate(component: string) {
    window.dispatchEvent(new CustomEvent('navigate', { 
        detail: { component }
    }));
} 