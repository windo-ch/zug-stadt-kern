import { useEffect, useState, useRef } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Calendar, Users, Target, ArrowRight, Vote, CheckCircle, Building, Award, Zap, Banknote, Shield, BarChart, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import MitmachenSection from '@/components/MitmachenSection';

const Wahlen = () => {
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const electionDate = new Date('2026-10-04T00:00:00');

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, user interaction required
      });
      setIsVideoPlaying(true);
    }
  }, []);

  useEffect(() => {
    // Calculate countdown
    const calculateCountdown = () => {
      const now = new Date();
      const diff = electionDate.getTime() - now.getTime();
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      setDaysRemaining(Math.max(0, days));
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000 * 60 * 60); // Update hourly
    return () => clearInterval(interval);
  }, []);

  const upcomingElections = [
    {
      icon: Award,
      title: "Regierungsratswahlen",
      date: "4. Oktober 2026",
      description: "Wiederwahl von Heinz Tännler als Regierungsrat",
      level: "Kantonal",
      status: "2026",
      priority: "high",
      link: "/profil/heinz-taennler",
      candidate: "Heinz Tännler",
      candidateImage: "/assets/people/profilbilder/Heinz-Taennler.jpg"
    },
    {
      icon: Users,
      title: "Kantonsratswahlen",
      date: "4. Oktober 2026",
      description: "Unsere Kandidaten bringen langjährige politische Erfahrung und Politkompetenz mit",
      level: "Kantonal",
      status: "2026",
      priority: "high",
      link: "/wer-wir-sind#kantonsrat",
      candidates: "Gregor R. Bruhin, Philip C. Brunner, Adrian Risi",
      candidateImages: [
        "/assets/people/profilbilder/gregor-bruhin.jpg",
        "/assets/people/profilbilder/philip-c-brunner.jpg",
        "/assets/people/profilbilder/adrian-risi.jpg"
      ]
    },
    {
      icon: Building,
      title: "Stadtratswahlen",
      date: "4. Oktober 2026",
      description: "André Wicki kandidiert erneut als Stadtrat (seit 2011) und als Stadtpräsident",
      level: "Stadt",
      status: "2026",
      priority: "high",
      link: "/profil/andre-wicki",
      candidate: "André Wicki",
      candidateImage: "/assets/people/profilbilder/Andre-Wicki_SVP.jpg"
    },
    {
      icon: Users,
      title: "Neuwahlen des Grossen Gemeinderats",
      date: "4. Oktober 2026",
      description: "Listenerarbeitung im Gange",
      level: "Stadt",
      status: "2026",
      priority: "high",
      link: "/stadtrat#gemeinderat",
      noCandidates: true
    },
    {
      icon: Shield,
      title: "RPK Rechnungsprüfungskommission",
      date: "2026",
      description: "Rechnungsprüfungskommission der Stadt Zug",
      level: "Stadt",
      status: "2026",
      priority: "medium",
      link: null
    },
    {
      icon: Vote,
      title: "Nationalratswahlen",
      date: "24. Oktober 2027",
      description: "Wahl der Schweizer Nationalräte",
      level: "National",
      status: "2027",
      priority: "medium",
      link: null
    },
    {
      icon: Award,
      title: "Ständerat",
      date: "2027",
      description: "Wahl der Schweizer Ständeräte",
      level: "National",
      status: "2027",
      priority: "medium",
      link: null
    },
    {
      icon: Target,
      title: "Richterwahlen",
      date: "2029",
      description: "Gesamterneuerungswahlen der kantonalen Richter. Sicherstellung einer unabhängigen Justiz.",
      level: "Kantonal",
      status: "2029",
      priority: "low",
      link: null
    }
  ];

  return (
    <PageLayout 
      title="Wahlen 2026 - SVP Stadt Zug"
      description="Kantonsratswahlen 2026 - SVP Stadt Zug bereitet sich vor. Informieren Sie sich über Kandidaten, Programm und wie Sie Teil unserer Bewegung werden können."
    >
      <main>
        {/* Hero Section - Redesigned */}
        <section className="relative min-h-[20vh] flex items-center bg-gradient-to-b from-background to-muted/20 py-12">
          <div className="container-max w-full">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                <span className="bg-gradient-to-r from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] bg-clip-text text-transparent">
                  Für eine starke Zugkunft
                </span>
              </h1>
              
              {/* Simple Horizontal Countdown */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-2xl md:text-3xl font-medium text-foreground">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-muted-foreground">Noch</span>
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] bg-clip-text text-transparent">
                    {daysRemaining}
                  </span>
                </div>
                <span className="text-muted-foreground">Tage bis zum Wahltag</span>
              </div>
            </div>
          </div>
        </section>

        {/* Wahlkampfvideo 2026 */}
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-[var(--shadow-strong)] bg-muted aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted={isVideoMuted}
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
                  onClick={toggleVideoPlay}
                  size="sm"
                  variant="outline"
                  className="bg-white/90 backdrop-blur-sm border-white/80 hover:bg-white hover:border-white text-foreground shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-[var(--transition-smooth)]"
                >
                  {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button
                  onClick={toggleVideoMute}
                  size="sm"
                  variant="outline"
                  className="bg-white/90 backdrop-blur-sm border-white/80 hover:bg-white hover:border-white text-foreground shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] transition-[var(--transition-smooth)]"
                >
                  {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Video Summary */}
        <Section variant="muted">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Zug soll Heimat bleiben – Zuwanderung begrenzen, Lebensqualität schützen
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-center max-w-3xl mx-auto">
              Der Kanton Zug ist unsere Heimat. Doch das starke Bevölkerungswachstum der letzten Jahre verändert unseren Kanton spürbar: mehr Anonymität, mehr Druck auf Wohnraum, Verkehr und Grünflächen. Wir sagen Klartext und setzen uns dafür ein, dass Zug lebenswerte bleibt.
            </p>

            <div className="grid md:grid-cols-1 gap-6 mb-8">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Heimat & Identität bewahren</p>
                        <p className="text-muted-foreground leading-relaxed">Vereinsleben, Brauchtum und Zusammenhalt stärken statt schleichenden Verlust hinnehmen.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Wohnen bezahlbar halten</p>
                        <p className="text-muted-foreground leading-relaxed">Ungebremste Zuwanderung verschärft den Druck auf Mieten und Wohneigentum – besonders für junge Zuger Familien.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold text-foreground mb-1">Infrastruktur entlasten</p>
                        <p className="text-muted-foreground leading-relaxed">Strassen, Busse und Züge stossen an Grenzen – Wachstum braucht klare Leitplanken.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center bg-[hsl(var(--svp-green))]/5 rounded-xl p-6 border border-[hsl(var(--svp-green))]/20">
              <p className="text-lg font-semibold text-foreground mb-2 leading-relaxed">
                Die SVP will die unkontrollierte Zuwanderung stoppen, damit der Kanton Zug kein zugebauter Vorort von Zürich wird, sondern unsere Heimat bleibt.
              </p>
              <p className="text-xl font-bold text-[hsl(var(--svp-green))]">
                Wer das auch will: 2026 SVP wählen.
              </p>
            </div>
          </div>
        </Section>

        {/* Our Goals for 2026 */}
        <Section className="bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Unsere Ziele für 2026"
              description="Unsere strategischen Ziele über die Kantonsratswahlen hinaus"
              alignment="center"
              className="mb-20"
            />

            {/* Three Main Goals - Enhanced Design */}
            <div className="grid md:grid-cols-3 gap-10 mb-20">
              <Card className="group relative bg-gradient-to-br from-card to-card/95 border-2 border-border/50 hover:border-[hsl(var(--svp-green))] shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--svp-green))]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex flex-col items-start gap-6 mb-6">
                    <div className="p-5 bg-gradient-to-br from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-foreground leading-tight">Persönlichkeiten</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-0 relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Wir treten an mit bekannten, qualifizierten Persönlichkeiten aus der Stadt Zug – für den Regierungsrat, den Stadtrat und das Stadtpräsidium, den Kantonsrat, den Grossen Gemeinderat, und die Rechnungsprüfungskommission.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative bg-gradient-to-br from-card to-card/95 border-2 border-border/50 hover:border-[hsl(var(--svp-green))] shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--svp-green))]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex flex-col items-start gap-6 mb-6">
                    <div className="p-5 bg-gradient-to-br from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Banknote className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-foreground leading-tight">Finanzen</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-0 relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Sicherstellung von genügend finanziellen Mitteln, so dass wir während vier Jahren unseren heutigen und unseren zukünftigen Wählern einen permanente Präsenz bieten können.
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative bg-gradient-to-br from-card to-card/95 border-2 border-border/50 hover:border-[hsl(var(--svp-green))] shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--svp-green))]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="pb-6 relative z-10">
                  <div className="flex flex-col items-start gap-6 mb-6">
                    <div className="p-5 bg-gradient-to-br from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-foreground leading-tight">Verankerung</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-0 relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Der SVP Stadt Zug als Partei und den aktiven und passiven Mitgliedern – persönlich und thematisch.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Specific Targets - Enhanced */}
            <Card className="relative border-2 border-[hsl(var(--svp-green))]/40 bg-gradient-to-br from-background via-[hsl(var(--svp-green))]/5 to-background shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--svp-green))]/5 via-transparent to-[hsl(var(--svp-green))]/5"></div>
              <CardHeader className="relative z-10 pb-8">
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-4 bg-gradient-to-br from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] rounded-2xl shadow-xl">
                    <BarChart className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground">Konkrete Ziele</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <p className="text-foreground leading-relaxed text-lg font-medium">
                      Ein Sitz in der RPK
                    </p>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <p className="text-foreground leading-relaxed text-lg font-medium">
                      Wiederwahl von Heinz Tännler als Regierungsrat
                    </p>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <p className="text-foreground leading-relaxed text-lg font-medium">
                      Das Verteidigen des Stadtpräsidiums plus ein zusätzliches Mitglied im Stadtrat
                    </p>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <p className="text-foreground leading-relaxed text-lg font-medium">
                      Mindestens 4 Sitze im Kantonsrat
                    </p>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <p className="text-foreground leading-relaxed text-lg font-medium">
                      Mindestens 9 Sitze im Grossen Gemeinderat
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Enhanced Upcoming Elections */}
        <Section>
          <SectionHeader
            title="Nächste Wahltermine"
            description="Übersicht über alle kommenden Wahlen im Kanton Zug"
            alignment="center"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingElections.map((election, index) => {
              const IconComponent = election.icon;
              const isHighPriority = election.priority === 'high';
              const statusColor = isHighPriority 
                ? 'bg-gradient-to-r from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))] text-white'
                : 'bg-[hsl(var(--swiss-blue))]/10 text-[hsl(var(--swiss-blue-dark))] border border-[hsl(var(--swiss-blue))]/20';
              
              const content = (
                <Card className={`card-elevated group hover:border-[hsl(var(--svp-green))]/40 transition-[var(--transition-smooth)] h-full ${isHighPriority ? 'border-l-4 border-l-[hsl(var(--svp-green))]' : ''} ${election.link ? 'cursor-pointer' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${isHighPriority ? 'bg-gradient-to-br from-[hsl(var(--svp-green))] to-[hsl(var(--svp-green-light))]' : 'bg-[hsl(var(--swiss-blue))]/10'} group-hover:scale-110 transition-transform duration-300 shadow-[var(--shadow-soft)]`}>
                        <IconComponent className={`h-6 w-6 ${isHighPriority ? 'text-white' : 'text-[hsl(var(--swiss-blue))]'}`} />
                      </div>
                      <Badge className={statusColor}>
                        {election.status}
                      </Badge>
                    </div>
                    <CardTitle className={`text-lg ${isHighPriority ? 'text-[hsl(var(--svp-green-dark))]' : 'text-foreground'} group-hover:text-[hsl(var(--svp-green))] transition-colors`}>
                      {election.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-[hsl(var(--svp-green))]" />
                        {election.date}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{election.description}</p>
                      <Badge variant="outline" className="w-fit border-[hsl(var(--swiss-blue))]/30 text-[hsl(var(--swiss-blue-dark))]">
                        {election.level}
                      </Badge>
                      {election.candidate && election.candidateImage && (
                        <div className="pt-3 flex items-center gap-3">
                          <img 
                            src={election.candidateImage} 
                            alt={election.candidate}
                            className="w-12 h-12 rounded-full object-cover border-2 border-[hsl(var(--svp-green))]/30"
                          />
                          <p className="text-sm font-semibold text-foreground">Kandidat: {election.candidate}</p>
                        </div>
                      )}
                      {election.candidates && election.candidateImages && (
                        <div className="pt-3">
                          <p className="text-sm font-semibold text-foreground mb-2">Kandidaten:</p>
                          <div className="flex items-center gap-2 mb-2">
                            {election.candidateImages.map((img, idx) => {
                              const names = election.candidates?.split(', ') || [];
                              return (
                                <img 
                                  key={idx}
                                  src={img} 
                                  alt={names[idx] || ''}
                                  className="w-10 h-10 rounded-full object-cover border-2 border-[hsl(var(--svp-green))]/30"
                                  title={names[idx] || ''}
                                />
                              );
                            })}
                          </div>
                          <p className="text-sm text-muted-foreground">{election.candidates}</p>
                        </div>
                      )}
                      {election.link && (
                        <div className="pt-2 flex items-center text-[hsl(var(--svp-green))] font-semibold text-sm group-hover:translate-x-2 transition-transform">
                          <span className="flex items-center">
                            Mehr erfahren
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );

              return election.link ? (
                <Link key={index} to={election.link}>
                  {content}
                </Link>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </Section>

        {/* Mitmachen Section */}
        <MitmachenSection />

        {/* Animated Flag */}
        <section className="section-padding bg-muted/30">
          <div className="container-max">
            <div className="flex justify-center py-8">
              <img
                src="/logo/svp-stadt-zug-flag-animated-small.gif"
                alt="SVP Stadt Zug Flagge"
                className="h-[150px] w-auto"
              />
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
};

export default Wahlen;
