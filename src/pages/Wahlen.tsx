import { useEffect, useState, useRef } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import { Calendar, Users, Target, ArrowRight, Vote, CheckCircle, Building, Award, Banknote, Shield, BarChart, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import MitmachenSection from '@/components/MitmachenSection';
import {
  STADT_WAHLSIEG_PATH,
  KANTON_WAHLSIEG_PATH,
  kantonsratStadtZugElected2026,
} from '@/data/electionResults2026';

const Wahlen = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const upcomingElections = [
    {
      icon: Award,
      title: "Regierungsrat",
      date: "4. Oktober 2026",
      description: "Heinz Tännler (SVP Stadt Zug) mit 20'358 Stimmen (3. Platz) als Regierungsrat bestätigt.",
      level: "Kantonal",
      status: "gewählt",
      priority: "high",
      link: "/profil/heinz-taennler",
      candidate: "Heinz Tännler",
      candidateImage: "/assets/people/jpg-2026/Heinz-Taennler.jpg",
      resultLabel: "Gewählt",
    },
    {
      icon: Users,
      title: "Kantonsrat (Stadt Zug)",
      date: "4. Oktober 2026",
      description: "4 Sitze (+1): Adrian Risi, Gregor R. Bruhin, Philip C. Brunner und Roman Küng.",
      level: "Kantonal",
      status: "gewählt",
      priority: "high",
      link: "/kantonsrat",
      candidates: kantonsratStadtZugElected2026.map((p) => p.name).join(", "),
      candidateImages: kantonsratStadtZugElected2026.map((p) => p.image),
      resultLabel: "Gewählt",
    },
    {
      icon: Building,
      title: "Stadtrat",
      date: "4. Oktober 2026",
      description: "André Wicki ist als Stadtpräsident in seiner 5. Amtszeit als Stadtrat bestätigt (4'426 Stimmen).",
      level: "Stadt",
      status: "gewählt",
      priority: "high",
      link: "/profil/andre-wicki",
      candidate: "André Wicki",
      candidateImage: "/assets/people/profilbilder/Andre-Wicki_SVP.jpg",
      resultLabel: "Gewählt",
    },
    {
      icon: Users,
      title: "Grosser Gemeinderat",
      date: "4. Oktober 2026",
      description: "Historischer Zuwachs auf 9 Sitze (+2). Die Fraktion ist so stark wie noch nie.",
      level: "Stadt",
      status: "gewählt",
      priority: "high",
      link: "/stadtrat",
    },
    {
      icon: Shield,
      title: "Rechnungsprüfungskommission",
      date: "4. Oktober 2026",
      description: "Daniel Gramm in stiller Wahl als RPK-Mitglied bestätigt.",
      level: "Stadt",
      status: "gewählt",
      priority: "high",
      link: "/profil/daniel-gramm",
      candidate: "Daniel Gramm",
      candidateImage: "/assets/people/profilbilder/daniel-gramm.jpg",
      resultLabel: "Gewählt",
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
      title="Wahlergebnis 2026 - SVP Stadt Zug"
      description="Die erfolgreichsten Wahlen in der Geschichte der SVP Stadt Zug: 9 GGR-Sitze, 4 Kantonsräte, André Wicki im Stadtrat bestätigt."
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
              
              <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
                Die erfolgreichsten Wahlen in der Geschichte der SVP Stadt Zug. Danke für Ihr Vertrauen am 4. Oktober 2026.
              </p>
              <div className="mt-8 mx-auto max-w-4xl grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border border-[hsl(var(--svp-green))]/20 bg-background/80 p-4">
                  <p className="text-2xl font-bold text-[hsl(var(--svp-green))]">9</p>
                  <p className="text-sm text-muted-foreground mt-1">Sitze im GGR (+2)</p>
                </div>
                <div className="rounded-xl border border-[hsl(var(--svp-green))]/20 bg-background/80 p-4">
                  <p className="text-2xl font-bold text-[hsl(var(--svp-green))]">4</p>
                  <p className="text-sm text-muted-foreground mt-1">Kantonsräte (+1)</p>
                </div>
                <div className="rounded-xl border border-[hsl(var(--svp-green))]/20 bg-background/80 p-4">
                  <p className="text-2xl font-bold text-[hsl(var(--svp-green))]">5.</p>
                  <p className="text-sm text-muted-foreground mt-1">Amtszeit André Wicki</p>
                </div>
                <div className="rounded-xl border border-[hsl(var(--svp-green))]/20 bg-background/80 p-4">
                  <p className="text-2xl font-bold text-[hsl(var(--svp-green))]">1</p>
                  <p className="text-sm text-muted-foreground mt-1">Regierungsrat Tännler</p>
                </div>
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-base text-muted-foreground leading-relaxed">
                Kantonweit ist die SVP mit 24 Prozent und 20 von 80 Sitzen stärkste Kraft im Kantonsrat.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild>
                  <Link to={STADT_WAHLSIEG_PATH}>Zur Medienmitteilung</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/wahlen/kandidaten">Mandate 2027–2030</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to={KANTON_WAHLSIEG_PATH}>Kantonaler Wahlsieg</Link>
                </Button>
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
                  src="/Mehr%20Heimat,%20weniger%20Zuwanderung%20mit%20untertitel.webm" 
                  type="video/webm" 
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
                Danke für Ihr Vertrauen am 4. Oktober 2026.
              </p>
            </div>
            <div className="mt-10">
              <img
                src="/assets/wahlen-2026/kantonsrat-waehlerstaerke-stadt-zug-2026.png"
                alt="Balkendiagramm: Wählerstärke der Parteien in der Stadt Zug bei den Kantonsratswahlen 2022 und 2026. SVP 21,2 Prozent."
                className="w-full max-w-3xl mx-auto rounded-xl border border-border"
                loading="lazy"
              />
            </div>
          </div>
        </Section>

        {/* Our Goals for 2026 */}
        <Section className="bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Ziele erreicht"
              description="Was wir uns für den 4. Oktober 2026 vorgenommen haben – und gehalten haben."
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
                    Bekannte, qualifizierte Persönlichkeiten aus der Stadt Zug stehen in Regierungsrat, Stadtrat, Kantonsrat, Grossem Gemeinderat und Rechnungsprüfungskommission.
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
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground">Alles erreicht</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <p className="text-foreground leading-relaxed text-lg font-medium">
                      RPK: Daniel Gramm bestätigt
                    </p>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <p className="text-foreground leading-relaxed text-lg font-medium">
                      Heinz Tännler bleibt Regierungsrat
                    </p>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <p className="text-foreground leading-relaxed text-lg font-medium">
                      Stadtpräsidium verteidigt: André Wicki, 5. Amtszeit
                    </p>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <p className="text-foreground leading-relaxed text-lg font-medium">
                      4 Sitze im Kantonsrat (Stadt Zug)
                    </p>
                  </div>
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--svp-green))] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <p className="text-foreground leading-relaxed text-lg font-medium">
                      9 Sitze im Grossen Gemeinderat
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
            title="Resultate und nächste Termine"
            description="Die Wahlen vom 4. Oktober 2026 sind entschieden. Nationalrat und Ständerat folgen 2027."
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
                            className="w-12 h-12 rounded-full object-cover object-top border-2 border-[hsl(var(--svp-green))]/30"
                          />
                          <p className="text-sm font-semibold text-foreground">{election.resultLabel ?? "Kandidat"}: {election.candidate}</p>
                        </div>
                      )}
                      {election.candidates && election.candidateImages && (
                        <div className="pt-3">
                          <p className="text-sm font-semibold text-foreground mb-2">{election.resultLabel ?? "Kandidaten"}:</p>
                          <div className="flex items-center gap-2 mb-2">
                            {election.candidateImages.map((img, idx) => {
                              const names = election.candidates?.split(', ') || [];
                              return (
                                <img 
                                  key={idx}
                                  src={img} 
                                  alt={names[idx] || ''}
                                  className="w-10 h-10 rounded-full object-cover object-top border-2 border-[hsl(var(--svp-green))]/30"
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
