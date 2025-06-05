 class VideoPromptGenerator {
    constructor() {
        this.container = document.getElementById('videoPromptGenerator');
        if (!this.container) return;
        
        this.initUI();
        this.setupEventListeners();
        this.setDefaults();
    }

    initUI() {
        this.container.innerHTML = `
            <h2 class="panel-title"><i class="fas fa-film"></i> Generator Prompt Video AI</h2>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Buat prompt video berkualitas tinggi untuk generasi video AI</p>
            
            <div class="section">
                <div class="input-group">
                    <label for="video-subject">Subjek Utama<br><small>(Objek atau fokus utama video)</small></label>
                    <input type="text" id="video-subject" placeholder="contoh: kota cyberpunk, robot futuristik">
                </div>
                
                <div class="input-group">
                    <label for="video-action">Aksi/Verb<br><small>(Aktivitas atau gerakan subjek)</small></label>
                    <input type="text" id="video-action" placeholder="contoh: terbang, menari, bertransformasi">
                </div>
                
                <div class="input-group">
                    <label for="video-model">Model Video<br><small>(Format dan tujuan video)</small></label>
                    <select id="video-model">
                        <option value="standard">Video Standar</option>
                        <option value="youtube-shorts">YouTube Shorts</option>
                        <option value="instagram-reels">Instagram Reels</option>
                        <option value="tiktok">TikTok</option>
                        <option value="advertisement">Iklan</option>
                        <option value="tutorial">Tutorial</option>
                        <option value="film-pendek">Film Pendek</option>
                        <option value="dokumenter">Dokumenter</option>
                        <option value="video-klip">Video Klip Musik</option>
                        <option value="video-game">Konten Video Game</option>
                        <option value="live-action">Live Action</option>
                        <option value="animasi-3D">Animasi 3D</option>
                        <option value="animasi-2D">Animasi 2D</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-style">Gaya Visual<br><small>(Estetika dan tampilan visual)</small></label>
                    <select id="video-style">
                        <option value="sinematik">Sinematik</option>
                        <option value="anime">Anime</option>
                        <option value="cyberpunk">Cyberpunk</option>
                        <option value="steampunk">Steampunk</option>
                        <option value="realistis">Realistis</option>
                        <option value="lukisan">Seperti Lukisan</option>
                        <option value="cat-air">Cat Air</option>
                        <option value="pixel-art">Pixel Art</option>
                        <option value="claymation">Claymation</option>
                        <option value="surreal">Surealis</option>
                        <option value="minimalis">Minimalis</option>
                        <option value="retro-futuristik">Retro Futuristik</option>
                        <option value="grunge">Grunge</option>
                        <option value="noir">Noir</option>
                        <option value="fantasi">Fantasi</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="komik">Gaya Komik</option>
                        <option value="low-poly">Low Poly</option>
                        <option value="uikit">UI Kit/Interaktif</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-mood">Suasana/Nada<br><small>(Emosi dan atmosfer video)</small></label>
                    <select id="video-mood">
                        <option value="epik">Epik</option>
                        <option value="misterius">Misterius</option>
                        <option value="romantis">Romantis</option>
                        <option value="gelap">Gelap</option>
                        <option value="lucu">Lucu</option>
                        <option value="energik">Energik</option>
                        <option value="melankolis">Melankolis</option>
                        <option value="futuristik">Futuristik</option>
                        <option value="vintage">Vintage</option>
                        <option value="mimpi">Seperti Mimpi</option>
                        <option value="horor">Horor</option>
                        <option value="komedi">Komedi</option>
                        <option value="dramatis">Dramatis</option>
                        <option value="heroik">Heroik</option>
                        <option value="tenang">Tenang</option>
                        <option value="tegang">Tegang</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-camera">Sudut Kamera<br><small>(Komposisi dan perspektif kamera)</small></label>
                    <select id="video-camera">
                        <option value="close-up">Close-up (Dekat)</option>
                        <option value="extreme-close-up">Extreme Close-up (Sangat Dekat)</option>
                        <option value="medium-shot">Medium shot (Sedang)</option>
                        <option value="american-shot">American shot (Pinggang ke atas)</option>
                        <option value="full-shot">Full shot (Seluruh tubuh)</option>
                        <option value="long-shot">Long shot (Jarak jauh)</option>
                        <option value="extreme-long-shot">Extreme Long shot (Sangat jauh)</option>
                        <option value="wide-shot">Wide shot (Lebar)</option>
                        <option value="aerial-view">Aerial view (Udara)</option>
                        <option value="dutch-angle">Dutch angle (Miring)</option>
                        <option value="over-the-shoulder">Over-the-shoulder (Dari belakang bahu)</option>
                        <option value="point-of-view">Point-of-view (Sudut pandang orang pertama)</option>
                        <option value="tracking-shot">Tracking shot (Mengikuti objek)</option>
                        <option value="dolly-shot">Dolly shot (Gerakan maju/mundur)</option>
                        <option value="crane-shot">Crane shot (Dari atas)</option>
                        <option value="steadycam-shot">Steadycam shot (Stabil)</option>
                        <option value="handheld-shot">Handheld shot (Genggam)</option>
                        <option value="split">Split (Terbagi)</option>
                        <option value="fish-eye">Fish-Eye (Mata ikan)</option>
                        <option value="macro">Macro (Makro)</option>
                        <option value="tilt-shot">Tilt shot (Miring vertikal)</option>
                        <option value="pan-shot">Pan shot (Geser horizontal)</option>
                        <option value="zoom-shot">Zoom shot (Perbesaran)</option>
                        <option value="360-degree">360-degree (360 derajat)</option>
                        <option value="top-down">Top-down (Atas ke bawah)</option>
                        <option value="low-angle">Low angle (Dari bawah)</option>
                        <option value="high-angle">High angle (Dari atas)</option>
                        <option value="eye-level">Eye level (Sejajar mata)</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-lighting">Pencahayaan<br><small>(Teknik dan sumber cahaya)</small></label>
                    <select id="video-lighting">
                        <option value="natural">Natural (Alami)</option>
                        <option value="studio">Studio</option>
                        <option value="neon">Neon</option>
                        <option value="volumetric">Volumetrik</option>
                        <option value="low-key">Low-key (Rendah)</option>
                        <option value="high-key">High-key (Tinggi)</option>
                        <option value="backlit">Backlit (Cahaya belakang)</option>
                        <option value="rim-light">Rim light (Cahaya tepi)</option>
                        <option value="soft-light">Soft light (Lembut)</option>
                        <option value="hard-light">Hard light (Keras)</option>
                        <option value="chiaroscuro">Chiaroscuro (Kontras tinggi)</option>
                        <option value="ambient">Ambient (Sekitar)</option>
                        <option value="practical">Practical (Praktis)</option>
                        <option value="motivated">Motivated (Alami tapi diatur)</option>
                        <option value="silhouette">Silhouette (Siluet)</option>
                        <option value="godrays">Godrays (Sinar ilahi)</option>
                        <option value="bioluminescent">Bioluminescent (Bercahaya alami)</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-color">Palet Warna<br><small>(Kombinasi warna dominan)</small></label>
                    <input type="text" id="video-color" placeholder="contoh: biru dan merah muda pastel, monokrom">
                </div>
                
                <div class="input-group">
                    <label for="video-artists">Pengaruh Artistik<br><small>(Inspirasi gaya artistik)</small></label>
                    <input type="text" id="video-artists" placeholder="contoh: Studio Ghibli, Wes Anderson">
                </div>
                
                <div class="input-group">
                    <label for="video-resolution">Resolusi<br><small>(Kualitas gambar video)</small></label>
                    <select id="video-resolution">
                        <option value="480p">480p (SD)</option>
                        <option value="720p">720p (HD)</option>
                        <option value="1080p">1080p (Full HD)</option>
                        <option value="2K">2K</option>
                        <option value="4K">4K (Ultra HD)</option>
                        <option value="8K">8K</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-fps">Frame Rate<br><small>(Kelancaran gerakan)</small></label>
                        <select id="video-fps">
                            <option value="24">24 fps (sinematik)</option>
                            <option value="25">25 fps (PAL)</option>
                            <option value="30">30 fps (standar)</option>
                            <option value="48">48 fps (HFR)</option>
                            <option value="50">50 fps (PAL HFR)</option>
                            <option value="60">60 fps (halus)</option>
                            <option value="120">120 fps (sangat halus)</option>
                            <option value="240">240 fps (slow motion)</option>
                        </select>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-aspect">Rasio Aspek<br><small>(Proporsi dimensi video)</small></label>
                        <select id="video-aspect">
                            <option value="16:9">16:9 (widescreen)</option>
                            <option value="4:3">4:3 (standar)</option>
                            <option value="1:1">1:1 (persegi)</option>
                            <option value="21:9">21:9 (ultrawide)</option>
                            <option value="9:16">9:16 (vertikal)</option>
                            <option value="2.35:1">2.35:1 (CinemaScope)</option>
                            <option value="1.85:1">1.85:1 (standar film)</option>
                            <option value="3:2">3:2 (foto klasik)</option>
                            <option value="5:4">5:4 (beberapa monitor)</option>
                        </select>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-details">Detail Tambahan<br><small>(Spesifikasi tambahan untuk video)</small></label>
                        <textarea id="video-details" rows="3" placeholder="Detail atau persyaratan spesifik lainnya..."></textarea>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-characters">Jumlah Karakter<br><small>(Banyaknya karakter dalam video)</small></label>
                        <select id="video-characters">
                            <option value="0">Tidak Ada Karakter</option>
                            <option value="1">1 Karakter</option>
                            <option value="2">2 Karakter</option>
                            <option value="3">3 Karakter</option>
                            <option value="4">4 Karakter</option>
                            <option value="group">Kelompok (5+ Karakter)</option>
                            <option value="crowd">Kerumunan</option>
                        </select>
                    </div>
                    
                    <div class="input-group character-dialogue" id="character1-group" style="display:none;">
                        <label for="video-character1">Karakter 1<br><small>(Deskripsi dan dialog karakter pertama)</small></label>
                        <input type="text" id="video-character1-desc" placeholder="Deskripsi karakter (contoh: Pria paruh baya dengan janggut abu-abu)">
                        <textarea id="video-character1-dialog" rows="2" placeholder="Dialog karakter 1..."></textarea>
                    </div>
                    
                    <div class="input-group character-dialogue" id="character2-group" style="display:none;">
                        <label for="video-character2">Karakter 2<br><small>(Deskripsi dan dialog karakter kedua)</small></label>
                        <input type="text" id="video-character2-desc" placeholder="Deskripsi karakter (contoh: Wanita muda dengan rambir biru)">
                        <textarea id="video-character2-dialog" rows="2" placeholder="Dialog karakter 2..."></textarea>
                    </div>
                    
                    <div class="input-group character-dialogue" id="character3-group" style="display:none;">
                        <label for="video-character3">Karakter 3<br><small>(Deskripsi dan dialog karakter ketiga)</small></label>
                        <input type="text" id="video-character3-desc" placeholder="Deskripsi karakter (contoh: Anak kecil dengan mainan robot)">
                        <textarea id="video-character3-dialog" rows="2" placeholder="Dialog karakter 3..."></textarea>
                    </div>
                    
                    <div class="input-group character-dialogue" id="character4-group" style="display:none;">
                        <label for="video-character4">Karakter 4<br><small>(Deskripsi dan dialog karakter keempat)</small></label>
                        <input type="text" id="video-character4-desc" placeholder="Deskripsi karakter (contoh: Robot humanoid dengan suara mekanis)">
                        <textarea id="video-character4-dialog" rows="2" placeholder="Dialog karakter 4..."></textarea>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-sound">Efek Suara dan Musik<br><small>(Atmosfer audio untuk video)</small></label>
                        <textarea id="video-sound" rows="2" placeholder="Deskripsi efek suara atau musik yang diinginkan..."></textarea>
                    </div>
                </div>
                
                <div class="output-group">
                    <label for="video-prompt-output">Prompt yang Dihasilkan<br><small>(Hasil generator prompt video)</small></label>
                    <textarea id="video-prompt-output" rows="5" readonly></textarea>
                    <button class="generate-button" id="generate-video-prompt">
                        <i class="fas fa-magic"></i> Buat Prompt Video
                    </button>

                    <button class="clear-button" id="clear-video-prompt">
                        <i class="fas fa-eraser"></i> Hapus Prompt
                    </button>
                    <button class="copy-button" id="copy-video-prompt">
                        <i class="fas fa-copy"></i> Salin Prompt
                    </button>
                    
                    <div class="language-options" style="margin-top: 1rem; display: none;">
                        <label>Pilih Bahasa:</label>
                        <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                            <button class="language-button active" data-lang="id">Indonesia</button>
                            <button class="language-button" data-lang="en">English</button>
                        </div>
                    </div>
                    
                    <button class="reset-button" id="reset-video-prompt" style="margin-top: 0.5rem;">
                        <i class="fas fa-sync-alt"></i> Reset Form
                    </button>
                </div>
                
                <!-- Dialog Modal -->
                <div id="video-dialog-modal" class="video-dialog hidden">
                    <div class="video-dialog-content">
                        <p id="video-dialog-message">Pesan Anda di sini</p>
                        <button id="video-dialog-close">OK</button>
                    </div>
                </div>
        `;
    }

    setupEventListeners() {
        // Tombol hapus
        const clearBtn = document.getElementById('clear-video-prompt');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                const output = document.getElementById('video-prompt-output');
                if (output) output.value = '';
                this.showNotification('Prompt berhasil dihapus!');
            });
        }

        // Tombol buat
        const generateBtn = document.getElementById('generate-video-prompt');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.generatePrompt());
        }

        // Tombol salin
        const copyBtn = document.getElementById('copy-video-prompt');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => this.copyPrompt());
        }
        
        // Handler perubahan model video
        const modelSelect = document.getElementById('video-model');
        if (modelSelect) {
            modelSelect.addEventListener('change', () => this.handleModelChange());
        }
        
        // Handler perubahan jumlah karakter
        const charSelect = document.getElementById('video-characters');
        if (charSelect) {
            charSelect.addEventListener('change', () => this.handleCharacterChange());
        }
        
        // Language buttons handler
        const langButtons = document.querySelectorAll('.language-button');
        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                langButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.translatePrompt(button.dataset.lang);
            });
        });

        // Reset button handler
        const resetBtn = document.getElementById('reset-video-prompt');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.setDefaults();
                this.showNotification('Form telah direset ke nilai default!');
            });
        }
    }

    handleCharacterChange() {
        const charCount = document.getElementById('video-characters').value;
        
        // Sembunyikan semua grup karakter terlebih dahulu
        for (let i = 1; i <= 4; i++) {
            const group = document.getElementById(`character${i}-group`);
            if (group) group.style.display = 'none';
        }
        
        // Tampilkan hanya grup karakter yang diperlukan
        for (let i = 1; i <= charCount; i++) {
            const group = document.getElementById(`character${i}-group`);
            if (group) group.style.display = 'block';
        }
    }

    handleModelChange() {
        const model = document.getElementById('video-model').value;
        const resolution = document.getElementById('video-resolution');
        const fps = document.getElementById('video-fps');
        const aspect = document.getElementById('video-aspect');
        
        if (!resolution || !fps || !aspect) return;
        
        switch(model) {
            case 'youtube-shorts':
            case 'instagram-reels':
            case 'tiktok':
                resolution.value = '1080p';
                fps.value = '30';
                aspect.value = '9:16';
                break;
            case 'advertisement':
                resolution.value = '4K';
                fps.value = '24';
                aspect.value = '16:9';
                break;
            case 'tutorial':
                resolution.value = '1080p';
                fps.value = '30';
                aspect.value = '16:9';
                break;
            case 'film-pendek':
                resolution.value = '4K';
                fps.value = '24';
                aspect.value = '2.35:1';
                break;
            case 'dokumenter':
                resolution.value = '1080p';
                fps.value = '25';
                aspect.value = '16:9';
                break;
            case 'video-klip':
                resolution.value = '4K';
                fps.value = '30';
                aspect.value = '1:1';
                break;
            default:
                // Pertahankan nilai saat ini
                break;
        }
    }

    setDefaults() {
        // Nilai default untuk demonstrasi
        const defaults = {
            'video-subject': 'pemandangan kota cyberpunk',
            'video-action': 'berkilau dengan lampu neon',
            'video-model': 'standard',
            'video-style': 'cyberpunk',
            'video-mood': 'futuristik',
            'video-camera': 'aerial view',
            'video-lighting': 'neon',
            'video-color': 'biru neon, ungu, dan merah muda',
            'video-artists': 'Blade Runner, Akira',
            'video-resolution': '1080p',
            'video-fps': '24',
            'video-aspect': '16:9',
            'video-details': 'Hujan turun, pantulan di permukaan basah, iklan holografik',
            'video-characters': '0',
            'video-sound': 'Musik synthwave dengan bass yang dalam dan efek suara futuristik'
        };

        for (const [id, value] of Object.entries(defaults)) {
            const element = document.getElementById(id);
            if (element) element.value = value;
        }
    }

    generatePrompt() {
        const getValue = (id) => document.getElementById(id)?.value.trim() || '';
        const getSelectValue = (id) => document.getElementById(id)?.value || '';

        const subject = getValue('video-subject');
        const action = getValue('video-action');
        const model = getSelectValue('video-model');
        const style = getSelectValue('video-style');
        const mood = getSelectValue('video-mood');
        const camera = getSelectValue('video-camera');
        const lighting = getSelectValue('video-lighting');
        const color = getValue('video-color');
        const artists = getValue('video-artists');
        const resolution = getSelectValue('video-resolution');
        const fps = getSelectValue('video-fps');
        const aspect = getSelectValue('video-aspect');
        const details = getValue('video-details');
        const sound = getValue('video-sound');
        const charCount = getSelectValue('video-characters');

        if (!subject) {
            this.showNotification('Masukkan subjek utama untuk video Anda', false);
            return;
        }

        let prompt = `Buat video ${model} bergaya ${style} tentang ${subject} ${action}. `;
        prompt += `Suasana harus ${mood} dengan pencahayaan ${lighting}. `;
        prompt += `Gunakan sudut kamera ${camera}. `;

        if (color) prompt += `Palet warna: ${color}. `;
        if (artists) prompt += `Pengaruh artistik: ${artists}. `;
        prompt += `Spesifikasi teknis: resolusi ${resolution}, ${fps} fps, rasio aspek ${aspect}. `;
        
        // Tambahkan karakter dan dialog jika ada
        if (charCount !== '0') {
            prompt += `Jumlah karakter: ${charCount}. `;
            
            for (let i = 1; i <= charCount; i++) {
                const charDesc = getValue(`video-character${i}-desc`);
                const charDialog = getValue(`video-character${i}-dialog`);
                
                if (charDesc) prompt += `Karakter ${i}: ${charDesc}. `;
                if (charDialog) prompt += `Dialog karakter ${i}: "${charDialog}". `;
            }
        }
        
        if (details) prompt += `Detail tambahan: ${details}. `;
        if (sound) prompt += `Efek suara dan musik: ${sound}. `;

        prompt += `--v 4.1 --style 4b --q 2`;

        const output = document.getElementById('video-prompt-output');
        if (output) {
            output.value = prompt;
            // Tampilkan opsi bahasa setelah prompt dibuat
            const langOptions = document.querySelector('.language-options');
            if (langOptions) langOptions.style.display = 'block';
        }
    }

    translatePrompt(lang) {
        const output = document.getElementById('video-prompt-output');
        if (!output || !output.value) return;

        if (lang === 'id') {
            // Jika sudah dalam Bahasa Indonesia, kembalikan ke versi asli
            this.generatePrompt();
            return;
        }

        // Terjemahkan ke Bahasa Inggris
        let translated = output.value
            .replace('Buat video', 'Create a')
            .replace('bergaya', 'in')
            .replace('tentang', 'about')
            .replace('Suasana harus', 'Mood should be')
            .replace('dengan pencahayaan', 'with')
            .replace('Gunakan sudut kamera', 'Use')
            .replace('Palet warna:', 'Color palette:')
            .replace('Pengaruh artistik:', 'Artistic influences:')
            .replace('Spesifikasi teknis:', 'Technical specifications:')
            .replace('resolusi', 'resolution')
            .replace('fps', 'fps')
            .replace('rasio aspek', 'aspect ratio')
            .replace('Jumlah karakter:', 'Number of characters:')
            .replace('Karakter', 'Character')
            .replace('Dialog karakter', 'Character dialogue')
            .replace('Detail tambahan:', 'Additional details:')
            .replace('Efek suara dan musik:', 'Sound effects and music:');

        output.value = translated;
    }

    copyPrompt() {
        const output = document.getElementById('video-prompt-output');
        if (!output || !output.value) {
            this.showNotification('Tidak ada prompt untuk disalin! Buat prompt terlebih dahulu.', false);
            return;
        }

        output.select();
        document.execCommand('copy');

        // Umpan balik visual
        const copyBtn = document.getElementById('copy-video-prompt');
        if (copyBtn) {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        }

        this.showNotification('Prompt video berhasil disalin ke clipboard!');
    }

    showNotification(message, isSuccess = true) {
        const notification = document.getElementById('notification');
        if (notification) {
            notification.style.display = 'block';
            notification.style.backgroundColor = isSuccess ? 'var(--success)' : 'var(--error)';
            const messageEl = document.getElementById('notification-message');
            if (messageEl) messageEl.textContent = message;
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        } else {
            this.showDialog(message);
        }
    }

    showDialog(message) {
        const dialog = document.getElementById('video-dialog-modal');
        const msgEl = document.getElementById('video-dialog-message');
        if (dialog && msgEl) {
            msgEl.textContent = message;
            dialog.classList.remove('hidden');
            const closeBtn = document.getElementById('video-dialog-close');
            if (closeBtn) {
                closeBtn.onclick = () => dialog.classList.add('hidden');
            }
        }
    }
}

// Inisialisasi saat DOM dimuat
document.addEventListener('DOMContentLoaded', () => {
    new VideoPromptGenerator();
});
