 class VideoPromptGenerator {
    constructor() {
        this.container = document.getElementById('videoPromptGenerator');
        if (!this.container) return;
        
        this.currentLanguage = 'id'; // Default bahasa Indonesia
        this.initUI();
        this.setupEventListeners();
        this.setDefaults();
        this.translateUI(); // Terjemahkan UI berdasarkan bahasa default
    }

    initUI() {
        this.container.innerHTML = `
            <h2 class="panel-title"><i class="fas fa-film"></i> <span data-translate="generator_title">Generator Prompt Video AI</span></h2>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem;"><span data-translate="generator_subtitle">Buat prompt video berkualitas tinggi untuk generasi video AI</span></p>
            
            <div class="section">
                <div class="input-group">
                    <label for="video-subject"><span data-translate="main_subject">Subjek Utama</span><br><small><span data-translate="main_subject_desc">(Objek atau fokus utama video)</span></small></label>
                    <input type="text" id="video-subject" placeholder="contoh: kota cyberpunk, robot futuristik">
                </div>
                
                <div class="input-group">
                    <label for="video-action"><span data-translate="action_verb">Aksi/Verb</span><br><small><span data-translate="action_verb_desc">(Aktivitas atau gerakan subjek)</span></small></label>
                    <input type="text" id="video-action" placeholder="contoh: terbang, menari, bertransformasi">
                </div>
                
                <div class="input-group">
                    <label for="video-model"><span data-translate="video_model">Model Video</span><br><small><span data-translate="video_model_desc">(Format dan tujuan video)</span></small></label>
                    <select id="video-model">
                        <option value="standard" data-translate="standard_video">Video Standar</option>
                        <option value="youtube-shorts" data-translate="youtube_shorts">YouTube Shorts</option>
                        <option value="instagram-reels" data-translate="instagram_reels">Instagram Reels</option>
                        <option value="tiktok" data-translate="tiktok">TikTok</option>
                        <option value="advertisement" data-translate="advertisement">Iklan</option>
                        <option value="tutorial" data-translate="tutorial">Tutorial</option>
                        <option value="film-pendek" data-translate="short_film">Film Pendek</option>
                        <option value="dokumenter" data-translate="documentary">Dokumenter</option>
                        <option value="video-klip" data-translate="music_video">Video Klip Musik</option>
                        <option value="video-game" data-translate="game_content">Konten Video Game</option>
                        <option value="live-action" data-translate="live_action">Live Action</option>
                        <option value="animasi-3D" data-translate="3d_animation">Animasi 3D</option>
                        <option value="animasi-2D" data-translate="2d_animation">Animasi 2D</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-style"><span data-translate="visual_style">Gaya Visual</span><br><small><span data-translate="visual_style_desc">(Estetika dan tampilan visual)</span></small></label>
                    <select id="video-style">
                        <option value="sinematik" data-translate="cinematic">Sinematik</option>
                        <option value="anime" data-translate="anime">Anime</option>
                        <option value="cyberpunk" data-translate="cyberpunk">Cyberpunk</option>
                        <option value="steampunk" data-translate="steampunk">Steampunk</option>
                        <option value="realistis" data-translate="realistic">Realistis</option>
                        <option value="lukisan" data-translate="painting-like">Seperti Lukisan</option>
                        <option value="cat-air" data-translate="watercolor">Cat Air</option>
                        <option value="pixel-art" data-translate="pixel_art">Pixel Art</option>
                        <option value="claymation" data-translate="claymation">Claymation</option>
                        <option value="surreal" data-translate="surreal">Surealis</option>
                        <option value="minimalis" data-translate="minimalist">Minimalis</option>
                        <option value="retro-futuristik" data-translate="retro_futuristic">Retro Futuristik</option>
                        <option value="grunge" data-translate="grunge">Grunge</option>
                        <option value="noir" data-translate="noir">Noir</option>
                        <option value="fantasi" data-translate="fantasy">Fantasi</option>
                        <option value="sci-fi" data-translate="sci_fi">Sci-Fi</option>
                        <option value="komik" data-translate="comic_style">Gaya Komik</option>
                        <option value="low-poly" data-translate="low_poly">Low Poly</option>
                        <option value="uikit" data-translate="ui_kit">UI Kit/Interaktif</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-mood"><span data-translate="mood_tone">Suasana/Nada</span><br><small><span data-translate="mood_tone_desc">(Emosi dan atmosfer video)</span></small></label>
                    <select id="video-mood">
                        <option value="epik" data-translate="epic">Epik</option>
                        <option value="misterius" data-translate="mysterious">Misterius</option>
                        <option value="romantis" data-translate="romantic">Romantis</option>
                        <option value="gelap" data-translate="dark">Gelap</option>
                        <option value="lucu" data-translate="funny">Lucu</option>
                        <option value="energik" data-translate="energetic">Energik</option>
                        <option value="melankolis" data-translate="melancholic">Melankolis</option>
                        <option value="futuristik" data-translate="futuristic">Futuristik</option>
                        <option value="vintage" data-translate="vintage">Vintage</option>
                        <option value="mimpi" data-translate="dreamy">Seperti Mimpi</option>
                        <option value="horor" data-translate="horror">Horor</option>
                        <option value="komedi" data-translate="comedy">Komedi</option>
                        <option value="dramatis" data-translate="dramatic">Dramatis</option>
                        <option value="heroik" data-translate="heroic">Heroik</option>
                        <option value="tenang" data-translate="calm">Tenang</option>
                        <option value="tegang" data-translate="tense">Tegang</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-camera"><span data-translate="camera_angle">Sudut Kamera</span><br><small><span data-translate="camera_angle_desc">(Komposisi dan perspektif kamera)</span></small></label>
                    <select id="video-camera">
                        <option value="close-up" data-translate="close_up">Close-up (Dekat)</option>
                        <option value="extreme-close-up" data-translate="extreme_close_up">Extreme Close-up (Sangat Dekat)</option>
                        <option value="medium-shot" data-translate="medium_shot">Medium shot (Sedang)</option>
                        <option value="american-shot" data-translate="american_shot">American shot (Pinggang ke atas)</option>
                        <option value="full-shot" data-translate="full_shot">Full shot (Seluruh tubuh)</option>
                        <option value="long-shot" data-translate="long_shot">Long shot (Jarak jauh)</option>
                        <option value="extreme-long-shot" data-translate="extreme_long_shot">Extreme Long shot (Sangat jauh)</option>
                        <option value="wide-shot" data-translate="wide_shot">Wide shot (Lebar)</option>
                        <option value="aerial-view" data-translate="aerial_view">Aerial view (Udara)</option>
                        <option value="drone-shot" data-translate="drone_shot">Drone shot (Drone)</option>
                        <option value="dutch-angle" data-translate="dutch_angle">Dutch angle (Miring)</option>
                        <option value="over-the-shoulder" data-translate="over_the_shoulder">Over-the-shoulder (Dari belakang bahu)</option>
                        <option value="point-of-view" data-translate="point_of_view">Point-of-view (Sudut pandang orang pertama)</option>
                        <option value="tracking-shot" data-translate="tracking_shot">Tracking shot (Mengikuti objek)</option>
                        <option value="dolly-shot" data-translate="dolly_shot">Dolly shot (Gerakan maju/mundur)</option>
                        <option value="crane-shot" data-translate="crane_shot">Crane shot (Dari atas)</option>
                        <option value="steadycam-shot" data-translate="steadycam_shot">Steadycam shot (Stabil)</option>
                        <option value="handheld-shot" data-translate="handheld_shot">Handheld shot (Genggam)</option>
                        <option value="split" data-translate="split">Split (Terbagi)</option>
                        <option value="fish-eye" data-translate="fish_eye">Fish-Eye (Mata ikan)</option>
                        <option value="macro" data-translate="macro">Macro (Makro)</option>
                        <option value="tilt-shot" data-translate="tilt_shot">Tilt shot (Miring vertikal)</option>
                        <option value="pan-shot" data-translate="pan_shot">Pan shot (Geser horizontal)</option>
                        <option value="zoom-shot" data-translate="zoom_shot">Zoom shot (Perbesaran)</option>
                        <option value="360-degree" data-translate="360_degree">360-degree (360 derajat)</option>
                        <option value="top-down" data-translate="top_down">Top-down (Atas ke bawah)</option>
                        <option value="low-angle" data-translate="low_angle">Low angle (Dari bawah)</option>
                        <option value="high-angle" data-translate="high_angle">High angle (Dari atas)</option>
                        <option value="eye-level" data-translate="eye_level">Eye level (Sejajar mata)</option>
                        <option value="bird-eye" data-translate="bird_eye">Bird's-eye view (Pandangan burung)</option>
                        <option value="worm-eye" data-translate="worm_eye">Worm's-eye view (Pandangan cacing)</option>
                        <option value="shoulder-level" data-translate="shoulder_level">Shoulder level (Tinggi bahu)</option>
                        <option value="hip-level" data-translate="hip_level">Hip level (Tinggi pinggang)</option>
                        <option value="knee-level" data-translate="knee_level">Knee level (Tinggi lutut)</option>
                        <option value="ground-level" data-translate="ground_level">Ground level (Permukaan tanah)</option>
                        <option value="overhead" data-translate="overhead">Overhead (Tepat di atas)</option>
                        <option value="canted" data-translate="canted">Canted (Miring dramatis)</option>
                        <option value="subjective" data-translate="subjective">Subjective (Subjektif)</option>
                        <option value="objective" data-translate="objective">Objective (Objektif)</option>
                        <option value="two-shot" data-translate="two_shot">Two-shot (Dua subjek)</option>
                        <option value="three-shot" data-translate="three_shot">Three-shot (Tiga subjek)</option>
                        <option value="group-shot" data-translate="group_shot">Group-shot (Kelompok subjek)</option>
                        <option value="insert-shot" data-translate="insert_shot">Insert shot (Sisipan detail)</option>
                        <option value="establishing-shot" data-translate="establishing_shot">Establishing shot (Pengenalan lokasi)</option>
                        <option value="master-shot" data-translate="master_shot">Master shot (Adegan lengkap)</option>
                        <option value="follow-shot" data-translate="follow_shot">Follow shot (Mengikuti subjek)</option>
                        <option value="walk-and-talk" data-translate="walk_and_talk">Walk-and-talk (Berjalan sambil bicara)</option>
                        <option value="arc-shot" data-translate="arc_shot">Arc shot (Gerakan melingkar)</option>
                        <option value="spiral-shot" data-translate="spiral_shot">Spiral shot (Gerakan spiral)</option>
                        <option value="vertigo-effect" data-translate="vertigo_effect">Vertigo effect (Efek vertigo)</option>
                        <option value="bullet-time" data-translate="bullet_time">Bullet time (Waktu melambat)</option>
                        <option value="time-lapse" data-translate="time_lapse">Time-lapse (Percepatan waktu)</option>
                        <option value="slow-motion" data-translate="slow_motion">Slow motion (Gerakan lambat)</option>
                        <option value="snorricam" data-translate="snorricam">Snorricam (Kamera di tubuh)</option>
                        <option value="locked-down" data-translate="locked_down">Locked-down (Kamera diam)</option>
                        <option value="freehand" data-translate="freehand">Freehand (Tangan bebas)</option>
                        <option value="jib-shot" data-translate="jib_shot">Jib shot (Lengan kamera)</option>
                        <option value="glidecam-shot" data-translate="glidecam_shot">Glidecam shot (Stabil genggam)</option>
                        <option value="gimbal-shot" data-translate="gimbal_shot">Gimbal shot (Stabil elektronik)</option>
                        <option value="underwater" data-translate="underwater">Underwater (Bawah air)</option>
                        <option value="reflection" data-translate="reflection">Reflection (Pantulan)</option>
                        <option value="through-object" data-translate="through_object">Through object (Melalui objek)</option>
                        <option value="tunnel" data-translate="tunnel">Tunnel (Lorong)</option>
                        <option value="keyhole" data-translate="keyhole">Keyhole (Lubang kunci)</option>
                        <option value="peephole" data-translate="peephole">Peephole (Lubang intip)</option>
                        <option value="mirror" data-translate="mirror">Mirror (Cermin)</option>
                        <option value="split-screen" data-translate="split_screen">Split-screen (Layar terbagi)</option>
                        <option value="multi-angle" data-translate="multi_angle">Multi-angle (Banyak sudut)</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-lighting"><span data-translate="lighting">Pencahayaan</span><br><small><span data-translate="lighting_desc">(Teknik dan sumber cahaya)</span></small></label>
                    <select id="video-lighting">
                        <option value="natural" data-translate="natural_light">Natural (Alami)</option>
                        <option value="studio" data-translate="studio_light">Studio</option>
                        <option value="neon" data-translate="neon_light">Neon</option>
                        <option value="volumetric" data-translate="volumetric_light">Volumetrik</option>
                        <option value="low-key" data-translate="low_key">Low-key (Rendah)</option>
                        <option value="high-key" data-translate="high_key">High-key (Tinggi)</option>
                        <option value="backlit" data-translate="backlit">Backlit (Cahaya belakang)</option>
                        <option value="rim-light" data-translate="rim_light">Rim light (Cahaya tepi)</option>
                        <option value="soft-light" data-translate="soft_light">Soft light (Lembut)</option>
                        <option value="hard-light" data-translate="hard_light">Hard light (Keras)</option>
                        <option value="chiaroscuro" data-translate="chiaroscuro">Chiaroscuro (Kontras tinggi)</option>
                        <option value="ambient" data-translate="ambient">Ambient (Sekitar)</option>
                        <option value="practical" data-translate="practical">Practical (Praktis)</option>
                        <option value="motivated" data-translate="motivated">Motivated (Alami tapi diatur)</option>
                        <option value="silhouette" data-translate="silhouette">Silhouette (Siluet)</option>
                        <option value="godrays" data-translate="godrays">Godrays (Sinar ilahi)</option>
                        <option value="bioluminescent" data-translate="bioluminescent">Bioluminescent (Bercahaya alami)</option>
                        <option value="candlelight" data-translate="candlelight">Candlelight (Cahaya lilin)</option>
                        <option value="firelight" data-translate="firelight">Firelight (Cahaya api)</option>
                        <option value="moonlight" data-translate="moonlight">Moonlight (Cahaya bulan)</option>
                        <option value="sunlight" data-translate="sunlight">Sunlight (Cahaya matahari)</option>
                        <option value="starlight" data-translate="starlight">Starlight (Cahaya bintang)</option>
                        <option value="streetlight" data-translate="streetlight">Streetlight (Cahaya jalanan)</option>
                        <option value="fluorescent" data-translate="fluorescent">Fluorescent (Cahaya neon)</option>
                        <option value="led" data-translate="led">LED</option>
                        <option value="halogen" data-translate="halogen">Halogen</option>
                        <option value="incandescent" data-translate="incandescent">Incandescent (Pijar)</option>
                        <option value="blacklight" data-translate="blacklight">Blacklight (Ultraviolet)</option>
                        <option value="spotlight" data-translate="spotlight">Spotlight (Sorot)</option>
                        <option value="floodlight" data-translate="floodlight">Floodlight (Banjir cahaya)</option>
                        <option value="fresnel" data-translate="fresnel">Fresnel</option>
                        <option value="parcan" data-translate="parcan">Parcan</option>
                        <option value="ellipsoidal" data-translate="ellipsoidal">Ellipsoidal</option>
                        <option value="followspot" data-translate="followspot">Followspot (Sorot mengikuti)</option>
                        <option value="gobo" data-translate="gobo">Gobo (Pola cahaya)</option>
                        <option value="strobe" data-translate="strobe">Strobe (Kilat)</option>
                        <option value="flicker" data-translate="flicker">Flicker (Kedap-kedip)</option>
                        <option value="pulse" data-translate="pulse">Pulse (Denyut)</option>
                        <option value="gradient" data-translate="gradient">Gradient (Gradasi)</option>
                        <option value="bounce" data-translate="bounce">Bounce (Pantulan cahaya)</option>
                        <option value="diffused" data-translate="diffused">Diffused (Tersebar)</option>
                        <option value="dappled" data-translate="dappled">Dappled (Bercahaya tidak merata)</option>
                        <option value="shaft" data-translate="shaft">Shaft (Berkas cahaya)</option>
                        <option value="crepuscular" data-translate="crepuscular">Crepuscular (Cahaya senja)</option>
                        <option value="lens-flare" data-translate="lens_flare">Lens flare (Silau lensa)</option>
                        <option value="anamorphic" data-translate="anamorphic">Anamorphic (Cahaya anamorfik)</option>
                        <option value="barn-doors" data-translate="barn_doors">Barn doors (Pintu cahaya)</option>
                        <option value="cookie" data-translate="cookie">Cookie (Pola bayangan)</option>
                        <option value="scrim" data-translate="scrim">Scrim (Diffuser cahaya)</option>
                        <option value="snoot" data-translate="snoot">Snoot (Sorot sempit)</option>
                        <option value="flags" data-translate="flags">Flags (Penahan cahaya)</option>
                        <option value="negative-fill" data-translate="negative_fill">Negative fill (Pengurang cahaya)</option>
                        <option value="three-point" data-translate="three_point">Three-point lighting (3 titik)</option>
                        <option value="four-point" data-translate="four_point">Four-point lighting (4 titik)</option>
                        <option value="high-contrast" data-translate="high_contrast">High-contrast (Kontras tinggi)</option>
                        <option value="low-contrast" data-translate="low_contrast">Low-contrast (Kontras rendah)</option>
                        <option value="dramatic" data-translate="dramatic_light">Dramatic (Dramatis)</option>
                        <option value="flat" data-translate="flat_light">Flat (Datar)</option>
                        <option value="glamour" data-translate="glamour_light">Glamour (Glamor)</option>
                        <option value="moody" data-translate="moody_light">Moody (Suasana)</option>
                        <option value="noir-style" data-translate="noir_style">Noir-style (Gaya noir)</option>
                        <option value="expressionist" data-translate="expressionist">Expressionist (Ekspresionis)</option>
                        <option value="surrealist" data-translate="surrealist">Surrealist (Surealis)</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-color"><span data-translate="color_palette">Palet Warna</span><br><small><span data-translate="color_palette_desc">(Kombinasi warna dominan)</span></small></label>
                    <input type="text" id="video-color" placeholder="contoh: biru dan merah muda pastel, monokrom">
                </div>
                
                <div class="input-group">
                    <label for="video-artists"><span data-translate="artistic_influence">Pengaruh Artistik</span><br><small><span data-translate="artistic_influence_desc">(Inspirasi gaya artistik)</span></small></label>
                    <input type="text" id="video-artists" placeholder="contoh: Studio Ghibli, Wes Anderson">
                </div>
                
                <div class="input-group">
                    <label for="video-resolution"><span data-translate="resolution">Resolusi</span><br><small><span data-translate="resolution_desc">(Kualitas gambar video)</span></small></label>
                    <select id="video-resolution">
                        <option value="480p" data-translate="480p">480p (SD)</option>
                        <option value="720p" data-translate="720p">720p (HD)</option>
                        <option value="1080p" data-translate="1080p">1080p (Full HD)</option>
                        <option value="2K" data-translate="2k">2K</option>
                        <option value="4K" data-translate="4k">4K (Ultra HD)</option>
                        <option value="8K" data-translate="8k">8K</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-fps"><span data-translate="frame_rate">Frame Rate</span><br><small><span data-translate="frame_rate_desc">(Kelancaran gerakan)</span></small></label>
                    <select id="video-fps">
                        <option value="24" data-translate="24fps">24 fps (sinematik)</option>
                        <option value="25" data-translate="25fps">25 fps (PAL)</option>
                        <option value="30" data-translate="30fps">30 fps (standar)</option>
                        <option value="48" data-translate="48fps">48 fps (HFR)</option>
                        <option value="50" data-translate="50fps">50 fps (PAL HFR)</option>
                        <option value="60" data-translate="60fps">60 fps (halus)</option>
                        <option value="120" data-translate="120fps">120 fps (sangat halus)</option>
                        <option value="240" data-translate="240fps">240 fps (slow motion)</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-aspect"><span data-translate="aspect_ratio">Rasio Aspek</span><br><small><span data-translate="aspect_ratio_desc">(Proporsi dimensi video)</span></small></label>
                    <select id="video-aspect">
                        <option value="16:9" data-translate="16_9">16:9 (widescreen)</option>
                        <option value="9:16" data-translate="9_16">9:16 (vertikal)</option>
                        <option value="4:3" data-translate="4_3">4:3 (standar)</option>
                        <option value="1:1" data-translate="1_1">1:1 (persegi)</option>
                        <option value="21:9" data-translate="21_9">21:9 (ultrawide)</option>
                        <option value="2.35:1" data-translate="2_35_1">2.35:1 (CinemaScope)</option>
                        <option value="1.85:1" data-translate="1_85_1">1.85:1 (standar film)</option>
                        <option value="3:2" data-translate="3_2">3:2 (foto klasik)</option>
                        <option value="5:4" data-translate="5_4">5:4 (beberapa monitor)</option>
                    </select>
                </div>
                
                <div class="input-group">
                    <label for="video-details"><span data-translate="additional_details">Detail Tambahan</span><br><small><span data-translate="additional_details_desc">(Spesifikasi tambahan untuk video)</span></small></label>
                    <textarea id="video-details" rows="3" placeholder="Detail atau persyaratan spesifik lainnya..."></textarea>
                </div>
                
                <div class="input-group">
                    <label for="video-characters"><span data-translate="character_count">Jumlah Karakter</span><br><small><span data-translate="character_count_desc">(Banyaknya karakter dalam video)</span></small></label>
                    <select id="video-characters">
                        <option value="0" data-translate="no_characters">Tidak Ada Karakter</option>
                        <option value="1" data-translate="one_character">1 Karakter</option>
                        <option value="2" data-translate="two_characters">2 Karakter</option>
                        <option value="3" data-translate="three_characters">3 Karakter</option>
                        <option value="4" data-translate="four_characters">4 Karakter</option>
                        <option value="group" data-translate="group_characters">Kelompok (5+ Karakter)</option>
                        <option value="crowd" data-translate="crowd">Kerumunan</option>
                    </select>
                </div>
                
                <div class="input-group character-dialogue" id="character1-group" style="display:none;">
                    <label for="video-character1"><span data-translate="character_1">Karakter 1</span><br><small><span data-translate="character_1_desc">(Deskripsi dan dialog karakter pertama)</span></small></label>
                    <input type="text" id="video-character1-desc" placeholder="Deskripsi karakter (contoh: Pria paruh baya dengan janggut abu-abu)">
                    <textarea id="video-character1-dialog" rows="2" placeholder="Dialog karakter 1..."></textarea>
                </div>
                
                <div class="input-group character-dialogue" id="character2-group" style="display:none;">
                    <label for="video-character2"><span data-translate="character_2">Karakter 2</span><br><small><span data-translate="character_2_desc">(Deskripsi dan dialog karakter kedua)</span></small></label>
                    <input type="text" id="video-character2-desc" placeholder="Deskripsi karakter (contoh: Wanita muda dengan rambir biru)">
                    <textarea id="video-character2-dialog" rows="2" placeholder="Dialog karakter 2..."></textarea>
                </div>
                
                <div class="input-group character-dialogue" id="character3-group" style="display:none;">
                    <label for="video-character3"><span data-translate="character_3">Karakter 3</span><br><small><span data-translate="character_3_desc">(Deskripsi dan dialog karakter ketiga)</span></small></label>
                    <input type="text" id="video-character3-desc" placeholder="Deskripsi karakter (contoh: Anak kecil dengan mainan robot)">
                    <textarea id="video-character3-dialog" rows="2" placeholder="Dialog karakter 3..."></textarea>
                </div>
                
                <div class="input-group character-dialogue" id="character4-group" style="display:none;">
                    <label for="video-character4"><span data-translate="character_4">Karakter 4</span><br><small><span data-translate="character_4_desc">(Deskripsi dan dialog karakter keempat)</span></small></label>
                    <input type="text" id="video-character4-desc" placeholder="Deskripsi karakter (contoh: Robot humanoid dengan suara mekanis)">
                    <textarea id="video-character4-dialog" rows="2" placeholder="Dialog karakter 4..."></textarea>
                </div>
                
                <div class="input-group">
                    <label for="video-sound"><span data-translate="sound_effects">Efek Suara dan Musik</span><br><small><span data-translate="sound_effects_desc">(Atmosfer audio untuk video)</span></small></label>
                    <textarea id="video-sound" rows="2" placeholder="Deskripsi efek suara atau musik yang diinginkan..."></textarea>
                </div>
            </div>
            
            <div class="output-group">
                <label for="video-prompt-output"><span data-translate="generated_prompt">Prompt yang Dihasilkan</span><br><small><span data-translate="generated_prompt_desc">(Hasil generator prompt video)</span></small></label>
                <textarea id="video-prompt-output" rows="5" readonly></textarea>
                <button class="generate-button" id="generate-video-prompt">
                    <i class="fas fa-magic"></i> <span data-translate="generate_prompt">Buat Prompt Video</span>
                </button>

                <button class="clear-button" id="clear-video-prompt">
                    <i class="fas fa-eraser"></i> <span data-translate="clear_prompt">Hapus Prompt</span>
                </button>
                <button class="copy-button" id="copy-video-prompt">
                    <i class="fas fa-copy"></i> <span data-translate="copy_prompt">Salin Prompt</span>
                </button>
                
                <div class="language-options" style="margin-top: 1rem;">
                    <label><span data-translate="select_language">Pilih Bahasa:</span></label>
                    <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                        <button class="language-button active" data-lang="id">Indonesia</button>
                        <button class="language-button" data-lang="en">English</button>
                    </div>
                </div>
                
                <button class="reset-button" id="reset-video-prompt" style="margin-top: 0.5rem;">
                    <i class="fas fa-sync-alt"></i> <span data-translate="reset_form">Reset Form</span>
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
                this.showNotification(
                    this.currentLanguage === 'id' 
                        ? 'Prompt berhasil dihapus!' 
                        : 'Prompt cleared successfully!'
                );
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
                this.currentLanguage = button.dataset.lang;
                langButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                this.translateUI();
            });
        });

        // Reset button handler
        const resetBtn = document.getElementById('reset-video-prompt');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.setDefaults();
                this.showNotification(
                    this.currentLanguage === 'id' 
                        ? 'Form telah direset ke nilai default!' 
                        : 'Form has been reset to default values!'
                );
            });
        }
    }

    translateUI() {
        const translations = {
            'id': {
                'generator_title': 'Generator Prompt Video AI',
                'generator_subtitle': 'Buat prompt video berkualitas tinggi untuk generasi video AI',
                'main_subject': 'Subjek Utama',
                'main_subject_desc': '(Objek atau fokus utama video)',
                'action_verb': 'Aksi/Verb',
                'action_verb_desc': '(Aktivitas atau gerakan subjek)',
                'video_model': 'Model Video',
                'video_model_desc': '(Format dan tujuan video)',
                'visual_style': 'Gaya Visual',
                'visual_style_desc': '(Estetika dan tampilan visual)',
                'mood_tone': 'Suasana/Nada',
                'mood_tone_desc': '(Emosi dan atmosfer video)',
                'camera_angle': 'Sudut Kamera',
                'camera_angle_desc': '(Komposisi dan perspektif kamera)',
                'lighting': 'Pencahayaan',
                'lighting_desc': '(Teknik dan sumber cahaya)',
                'color_palette': 'Palet Warna',
                'color_palette_desc': '(Kombinasi warna dominan)',
                'artistic_influence': 'Pengaruh Artistik',
                'artistic_influence_desc': '(Inspirasi gaya artistik)',
                'resolution': 'Resolusi',
                'resolution_desc': '(Kualitas gambar video)',
                'frame_rate': 'Frame Rate',
                'frame_rate_desc': '(Kelancaran gerakan)',
                'aspect_ratio': 'Rasio Aspek',
                'aspect_ratio_desc': '(Proporsi dimensi video)',
                'additional_details': 'Detail Tambahan',
                'additional_details_desc': '(Spesifikasi tambahan untuk video)',
                'character_count': 'Jumlah Karakter',
                'character_count_desc': '(Banyaknya karakter dalam video)',
                'sound_effects': 'Efek Suara dan Musik',
                'sound_effects_desc': '(Atmosfer audio untuk video)',
                'character_1': 'Karakter 1',
                'character_1_desc': '(Deskripsi dan dialog karakter pertama)',
                'character_2': 'Karakter 2',
                'character_2_desc': '(Deskripsi dan dialog karakter kedua)',
                'character_3': 'Karakter 3',
                'character_3_desc': '(Deskripsi dan dialog karakter ketiga)',
                'character_4': 'Karakter 4',
                'character_4_desc': '(Deskripsi dan dialog karakter keempat)',
                'generate_prompt': 'Buat Prompt Video',
                'clear_prompt': 'Hapus Prompt',
                'copy_prompt': 'Salin Prompt',
                'select_language': 'Pilih Bahasa:',
                'reset_form': 'Reset Form',
                'generated_prompt': 'Prompt yang Dihasilkan',
                'generated_prompt_desc': '(Hasil generator prompt video)',
                // Option translations
                'standard_video': 'Video Standar',
                'youtube_shorts': 'YouTube Shorts',
                'instagram_reels': 'Instagram Reels',
                'tiktok': 'TikTok',
                'advertisement': 'Iklan',
                'tutorial': 'Tutorial',
                'short_film': 'Film Pendek',
                'documentary': 'Dokumenter',
                'music_video': 'Video Klip Musik',
                'game_content': 'Konten Video Game',
                'live_action': 'Live Action',
                '3d_animation': 'Animasi 3D',
                '2d_animation': 'Animasi 2D',
                'cinematic': 'Sinematik',
                'anime': 'Anime',
                'cyberpunk': 'Cyberpunk',
                'steampunk': 'Steampunk',
                'realistic': 'Realistis',
                'painting-like': 'Seperti Lukisan',
                'watercolor': 'Cat Air',
                'pixel_art': 'Pixel Art',
                'claymation': 'Claymation',
                'surreal': 'Surealis',
                'minimalist': 'Minimalis',
                'retro_futuristic': 'Retro Futuristik',
                'grunge': 'Grunge',
                'noir': 'Noir',
                'fantasy': 'Fantasi',
                'sci_fi': 'Sci-Fi',
                'comic_style': 'Gaya Komik',
                'low_poly': 'Low Poly',
                'ui_kit': 'UI Kit/Interaktif',
                'epic': 'Epik',
                'mysterious': 'Misterius',
                'romantic': 'Romantis',
                'dark': 'Gelap',
                'funny': 'Lucu',
                'energetic': 'Energik',
                'melancholic': 'Melankolis',
                'futuristic': 'Futuristik',
                'vintage': 'Vintage',
                'dreamy': 'Seperti Mimpi',
                'horror': 'Horor',
                'comedy': 'Komedi',
                'dramatic': 'Dramatis',
                'heroic': 'Heroik',
                'calm': 'Tenang',
                'tense': 'Tegang',
                'close_up': 'Close-up (Dekat)',
                'extreme_close_up': 'Extreme Close-up (Sangat Dekat)',
                'medium_shot': 'Medium shot (Sedang)',
                'american_shot': 'American shot (Pinggang ke atas)',
                'full_shot': 'Full shot (Seluruh tubuh)',
                'long_shot': 'Long shot (Jarak jauh)',
                'extreme_long_shot': 'Extreme Long shot (Sangat jauh)',
                'wide_shot': 'Wide shot (Lebar)',
                'aerial_view': 'Aerial view (Udara)',
                'drone_shot': 'Drone shot (Drone)',
                'dutch_angle': 'Dutch angle (Miring)',
                'over_the_shoulder': 'Over-the-shoulder (Dari belakang bahu)',
                'point_of_view': 'Point-of-view (Sudut pandang orang pertama)',
                'tracking_shot': 'Tracking shot (Mengikuti objek)',
                'dolly_shot': 'Dolly shot (Gerakan maju/mundur)',
                'crane_shot': 'Crane shot (Dari atas)',
                'steadycam_shot': 'Steadycam shot (Stabil)',
                'handheld_shot': 'Handheld shot (Genggam)',
                'split': 'Split (Terbagi)',
                'fish_eye': 'Fish-Eye (Mata ikan)',
                'macro': 'Macro (Makro)',
                'tilt_shot': 'Tilt shot (Miring vertikal)',
                'pan_shot': 'Pan shot (Geser horizontal)',
                'zoom_shot': 'Zoom shot (Perbesaran)',
                '360_degree': '360-degree (360 derajat)',
                'top_down': 'Top-down (Atas ke bawah)',
                'low_angle': 'Low angle (Dari bawah)',
                'high_angle': 'High angle (Dari atas)',
                'eye_level': 'Eye level (Sejajar mata)',
                'bird_eye': "Bird's-eye view (Pandangan burung)",
                'worm_eye': "Worm's-eye view (Pandangan cacing)",
                'shoulder_level': "Shoulder level (Tinggi bahu)",
                'hip_level': "Hip level (Tinggi pinggang)",
                'knee_level': "Knee level (Tinggi lutut)",
                'ground_level': "Ground level (Permukaan tanah)",
                'overhead': "Overhead (Tepat di atas)",
                'canted': "Canted (Miring dramatis)",
                'subjective': "Subjective (Subjektif)",
                'objective': "Objective (Objektif)",
                'two_shot': "Two-shot (Dua subjek)",
                'three_shot': "Three-shot (Tiga subjek)",
                'group_shot': "Group-shot (Kelompok subjek)",
                'insert_shot': "Insert shot (Sisipan detail)",
                'establishing_shot': "Establishing shot (Pengenalan lokasi)",
                'master_shot': "Master shot (Adegan lengkap)",
                'follow_shot': "Follow shot (Mengikuti subjek)",
                'walk_and_talk': "Walk-and-talk (Berjalan sambil bicara)",
                'arc_shot': "Arc shot (Gerakan melingkar)",
                'spiral_shot': "Spiral shot (Gerakan spiral)",
                'vertigo_effect': "Vertigo effect (Efek vertigo)",
                'bullet_time': "Bullet time (Waktu melambat)",
                'time_lapse': "Time-lapse (Percepatan waktu)",
                'slow_motion': "Slow motion (Gerakan lambat)",
                'snorricam': "Snorricam (Kamera di tubuh)",
                'locked_down': "Locked-down (Kamera diam)",
                'freehand': "Freehand (Tangan bebas)",
                'jib_shot': "Jib shot (Lengan kamera)",
                'glidecam_shot': "Glidecam shot (Stabil genggam)",
                'gimbal_shot': "Gimbal shot (Stabil elektronik)",
                'underwater': "Underwater (Bawah air)",
                'reflection': "Reflection (Pantulan)",
                'through_object': "Through object (Melalui objek)",
                'tunnel': "Tunnel (Lorong)",
                'keyhole': "Keyhole (Lubang kunci)",
                'peephole': "Peephole (Lubang intip)",
                'mirror': "Mirror (Cermin)",
                'split_screen': "Split-screen (Layar terbagi)",
                'multi_angle': "Multi-angle (Banyak sudut)",
                'natural_light': 'Natural (Alami)',
                'studio_light': 'Studio',
                'neon_light': 'Neon',
                'volumetric_light': 'Volumetrik',
                'low_key': 'Low-key (Rendah)',
                'high_key': 'High-key (Tinggi)',
                'backlit': 'Backlit (Cahaya belakang)',
                'rim_light': 'Rim light (Cahaya tepi)',
                'soft_light': 'Soft light (Lembut)',
                'hard_light': 'Hard light (Keras)',
                'chiaroscuro': 'Chiaroscuro (Kontras tinggi)',
                'ambient': 'Ambient (Sekitar)',
                'practical': 'Practical (Praktis)',
                'motivated': 'Motivated (Alami tapi diatur)',
                'silhouette': 'Silhouette (Siluet)',
                'godrays': 'Godrays (Sinar ilahi)',
                'bioluminescent': 'Bioluminescent (Bercahaya alami)',
                'candlelight': 'Candlelight (Cahaya lilin)',
                'firelight': 'Firelight (Cahaya api)',
                'moonlight': 'Moonlight (Cahaya bulan)',
                'sunlight': 'Sunlight (Cahaya matahari)',
                'starlight': 'Starlight (Cahaya bintang)',
                'streetlight': 'Streetlight (Cahaya jalanan)',
                'fluorescent': 'Fluorescent (Cahaya neon)',
                'led': 'LED',
                'halogen': 'Halogen',
                'incandescent': 'Incandescent (Pijar)',
                'blacklight': 'Blacklight (Ultraviolet)',
                'spotlight': 'Spotlight (Sorot)',
                'floodlight': 'Floodlight (Banjir cahaya)',
                'fresnel': 'Fresnel',
                'parcan': 'Parcan',
                'ellipsoidal': 'Ellipsoidal',
                'followspot': 'Followspot (Sorot mengikuti)',
                'gobo': 'Gobo (Pola cahaya)',
                'strobe': 'Strobe (Kilat)',
                'flicker': 'Flicker (Kedap-kedip)',
                'pulse': 'Pulse (Denyut)',
                'gradient': 'Gradient (Gradasi)',
                'bounce': 'Bounce (Pantulan cahaya)',
                'diffused': 'Diffused (Tersebar)',
                'dappled': 'Dappled (Bercahaya tidak merata)',
                'shaft': 'Shaft (Berkas cahaya)',
                'crepuscular': 'Crepuscular (Cahaya senja)',
                'lens_flare': 'Lens flare (Silau lensa)',
                'anamorphic': 'Anamorphic (Cahaya anamorfik)',
                'barn_doors': 'Barn doors (Pintu cahaya)',
                'cookie': 'Cookie (Pola bayangan)',
                'scrim': 'Scrim (Diffuser cahaya)',
                'snoot': 'Snoot (Sorot sempit)',
                'flags': 'Flags (Penahan cahaya)',
                'negative_fill': 'Negative fill (Pengurang cahaya)',
                'three_point': 'Three-point lighting (3 titik)',
                'four_point': 'Four-point lighting (4 titik)',
                'high_contrast': 'High-contrast (Kontras tinggi)',
                'low_contrast': 'Low-contrast (Kontras rendah)',
                'dramatic_light': 'Dramatic (Dramatis)',
                'flat_light': 'Flat (Datar)',
                'glamour_light': 'Glamour (Glamor)',
                'moody_light': 'Moody (Suasana)',
                'noir_style': 'Noir-style (Gaya noir)',
                'expressionist': 'Expressionist (Ekspresionis)',
                'surrealist': 'Surrealist (Surealis)',
                '480p': '480p (SD)',
                '720p': '720p (HD)',
                '1080p': '1080p (Full HD)',
                '2k': '2K',
                '4k': '4K (Ultra HD)',
                '8k': '8K',
                '24fps': '24 fps (sinematik)',
                '25fps': '25 fps (PAL)',
                '30fps': '30 fps (standar)',
                '48fps': '48 fps (HFR)',
                '50fps': '50 fps (PAL HFR)',
                '60fps': '60 fps (halus)',
                '120fps': '120 fps (sangat halus)',
                '240fps': '240 fps (slow motion)',
                '16_9': '16:9 (widescreen)',
                '9_16': '9:16 (vertikal)',
                '4_3': '4:3 (standar)',
                '1_1': '1:1 (persegi)',
                '21_9': '21:9 (ultrawide)',
                '2_35_1': '2.35:1 (CinemaScope)',
                '1_85_1': '1.85:1 (standar film)',
                '3_2': '3:2 (foto klasik)',
                '5_4': '5:4 (beberapa monitor)',
                'no_characters': 'Tidak Ada Karakter',
                'one_character': '1 Karakter',
                'two_characters': '2 Karakter',
                'three_characters': '3 Karakter',
                'four_characters': '4 Karakter',
                'group_characters': 'Kelompok (5+ Karakter)',
                'crowd': 'Kerumunan'
            },
            'en': {
                'generator_title': 'AI Video Prompt Generator',
                'generator_subtitle': 'Create high-quality video prompts for AI video generation',
                'main_subject': 'Main Subject',
                'main_subject_desc': '(Main object or focus of the video)',
                'action_verb': 'Action/Verb',
                'action_verb_desc': '(Activity or movement of the subject)',
                'video_model': 'Video Model',
                'video_model_desc': '(Format and purpose of the video)',
                'visual_style': 'Visual Style',
                'visual_style_desc': '(Aesthetics and visual appearance)',
                'mood_tone': 'Mood/Tone',
                'mood_tone_desc': '(Emotion and atmosphere of the video)',
                'camera_angle': 'Camera Angle',
                'camera_angle_desc': '(Composition and camera perspective)',
                'lighting': 'Lighting',
                'lighting_desc': '(Lighting techniques and sources)',
                'color_palette': 'Color Palette',
                'color_palette_desc': '(Dominant color combinations)',
                'artistic_influence': 'Artistic Influence',
                'artistic_influence_desc': '(Artistic style inspiration)',
                'resolution': 'Resolution',
                'resolution_desc': '(Video image quality)',
                'frame_rate': 'Frame Rate',
                'frame_rate_desc': '(Motion smoothness)',
                'aspect_ratio': 'Aspect Ratio',
                'aspect_ratio_desc': '(Video dimension proportions)',
                'additional_details': 'Additional Details',
                'additional_details_desc': '(Additional specifications for the video)',
                'character_count': 'Number of Characters',
                'character_count_desc': '(Number of characters in the video)',
                'sound_effects': 'Sound Effects and Music',
                'sound_effects_desc': '(Audio atmosphere for the video)',
                'character_1': 'Character 1',
                'character_1_desc': '(Description and dialogue of first character)',
                'character_2': 'Character 2',
                'character_2_desc': '(Description and dialogue of second character)',
                'character_3': 'Character 3',
                'character_3_desc': '(Description and dialogue of third character)',
                'character_4': 'Character 4',
                'character_4_desc': '(Description and dialogue of fourth character)',
                'generate_prompt': 'Generate Video Prompt',
                'clear_prompt': 'Clear Prompt',
                'copy_prompt': 'Copy Prompt',
                'select_language': 'Select Language:',
                'reset_form': 'Reset Form',
                'generated_prompt': 'Generated Prompt',
                'generated_prompt_desc': '(Result of video prompt generator)',
                // Option translations
                'standard_video': 'Standard Video',
                'youtube_shorts': 'YouTube Shorts',
                'instagram_reels': 'Instagram Reels',
                'tiktok': 'TikTok',
                'advertisement': 'Advertisement',
                'tutorial': 'Tutorial',
                'short_film': 'Short Film',
                'documentary': 'Documentary',
                'music_video': 'Music Video',
                'game_content': 'Video Game Content',
                'live_action': 'Live Action',
                '3d_animation': '3D Animation',
                '2d_animation': '2D Animation',
                'cinematic': 'Cinematic',
                'anime': 'Anime',
                'cyberpunk': 'Cyberpunk',
                'steampunk': 'Steampunk',
                'realistic': 'Realistic',
                'painting-like': 'Painting-like',
                'watercolor': 'Watercolor',
                'pixel_art': 'Pixel Art',
                'claymation': 'Claymation',
                'surreal': 'Surreal',
                'minimalist': 'Minimalist',
                'retro_futuristic': 'Retro Futuristic',
                'grunge': 'Grunge',
                'noir': 'Noir',
                'fantasy': 'Fantasy',
                'sci_fi': 'Sci-Fi',
                'comic_style': 'Comic Book Style',
                'low_poly': 'Low Poly',
                'ui_kit': 'UI Kit/Interactive',
                'epic': 'Epic',
                'mysterious': 'Mysterious',
                'romantic': 'Romantic',
                'dark': 'Dark',
                'funny': 'Funny',
                'energetic': 'Energetic',
                'melancholic': 'Melancholic',
                'futuristic': 'Futuristic',
                'vintage': 'Vintage',
                'dreamy': 'Dream-like',
                'horror': 'Horror',
                'comedy': 'Comedy',
                'dramatic': 'Dramatic',
                'heroic': 'Heroic',
                'calm': 'Calm',
                'tense': 'Tense',
                'close_up': 'Close-up',
                'extreme_close_up': 'Extreme Close-up',
                'medium_shot': 'Medium shot',
                'american_shot': 'American shot',
                'full_shot': 'Full shot',
                'long_shot': 'Long shot',
                'extreme_long_shot': 'Extreme Long shot',
                'wide_shot': 'Wide shot',
                'aerial_view': 'Aerial view',
                'drone_shot': 'Drone shot',
                'dutch_angle': 'Dutch angle',
                'over_the_shoulder': 'Over-the-shoulder',
                'point_of_view': 'Point-of-view',
                'tracking_shot': 'Tracking shot',
                'dolly_shot': 'Dolly shot',
                'crane_shot': 'Crane shot',
                'steadycam_shot': 'Steadycam shot',
                'handheld_shot': 'Handheld shot',
                'split': 'Split',
                'fish_eye': 'Fish-Eye',
                'macro': 'Macro',
                'tilt_shot': 'Tilt shot',
                'pan_shot': 'Pan shot',
                'zoom_shot': 'Zoom shot',
                '360_degree': '360-degree',
                'top_down': 'Top-down',
                'low_angle': 'Low angle',
                'high_angle': 'High angle',
                'eye_level': 'Eye level',
                'bird_eye': "Bird's-eye view",
                'worm_eye': "Worm's-eye view",
                'shoulder_level': "Shoulder level",
                'hip_level': "Hip level",
                'knee_level': "Knee level",
                'ground_level': "Ground level",
                'overhead': "Overhead",
                'canted': "Canted",
                'subjective': "Subjective",
                'objective': "Objective",
                'two_shot': "Two-shot",
                'three_shot': "Three-shot",
                'group_shot': "Group-shot",
                'insert_shot': "Insert shot",
                'establishing_shot': "Establishing shot",
                'master_shot': "Master shot",
                'follow_shot': "Follow shot",
                'walk_and_talk': "Walk-and-talk",
                'arc_shot': "Arc shot",
                'spiral_shot': "Spiral shot",
                'vertigo_effect': "Vertigo effect",
                'bullet_time': "Bullet time",
                'time_lapse': "Time-lapse",
                'slow_motion': "Slow motion",
                'snorricam': "Snorricam",
                'locked_down': "Locked-down",
                'freehand': "Freehand",
                'jib_shot': "Jib shot",
                'glidecam_shot': "Glidecam shot",
                'gimbal_shot': "Gimbal shot",
                'underwater': "Underwater",
                'reflection': "Reflection",
                'through_object': "Through object",
                'tunnel': "Tunnel",
                'keyhole': "Keyhole",
                'peephole': "Peephole",
                'mirror': "Mirror",
                'split_screen': "Split-screen",
                'multi_angle': "Multi-angle",
                'natural_light': 'Natural',
                'studio_light': 'Studio',
                'neon_light': 'Neon',
                'volumetric_light': 'Volumetric',
                'low_key': 'Low-key',
                'high_key': 'High-key',
                'backlit': 'Backlit',
                'rim_light': 'Rim light',
                'soft_light': 'Soft light',
                'hard_light': 'Hard light',
                'chiaroscuro': 'Chiaroscuro',
                'ambient': 'Ambient',
                'practical': 'Practical',
                'motivated': 'Motivated',
                'silhouette': 'Silhouette',
                'godrays': 'Godrays',
                'bioluminescent': 'Bioluminescent',
                'candlelight': 'Candlelight',
                'firelight': 'Firelight',
                'moonlight': 'Moonlight',
                'sunlight': 'Sunlight',
                'starlight': 'Starlight',
                'streetlight': 'Streetlight',
                'fluorescent': 'Fluorescent',
                'led': 'LED',
                'halogen': 'Halogen',
                'incandescent': 'Incandescent',
                'blacklight': 'Blacklight',
                'spotlight': 'Spotlight',
                'floodlight': 'Floodlight',
                'fresnel': 'Fresnel',
                'parcan': 'Parcan',
                'ellipsoidal': 'Ellipsoidal',
                'followspot': 'Followspot',
                'gobo': 'Gobo',
                'strobe': 'Strobe',
                'flicker': 'Flicker',
                'pulse': 'Pulse',
                'gradient': 'Gradient',
                'bounce': 'Bounce',
                'diffused': 'Diffused',
                'dappled': 'Dappled',
                'shaft': 'Shaft',
                'crepuscular': 'Crepuscular',
                'lens_flare': 'Lens flare',
                'anamorphic': 'Anamorphic',
                'barn_doors': 'Barn doors',
                'cookie': 'Cookie',
                'scrim': 'Scrim',
                'snoot': 'Snoot',
                'flags': 'Flags',
                'negative_fill': 'Negative fill',
                'three_point': 'Three-point lighting',
                'four_point': 'Four-point lighting',
                'high_contrast': 'High-contrast',
                'low_contrast': 'Low-contrast',
                'dramatic_light': 'Dramatic',
                'flat_light': 'Flat',
                'glamour_light': 'Glamour',
                'moody_light': 'Moody',
                'noir_style': 'Noir-style',
                'expressionist': 'Expressionist',
                'surrealist': 'Surrealist',
                '480p': '480p (SD)',
                '720p': '720p (HD)',
                '1080p': '1080p (Full HD)',
                '2k': '2K',
                '4k': '4K (Ultra HD)',
                '8k': '8K',
                '24fps': '24 fps (cinematic)',
                '25fps': '25 fps (PAL)',
                '30fps': '30 fps (standard)',
                '48fps': '48 fps (HFR)',
                '50fps': '50 fps (PAL HFR)',
                '60fps': '60 fps (smooth)',
                '120fps': '120 fps (very smooth)',
                '240fps': '240 fps (slow motion)',
                '16_9': '16:9 (widescreen)',
                '9_16': '9:16 (vertical)',
                '4_3': '4:3 (standard)',
                '1_1': '1:1 (square)',
                '21_9': '21:9 (ultrawide)',
                '2_35_1': '2.35:1 (CinemaScope)',
                '1_85_1': '1.85:1 (film standard)',
                '3_2': '3:2 (classic photo)',
                '5_4': '5:4 (some monitors)',
                'no_characters': 'No Characters',
                'one_character': '1 Character',
                'two_characters': '2 Characters',
                'three_characters': '3 Characters',
                'four_characters': '4 Characters',
                'group_characters': 'Group (5+ Characters)',
                'crowd': 'Crowd'
            }
        };

        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            el.textContent = translations[this.currentLanguage][key] || el.textContent;
        });

        // Update placeholder berdasarkan bahasa
        const subjectInput = document.getElementById('video-subject');
        const actionInput = document.getElementById('video-action');
        const detailsInput = document.getElementById('video-details');
        const soundInput = document.getElementById('video-sound');
        
        if (subjectInput && actionInput && detailsInput && soundInput) {
            subjectInput.placeholder = this.currentLanguage === 'id' 
                ? 'contoh: kota cyberpunk, robot futuristik' 
                : 'example: cyberpunk city, futuristic robot';
            
            actionInput.placeholder = this.currentLanguage === 'id' 
                ? 'contoh: terbang, menari, bertransformasi' 
                : 'example: flying, dancing, transforming';
            
            detailsInput.placeholder = this.currentLanguage === 'id' 
                ? 'Detail atau persyaratan spesifik lainnya...' 
                : 'Additional details or specific requirements...';
            
            soundInput.placeholder = this.currentLanguage === 'id' 
                ? 'Deskripsi efek suara atau musik yang diinginkan...' 
                : 'Description of desired sound effects or music...';
        }

        // Update placeholder untuk karakter
        for (let i = 1; i <= 4; i++) {
            const descInput = document.getElementById(`video-character${i}-desc`);
            const dialogInput = document.getElementById(`video-character${i}-dialog`);
            
            if (descInput && dialogInput) {
                descInput.placeholder = this.currentLanguage === 'id' 
                    ? `Deskripsi karakter (contoh: ${this.getCharacterExample(i, 'id')})` 
                    : `Character description (example: ${this.getCharacterExample(i, 'en')})`;
                
                dialogInput.placeholder = this.currentLanguage === 'id' 
                    ? `Dialog karakter ${i}...` 
                    : `Character ${i} dialogue...`;
            }
        }
    }

    getCharacterExample(index, lang) {
        const examples = {
            'id': [
                'Pria paruh baya dengan janggut abu-abu',
                'Wanita muda dengan rambut biru',
                'Anak kecil dengan mainan robot',
                'Robot humanoid dengan suara mekanis'
            ],
            'en': [
                'Middle-aged man with gray beard',
                'Young woman with blue hair',
                'Little child with robot toy',
                'Humanoid robot with mechanical voice'
            ]
        };
        return examples[lang][index - 1];
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
            'video-subject': this.currentLanguage === 'id' ? 'pemandangan kota cyberpunk' : 'cyberpunk cityscape',
            'video-action': this.currentLanguage === 'id' ? 'berkilau dengan lampu neon' : 'shimmering with neon lights',
            'video-model': 'standard',
            'video-style': 'cyberpunk',
            'video-mood': 'futuristik',
            'video-camera': 'aerial-view',
            'video-lighting': 'neon',
            'video-color': this.currentLanguage === 'id' ? 'biru neon, ungu, dan merah muda' : 'neon blue, purple, and pink',
            'video-artists': this.currentLanguage === 'id' ? 'Blade Runner, Akira' : 'Blade Runner, Akira',
            'video-resolution': '1080p',
            'video-fps': '24',
            'video-aspect': '16:9',
            'video-details': this.currentLanguage === 'id' ? 'Hujan turun, pantulan di permukaan basah, iklan holografik' : 'Rain falling, reflections on wet surfaces, holographic advertisements',
            'video-characters': '0',
            'video-sound': this.currentLanguage === 'id' ? 'Musik synthwave dengan bass yang dalam dan efek suara futuristik' : 'Synthwave music with deep bass and futuristic sound effects'
        };

        for (const [id, value] of Object.entries(defaults)) {
            const element = document.getElementById(id);
            if (element) element.value = value;
        }

        // Sembunyikan semua grup karakter
        for (let i = 1; i <= 4; i++) {
            const group = document.getElementById(`character${i}-group`);
            if (group) group.style.display = 'none';
        }
    }

    async translateText(text, targetLang = 'en') {
        // Simple translation mapping for demonstration
        // In a real implementation, you would use Google Translate API
        const translations = {
            'id': {
                'pemandangan kota cyberpunk': 'cyberpunk cityscape',
                'berkilau dengan lampu neon': 'shimmering with neon lights',
                'biru neon, ungu, dan merah muda': 'neon blue, purple, and pink',
                'Blade Runner, Akira': 'Blade Runner, Akira',
                'Hujan turun, pantulan di permukaan basah, iklan holografik': 'Rain falling, reflections on wet surfaces, holographic advertisements',
                'Musik synthwave dengan bass yang dalam dan efek suara futuristik': 'Synthwave music with deep bass and futuristic sound effects',
                'kota cyberpunk': 'cyberpunk city',
                'robot futuristik': 'futuristic robot',
                'terbang': 'flying',
                'menari': 'dancing',
                'bertransformasi': 'transforming',
                'biru dan merah muda pastel': 'pastel blue and pink',
                'monokrom': 'monochrome',
                'Studio Ghibli': 'Studio Ghibli',
                'Wes Anderson': 'Wes Anderson',
                'Pria paruh baya dengan janggut abu-abu': 'Middle-aged man with gray beard',
                'Wanita muda dengan rambut biru': 'Young woman with blue hair',
                'Anak kecil dengan mainan robot': 'Little child with robot toy',
                'Robot humanoid dengan suara mekanis': 'Humanoid robot with mechanical voice'
            }
        };

        if (targetLang === 'en' && this.currentLanguage === 'id') {
            // Check if we have a direct translation
            for (const [id, en] of Object.entries(translations['id'])) {
                if (text.includes(id)) {
                    return text.replace(id, en);
                }
            }
        }
        
        // If no translation found, return the original text (in a real app, you'd use an API here)
        return text;
    }

    async generatePrompt() {
        const getValue = (id) => document.getElementById(id)?.value.trim() || '';
        const getSelectValue = (id) => document.getElementById(id)?.value || '';

        // Get all values (original language)
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
            this.showNotification(
                this.currentLanguage === 'id' 
                    ? 'Masukkan subjek utama untuk video Anda' 
                    : 'Please enter the main subject for your video', 
                false
            );
            return;
        }

        // Translate all text inputs to English
        const translatedSubject = await this.translateText(subject);
        const translatedAction = await this.translateText(action);
        const translatedColor = await this.translateText(color);
        const translatedArtists = await this.translateText(artists);
        const translatedDetails = await this.translateText(details);
        const translatedSound = await this.translateText(sound);

        // Translate select options to English
        const modelTranslations = {
            'standard': 'standard video',
            'youtube-shorts': 'YouTube Shorts',
            'instagram-reels': 'Instagram Reels',
            'tiktok': 'TikTok',
            'advertisement': 'advertisement',
            'tutorial': 'tutorial',
            'film-pendek': 'short film',
            'dokumenter': 'documentary',
            'video-klip': 'music video',
            'video-game': 'video game content',
            'live-action': 'live action',
            'animasi-3D': '3D animation',
            'animasi-2D': '2D animation'
        };

        const styleTranslations = {
            'sinematik': 'cinematic',
            'anime': 'anime',
            'cyberpunk': 'cyberpunk',
            'steampunk': 'steampunk',
            'realistis': 'realistic',
            'lukisan': 'painting-like',
            'cat-air': 'watercolor',
            'pixel-art': 'pixel art',
            'claymation': 'claymation',
            'surreal': 'surreal',
            'minimalis': 'minimalist',
            'retro-futuristik': 'retro-futuristic',
            'grunge': 'grunge',
            'noir': 'noir',
            'fantasi': 'fantasy',
            'sci-fi': 'sci-fi',
            'komik': 'comic book style',
            'low-poly': 'low poly',
            'uikit': 'UI kit/interactive'
        };

        const moodTranslations = {
            'epik': 'epic',
            'misterius': 'mysterious',
            'romantis': 'romantic',
            'gelap': 'dark',
            'lucu': 'funny',
            'energik': 'energetic',
            'melankolis': 'melancholic',
            'futuristik': 'futuristic',
            'vintage': 'vintage',
            'mimpi': 'dream-like',
            'horor': 'horror',
            'komedi': 'comedy',
            'dramatis': 'dramatic',
            'heroik': 'heroic',
            'tenang': 'calm',
            'tegang': 'tense'
        };

        const cameraTranslations = {
            'close-up': 'close-up',
            'extreme-close-up': 'extreme close-up',
            'medium-shot': 'medium shot',
            'american-shot': 'American shot',
            'full-shot': 'full shot',
            'long-shot': 'long shot',
            'extreme-long-shot': 'extreme long shot',
            'wide-shot': 'wide shot',
            'aerial-view': 'aerial view',
            'drone-shot': 'drone shot',
            'dutch-angle': 'Dutch angle',
            'over-the-shoulder': 'over-the-shoulder',
            'point-of-view': 'point-of-view',
            'tracking-shot': 'tracking shot',
            'dolly-shot': 'dolly shot',
            'crane-shot': 'crane shot',
            'steadycam-shot': 'steadycam shot',
            'handheld-shot': 'handheld shot',
            'split': 'split',
            'fish-eye': 'fish-eye',
            'macro': 'macro',
            'tilt-shot': 'tilt shot',
            'pan-shot': 'pan shot',
            'zoom-shot': 'zoom shot',
            '360-degree': '360-degree',
            'top-down': 'top-down',
            'low-angle': 'low angle',
            'high-angle': 'high angle',
            'eye-level': 'eye level',
            'bird-eye': "bird's-eye view",
            'worm-eye': "worm's-eye view",
            'shoulder-level': "shoulder level",
            'hip-level': "hip level",
            'knee-level': "knee level",
            'ground-level': "ground level",
            'overhead': "overhead",
            'canted': "canted",
            'subjective': "subjective",
            'objective': "objective",
            'two-shot': "two-shot",
            'three-shot': "three-shot",
            'group-shot': "group-shot",
            'insert-shot': "insert shot",
            'establishing-shot': "establishing shot",
            'master-shot': "master shot",
            'follow-shot': "follow shot",
            'walk-and-talk': "walk-and-talk",
            'arc-shot': "arc shot",
            'spiral-shot': "spiral shot",
            'vertigo-effect': "vertigo effect",
            'bullet-time': "bullet time",
            'time-lapse': "time-lapse",
            'slow-motion': "slow motion",
            'snorricam': "snorricam",
            'locked-down': "locked-down",
            'freehand': "freehand",
            'jib-shot': "jib shot",
            'glidecam-shot': "glidecam shot",
            'gimbal-shot': "gimbal shot",
            'underwater': "underwater",
            'reflection': "reflection",
            'through-object': "through object",
            'tunnel': "tunnel",
            'keyhole': "keyhole",
            'peephole': "peephole",
            'mirror': "mirror",
            'split-screen': "split-screen",
            'multi-angle': "multi-angle"
        };

        const lightingTranslations = {
            'natural': 'natural',
            'studio': 'studio',
            'neon': 'neon',
            'volumetric': 'volumetric',
            'low-key': 'low-key',
            'high-key': 'high-key',
            'backlit': 'backlit',
            'rim-light': 'rim light',
            'soft-light': 'soft light',
            'hard-light': 'hard light',
            'chiaroscuro': 'chiaroscuro',
            'ambient': 'ambient',
            'practical': 'practical',
            'motivated': 'motivated',
            'silhouette': 'silhouette',
            'godrays': 'godrays',
            'bioluminescent': 'bioluminescent',
            'candlelight': 'candlelight',
            'firelight': 'firelight',
            'moonlight': 'moonlight',
            'sunlight': 'sunlight',
            'starlight': 'starlight',
            'streetlight': 'streetlight',
            'fluorescent': 'fluorescent',
            'led': 'LED',
            'halogen': 'halogen',
            'incandescent': 'incandescent',
            'blacklight': 'blacklight',
            'spotlight': 'spotlight',
            'floodlight': 'floodlight',
            'fresnel': 'fresnel',
            'parcan': 'parcan',
            'ellipsoidal': 'ellipsoidal',
            'followspot': 'followspot',
            'gobo': 'gobo',
            'strobe': 'strobe',
            'flicker': 'flicker',
            'pulse': 'pulse',
            'gradient': 'gradient',
            'bounce': 'bounce',
            'diffused': 'diffused',
            'dappled': 'dappled',
            'shaft': 'shaft',
            'crepuscular': 'crepuscular',
            'lens-flare': 'lens flare',
            'anamorphic': 'anamorphic',
            'barn-doors': 'barn doors',
            'cookie': 'cookie',
            'scrim': 'scrim',
            'snoot': 'snoot',
            'flags': 'flags',
            'negative-fill': 'negative fill',
            'three-point': 'three-point lighting',
            'four-point': 'four-point lighting',
            'high-contrast': 'high-contrast',
            'low-contrast': 'low-contrast',
            'dramatic': 'dramatic',
            'flat': 'flat',
            'glamour': 'glamour',
            'moody': 'moody',
            'noir-style': 'noir-style',
            'expressionist': 'expressionist',
            'surrealist': 'surrealist'
        };

        // Generate prompt in English
        let prompt = `Create a ${modelTranslations[model] || model} in ${styleTranslations[style] || style} style about ${translatedSubject || subject} ${translatedAction || action}. `;
        prompt += `Mood should be ${moodTranslations[mood] || mood} with ${lightingTranslations[lighting] || lighting} lighting. `;
        prompt += `Use ${cameraTranslations[camera] || camera} camera angle. `;

        if (translatedColor || color) prompt += `Color palette: ${translatedColor || color}. `;
        if (translatedArtists || artists) prompt += `Artistic influences: ${translatedArtists || artists}. `;
        prompt += `Technical specifications: ${resolution} resolution, ${fps} fps, ${aspect} aspect ratio. `;
        
        // Add characters and dialogue (translate character descriptions but keep dialogue as-is)
        if (charCount !== '0') {
            prompt += `Number of characters: ${charCount}. `;
            
            for (let i = 1; i <= charCount; i++) {
                const charDesc = getValue(`video-character${i}-desc`);
                const charDialog = getValue(`video-character${i}-dialog`);
                
                if (charDesc) {
                    const translatedDesc = await this.translateText(charDesc);
                    prompt += `Character ${i}: ${translatedDesc || charDesc}. `;
                }
                if (charDialog) {
                    prompt += `Character ${i} dialogue: "${charDialog}". `;
                }
            }
        }
        
        if (translatedDetails || details) prompt += `Additional details: ${translatedDetails || details}. `;
        if (translatedSound || sound) prompt += `Sound effects and music: ${translatedSound || sound}. `;

        prompt += `--v 4.1 --style 4b --q 2`;

        const output = document.getElementById('video-prompt-output');
        if (output) {
            output.value = prompt;
        }

        this.showNotification(
            this.currentLanguage === 'id' 
                ? 'Prompt video berhasil dibuat!' 
                : 'Video prompt generated successfully!'
        );
    }

    copyPrompt() {
        const output = document.getElementById('video-prompt-output');
        if (!output || !output.value) {
            this.showNotification(
                this.currentLanguage === 'id' 
                    ? 'Tidak ada prompt untuk disalin! Buat prompt terlebih dahulu.' 
                    : 'No prompt to copy! Generate a prompt first.',
                false
            );
            return;
        }

        output.select();
        document.execCommand('copy');

        // Umpan balik visual
        const copyBtn = document.getElementById('copy-video-prompt');
        if (copyBtn) {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = this.currentLanguage === 'id' 
                ? '<i class="fas fa-check"></i> Tersalin!' 
                : '<i class="fas fa-check"></i> Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        }

        this.showNotification(
            this.currentLanguage === 'id' 
                ? 'Prompt video berhasil disalin ke clipboard!' 
                : 'Video prompt copied to clipboard!'
        );
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
                closeBtn.textContent = this.currentLanguage === 'id' ? 'OK' : 'OK';
            }
        }
    }
}

// Inisialisasi saat DOM dimuat
document.addEventListener('DOMContentLoaded', () => {
    new VideoPromptGenerator();
});
