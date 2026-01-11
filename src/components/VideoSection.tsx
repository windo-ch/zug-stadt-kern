import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, user interaction required
      });
      setIsPlaying(true);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="w-full py-0">
      <div className="relative w-full aspect-video bg-muted">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          autoPlay
          playsInline
          preload="auto"
          poster="./assets/places/zug/zug-overview-svp_1.jpg"
        >
          <source 
            src="https://www.svp-zug.ch/wp-content/uploads/sites/11/SVP_waehlen_-_weniger_zuwanderung_mehr_heimat_NEU_comp.mp4?_=1" 
            type="video/mp4" 
          />
        </video>
          
        
        {/* Video Controls */}
        <div className="absolute bottom-4 right-4 z-10 flex space-x-2">
          <Button
            onClick={togglePlay}
            size="sm"
            variant="outline"
            className="bg-white/90 backdrop-blur-sm border-white/80 hover:bg-white hover:border-white text-foreground shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-[var(--transition-smooth)]"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <Button
            onClick={toggleMute}
            size="sm"
            variant="outline"
            className="bg-white/90 backdrop-blur-sm border-white/80 hover:bg-white hover:border-white text-foreground shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-[var(--transition-smooth)]"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

