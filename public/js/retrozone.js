//========================================
// RETROZONE GAMING TOP-UP SYSTEM v2.1
// Fixed and Optimized Version
//========================================

// Game packages data
const gamePackages = {
    'mobile-legends': [
        { name: '86 Diamond', price: 'IDR 20,000' },
        { name: '172 Diamond', price: 'IDR 40,000' },
        { name: '257 Diamond', price: 'IDR 60,000' },
        { name: '344 Diamond', price: 'IDR 80,000' },
        { name: '429 Diamond', price: 'IDR 100,000' },
        { name: '514 Diamond', price: 'IDR 120,000' },
        { name: '706 Diamond', price: 'IDR 160,000' },
        { name: '1412 Diamond', price: 'IDR 320,000' }
    ],
    'free-fire': [
        { name: '70 Diamond', price: 'IDR 10,000' },
        { name: '140 Diamond', price: 'IDR 20,000' },
        { name: '355 Diamond', price: 'IDR 50,000' },
        { name: '720 Diamond', price: 'IDR 100,000' },
        { name: '1450 Diamond', price: 'IDR 200,000' },
        { name: '2180 Diamond', price: 'IDR 300,000' },
        { name: '3640 Diamond', price: 'IDR 500,000' },
        { name: '7290 Diamond', price: 'IDR 1,000,000' }
    ],
    'pubg': [
        { name: '60 UC', price: 'IDR 15,000' },
        { name: '325 UC', price: 'IDR 80,000' },
        { name: '660 UC', price: 'IDR 160,000' },
        { name: '1800 UC', price: 'IDR 400,000' },
        { name: '3850 UC', price: 'IDR 800,000' },
        { name: '8100 UC', price: 'IDR 1,600,000' }
    ],
    'valorant': [
        { name: '420 VP', price: 'IDR 50,000' },
        { name: '700 VP', price: 'IDR 85,000' },
        { name: '1375 VP', price: 'IDR 160,000' },
        { name: '2400 VP', price: 'IDR 280,000' },
        { name: '4000 VP', price: 'IDR 450,000' },
        { name: '8150 VP', price: 'IDR 900,000' }
    ],
    'genshin': [
        { name: '60 Genesis Crystal', price: 'IDR 16,000' },
        { name: '300 Genesis Crystal', price: 'IDR 79,000' },
        { name: '980 Genesis Crystal', price: 'IDR 249,000' },
        { name: '1980 Genesis Crystal', price: 'IDR 479,000' },
        { name: '3280 Genesis Crystal', price: 'IDR 799,000' },
        { name: '6480 Genesis Crystal', price: 'IDR 1,599,000' }
    ],
    'cod': [
        { name: '80 CP', price: 'IDR 15,000' },
        { name: '400 CP', price: 'IDR 79,000' },
        { name: '800 CP', price: 'IDR 159,000' },
        { name: '1600 CP', price: 'IDR 319,000' },
        { name: '2400 CP', price: 'IDR 479,000' },
        { name: '4000 CP', price: 'IDR 799,000' }
    ]
};

// Game data for search and display
const gameData = {
    'mobile-legends': {
        name: 'Mobile Legends',
        keywords: ['mobile', 'legends', 'ml', 'diamond', 'moba'],
        icon: 'fas fa-shield-alt',
        description: 'Diamond ML from IDR 20K'
    },
    'free-fire': {
        name: 'Free Fire',
        keywords: ['free', 'fire', 'ff', 'diamond', 'battle', 'royale'],
        icon: 'fas fa-fire',
        description: 'Diamond FF from IDR 10K'
    },
    'pubg': {
        name: 'PUBG Mobile',
        keywords: ['pubg', 'mobile', 'uc', 'unknown', 'battlegrounds'],
        icon: 'fas fa-crosshairs',
        description: 'UC PUBG from IDR 15K'
    },
    'valorant': {
        name: 'Valorant',
        keywords: ['valorant', 'vp', 'riot', 'fps', 'tactical'],
        icon: 'fas fa-bullseye',
        description: 'VP Valorant from IDR 50K'
    },
    'genshin': {
        name: 'Genshin Impact',
        keywords: ['genshin', 'impact', 'genesis', 'crystal', 'mihoyo'],
        icon: 'fas fa-magic',
        description: 'Genesis Crystal from IDR 16K'
    },
    'cod': {
        name: 'Call of Duty',
        keywords: ['call', 'duty', 'cod', 'cp', 'mobile', 'warzone'],
        icon: 'fas fa-bomb',
        description: 'CP COD from IDR 15K'
    }
};

// Configuration
const WHATSAPP_NUMBER = '6281234567890'; // Change this to your WhatsApp number

// DOM Elements - Initialize on DOM load
let elements = {};

// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 Initializing RetroZone System...');
    
    initializeDOMElements();
    initializeEventListeners();
    initializeAnimations();
    initializeSearch();
    
    console.log('✅ RetroZone System Online!');
});

// Initialize DOM elements
function initializeDOMElements() {
    elements = {
        modal: document.getElementById('orderModal'),
        closeBtn: document.querySelector('.close'),
        orderForm: document.getElementById('orderForm'),
        gameCards: document.querySelectorAll('.game-card'),
        searchBox: document.getElementById('gameSearch'),
        searchResults: document.getElementById('searchResults'),
        searchResultsGrid: document.getElementById('searchResultsGrid'),
        hamburger: document.querySelector('.hamburger'),
        navLinks: document.querySelector('.nav-links')
    };
}

// Initialize all event listeners
function initializeEventListeners() {
    // Game card selection
    elements.gameCards.forEach(card => {
        const selectBtn = card.querySelector('.select-game-btn');
        if (selectBtn) {
            selectBtn.addEventListener('click', () => {
                const gameType = card.dataset.game;
                openOrderModal(gameType);
            });
        }
    });

    // Quick access buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const gameType = btn.dataset.game;
            if (gameType) {
                scrollToGame(gameType);
            }
        });
    });

    // Modal events
    if (elements.closeBtn) {
        elements.closeBtn.addEventListener('click', closeModal);
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === elements.modal) {
            closeModal();
        }
    });

    // Form submission
    if (elements.orderForm) {
        elements.orderForm.addEventListener('submit', handleFormSubmission);
    }

    // Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });

    // Mobile hamburger menu
    if (elements.hamburger && elements.navLinks) {
        elements.hamburger.addEventListener('click', toggleMobileMenu);
    }

    // ESC key to close modal
    document.addEventListener('keydown', handleKeyboardEvents);

    // Form navigation with Enter key
    document.addEventListener('keydown', handleFormNavigation);
}

// Initialize search functionality
function initializeSearch() {
    if (!elements.searchBox) return;

    let searchTimeout;
    
    elements.searchBox.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = e.target.value.trim();
            if (query.length >= 2) {
                performSearch(query);
            } else {
                hideSearchResults();
            }
        }, 300);
    });

    elements.searchBox.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = e.target.value.trim();
            if (query.length >= 2) {
                performSearch(query);
            }
        }
    });

    // Hide search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container') && !e.target.closest('.search-results')) {
            hideSearchResults();
        }
    });
}

// Search functionality
function performSearch(query) {
    const results = [];
    const searchTerm = query.toLowerCase();

    Object.keys(gameData).forEach(gameKey => {
        const game = gameData[gameKey];
        const isMatch = game.name.toLowerCase().includes(searchTerm) ||
                       game.keywords.some(keyword => keyword.includes(searchTerm));
        
        if (isMatch) {
            results.push({
                type: 'game',
                key: gameKey,
                data: game
            });
        }
    });

    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    if (!elements.searchResultsGrid || !elements.searchResults) return;

    elements.searchResultsGrid.innerHTML = '';

    if (results.length === 0) {
        elements.searchResultsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No games found for "${query}"</p>
                <p>Try: Mobile Legends, Free Fire, PUBG, Valorant, Genshin, Call of Duty</p>
            </div>
        `;
    } else {
        results.forEach(result => {
            const gameElement = createSearchResultElement(result);
            elements.searchResultsGrid.appendChild(gameElement);
        });
    }

    showSearchResults();
}

function createSearchResultElement(result) {
    const element = document.createElement('div');
    element.className = 'search-result-item';
    element.innerHTML = `
        <div class="search-result-content">
            <i class="${result.data.icon} search-result-icon"></i>
            <div class="search-result-info">
                <h4>${result.data.name}</h4>
                <p>${result.data.description}</p>
            </div>
        </div>
    `;

    element.addEventListener('click', () => {
        openOrderModal(result.key);
        hideSearchResults();
        elements.searchBox.value = '';
        playRetroSound();
    });

    return element;
}

function showSearchResults() {
    if (elements.searchResults) {
        elements.searchResults.classList.add('active');
    }
}

function hideSearchResults() {
    if (elements.searchResults) {
        elements.searchResults.classList.remove('active');
    }
}

// Modal functions
function openOrderModal(gameType) {
    if (!elements.modal) return;

    const gameTitle = document.getElementById('gameTitle');
    const packageSelect = document.getElementById('package');
    
    if (!gameTitle || !packageSelect) return;
    
    // Set game title
    gameTitle.value = gameData[gameType]?.name || 'Unknown Game';
    
    // Clear and populate package options
    packageSelect.innerHTML = '<option value="">Choose Package</option>';
    
    if (gamePackages[gameType]) {
        gamePackages[gameType].forEach(pkg => {
            const option = document.createElement('option');
            option.value = `${pkg.name} - ${pkg.price}`;
            option.textContent = `${pkg.name} - ${pkg.price}`;

            packageSelect.appendChild(option);
        });
    }
    
    // Show modal
    elements.modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    playRetroSound();
}

function closeModal() {
    if (!elements.modal) return;
    
    elements.modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    if (elements.orderForm) {
        elements.orderForm.reset();
    }
}

// Form handling
function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(elements.orderForm);
    const orderData = {
        game: formData.get('gameTitle'),
        userId: formData.get('userId'),
        serverId: formData.get('serverId'),
        package: formData.get('package'),
        name: formData.get('customerName'),
        phone: formData.get('customerPhone')
    };
    
    if (!validateForm(orderData)) {
        return;
    }
    
    const whatsappMessage = createWhatsAppMessage(orderData);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

    
    window.open(whatsappUrl, '_blank');
    closeModal();
    showNotification('Order sent to WhatsApp successfully! 🚀', 'success');
}

function validateForm(data) {
    if (!data.userId.trim()) {
        showNotification('Please enter your User ID', 'error');
        return false;
    }
    
    if (!data.package) {
        showNotification('Please select a package', 'error');
        return false;
    }
    
    if (!data.name.trim()) {
        showNotification('Please enter your name', 'error');
        return false;
    }
    
    if (!data.phone.trim()) {
        showNotification('Please enter your WhatsApp number', 'error');
        return false;
    }
    
    const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
    if (!phoneRegex.test(data.phone.replace(/\s+/g, ''))) {
        showNotification('Please enter a valid Indonesian phone number', 'error');
        return false;
    }
    
    return true;
}

function createWhatsAppMessage(data) {
    let message = `🎮 *RETROZONE TOP-UP ORDER* 🎮\n\n`;
message += `📱 *Game:* ${data.game}\n`;
message += `🆔 *User ID:* ${data.userId}\n`;

if (data.serverId.trim()) {
    message += `🌐 *Server ID:* ${data.serverId}\n`;
}

message += `💎 *Package:* ${data.package}\n`;
message += `👤 *Name:* ${data.name}\n`;
message += `📞 *WhatsApp:* ${data.phone}\n\n`;
message += `Please process my order. Thank you! 🚀`;

    
    return message;
}

// Event handlers
function handleSmoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function toggleMobileMenu() {
    elements.navLinks.classList.toggle('active');
    elements.hamburger.classList.toggle('active');
}

function handleKeyboardEvents(e) {
    if (e.key === 'Escape' && elements.modal && elements.modal.style.display === 'block') {
        closeModal();
    }
}

function handleFormNavigation(e) {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT' && e.target.type !== 'submit') {
        e.preventDefault();
        const form = e.target.closest('form');
        if (form) {
            const inputs = Array.from(form.querySelectorAll('input, select'));
            const currentIndex = inputs.indexOf(e.target);
            const nextInput = inputs[currentIndex + 1];
            
            if (nextInput) {
                nextInput.focus();
            }
        }
    }
}

// Utility functions
function scrollToGame(gameType) {
    const gameCard = document.querySelector(`[data-game="${gameType}"]`);
    if (gameCard) {
        gameCard.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        
        // Highlight effect
        gameCard.style.animation = 'pulse 1s ease';
        setTimeout(() => {
            gameCard.style.animation = '';
        }, 1000);
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `retro-notification ${type};`
    
    const icons = {
        error: 'fas fa-exclamation-triangle',
        success: 'fas fa-check-circle',
        info: 'fas fa-info-circle'
    };
    
    const colors = {
        error: '#ff0080',
        success: '#39ff14',
        info: '#00ffff'
    };
    
    notification.innerHTML = `
        <div class="notification-content">
            <i class="${icons[type]}"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #1a0033;
        border: 2px solid ${colors[type]};
        border-radius: 10px;
        padding: 15px 20px;
        color: ${colors[type]};
        font-family: 'Orbitron', monospace;
        font-size: 0.9rem;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 0 20px ${colors[type]};
        max-width: 350px;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 3000);
}

function playRetroSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
        // Audio context not supported
        console.log('Audio context not supported');
    }
}

// Animation initialization
function initializeAnimations() {
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.game-card, .step, .contact-item').forEach(el => {
        observer.observe(el);
    });
    
    // Random glitch effects
    setInterval(() => {
        const glitchElements = document.querySelectorAll('.section-title, .logo-text, .neon-text');
        if (glitchElements.length > 0) {
            const randomElement = glitchElements[Math.floor(Math.random() * glitchElements.length)];
            randomElement.style.animation = 'none';
            setTimeout(() => {
                randomElement.style.animation = 'glitch 0.5s ease';
            }, 10);
        }
    }, 8000);
    
    // Typing effect for hero subtitle
    const heroSubtitle = document.querySelector('.hero p');
    if (heroSubtitle) {
        initializeTypingEffect(heroSubtitle);
    }
}

function initializeTypingEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid #39ff14';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            // Blinking cursor
            setInterval(() => {
                element.style.borderRight = element.style.borderRight === 'none' ? 
                    '2px solid #39ff14' : 'none';
            }, 500);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Add required CSS animations
function addRequiredStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutRight {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(100px);
            }
        }
        
        @keyframes glitch {
            0%, 100% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        .nav-links.active {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--darker, #0a001a);
            border: 2px solid var(--neon-cyan, #00ffff);
            border-top: none;
            padding: 1rem;
            gap: 1rem;
            z-index: 1000;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .search-results.active {
            display: block;
        }
        
        .search-result-item {
            cursor: pointer;
            transition: all 0.3s ease;
            border-radius: 10px;
            margin-bottom: 10px;
        }
        
        .search-result-item:hover {
            background: rgba(255, 0, 128, 0.1);
            transform: translateY(-2px);
        }
        
        .search-result-content {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
        }
        
        .search-result-icon {
            font-size: 1.5rem;
            color: var(--neon-cyan, #00ffff);
            min-width: 30px;
        }
        
        .search-result-info h4 {
            margin: 0 0 5px 0;
            color: var(--neon-pink, #ff0080);
            font-size: 0.9rem;
        }
        
        .search-result-info p {
            margin: 0;
            color: var(--neon-green, #39ff14);
            font-size: 0.8rem;
        }
        
        .no-results {
            text-align: center;
            padding: 2rem;
            color: var(--neon-cyan, #00ffff);
        }
        
        .no-results i {
            font-size: 2rem;
            margin-bottom: 1rem;
            display: block;
        }
        
        @media (max-width: 768px) {
            .retro-notification {
                top: 10px !important;
                right: 10px !important;
                left: 10px !important;
                max-width: none !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize styles
addRequiredStyles();

// Performance optimization - debounced scroll handler
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${parallax}px)`;
        }
    });
});

// Global error handling
window.addEventListener('error', (e) => {
    console.error('RetroZone Error:', e.error);
    showNotification('An error occurred. Please try again.', 'error');
});

// Export main functions for global access
window.RetroZone = {
    openOrderModal,
    performSearch,
    playRetroSound,
    showNotification,
    closeModal
};

console.log(`
╔══════════════════════════════════════╗
║         RETROZONE SYSTEM v2.1        ║
║              OPTIMIZED                ║
║                                      ║
║    🎮 All Functions: ACTIVE          ║
║    📱 WhatsApp: READY                ║
║    🚀 Performance: OPTIMIZED         ║
║    💫 Animations: SMOOTH             ║
╚══════════════════════════════════════╝
`);