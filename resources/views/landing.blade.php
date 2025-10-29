<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RetroZone - Top Up Gaming Retro Style</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Press+Start+2P&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/retrozone.css') }}">

</head>
<body>
    <!-- Header -->
    <header>
        <nav class="container">
            <div class="logo">
                <i class="fas fa-gamepad retro-icon"></i>
                <span class="logo-text">RETROZONE</span>
            </div>
            <ul class="nav-links">
                <li><a href="#home">HOME</a></li>
                <li><a href="#games">GAMES</a></li>
                <li><a href="#how-to">HOW TO</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>PIXEL PERFECT TOP-UP</h1>
                <p>Level up your gaming experience with lightning-fast top-ups</p>
                
                <!-- Search Container -->
                <div class="search-container">
                    <input type="text" id="gameSearch" class="search-box" placeholder="Search your favorite game...">
                </div>
                
                <!-- Quick Access Buttons -->
                <div class="quick-access">
                    <a href="#" class="quick-btn" data-game="mobile-legends">
                        <i class="fas fa-shield-alt"></i>
                        Mobile Legends
                    </a>
                    <a href="#" class="quick-btn" data-game="free-fire">
                        <i class="fas fa-fire"></i>
                        Free Fire
                    </a>
                    <a href="#" class="quick-btn" data-game="pubg">
                        <i class="fas fa-crosshairs"></i>
                        PUBG Mobile
                    </a>
                    <a href="#" class="quick-btn" data-game="valorant">
                        <i class="fas fa-bullseye"></i>
                        Valorant
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Search Results Section -->
    <section class="search-results" id="searchResults">
        <div class="container">
            <h3>Search Results</h3>
            <div class="search-results-grid" id="searchResultsGrid">
                <!-- Search results will be populated here -->
            </div>
        </div>
    </section>

    <!-- Games Section -->
    <section id="games" class="games">
        <div class="container">
            <h2 class="section-title neon-text">SELECT YOUR GAME</h2>
            <div class="games-grid">
                <div class="game-card" data-game="mobile-legends">
                    <div class="card-glow"></div>
                    <div class="game-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>MOBILE LEGENDS</h3>
                    <p class="price">Diamond ML from IDR 10K</p>
                    <div class="card-scanline"></div>
                    <button class="select-game-btn pixel-btn">SELECT</button>
                </div>
                
                <div class="game-card" data-game="free-fire">
                    <div class="card-glow"></div>
                    <div class="game-icon">
                        <i class="fas fa-fire"></i>
                    </div>
                    <h3>FREE FIRE</h3>
                    <p class="price">Diamond FF from IDR 5K</p>
                    <div class="card-scanline"></div>
                    <button class="select-game-btn pixel-btn">SELECT</button>
                </div>
                
                <div class="game-card" data-game="pubg">
                    <div class="card-glow"></div>
                    <div class="game-icon">
                        <i class="fas fa-crosshairs"></i>
                    </div>
                    <h3>PUBG MOBILE</h3>
                    <p class="price">UC PUBG from IDR 15K</p>
                    <div class="card-scanline"></div>
                    <button class="select-game-btn pixel-btn">SELECT</button>
                </div>
                
                <div class="game-card" data-game="valorant">
                    <div class="card-glow"></div>
                    <div class="game-icon">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <h3>VALORANT</h3>
                    <p class="price">VP Valorant from IDR 20K</p>
                    <div class="card-scanline"></div>
                    <button class="select-game-btn pixel-btn">SELECT</button>
                </div>

                <div class="game-card" data-game="genshin">
                    <div class="card-glow"></div>
                    <div class="game-icon">
                        <i class="fas fa-magic"></i>
                    </div>
                    <h3>GENSHIN IMPACT</h3>
                    <p class="price">Genesis Crystal from IDR 16K</p>
                    <div class="card-scanline"></div>
                    <button class="select-game-btn pixel-btn">SELECT</button>
                </div>

                <div class="game-card" data-game="cod">
                    <div class="card-glow"></div>
                    <div class="game-icon">
                        <i class="fas fa-bomb"></i>
                    </div>
                    <h3>CALL OF DUTY</h3>
                    <p class="price">CP COD from IDR 15K</p>
                    <div class="card-scanline"></div>
                    <button class="select-game-btn pixel-btn">SELECT</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Order Modal -->
    <div id="orderModal" class="modal">
        <div class="modal-content retro-terminal">
            <div class="terminal-header">
                <span class="terminal-title">>>> ORDER SYSTEM v2.0 <<<</span>
                <span class="close">&times;</span>
            </div>
            <div class="terminal-body">
                <form id="orderForm">
                    <div class="form-group">
                        <label class="terminal-label">SELECTED_GAME:</label>
                        <input type="text" id="gameTitle" name="gameTitle" class="terminal-input" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label class="terminal-label">USER_ID:</label>
                        <input type="text" id="userId" name="userId" class="terminal-input" placeholder="Enter your User ID" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="terminal-label">SERVER_ID:</label>
                        <input type="text" id="serverId" name="serverId" class="terminal-input" placeholder="Enter Server ID (if any)">
                    </div>
                    
                    <div class="form-group">
                        <label class="terminal-label">PACKAGE_SELECT:</label>
                        <select id="package" name="package" class="terminal-input" required>
                            <option value="">Choose Package</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label class="terminal-label">PLAYER_NAME:</label>
                        <input type="text" id="customerName" name="customerName" class="terminal-input" placeholder="Full Name" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="terminal-label">WHATSAPP_NUMBER:</label>
                        <input type="tel" id="customerPhone" name="customerPhone" class="terminal-input" placeholder="08xxxxxxxxxx" required>
                    </div>
                    
                    <button type="submit" class="neon-button submit-btn">
                        <span>ORDER VIA WHATSAPP</span>
                        <i class="fab fa-whatsapp"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- How To Section -->
    <section id="how-to" class="how-to">
        <div class="container">
            <h2 class="section-title neon-text">MISSION PROTOCOL</h2>
            <div class="steps">
                <div class="step retro-card">
                    <div class="step-number">01</div>
                    <h3>SELECT GAME</h3>
                    <p>Choose your favorite game from our retro arcade collection</p>
                    <div class="step-glow"></div>
                </div>
                <div class="step retro-card">
                    <div class="step-number">02</div>
                    <h3>INPUT DATA</h3>
                    <p>Enter your User ID, select package, and fill order details</p>
                    <div class="step-glow"></div>
                </div>
                <div class="step retro-card">
                    <div class="step-number">03</div>
                    <h3>WHATSAPP CHAT</h3>
                    <p>Click WhatsApp button to continue order and payment</p>
                    <div class="step-glow"></div>
                </div>
                <div class="step retro-card">
                    <div class="step-number">04</div>
                    <h3>GAME ON</h3>
                    <p>Diamonds/coins will be delivered to your account instantly</p>
                    <div class="step-glow"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title neon-text">SUPPORT CENTER</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item retro-card">
                        <i class="fab fa-whatsapp neon-icon"></i>
                        <div>
                            <h3>WHATSAPP</h3>
                            <p>+62 812-3456-7890</p>
                        </div>
                        <div class="step-glow"></div>
                    </div>
                    <div class="contact-item retro-card">
                        <i class="fas fa-clock neon-icon"></i>
                        <div>
                            <h3>ONLINE STATUS</h3>
                            <p>24/7 ACTIVE</p>
                        </div>
                        <div class="step-glow"></div>
                    </div>
                    <div class="contact-item retro-card">
                        <i class="fas fa-bolt neon-icon"></i>
                        <div>
                            <h3>PROCESS TIME</h3>
                            <p>1-5 MINUTES</p>
                        </div>
                        <div class="step-glow"></div>
                    </div>
                </div>
                <div class="whatsapp-direct retro-terminal">
                    <div class="terminal-header">
                        <span class="terminal-title">>>> DIRECT CHAT <<<</span>
                    </div>
                    <div class="terminal-body">
                        <h3>NEED HELP?</h3>
                        <p>Chat with our admin now!</p>
                        <a href="https://wa.me/6285176933632?text=Hello%20admin,%20I%20want%20to%20ask%20about%20top-up%20services" 
                           class="neon-button whatsapp-btn" target="_blank">
                            <span>CHAT ADMIN</span>
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="logo">
                        <i class="fas fa-gamepad retro-icon"></i>
                        <span class="logo-text">RETROZONE</span>
                    </div>
                    <p>Your trusted retro gaming top-up platform with 24/7 service and lightning-fast delivery.</p>
                </div>
                <div class="footer-section">
                    <h3>POPULAR GAMES</h3>
                    <ul>
                        <li>Mobile Legends</li>
                        <li>Free Fire</li>
                        <li>PUBG Mobile</li>
                        <li>Valorant</li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>CONTACT INFO</h3>
                    <ul>
                        <li><i class="fab fa-whatsapp"></i> +62 851-7693-3632</li>
                        <li><i class="fas fa-envelope"></i> info@retrozone.com</li>
                        <li><i class="fas fa-map-marker-alt"></i> Indonesia</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 RetroZone. All rights reserved. | Game on!</p>
            </div>
        </div>
    </footer>

<!-- WhatsApp Floating Button -->
<div class="whatsapp-float">
    <a id="waFloatBtn" href="#" target="_blank" class="pulse-btn">
        <i class="fab fa-whatsapp"></i>
    </a>
</div>

<script>
// Fungsi khusus untuk pesan cek pesanan
function generateCheckOrderLink() {
    const gameTitle = document.getElementById("gameTitle")?.value.trim() || "-";
    const userId = document.getElementById("userId")?.value.trim() || "-";
    const serverId = document.getElementById("serverId")?.value.trim() || "-";
    const packageName = document.getElementById("package")?.value.trim() || "-";
    const customerName = document.getElementById("customerName")?.value.trim() || "-";
    const customerPhone = document.getElementById("customerPhone")?.value.trim() || "-";

    const message = 
`Halo admin, saya ingin mengecek pesanan saya.

Nama: ${customerName}
Game: ${gameTitle}
User ID: ${userId}
Server ID: ${serverId}
Paket: ${packageName}
Nomor HP: ${customerPhone}`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/6285176933632?text=${encodedMessage}`;
}

// Event click untuk tombol floating WA
document.getElementById("waFloatBtn").addEventListener("click", function(e) {
    e.preventDefault();
    const link = generateCheckOrderLink();
    window.open(link, "_blank");
});
</script>
<!-- Tambahkan ini sebelum </body> -->
<script>
document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah submit default

    const gameTitle = document.getElementById("gameTitle").value.trim();
    const userId = document.getElementById("userId").value.trim();
    const serverId = document.getElementById("serverId").value.trim() || "-";
    const packageName = document.getElementById("package").value.trim();
    const customerName = document.getElementById("customerName").value.trim();
    const customerPhone = document.getElementById("customerPhone").value.trim();

    if (!gameTitle || !userId || !packageName || !customerName || !customerPhone) {
        alert("Harap isi semua data yang diperlukan!");
        return;
    }

    // Buat template struk
    const message = 
`🧾 STRUK PEMBELIAN
--------------------------------
📅 Tanggal  : ${new Date().toLocaleDateString("id-ID")}
🕒 Waktu    : ${new Date().toLocaleTimeString("id-ID")}

🎮 Game     : ${gameTitle}
👤 Nama     : ${customerName}
🆔 User ID  : ${userId}
🌐 Server ID: ${serverId}
📦 Paket    : ${packageName}
💰 Total    : (isi harga sesuai paket)
💳 Pembayaran: QRIS

--------------------------------
✅ STATUS: MENUNGGU KONFIRMASI
Kode Transaksi: #${Math.floor(Math.random()*100000)}

📞 Nomor Pembeli: ${customerPhone}
Terima kasih telah berbelanja di RetroZone 🎮
--------------------------------`;

    // Encode pesan agar aman di URL
    const encodedMessage = encodeURIComponent(message);

    // Nomor WA admin
    const adminNumber = "6285176933632";

    // Redirect ke WhatsApp
    window.open(`https://wa.me/${adminNumber}?text=${encodedMessage}`, "_blank");
});
</script>


    <script src="{{ asset('assets/js/retrozone.js') }}"></script>
</body>
</html>