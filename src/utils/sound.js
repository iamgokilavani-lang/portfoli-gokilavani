// Web Audio API Synthesizer for Cyberpunk UI interactions
let audioCtx = null;
let isSoundEnabled = false;

export const setSoundEnabled = (enabled) => {
  isSoundEnabled = enabled;
  if (enabled && !audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
};

export const getSoundEnabled = () => isSoundEnabled;

export const playCyberBeep = (freq = 880, type = 'sine', duration = 0.05) => {
  if (!isSoundEnabled) return;
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Ignore audio context block if user hasn't interacted
  }
};

export const playClick = () => playCyberBeep(1200, 'triangle', 0.04);
export const playSuccess = () => {
  if (!isSoundEnabled) return;
  playCyberBeep(523.25, 'sine', 0.08);
  setTimeout(() => playCyberBeep(659.25, 'sine', 0.08), 80);
  setTimeout(() => playCyberBeep(783.99, 'sine', 0.12), 160);
};
export const playHover = () => playCyberBeep(700, 'sine', 0.02);
