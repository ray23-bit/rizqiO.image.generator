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
                        <option value="dialogue">Dialogue Scene</option>
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
                        <!-- Other style options... -->
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-mood">Mood/Tone<br><small>(Suasana/Nuansa)</small></label>
                    <select id="video-mood">
                        <option value="epic">Epic</option>
                        <!-- Other mood options... -->
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
                
                <!-- Character Dialogue Section -->
                <div id="character-dialogue-section" class="dialogue-section">
                    <h3>Character Dialogue<br><small>(Dialog Karakter)</small></h3>
                    
                    <!-- Character 1 -->
                    <div id="character-1-dialogue" class="character-dialogue">
                        <div class="input-group">
                            <label for="character-1-name">Character 1 Name<br><small>(Nama Karakter 1)</small></label>
                            <input type="text" id="character-1-name" placeholder="e.g., John, Sarah">
                        </div>
                        <div class="input-group">
                            <label for="character-1-desc">Character 1 Description<br><small>(Deskripsi Karakter 1)</small></label>
                            <input type="text" id="character-1-desc" placeholder="e.g., young detective, wearing trench coat">
                        </div>
                        <div class="input-group">
                            <label for="character-1-dialogue">Character 1 Dialogue<br><small>(Dialog Karakter 1)</small></label>
                            <textarea id="character-1-dialogue" rows="2" placeholder="What this character says..."></textarea>
                        </div>
                    </div>
                    
                    <!-- Character 2 (initially hidden) -->
                    <div id="character-2-dialogue" class="character-dialogue" style="display: none;">
                        <div class="input-group">
                            <label for="character-2-name">Character 2 Name<br><small>(Nama Karakter 2)</small></label>
                            <input type="text" id="character-2-name" placeholder="e.g., Mike, Lisa">
                        </div>
                        <div class="input-group">
                            <label for="character-2-desc">Character 2 Description<br><small>(Deskripsi Karakter 2)</small></label>
                            <input type="text" id="character-2-desc" placeholder="e.g., old scientist, wearing lab coat">
                        </div>
                        <div class="input-group">
                            <label for="character-2-dialogue">Character 2 Dialogue<br><small>(Dialog Karakter 2)</small></label>
                            <textarea id="character-2-dialogue" rows="2" placeholder="What this character says..."></textarea>
                        </div>
                    </div>
                    
                    <!-- Character 3 (initially hidden) -->
                    <div id="character-3-dialogue" class="character-dialogue" style="display: none;">
                        <!-- Similar structure as character 1 -->
                    </div>
                    
                    <!-- Character 4 (initially hidden) -->
                    <div id="character-4-dialogue" class="character-dialogue" style="display: none;">
                        <!-- Similar structure as character 1 -->
                    </div>
                </div>
            </div>
            
            <!-- Rest of your existing HTML (advanced options, output group, etc.) -->
            
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
        // Character count change handler
        const characterSelect = document.getElementById('video-characters');
        if (characterSelect) {
            characterSelect.addEventListener('change', (e) => {
                this.toggleCharacterDialogueFields(parseInt(e.target.value));
            });
        }

        // Existing event listeners...
    }

    toggleCharacterDialogueFields(characterCount) {
        for (let i = 1; i <= 4; i++) {
            const dialogueDiv = document.getElementById(`character-${i}-dialogue`);
            if (dialogueDiv) {
                dialogueDiv.style.display = i <= characterCount ? 'block' : 'none';
            }
        }
    }

    generatePrompt() {
        // Existing prompt generation logic...

        // Add character dialogue to prompt
        const characterCount = parseInt(getSelectValue('video-characters'));
        let characterPrompt = '';
        
        for (let i = 1; i <= characterCount; i++) {
            const name = getValue(`character-${i}-name`);
            const desc = getValue(`character-${i}-desc`);
            const dialogue = getValue(`character-${i}-dialogue`);
            
            if (name || desc || dialogue) {
                characterPrompt += `Character ${i}: `;
                if (name) characterPrompt += `${name}, `;
                if (desc) characterPrompt += `${desc}. `;
                if (dialogue) characterPrompt += `Dialogue: "${dialogue}". `;
                characterPrompt += '\n';
            }
        }
        
        if (characterPrompt) {
            prompt += `\nCharacter Details:\n${characterPrompt}`;
        }

        // Rest of prompt generation...
    }

    // Rest of your existing methods...
}
