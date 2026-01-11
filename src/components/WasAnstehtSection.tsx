import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const WasAnstehtSection = () => {
  // Top 3 most important/timely items from WasAnsteht page
  const featuredEvents = [
    {
      id: 1,
      title: "Aktuelle Geopolitische Herausforderungen der Schweiz",
      date: "2025-08-21",
      time: "19:00", 
      location: "Rest. Luegisland, Finstersee/Menzingen",
      type: "Vortrag",
      description: "Ein Abend zu den aktuellen politischen Entwicklungen auf internationaler Ebene",
      priority: "high"
    },
    {
      id: 2,
      title: "Sommeranlass SVP Stadt Zug",
      date: "2025-08-22",
      time: "18:30",
      location: "Rest. Barakka, Allmendstr. 26, Zug",
      type: "Anlass",
      description: "Gemütlicher Sommeranlass der SVP Stadt Zug für Mitglieder und Interessierte",
      priority: "high"
    },
    {
      id: 3,
      title: "Abstimmungssonntag",
      date: "2025-09-28",
      time: "ganztags",
      location: "Schweizweit",
      type: "Abstimmung",
      description: "Eidgenössische und kantonale Abstimmungen - informieren Sie sich über unsere Empfehlungen",
      priority: "high"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-CH', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getTypeColor = (type: string) => {
    // Use SVP design system colors
    switch (type.toLowerCase()) {
      case 'vortrag':
        return 'bg-[hsl(var(--swiss-blue))]/10 text-[hsl(var(--swiss-blue))] border-[hsl(var(--swiss-blue))]/20';
      case 'anlass':
        return 'bg-[hsl(var(--svp-green))]/10 text-[hsl(var(--svp-green-dark))] border-[hsl(var(--svp-green))]/30';
      case 'abstimmung':
        return 'bg-[hsl(var(--svp-orange))]/10 text-[hsl(var(--svp-orange-dark))] border-[hsl(var(--svp-orange))]/30';
      case 'versammlung':
        return 'bg-[hsl(var(--swiss-blue))]/10 text-[hsl(var(--swiss-blue-dark))] border-[hsl(var(--swiss-blue))]/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <section id="was-ansteht" className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-max">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Was ansteht</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Aktuelle Termine & Wichtiges
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bleiben Sie informiert über die wichtigsten anstehenden Termine, 
            Veranstaltungen und politischen Ereignisse der SVP Stadt Zug.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredEvents.map((event) => (
            <Card key={event.id} className="card-elevated group hover:border-[hsl(var(--svp-green))]/30 transition-[var(--transition-smooth)]">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={`${getTypeColor(event.type)} font-semibold border`}>
                    {event.type}
                  </Badge>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-foreground">
                      {formatDate(event.date)}
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center justify-end">
                      <Clock className="w-3 h-3 mr-1" />
                      {event.time}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-[hsl(var(--svp-green))] transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  {event.description}
                </CardDescription>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-[hsl(var(--svp-green))]" />
                  <span className="truncate">{event.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/was-ansteht">
            <Button className="btn-hero group">
              <Calendar className="mr-2 h-5 w-5" />
              Alle Termine anzeigen
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WasAnstehtSection;
