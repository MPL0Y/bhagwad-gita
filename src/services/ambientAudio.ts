/**
 * Vedic Ambient Soundscape & Sacred Chanting Engine
 * Built purely with browser Web Audio API for zero latency and offline immersion.
 */

class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  
  // Audio nodes for Tanpura
  private tanpuraGain: GainNode | null = null;
  private tanpuraOscs: OscillatorNode[] = [];
  private tanpuraInterval: number | null = null;

  // Audio nodes for River Ganga
  private gangaGain: GainNode | null = null;
  private gangaSource: AudioBufferSourceNode | null = null;

  // Audio nodes for Temple Bells
  private bellsGain: GainNode | null = null;
  private bellsInterval: number | null = null;

  // Master Gain
  private masterGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMasterVolume(val: number) {
    this.initContext();
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(val, this.ctx.currentTime, 0.05);
    }
  }

  // --- 1. SACRED TANPURA DRONE (Sa-Pa Tuning) ---
  public startTanpura(volume = 0.5) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    if (this.tanpuraGain) {
      this.tanpuraGain.gain.setTargetAtTime(volume, this.ctx.currentTime, 0.1);
      return;
    }

    this.tanpuraGain = this.ctx.createGain();
    this.tanpuraGain.gain.setValueAtTime(volume, this.ctx.currentTime);
    this.tanpuraGain.connect(this.masterGain);

    // Fundamental frequencies in D3 tuning: Pa (220Hz), Sa (146.83Hz), High Sa (293.66Hz)
    const baseFreqs = [220.0, 293.66, 293.66, 146.83];
    let stringIndex = 0;

    // Simulate rhythmic gentle plucking of 4 strings
    const pluckString = () => {
      if (!this.ctx || !this.tanpuraGain) return;
      const freq = baseFreqs[stringIndex % baseFreqs.length];
      stringIndex++;

      const osc = this.ctx.createOscillator();
      const stringGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.Q.setValueAtTime(3, this.ctx.currentTime);

      stringGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      stringGain.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 0.08);
      stringGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 3.8);

      osc.connect(filter);
      filter.connect(stringGain);
      stringGain.connect(this.tanpuraGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 4.0);
    };

    pluckString();
    this.tanpuraInterval = window.setInterval(pluckString, 1100);
  }

  public stopTanpura() {
    if (this.tanpuraInterval) {
      clearInterval(this.tanpuraInterval);
      this.tanpuraInterval = null;
    }
    if (this.tanpuraGain && this.ctx) {
      this.tanpuraGain.gain.setTargetAtTime(0.001, this.ctx.currentTime, 0.2);
      setTimeout(() => {
        this.tanpuraGain?.disconnect();
        this.tanpuraGain = null;
      }, 300);
    }
  }

  // --- 2. SACRED RIVER GANGES (Gentle Water Lapping) ---
  public startGangaRiver(volume = 0.3) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    if (this.gangaGain) {
      this.gangaGain.gain.setTargetAtTime(volume, this.ctx.currentTime, 0.1);
      return;
    }

    const bufferSize = this.ctx.sampleRate * 3;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Generate soothing pink/brown noise
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5;
    }

    this.gangaSource = this.ctx.createBufferSource();
    this.gangaSource.buffer = buffer;
    this.gangaSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);

    // LFO to simulate gentle waves
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.15, this.ctx.currentTime); // slow wave period
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(150, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    this.gangaGain = this.ctx.createGain();
    this.gangaGain.gain.setValueAtTime(volume, this.ctx.currentTime);

    this.gangaSource.connect(filter);
    filter.connect(this.gangaGain);
    this.gangaGain.connect(this.masterGain);

    this.gangaSource.start();
  }

  public stopGangaRiver() {
    if (this.gangaGain && this.ctx) {
      this.gangaGain.gain.setTargetAtTime(0.001, this.ctx.currentTime, 0.2);
      setTimeout(() => {
        try {
          this.gangaSource?.stop();
          this.gangaSource?.disconnect();
          this.gangaGain?.disconnect();
        } catch {
          // ignore
        }
        this.gangaGain = null;
        this.gangaSource = null;
      }, 300);
    }
  }

  // --- 3. TEMPLE BELLS (Struck Brass Bell Resonance) ---
  public ringTempleBell(pitchMultiplier = 1.0) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const baseFreq = 587.33 * pitchMultiplier; // D5
    const modes = [1, 2.76, 5.4, 8.93];
    const decays = [4.5, 3.0, 1.8, 0.9];
    const gains = [0.25, 0.12, 0.06, 0.02];

    const bellNode = this.ctx.createGain();
    bellNode.connect(this.masterGain);

    modes.forEach((mode, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq * mode, this.ctx.currentTime);

      g.gain.setValueAtTime(0.001, this.ctx.currentTime);
      g.gain.linearRampToValueAtTime(gains[idx], this.ctx.currentTime + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + decays[idx]);

      osc.connect(g);
      g.connect(bellNode);

      osc.start();
      osc.stop(this.ctx.currentTime + decays[idx] + 0.1);
    });
  }

  public startPeriodicBells(intervalSeconds = 12, volume = 0.4) {
    this.initContext();
    if (this.bellsInterval) clearInterval(this.bellsInterval);
    this.ringTempleBell(1.0);
    this.bellsInterval = window.setInterval(() => {
      const pitch = 0.95 + Math.random() * 0.15;
      this.ringTempleBell(pitch);
    }, intervalSeconds * 1000);
  }

  public stopPeriodicBells() {
    if (this.bellsInterval) {
      clearInterval(this.bellsInterval);
      this.bellsInterval = null;
    }
  }

  // --- 4. SACRED SHANKHA (Conch Blast) ---
  public blowShankha() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    // Gliding horn pitch starting at 210Hz rising to 320Hz and settling
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(330, this.ctx.currentTime + 0.8);
    osc.frequency.exponentialRampToValueAtTime(325, this.ctx.currentTime + 2.5);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600, this.ctx.currentTime);
    filter.Q.setValueAtTime(4.0, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 3.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 3.3);
  }

  // --- 5. SYNTHESIZED VEDIC CHANTING FLOW (Sanskrit Meter Simulation) ---
  public chantVedicMeter(notes: number[] = [146.83, 164.81, 146.83, 130.81], onProgress?: (step: number) => void) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    notes.forEach((freq, idx) => {
      if (!this.ctx) return;
      const startTime = this.ctx.currentTime + idx * 0.9;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(0.25, startTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.85);

      osc.connect(gain);
      if (this.masterGain) gain.connect(this.masterGain);

      osc.start(startTime);
      osc.stop(startTime + 0.9);

      if (onProgress) {
        setTimeout(() => onProgress(idx), idx * 900);
      }
    });
  }

  public stopAll() {
    this.stopTanpura();
    this.stopGangaRiver();
    this.stopPeriodicBells();
  }
}

export const soundscape = new SoundscapeEngine();
