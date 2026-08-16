// Particle Generator for Flowers and Butterflies

class ParticleSystem {
    constructor() {
        this.container = null;
        this.particles = [];
        this.initialized = false;
    }

    init() {
        // Create particles container if not exists
        if (!document.querySelector('.particles-container')) {
            const container = document.createElement('div');
            container.className = 'particles-container';
            document.body.insertBefore(container, document.body.firstChild);
            this.container = container;
        } else {
            this.container = document.querySelector('.particles-container');
        }
        this.initialized = true;
    }

    generateRandomPosition() {
        return Math.random() * window.innerWidth;
    }

    generateDaisy() {
        const svg = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Petals -->
                <circle cx="12" cy="4" r="2.5" fill="#ffffff" opacity="0.9"/>
                <circle cx="17" cy="7" r="2.5" fill="#ffffff" opacity="0.9"/>
                <circle cx="20" cy="12" r="2.5" fill="#ffffff" opacity="0.9"/>
                <circle cx="17" cy="17" r="2.5" fill="#ffffff" opacity="0.9"/>
                <circle cx="12" cy="20" r="2.5" fill="#ffffff" opacity="0.9"/>
                <circle cx="7" cy="17" r="2.5" fill="#ffffff" opacity="0.9"/>
                <circle cx="4" cy="12" r="2.5" fill="#ffffff" opacity="0.9"/>
                <circle cx="7" cy="7" r="2.5" fill="#ffffff" opacity="0.9"/>
                <!-- Center -->
                <circle cx="12" cy="12" r="3" fill="#fbbf24"/>
            </svg>
        `;
        return svg;
    }

    generateLavender() {
        const svg = `
            <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Stem -->
                <path d="M10 28 Q8 20 10 10" stroke="#6d28d9" stroke-width="1.5" fill="none"/>
                <!-- Flowers -->
                <circle cx="8" cy="8" r="1.5" fill="#b08cde"/>
                <circle cx="12" cy="8" r="1.5" fill="#b08cde"/>
                <circle cx="7" cy="11" r="1.5" fill="#b08cde"/>
                <circle cx="13" cy="11" r="1.5" fill="#b08cde"/>
                <circle cx="6" cy="14" r="1.5" fill="#b08cde"/>
                <circle cx="14" cy="14" r="1.5" fill="#b08cde"/>
                <circle cx="10" cy="16" r="1.5" fill="#b08cde"/>
                <circle cx="8" cy="19" r="1.5" fill="#8b5fbf"/>
                <circle cx="12" cy="19" r="1.5" fill="#8b5fbf"/>
            </svg>
        `;
        return svg;
    }

    generatePikoki() {
        const svg = `
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Petals -->
                <circle cx="9" cy="3" r="2" fill="#7c3aed" opacity="0.85"/>
                <circle cx="14" cy="5" r="2" fill="#7c3aed" opacity="0.85"/>
                <circle cx="15" cy="10" r="2" fill="#7c3aed" opacity="0.85"/>
                <circle cx="13" cy="15" r="2" fill="#7c3aed" opacity="0.85"/>
                <circle cx="9" cy="15" r="2" fill="#7c3aed" opacity="0.85"/>
                <circle cx="5" cy="15" r="2" fill="#7c3aed" opacity="0.85"/>
                <circle cx="3" cy="10" r="2" fill="#7c3aed" opacity="0.85"/>
                <circle cx="4" cy="5" r="2" fill="#7c3aed" opacity="0.85"/>
                <!-- Center -->
                <circle cx="9" cy="9" r="1.5" fill="#fbbf24"/>
            </svg>
        `;
        return svg;
    }

    generateDandelion() {
        const svg = `
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Center -->
                <circle cx="11" cy="11" r="2" fill="#fbbf24"/>
                <!-- Seeds -->
                <line x1="11" y1="11" x2="11" y2="2" stroke="#a78ffd" stroke-width="0.8" opacity="0.6"/>
                <line x1="11" y1="11" x2="17" y2="5" stroke="#a78ffd" stroke-width="0.8" opacity="0.6"/>
                <line x1="11" y1="11" x2="20" y2="11" stroke="#a78ffd" stroke-width="0.8" opacity="0.6"/>
                <line x1="11" y1="11" x2="17" y2="17" stroke="#a78ffd" stroke-width="0.8" opacity="0.6"/>
                <line x1="11" y1="11" x2="11" y2="20" stroke="#a78ffd" stroke-width="0.8" opacity="0.6"/>
                <line x1="11" y1="11" x2="5" y2="17" stroke="#a78ffd" stroke-width="0.8" opacity="0.6"/>
                <line x1="11" y1="11" x2="2" y2="11" stroke="#a78ffd" stroke-width="0.8" opacity="0.6"/>
                <line x1="11" y1="11" x2="5" y2="5" stroke="#a78ffd" stroke-width="0.8" opacity="0.6"/>
                <!-- Seed heads -->
                <circle cx="11" cy="2" r="1.2" fill="#c8a2e0" opacity="0.7"/>
                <circle cx="17" cy="5" r="1.2" fill="#c8a2e0" opacity="0.7"/>
                <circle cx="20" cy="11" r="1.2" fill="#c8a2e0" opacity="0.7"/>
                <circle cx="17" cy="17" r="1.2" fill="#c8a2e0" opacity="0.7"/>
                <circle cx="11" cy="20" r="1.2" fill="#c8a2e0" opacity="0.7"/>
                <circle cx="5" cy="17" r="1.2" fill="#c8a2e0" opacity="0.7"/>
                <circle cx="2" cy="11" r="1.2" fill="#c8a2e0" opacity="0.7"/>
                <circle cx="5" cy="5" r="1.2" fill="#c8a2e0" opacity="0.7"/>
            </svg>
        `;
        return svg;
    }

    generateButterfly() {
        const svg = `
            <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Left wings -->
                <ellipse cx="8" cy="10" rx="5" ry="7" fill="#b08cde" opacity="0.85"/>
                <ellipse cx="8" cy="14" rx="3" ry="4" fill="#8b5fbf" opacity="0.9"/>
                <circle cx="6" cy="8" r="1.2" fill="#b08cde"/>
                <circle cx="7" cy="12" r="0.8" fill="#b08cde"/>
                
                <!-- Right wings -->
                <ellipse cx="20" cy="10" rx="5" ry="7" fill="#b08cde" opacity="0.85"/>
                <ellipse cx="20" cy="14" rx="3" ry="4" fill="#8b5fbf" opacity="0.9"/>
                <circle cx="22" cy="8" r="1.2" fill="#b08cde"/>
                <circle cx="21" cy="12" r="0.8" fill="#b08cde"/>
                
                <!-- Body -->
                <ellipse cx="14" cy="12" rx="2.5" ry="4" fill="#6d28d9"/>
                <circle cx="14" cy="7" r="1.5" fill="#6d28d9"/>
                
                <!-- Antennae -->
                <path d="M14 6 Q12 3 11 1" stroke="#b08cde" stroke-width="1" fill="none"/>
                <path d="M14 6 Q16 3 17 1" stroke="#b08cde" stroke-width="1" fill="none"/>
                <circle cx="11" cy="1" r="0.8" fill="#b08cde"/>
                <circle cx="17" cy="1" r="0.8" fill="#a78bfa"/>
            </svg>
        `;
        return svg;
    }

    addParticle(type) {
        if (!this.initialized) this.init();

        const particleEl = document.createElement('div');
        particleEl.className = `particle ${type}`;
        
        const startX = this.generateRandomPosition();
        const startY = -50;
        
        let duration = Math.random() * 4 + 6;
        let delay = Math.random() * 0.5;
        
        let svgContent = '';
        let animationClass = '';
        
        switch(type) {
            case 'particle-daisy':
                svgContent = this.generateDaisy();
                animationClass = 'particle-daisy';
                duration = Math.random() * 3 + 8;
                break;
            case 'particle-lavender':
                svgContent = this.generateLavender();
                animationClass = 'particle-lavender';
                duration = Math.random() * 3 + 9;
                break;
            case 'particle-pikoki':
                svgContent = this.generatePikoki();
                animationClass = 'particle-pikoki';
                duration = Math.random() * 3 + 8;
                break;
            case 'particle-dandelion':
                svgContent = this.generateDandelion();
                animationClass = 'particle-dandelion';
                duration = Math.random() * 4 + 10;
                break;
            case 'particle-butterfly':
                svgContent = this.generateButterfly();
                animationClass = 'particle-butterfly';
                duration = Math.random() * 2 + 9;
                break;
        }
        
        particleEl.innerHTML = svgContent;
        particleEl.style.left = startX + 'px';
        particleEl.style.top = startY + 'px';
        particleEl.style.animationDuration = duration + 's';
        particleEl.style.animationDelay = delay + 's';
        
        this.container.appendChild(particleEl);
        
        // Remove after animation completes
        setTimeout(() => {
            particleEl.remove();
        }, (duration + delay) * 1000);
    }

    startSpawning() {
        if (!this.initialized) this.init();

        const types = ['particle-daisy', 'particle-lavender', 'particle-pikoki', 'particle-dandelion', 'particle-butterfly'];
        const weights = [0.25, 0.25, 0.2, 0.15, 0.15]; // Probability weights

        setInterval(() => {
            const rand = Math.random();
            let cumulative = 0;
            
            for (let i = 0; i < types.length; i++) {
                cumulative += weights[i];
                if (rand <= cumulative) {
                    this.addParticle(types[i]);
                    break;
                }
            }
        }, 800); // Spawn new particle setiap 800ms
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const particles = new ParticleSystem();
        particles.startSpawning();
    });
} else {
    const particles = new ParticleSystem();
    particles.startSpawning();
}
