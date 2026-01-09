import { ArrowRight, Users, Target, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToValues = () => {
    const element = document.querySelector('#values');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

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

  // Stat Card Component with Count-up Animation
  const StatCard = ({ 
    value, 
    suffix, 
    label, 
    sublabel, 
    link 
  }: { 
    value: number; 
    suffix: string; 
    label: string; 
    sublabel: string; 
    link: string | null;
  }) => {
    const { count, elementRef } = useCountUp(value, { duration: 2000, startOnView: true });
    
    const content = (
      <div 
        ref={elementRef}
        className="relative group min-w-[140px] p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-svp-green/20 to-svp-green/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative text-center">
          <div className="text-4xl font-bold bg-gradient-to-r from-svp-green to-svp-green-light bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
            {count}{suffix}
          </div>
          <div className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
            {label}
          </div>
          {sublabel && (
            <div className="text-xs text-foreground/60 mt-1">
              {sublabel}
            </div>
          )}
        </div>
      </div>
    );

    if (link) {
      return <Link to={link}>{content}</Link>;
    }
    return content;
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        poster="./assets/zug-images/zug-overview-svp_1.jpg"
      >
        <source 
          src="https://www.svp-zug.ch/wp-content/uploads/sites/11/SVP_waehlen_-_weniger_zuwanderung_mehr_heimat_NEU_comp.mp4?_=1" 
          type="video/mp4" 
        />
      </video>
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50 z-5"></div>
      
      {/* Video Controls */}
      <div className="absolute top-4 right-4 z-30 flex space-x-2">
        <Button
          onClick={togglePlay}
          size="sm"
          variant="outline"
          className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Button
          onClick={toggleMute}
          size="sm"
          variant="outline"
          className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="container-max">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center space-x-3">
              <div className="px-4 py-2 bg-primary/30 rounded-full border border-primary/40">
                <span className="text-primary font-semibold text-sm">SVP Stadt Zug</span>
              </div>
                                        <Link to="/wahlen" className="px-4 py-2 bg-red-600/30 rounded-full border border-red-600/40 hover:bg-red-600/50 transition-colors">
                            <span className="text-red-700 font-semibold text-sm">Wahlen 2026</span>
                          </Link>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-svp-green-light to-svp-green bg-clip-text text-transparent">
                Mir lieferet
              </span>{' '}
              <span className="bg-gradient-to-r from-svp-green via-svp-green to-svp-green-light bg-clip-text text-transparent">
                – für eusi Stadt Zug
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Wir setzen uns für eine sichere, freie und lebenswerte Stadt Zug ein – 
              direkt, bürgernah und lösungsorientiert. Für starke Familien, sichere Quartiere 
              und eine florierende Wirtschaft.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToContact}
                className="btn-hero group"
              >
                <Users className="mr-2 h-5 w-5" />
                Mitmachen
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={scrollToValues}
                className="btn-outline group"
              >
                <Target className="mr-2 h-5 w-5" />
                Unsere Ziele
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 md:grid md:grid-cols-4 md:gap-6">
              <StatCard
                value={33}
                suffix=""
                label="Jahre"
                sublabel="für Stadt Zug"
                link="/geschichte"
              />
              <StatCard
                value={200}
                suffix="+"
                label="Mitglieder"
                sublabel=""
                link={null}
              />
              <StatCard
                value={8}
                suffix=""
                label="Sitze"
                sublabel="im GGR"
                link={null}
              />
              <StatCard
                value={25}
                suffix="%"
                label="Wähleranteil"
                sublabel="2022"
                link={null}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;