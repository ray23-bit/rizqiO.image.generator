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
            <h2 class="panel-title"><i class="fas fa-film"></i> AI Video Prompt Generator</h2>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Generate high-quality video prompts for AI video generation</p>
            
            <div class="section">
                <div class="input-group">
                    <label for="video-type">Video Type<br><small>(Jenis Video)</small></label>
                    <select id="video-type">
                        <option value="general">General Video</option>
                        <option value="youtube-short">YouTube Short</option>
                        <option value="tiktok">TikTok/Reels</option>
                        <option value="commercial">Commercial/Ad</option>
                        <option value="drama">Drama/Film</option>
                        <option value="action">Action Scene</option>
                        <option value="documentary">Documentary</option>
                        <option value="animation">Animation</option>
                        <option value="music-video">Music Video</option>
                        <option value="vlog">Vlog</option>
                        <option value="tutorial">Tutorial</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-subject">Main Subject<br><small>(Subjek Utama)</small></label>
                    <input type="text" id="video-subject" placeholder="e.g., cyberpunk city, futuristic robot">
                </div>
                
                <div class="input-group">
                    <label for="video-action">Action/Verb<br><small>(Tindakan/Kata kerja)</small></label>
                    <input type="text" id="video-action" placeholder="e.g., flying, dancing, transforming">
                </div>
                
                <div class="input-group">
                    <label for="video-style">Visual Style<br><small>(Gaya Visual)</small></label>
                    <select id="video-style">
                        <option value="cinematic">Cinematic</option>
                        <option value="anime">Anime</option>
                        <option value="cyberpunk">Cyberpunk</option>
                        <option value="steampunk">Steampunk</option>
                        <option value="realistic">Realistic</option>
                        <option value="painterly">Painterly</option>
                        <option value="watercolor">Watercolor</option>
                        <option value="pixel-art">Pixel Art</option>
                        <option value="claymation">Claymation</option>
                        <option value="surreal">Surreal</option>
                        <option value="minimalist">Minimalist</option>
                        <option value="retro-futurism">Retro Futurism</option>
                        <option value="grunge">Grunge</option>
                        <option value="bollywood">Bollywood</option>
                        <option value="k-drama">K-Drama</option>
                        <option value="noir">Noir</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-mood">Mood/Tone<br><small>(Suasana/Nuansa)</small></label>
                    <select id="video-mood">
                        <option value="epic">Epic</option>
                        <option value="mysterious">Mysterious</option>
                        <option value="romantic">Romantic</option>
                        <option value="dark">Dark</option>
                        <option value="whimsical">Whimsical</option>
                        <option value="energetic">Energetic</option>
                        <option value="melancholic">Melancholic</option>
                        <option value="futuristic">Futuristic</option>
                        <option value="vintage">Vintage</option>
                        <option value="dreamy">Dreamy</option>
                        <option value="horror">Horror</option>
                        <option value="comedic">Comedic</option>
                        <option value="dramatic">Dramatic</option>
                        <option value="suspenseful">Suspenseful</option>
                        <option value="inspirational">Inspirational</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-characters">Number of Characters<br><small>(Jumlah Karakter)</small></label>
                    <select id="video-characters">
                        <option value="1">1 Character</option>
                        <option value="2">2 Characters</option>
                        <option value="3">3 Characters</option>
                        <option value="4">4 Characters</option>
                        <option value="group">Group (5+)</option>
                        <option value="crowd">Crowd Scene</option>
                    </select>
                </div>
            </div>
            
            <div class="section advanced-section">
                <input type="checkbox" id="video-advanced-toggle" class="advanced-toggle" style="display: none;">
                <label for="video-advanced-toggle" class="toggle-container">
                    <span class="toggle"></span>
                    <span>Advanced Options<br><small>(Opsi Lanjutan)</small></span>
                </label>
                
                <div class="advanced-content" id="video-advanced-content">
                    <div class="input-group">
                        <label for="video-camera">Camera Style<br><small>(Gaya Kamera)</small></label>
                        <select id="video-camera">
                            <option value="dynamic">Dynamic (multiple angles)</option>
                            <option value="static">Static (fixed angle)</option>
                            <option value="handheld">Handheld</option>
                            <option value="drone">Drone/Aerial</option>
                            <option value="steadycam">Steadycam/Smooth</option>
                            <option value="dolly">Dolly/Tracking</option>
                            <option value="360">360° View</option>
                        </select>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-camera-angles">Camera Angles<br><small>(Sudut Kamera)</small></label>
                        <select id="video-camera-angles" multiple>
                            <option value="close-up">Close-up</option>
                            <option value="medium shot">Medium shot</option>
                            <option value="wide shot">Wide shot</option>
                            <option value="extreme wide">Extreme wide</option>
                            <option value="aerial view">Aerial view</option>
                            <option value="dutch angle">Dutch angle</option>
                            <option value="over-the-shoulder">Over-the-shoulder</option>
                            <option value="point-of-view">Point-of-view</option>
                            <option value="low angle">Low angle</option>
                            <option value="high angle">High angle</option>
                            <option value="bird's eye">Bird's eye</option>
                            <option value="worm's eye">Worm's eye</option>
                            <option value="split">Split</option>
                            <option value="fish-eye">Fish-Eye</option>
                            <option value="macro">Macro</option>
                        </select>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-lighting">Lighting<br><small>(Pencahayaan)</small></label>
                        <select id="video-lighting">
                            <option value="natural">Natural</option>
                            <option value="studio">Studio</option>
                            <option value="neon">Neon</option>
                            <option value="volumetric">Volumetric</option>
                            <option value="low-key">Low-key</option>
                            <option value="high-key">High-key</option>
                            <option value="backlit">Backlit</option>
                            <option value="rim light">Rim light</option>
                            <option value="chiaroscuro">Chiaroscuro</option>
                            <option value="soft light">Soft light</option>
                            <option value="hard light">Hard light</option>
                            <option value="practical">Practical lights</option>
                        </select>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-color">Color Palette<br><small>(Palet Warna)</small></label>
                        <input type="text" id="video-color" placeholder="e.g., pastel blues and pinks, monochrome, warm tones">
                    </div>
                    
                    <div class="input-group">
                        <label for="video-artists">Artistic Influences<br><small>(Pengaruh Artistik)</small></label>
                        <input type="text" id="video-artists" placeholder="e.g., Studio Ghibli, Wes Anderson, Christopher Nolan">
                    </div>
                    
                    <div class="input-group">
                        <label for="video-location">Location/Setting<br><small>(Lokasi/Latar)</small></label>
                        <input type="text" id="video-location" placeholder="e.g., futuristic Tokyo, tropical beach, medieval castle">
                    </div>
                    
                    <div class="input-group">
                        <label for="video-time">Time of Day<br><small>(Waktu)</small></label>
                        <select id="video-time">
                            <option value="daytime">Daytime</option>
                            <option value="sunrise">Sunrise</option>
                            <option value="sunset">Sunset</option>
                            <option value="golden hour">Golden Hour</option>
                            <option value="blue hour">Blue Hour</option>
                            <option value="night">Night</option>
                            <option value="midnight">Midnight</option>
                            <option value="dawn">Dawn</option>
                            <option value="dusk">Dusk</option>
                        </select>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-weather">Weather<br><small>(Cuaca)</small></label>
                        <select id="video-weather">
                            <option value="clear">Clear</option>
                            <option value="cloudy">Cloudy</option>
                            <option value="rainy">Rainy</option>
                            <option value="stormy">Stormy</option>
                            <option value="foggy">Foggy</option>
                            <option value="snowy">Snowy</option>
                            <option value="windy">Windy</option>
                            <option value="hazy">Hazy</option>
                            <option value="sandstorm">Sandstorm</option>
                        </select>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-resolution">Resolution<br><small>(Resolusi)</small></label>
                        <select id="video-resolution">
                            <option value="480p">480p</option>
                            <option value="720p">720p</option>
                            <option value="1080p">1080p</option>
                            <option value="2K">2K</option>
                            <option value="4K">4K</option>
                            <option value="8K">8K</option>
                        </select>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-fps">Frame Rate<br><small>(Frame Rate)</small></label>
                        <select id="video-fps">
                            <option value="24">24 fps (cinematic)</option>
                            <option value="30">30 fps (standard)</option>
                            <option value="60">60 fps (smooth)</option>
                            <option value="120">120 fps (slow motion)</option>
                        </select>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-aspect">Aspect Ratio<br><small>(Rasio Aspek)</small></label>
                        <select id="video-aspect">
                            <option value="16:9">16:9 (widescreen)</option>
                            <option value="4:3">4:3 (standard)</option>
                            <option value="1:1">1:1 (square)</option>
                            <option value="21:9">21:9 (ultrawide)</option>
                            <option value="9:16">9:16 (vertical)</option>
                            <option value="2.35:1">2.35:1 (cinemascope)</option>
                        </select>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-transitions">Transitions<br><small>(Transisi)</small></label>
                        <select id="video-transitions" multiple>
                            <option value="cut">Cut</option>
                            <option value="fade">Fade</option>
                            <option value="dissolve">Dissolve</option>
                            <option value="wipe">Wipe</option>
                            <option value="zoom">Zoom</option>
                            <option value="slide">Slide</option>
                            <option value="morph">Morph</option>
                            <option value="l-cut">L-Cut</option>
                            <option value="j-cut">J-Cut</option>
                            <option value="match cut">Match Cut</option>
                        </select>
                    </div>
                    
                    <div class="input-group">
                        <label for="video-sound">Sound/Music<br><small>(Suara/Musik)</small></label>
                        <input type="text" id="video-sound" placeholder="e.g., epic orchestral, lo-fi beats, silence">
                    </div>
                    
                    <div class="input-group">
                        <label for="video-details">Additional Details<br><small>(Detail Tambahan)</small></label>
                        <textarea id="video-details" rows="3" placeholder="Any other specific details or requirements..."></textarea>
                    </div>
                </div>
            </div>
            
            <div class="output-group">
                <label for="video-prompt-output">Generated Prompt<br><small>(Prompt yang Dihasilkan)</small></label>
                <textarea id="video-prompt-output" rows="5" readonly></textarea>
                <button class="generate-button" id="generate-video-prompt">
                    <i class="fas fa-magic"></i> Generate Video Prompt
                </button>

                <button class="clear-button" id="clear-video-prompt">
                    <i class="fas fa-eraser"></i> Clear Prompt<br><small>(Kosongkan Prompt)</small>
                </button>
                <button class="copy-button" id="copy-video-prompt">
                    <i class="fas fa-copy"></i> Copy Prompt
                </button>
            </div>
            
            <!-- Dialog Modal -->
            <div id="video-dialog" class="video-dialog hidden">
                <div class="video-dialog-content">
                    <p id="video-dialog-message">Your message here</p>
                    <button id="video-dialog-close">OK</button>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Advanced options toggle
        const advancedToggle = document.getElementById('video-advanced-toggle');
        if (advancedToggle) {
            advancedToggle.addEventListener('change', (e) => {
                const content = document.getElementById('video-advanced-content');
                if (content) {
                    content.style.display = e.target.checked ? 'block' : 'none';
                }
            });
        }

        // Clear button
        const clearBtn = document.getElementById('clear-video-prompt');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                const output = document.getElementById('video-prompt-output');
                if (output) output.value = '';
                this.showNotification('Prompt cleared successfully!');
            });
        }

        // Generate button
        const generateBtn = document.getElementById('generate-video-prompt');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.generatePrompt());
        }

        // Copy button
        const copyBtn = document.getElementById('copy-video-prompt');
        if (copyBtn) {
            copyBtn.addEventListener('click', () => this.copyPrompt());
        }
    }

    setDefaults() {
        // Set default values for demonstration
        const defaults = {
            'video-type': 'general',
            'video-subject': 'cyberpunk cityscape',
            'video-action': 'glowing with neon lights',
            'video-style': 'cyberpunk',
            'video-mood': 'futuristic',
            'video-characters': '1',
            'video-camera': 'dynamic',
            'video-camera-angles': ['wide shot', 'aerial view'],
            'video-lighting': 'neon',
            'video-color': 'neon blues, purples, and pinks',
            'video-artists': 'Blade Runner, Akira',
            'video-location': 'futuristic Tokyo',
            'video-time': 'night',
            'video-weather': 'rainy',
            'video-resolution': '1080p',
            'video-fps': '24',
            'video-aspect': '16:9',
            'video-transitions': ['cut', 'dissolve'],
            'video-sound': 'synthwave music',
            'video-details': 'Rain falling, reflections on wet surfaces, holographic advertisements'
        };

        for (const [id, value] of Object.entries(defaults)) {
            const element = document.getElementById(id);
            if (element) {
                if (Array.isArray(value)) {
                    // For multiple select elements
                    Array.from(element.options).forEach(option => {
                        option.selected = value.includes(option.value);
                    });
                } else {
                    element.value = value;
                }
            }
        }
    }

    generatePrompt() {
        const getValue = (id) => document.getElementById(id)?.value.trim() || '';
        const getSelectValue = (id) => document.getElementById(id)?.value || '';
        const getMultipleSelectValues = (id) => {
            const select = document.getElementById(id);
            if (!select) return [];
            return Array.from(select.selectedOptions).map(option => option.value);
        };

        const videoType = getSelectValue('video-type');
        const subject = getValue('video-subject');
        const action = getValue('video-action');
        const style = getSelectValue('video-style');
        const mood = getSelectValue('video-mood');
        const characters = getSelectValue('video-characters');
        const cameraStyle = getSelectValue('video-camera');
        const cameraAngles = getMultipleSelectValues('video-camera-angles');
        const lighting = getSelectValue('video-lighting');
        const color = getValue('video-color');
        const artists = getValue('video-artists');
        const location = getValue('video-location');
        const time = getSelectValue('video-time');
        const weather = getSelectValue('video-weather');
        const resolution = getSelectValue('video-resolution');
        const fps = getSelectValue('video-fps');
        const aspect = getSelectValue('video-aspect');
        const transitions = getMultipleSelectValues('video-transitions');
        const sound = getValue('video-sound');
        const details = getValue('video-details');
        const advancedEnabled = document.getElementById('video-advanced-toggle')?.checked || false;

        if (!subject) {
            this.showNotification('Please enter a main subject for your video', false);
            return;
        }

        let prompt = `Create a ${style} style ${videoType.replace('-', ' ')} video of ${subject} ${action}. `;
        prompt += `The mood should be ${mood} with ${lighting} lighting. `;
        
        if (characters !== '1') {
            prompt += `Include ${characters}. `;
        }
        
        prompt += `Use ${cameraStyle} camera style with ${cameraAngles.join(', ')} angles. `;
        
        if (location) prompt += `Set in ${location}. `;
        if (time !== 'daytime') prompt += `Time: ${time}. `;
        if (weather !== 'clear') prompt += `Weather: ${weather}. `;
        if (color) prompt += `Color palette: ${color}. `;
        if (artists) prompt += `Artistic influences: ${artists}. `;
        if (sound) prompt += `Sound: ${sound}. `;
        
        if (advancedEnabled) {
            if (transitions.length > 0) {
                prompt += `Use ${transitions.join(', ')} transitions. `;
            }
            prompt += `Technical specifications: ${resolution} resolution, ${fps} fps, ${aspect} aspect ratio. `;
        }
        
        if (details) prompt += `Additional details: ${details}. `;

        prompt += `--v 5.2 --style 4c --q 2`;

        const output = document.getElementById('video-prompt-output');
        if (output) output.value = prompt;
    }

    copyPrompt() {
        const output = document.getElementById('video-prompt-output');
        if (!output || !output.value) {
            this.showNotification('No prompt to copy! Generate a prompt first.', false);
            return;
        }

        output.select();
        document.execCommand('copy');

        // Visual feedback
        const copyBtn = document.getElementById('copy-video-prompt');
        if (copyBtn) {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        }

        this.showNotification('Video prompt copied to clipboard!');
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
        const dialog = document.getElementById('video-dialog');
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new VideoPromptGenerator();
});
