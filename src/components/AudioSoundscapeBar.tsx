import React, { useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Sliders, 
  ChevronUp, 
  ChevronDown, 
  Music, 
  Waves, 
  Bell 
} from 'lucide-react';
import { soundscape } from '../services/ambientAudio';

interface AudioSoundscapeBarProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const AudioSoundscapeBar: React.FC<AudioSoundscapeBarProps> = ({
  isPlaying,
  onTogglePlay
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [masterVolume, setMasterVolume] = useState<number>(0.7);
  const [tanpuraVol, setTanpuraVol] = useState<number>(0.6);
  const [gangaVol, setGangaVol] = useState<number>(0.3);
  const [bellsVol, setBellsVol] = useState<number>(0.4);

  const [tanpuraActive, setTanpuraActive] = useState<boolean>(true);
  const [gangaActive, setGangaActive] = useState<boolean>(true);
  const [bellsActive, setBellsActive] = useState<boolean>(true);

  const handleMasterToggle = () => {
    if (isPlaying) {
      soundscape.stopAll();
      onTogglePlay();
    } else {
      if (tanpuraActive) soundscape.startTanpura(tanpuraVol);
      if (gangaActive) soundscape.startGangaRiver(gangaVol);
      if (bellsActive) soundscape.startPeriodicBells(14, bellsVol);
      onTogglePlay();
    }
  };

  const handleMasterVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setMasterVolume(val);
    soundscape.setMasterVolume(val);
  };

  const toggleLayer = (layer: 'tanpura' | 'ganga' | 'bells') => {
    if (layer === 'tanpura') {
      const next = !tanpuraActive;
      setTanpuraActive(next);
      if (isPlaying) {
        next ? soundscape.startTanpura(tanpuraVol) : soundscape.stopTanpura();
      }
    } else if (layer === 'ganga') {
      const next = !gangaActive;
      setGangaActive(next);
      if (isPlaying) {
        next ? soundscape.startGangaRiver(gangaVol) : soundscape.stopGangaRiver();
      }
    } else if (layer === 'bells') {
      const next = !bellsActive;
      setBellsActive(next);
      if (isPlaying) {
        next ? soundscape.startPeriodicBells(14, bellsVol) : soundscape.stopPeriodicBells();
      }
    }
  };

  return (
    <aside 
      aria-label="Ambient soundscape mixer"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-xl transition-all duration-300"
    >
      <div 
        className="rounded-3xl border shadow-2xl backdrop-blur-xl p-3 sm:p-4 transition-all"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--paper-card) 92%, transparent)',
          borderColor: 'var(--border-parchment)'
        }}
      >
        {/* Expanded Sound Mixer Controls */}
        {isExpanded && (
          <div className="pb-4 mb-3 border-b space-y-3 animate-slide-up"
            style={{ borderColor: 'var(--border-parchment)' }}
          >
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-500">
              <span>Kurukshetra Soundscape Mixer</span>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-normal">Real-time Web Audio Synthesizer</span>
            </div>

            {/* Layer 1: Tanpura Drone */}
            <div className="flex items-center justify-between gap-3 text-xs">
              <button
                onClick={() => toggleLayer('tanpura')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                  tanpuraActive 
                    ? 'bg-amber-500/20 border-amber-500 text-amber-700 dark:text-amber-300 font-semibold' 
                    : 'bg-stone-500/10 border-transparent text-stone-400'
                }`}
              >
                <Music className="w-3.5 h-3.5" />
                <span>Sacred Tanpura (Sa-Pa D3)</span>
              </button>
              <input 
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={tanpuraVol}
                disabled={!tanpuraActive}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setTanpuraVol(val);
                  if (isPlaying && tanpuraActive) soundscape.startTanpura(val);
                }}
                className="w-24 sm:w-32 accent-amber-500"
              />
            </div>

            {/* Layer 2: River Ganga */}
            <div className="flex items-center justify-between gap-3 text-xs">
              <button
                onClick={() => toggleLayer('ganga')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                  gangaActive 
                    ? 'bg-amber-500/20 border-amber-500 text-amber-700 dark:text-amber-300 font-semibold' 
                    : 'bg-stone-500/10 border-transparent text-stone-400'
                }`}
              >
                <Waves className="w-3.5 h-3.5" />
                <span>River Ganga Waters</span>
              </button>
              <input 
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={gangaVol}
                disabled={!gangaActive}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setGangaVol(val);
                  if (isPlaying && gangaActive) soundscape.startGangaRiver(val);
                }}
                className="w-24 sm:w-32 accent-amber-500"
              />
            </div>

            {/* Layer 3: Temple Bells */}
            <div className="flex items-center justify-between gap-3 text-xs">
              <button
                onClick={() => toggleLayer('bells')}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                  bellsActive 
                    ? 'bg-amber-500/20 border-amber-500 text-amber-700 dark:text-amber-300 font-semibold' 
                    : 'bg-stone-500/10 border-transparent text-stone-400'
                }`}
              >
                <Bell className="w-3.5 h-3.5" />
                <span>Temple Brass Bells</span>
              </button>
              <input 
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={bellsVol}
                disabled={!bellsActive}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setBellsVol(val);
                  if (isPlaying && bellsActive) soundscape.startPeriodicBells(14, val);
                }}
                className="w-24 sm:w-32 accent-amber-500"
              />
            </div>
          </div>
        )}

        {/* Minimized Dock Bar */}
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Main Play / Pause Soundscape */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleMasterToggle}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-md active:scale-95 ${
                isPlaying
                  ? 'bg-amber-500 text-white animate-pulse'
                  : 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
              }`}
              title={isPlaying ? "Mute ambient audio" : "Play Kurukshetra ambient soundscape"}
            >
              {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>

            <div>
              <div className="text-xs font-bold text-stone-800 dark:text-stone-200">
                {isPlaying ? "Vedic Sanctuary Atmosphere Active" : "Ambient Soundscape"}
              </div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400">
                {isPlaying ? "Tanpura · Ganga · Bells" : "Tap to immerse in sacred focus"}
              </div>
            </div>
          </div>

          {/* Master Volume Slider & Expand Mixer */}
          <div className="flex items-center gap-2 sm:gap-3">
            <input 
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={masterVolume}
              onChange={handleMasterVolumeChange}
              className="w-16 sm:w-24 accent-amber-500 hidden sm:block"
              title="Master Volume"
            />

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border text-stone-600 dark:text-stone-300 hover:border-amber-500 transition-colors"
              style={{
                backgroundColor: 'var(--paper-surface)',
                borderColor: 'var(--border-parchment)'
              }}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mixer</span>
              {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

      </div>
    </aside>
  );
};
