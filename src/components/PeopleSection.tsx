import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const PeopleSection = () => {
  // All people in the specified order
  const allPeople = [
    // 1. Heinz Tännler
    {
      name: "Heinz Tännler",
      role: "Regierungsrat",
      position: "Finanzdirektor",
      image: "./assets/people/profilbilder/Heinz-Taennler.jpg",
      profileLink: "/profil/heinz-taennler",
      category: "Regierungsrat",
      imageScale: 1.3,
      objectPosition: "center 20%",
      translateY: "8%"
    },
    // 2. André Wicki
    {
      name: "André Wicki",
      role: "Stadtpräsident",
      position: "Stadtrat, Vorstand",
      image: "./assets/people/profilbilder/Andre-Wicki_SVP.jpg",
      profileLink: "/profil/andre-wicki",
      category: "Stadtpräsident"
    },
    // 3. Gregor Bruhin
    {
      name: "Gregor R. Bruhin",
      role: "Kantonsrat",
      position: "Co-Wahlkampfleiter",
      image: "./assets/people/profilbilder/gregor-bruhin.jpg",
      profileLink: "/profil/gregor-bruhin",
      category: "Kantonsrat",
      imageScale: 1.2,
      objectPosition: "center 20%",
      translateY: "6%"
    },
    // 4. Philip C. Brunner
    {
      name: "Philip C. Brunner",
      role: "Präsident GPK",
      position: "Gemeinderat",
      image: "./assets/people/profilbilder/philip-c-brunner.jpg",
      profileLink: "/profil/philip-brunner",
      category: "Präsident GPK"
    },
    // 5. Adrian Risi
    {
      name: "Adrian Risi",
      role: "Kantonsrat",
      position: "Präsident, Vorstand",
      image: "./assets/people/profilbilder/adrian-risi.jpg",
      profileLink: "/profil/adrian-risi",
      category: "Kantonsrat"
    },
    // 6. Marcus Bühler
    {
      name: "Marcus Bühler",
      role: "Gemeinderat",
      position: "Vorstand",
      image: "./assets/people/vorstand/Marcus-Buehler_SVP.jpg",
      profileLink: "/profil/marcus-buehler",
      category: "Gemeinderat"
    },
    // 7. Roman Küng
    {
      name: "Roman Küng",
      role: "Fraktionspräsident",
      position: "Vizepräsident, Vorstand",
      image: "./assets/people/profilbilder/roman-kueng.jpg",
      profileLink: "/profil/roman-kueng",
      category: "Fraktionspräsident"
    },
    // 8. Raphael Tschan
    {
      name: "Raphael Tschan",
      role: "Vizepräsident",
      position: "Mitglied RPK",
      image: "./assets/people/profilbilder/raphael-tschan.jpg",
      profileLink: "/profil/raphael-tschan",
      category: "Vizepräsident"
    }
  ];

  return (
    <section id="people" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Wer wir sind
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deine Nachbaren. Deine Stimme.
          </p>
        </div>

        {/* Carousel with circular avatars */}
        <div className="relative px-8 md:px-16 mb-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {allPeople.map((person, index) => {
                const content = (
                  <div className="group flex flex-col items-center text-center p-4 hover:scale-105 transition-transform duration-300">
                    {/* Circular avatar with green border and shiny effects - fixed size for consistency */}
                    <div className="relative mb-4">
                      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[hsl(var(--svp-green))] shadow-lg group-hover:shadow-xl group-hover:border-[hsl(var(--svp-green-light))] transition-all duration-300">
                        <div 
                          className="w-full h-full"
                          style={{ 
                            transform: [
                              person.imageScale ? `scale(${person.imageScale})` : null,
                              person.translateY ? `translateY(${person.translateY})` : null
                            ].filter(Boolean).join(' ') || undefined,
                            transformOrigin: 'center center'
                          }}
                        >
                          <img
                            src={person.image}
                            alt={person.name}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                            width="160"
                            height="160"
                            style={{ 
                              objectPosition: person.objectPosition || 'center top'
                            }}
                          />
                        </div>
                        {/* Shiny effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      {/* Category badge */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-[hsl(var(--svp-green))] text-white text-xs font-semibold rounded-full whitespace-nowrap shadow-md group-hover:bg-[hsl(var(--svp-green-light))] transition-colors duration-300">
                        {person.category}
                      </div>
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {person.name}
                    </h3>
                    
                    {/* Position */}
                    <p className="text-xs text-muted-foreground">
                      {person.position}
                    </p>
                  </div>
                );

                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    {person.profileLink ? (
                      <Link to={person.profileLink}>
                        {content}
                      </Link>
                    ) : (
                      content
                    )}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12 bg-background/80 backdrop-blur-sm border-2 border-[hsl(var(--svp-green))] hover:bg-[hsl(var(--svp-green))] hover:text-white" />
            <CarouselNext className="right-0 md:-right-12 bg-background/80 backdrop-blur-sm border-2 border-[hsl(var(--svp-green))] hover:bg-[hsl(var(--svp-green))] hover:text-white" />
          </Carousel>
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-8">
          <Link to="/wer-wir-sind">
            <Button className="btn-outline group">
              Alle Aktiven
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
