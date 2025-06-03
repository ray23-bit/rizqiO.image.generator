  document.addEventListener('DOMContentLoaded', () => {
  // Element references
  const audioElement = document.getElementById('audio-element');
  const playButton = document.getElementById('play-button');
  const progressBar = document.getElementById('progress-bar');
  const audioTime = document.getElementById('audio-time');
  const audioPrompt = document.getElementById('audio-prompt');
  const generateAudioButton = document.getElementById('generate-audio-button');
  const voiceSelector = document.getElementById('voice-selector');
  const audioInfo = document.getElementById('audio-info');
  const downloadAudioButton = document.getElementById('download-audio');
  const backsoundUpload = document.getElementById('backsound-upload');
  const selectBacksoundBtn = document.getElementById('select-backsound');
  const removeBacksoundBtn = document.getElementById('remove-backsound');
  const backsoundInfo = document.getElementById('backsound-info');

  // State variables
  let isPlaying = false;
  let lastRequestTime = 0;
  let backsoundAudio = null;
  let hasBacksound = false;

  // Update play button icon
  function updatePlayButton() {
    playButton.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
  }

  // Format time (seconds to MM:SS)
  function formatTime(seconds) {
    if (isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // Handle play/pause button click
  playButton.addEventListener('click', () => {
    if (!audioElement.src) {
      audioInfo.textContent = 'Tidak ada audio untuk diputar';
      return;
    }

    isPlaying = !isPlaying;
    updatePlayButton();
    
    if (isPlaying) {
      audioElement.play();
      if (hasBacksound && backsoundAudio) {
        backsoundAudio.currentTime = 0;
        backsoundAudio.play();
      }
    } else {
      audioElement.pause();
      if (backsoundAudio) backsoundAudio.pause();
    }
  });

  // Update progress bar and time
  audioElement.addEventListener('timeupdate', () => {
    if (!isNaN(audioElement.duration)) {
      audioTime.textContent = `${formatTime(audioElement.currentTime)} / ${formatTime(audioElement.duration)}`;
      progressBar.style.width = `${(audioElement.currentTime / audioElement.duration) * 100}%`;
    }
  });

  // Handle audio end
  audioElement.addEventListener('ended', () => {
    isPlaying = false;
    updatePlayButton();
    progressBar.style.width = '0%';
    audioTime.textContent = `00:00 / ${formatTime(audioElement.duration)}`;
    if (backsoundAudio) backsoundAudio.pause();
  });

  // Handle backsound upload
  function handleBacksoundUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    if (!file.type.match('audio.*')) {
      backsoundInfo.textContent = 'File harus berupa audio';
      return;
    }
    
    const url = URL.createObjectURL(file);
    if (backsoundAudio) {
      backsoundAudio.pause();
      URL.revokeObjectURL(backsoundAudio.src);
    }
    
    backsoundAudio = new Audio(url);
    backsoundAudio.loop = true;
    hasBacksound = true;
    backsoundInfo.textContent = file.name;
    backsoundAudio.volume = 0.3;
  }

  // Remove backsound
  function removeBacksound() {
    if (backsoundAudio) {
      backsoundAudio.pause();
      URL.revokeObjectURL(backsoundAudio.src);
      backsoundAudio = null;
    }
    hasBacksound = false;
    backsoundInfo.textContent = 'Tidak ada backsound';
    backsoundUpload.value = '';
  }

  // Backsound event listeners
  selectBacksoundBtn.addEventListener('click', () => backsoundUpload.click());
  removeBacksoundBtn.addEventListener('click', removeBacksound);
  backsoundUpload.addEventListener('change', handleBacksoundUpload);

  // Generate audio function
  async function generateAudio() {
    const now = Date.now();
    if (now - lastRequestTime < 3000) {
      audioInfo.textContent = 'Harap tunggu sebelum generate lagi';
      return;
    }
    lastRequestTime = now;

    const text = audioPrompt.value.trim();
    if (!text) {
      audioInfo.textContent = 'Silakan masukkan teks';
      return;
    }

    const voice = voiceSelector.value;
    const encodedText = encodeURIComponent(text);
    const apiUrl = `https://text.pollinations.ai/${encodedText}?model=openai-audio&voice=${voice}`;

    audioInfo.innerHTML = '<div class="loading"></div> Generating audio...';
    generateAudioButton.disabled = true;
    playButton.disabled = true;

    try {
      audioElement.src = apiUrl;
      
      await new Promise((resolve, reject) => {
        audioElement.addEventListener('loadedmetadata', resolve, { once: true });
        audioElement.addEventListener('error', reject, { once: true });
        setTimeout(() => reject(new Error('Timeout')), 30000);
      });

      audioInfo.textContent = text;
      downloadAudioButton.onclick = () => {
        const link = document.createElement('a');
        link.href = apiUrl;
        link.download = `audio_${Date.now()}.mp3`;
        link.click();
      };
    } catch (error) {
      console.error('Error generating audio:', error);
      audioInfo.textContent = 'Gagal generate audio. Silakan coba lagi.';
    } finally {
      generateAudioButton.disabled = false;
      playButton.disabled = false;
    }
  }

  // Event listeners
  generateAudioButton.addEventListener('click', generateAudio);
  audioPrompt.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') generateAudio();
  });
});
