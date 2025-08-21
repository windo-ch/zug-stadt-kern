import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Users, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const TausenderClubVeranstaltungen = () => {
  const events = [
    {
      title: "«Dütsch. Dütlich. DETTLING!» - Redet Klartext!",
      date: "3. Juli 2025",
      speaker: "Nationalrat Marcel Dettling, Parteipräsident SVP Schweiz",
      content: `Was für ein toller Sommerabend mit dem Parteipräsidenten der SVP Schweiz, Nationalrat Marcel Dettling, den die Mitglieder und Gäste des 1000er Clubs erleben durften. Einige kannten Marcel Dettling persönlich, andere – der Autor eingeschlossen – lediglich aus den Medien.

Jovial, gut gelaunt, per Handschlag gleich per Du, und mit sprühender Freude – so zeigte sich sofort: Wir hatten einen sehr sympathischen und gradlinigen Parteipräsidenten als Ehrengast und Tischredner eingeladen. Verständlich und eindrücklich entsprechend auch seine Schilderungen zur aktuellen Finanzlage der Schweiz.

**Zahlen trotz beschränkten Mitteln**
Prekär, doch dank der (noch) bestehenden Schuldenbremse stabil, unterwirft sich die Politik fast schon unterwürfig der EU. Kein Handelsvertrag – als jüngstes Beispiel Mercosur – kommt ohne «Ablasszahlungen» aus. Die offizielle Schweiz überweist der EU, die täglich Waren im Wert von CHF 70 Mio. mehr in die Schweiz exportiert als umgekehrt, einfach mir nix, Dir nix CHF 350'000'000.-, damit sie, die Schweiz, mit der EU-Handel treiben darf.

Fremdes Geld – sprich: Steuergelder – auszugeben, ist einfach. Das zeigte sich exemplarisch bei der NEAT. Über CHF 23 Milliarden wurden durch den CH-Steuerzahler für den Bau aufgebracht. Und weil Italien und Deutschland ihre vertraglichen Verpflichtungen nicht einhielten, finanzierte die Schweiz auch gleich noch deren Gleisausbau auf fremdem Staatsgebiet – mit Hunderten von Millionen, mit.

**Wie weiter?**
Der EU-(Unterwerfungs-)Vertrag ist abzulehnen – auch weil er die Rechte unserer direkten Demokratie nicht richtig respektiert bzw. berücksichtigt. Die SVP Schweiz vertritt in erster Linie das Volk und dessen demokratische Rechte.

**Zum Dank**
Zum Abschluss dieses engagierten Abends überreicht Kantonsrat und Kantonalpräsident der SVP-Zug, Philip C. Brunner, Nationalrat Marcel Dettling als Dank und Anerkennung für eine herausragende und spannende Tischrede eine gut eingeschwungene Schwingerhose des Schwingclubs Zug-Oberwil – sowie eine kräftig getränkte Zuger Kirschtorte.

Wie immer für Tischredner und Ehrengäste des 1000er Club gilt: **Aus Zug geht keiner nach Hause ohne Kirschtorte!**`,
      author: "Marcus Bühler"
    },
    {
      title: "Alt Bundesrat Ueli Maurers Polittalk 'Aktuelles und Anekdotisches'",
      date: "27. Februar 2025",
      speaker: "Alt Bundesrat Ueli Maurer",
      content: `Der am 27. Februar 2025 – dem Zuger Fasnachtsstart am Schmutzigen Duunschtig – mit grosser Spannung erwartete Abend hielt vollkommen, was seine Affiche versprach. Mit 53 Teilnehmern war der Festsaal im Hotel Guggital bis auf den letzten Platz ausgebucht.

Ueli Maurer, wie man ihn kennt und schätzt: guter Laune, volksnah, direkt und mit einem enormen Erfahrungsschatz aus Bundesbern und als Bundesrat, führte aus, wie er seine Zeit im eidgenössischen Parlament erlebt hat.

**Wer führt in Bern?**
Der Bundesrat, der pro Sitzung bis zu 200 Geschäfte zu besprechen hat, oder die Verwaltung mit bis zu 12'000 Angestellten?

**Pragmatisches Verhältnis mit Europa**
Ein pragmatisches, vernünftiges Verhältnis mit Europa ist zwingend. Ein Unterwerfungsvertrag zugunsten einer mehr oder weniger schlecht funktionierenden (Bürokratie-)Gemeinschaft ist fraglich.

**Identitätsverlust der Schweiz**
Ein wichtiges Anliegen war Ueli Maurer auch der erodierende Identitätsverlust der Schweiz. Nicht nur der Wehrwillen braucht einen Weckruf, sondern der Zusammenhalt leidet generell.

**Eine Rückbesinnung ist zwingend!**
Auf unsere Schweizer Werte, unsere Schweizer Errungenschaften, unsere Schweizer Erfolge, unsere Schweizer Neutralität, die seit 1515 ein integraler Bestandteil unserer Schweiz ist.

Mit nicht endendem Applaus wurde die Tischrede gewürdigt. Das Engagement der Teilnehmer war unglaublich. Spontan entschlossen sich mehr als ein Viertel der Joker-Gäste, dem 1000er Club beizutreten. Der neueste Mitgliederstand beträgt somit 50!`,
      author: "Marcus H. Bühler"
    },
    {
      title: "Rückblick 2024: Metzgete",
      date: "2024",
      speaker: "Morten Hannesbo, 1000er-Club-Mitglied",
      content: `Nicht nur der Titel der Tischrede des 1000er-Club-Mitglieds, Morten Hannesbo, tönte spannend, auch das 20' Referat dazu überzeugte durch das Fachwissen, die Logik und der Schlussfolgerung: 'Solange die Sonne scheint, gibt es genug Energie, um Elektroautos zu betreiben!'

**Zukunft der Mobilität**
Selbstfahrende Fahrzeuge sind in 20 Jahren im Alltag nicht mehr wegzudenken– die Mobilität und Autonomie des Einzelnen steigt dadurch enorm.

Bei den anwesenden Mitgliedern und Gästen – u.a. Markus Somm, Chefredaktor des Nebelspalters – fanden solche klaren Worte nur bedingt Zustimmung. Die Wortmeldungen zeigten deutlich, wie interessant, aber auch kontrovers, das Thema Elektroautos sein kann.

Die Flädlisuppe, die reichhaltige Metzgete mit abschliessendem Eiskaffee mit Güx trugen dazu bei, dass das Treffen des 1000er Clubs der SVP Stadt Zug in der Wirtschaft Brandenberg, trotz heftigstem Schneegestöber, ein unvergesslicher Abend war.`,
      author: "Marcus H. Bühler"
    },
    {
      title: "Rückblick 2024: Eh chli stinka muassas!",
      date: "2024",
      speaker: "Claudia Wirz",
      content: `Zum ersten Anlass 2024 traf sich der 1000er Club auf dem Motorschiff Titan zum Raclette-au-Lac. Nach einem Aperitivo nach Wahl und einem feinen Bündnerplättli fand der Abend mit der Tischrede von Claudia Wirz seinen eigentlichen Höhepunkt.

**Thema: Warum die meisten Journalisten links sind und was wir dagegen tun können**

**Drei Thesen:**

**Schuldig 1. – die Digitalisierung**
Viele Journalisten recherchieren nicht mehr sauber vor Ort, sondern verlassen sich auf Informationen aus dem Internet.

**Schuldig 2. – die Ausbildung**
Die Universitäten sind zur Brutstätte von linken Ideologien geworden. Dieser 'Wokismus' zeigt sich sehr stark in den Fächern der Geisteswissenschaften.

**Schuldig 3. – der Narzissmus**
Viele Journalisten befassen sich im Kern mit der eigenen Nabelschau.

Der Nichtendendwollende Applaus war der Tischrednerin gewiss. Ein tolles Referat der Neo-Zugerin Claudia Wirz, die "In Zug wunschlos glücklich ist. Denn hier habe ich gefunden, was ich in Zürich immer mehr vermisste: Unternehmergeist, Offenheit und Bürgernähe."`,
      author: "Marcus H. Bühler"
    },
    {
      title: "Rückblick 2023: Die Metzgete des 1000er Clubs",
      date: "23. November 2023",
      speaker: "Hubert Mooser, Bundeshausredaktor der Weltwoche",
      content: `Die Tischrede des extra aus seiner Wahlheimat, Appenzell Innerrhoden, angereisten Hubert Mooser war amüsant und aufrüttelnd zugleich. Die Ausführungen und Anekdoten einer über 40-jährigen journalistischen Tätigkeit erlaubten einen unglaublich tiefen Einblick in die nationale Politszene.

**Schmankerl aus dem Vortrag:**
Was ein neuer EU-Rahmenvertrag unter der juristischen Fuchtel des EUgH bedeuten wird, wie lasch und mit welchem vorauseilendem Gehorsam die neusten Verhandlungen geführt werden und warum sich die Schweiz mit mehr Selbstvertrauen politischen Anfeindungen zur Neutralität stellen sollte.

Zitat Hubert Mooser: "Eigentlich ist es egal wer gewählt wird, denn ein Linker bleibt ein Linker!"

Sehr erfreulich war, dass sich am Abend gleich 3 Gäste mit Jokerkarte zum Beitritt in den 1000er-Club entschlossen.`,
      author: "Marcus H. Bühler"
    },
    {
      title: "Rückblick 2023: Was dich nicht umhaut, macht dich stärker!",
      date: "31. Mai 2023",
      speaker: "Camille Lothe, Präsidentin SVP Stadt Zürich",
      content: `BODIGE – Was Dich nicht umhaut, macht Dich stark! Auf dem altehrwürdigen Zurlaubenhof startete die Veranstaltung bei sonnigem Wetter. Der erste Teil drehte sich um die Schnapsmacherei Heiner's Destillate.

**Die Kunst des Destillierens**
Thomas & Cordula Heiner betreiben auf dem Zurlaubenhof eine kleine Schnapsbrennerei. Klein aber fein, international mehrfach prämiert: Für die Destillate werden nur die besten Grundprodukte verwendet.

**Tischrede: BODIGE – Wie sich die SVP in der Stadt Zürich erfolgreich durchsetzt!**
Camille Lothe hielt eine enthusiastische und kämpferische Tischrede. In Zürich SVP Politik zu betreiben ist schwer und benötigt eine hohe Frusttoleranz, denn Mehrheiten für bürgerliche Politik zu erreichen, ist ein Ding der schieren Unmöglichkeit.

Entsprechend beeindruckt waren die Mitglieder des 1000er Clubs über die Ausführungen von Camille Lothe. Gleichzeitig waren sie jedoch froh, dass in Zug keine solchen Zustände herrschen.`,
      author: "Marcus H. Bühler"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-24 px-4">
        <div className="container-max mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Calendar className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">Vergangene Events</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            1000er Club Veranstaltungen
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Entdecken Sie unsere bisherigen exklusiven Events und die spannenden 
            Tischreden unserer hochkarätigen Gäste.
          </p>
          
          <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20 bg-white/10" asChild>
            <Link to="/1000er-club">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Zurück zum 1000er Club
            </Link>
          </Button>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding">
        <div className="container-max mx-auto">
          <div className="space-y-12">
            {events.map((event, index) => (
              <Card key={index} className="card-elevated">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {event.speaker}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none">
                    {event.content.split('\n\n').map((paragraph, pIndex) => {
                      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                        return (
                          <h3 key={pIndex} className="text-xl font-semibold text-primary mt-6 mb-3">
                            {paragraph.replace(/\*\*/g, '')}
                          </h3>
                        );
                      }
                      return (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4">
                          {paragraph.replace(/\*\*/g, '')}
                        </p>
                      );
                    })}
                    
                    <div className="border-t pt-4 mt-6">
                      <p className="text-sm text-muted-foreground">
                        Für den 1000er Club der SVP Stadt Zug<br />
                        <span className="font-medium">{event.author}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="card-elevated max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Werden Sie Teil des 1000er Clubs
                </h3>
                <p className="text-muted-foreground mb-6">
                  Erleben Sie exklusive Veranstaltungen mit hochkarätigen Gästen 
                  und engagieren Sie sich für die politische Zukunft von Zug.
                </p>
                <Button className="btn-hero" asChild>
                  <a href="mailto:sekretariat.stadt@svp-zug.ch">
                    Jetzt Mitglied werden
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TausenderClubVeranstaltungen;