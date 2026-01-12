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
  // All people with profiles, in the specified order
  const allPeople = [
    // 1. Andre Wicki (first)
    {
      name: "André Wicki",
      role: "Stadtpräsident",
      position: "Stadtrat",
      image: "./assets/people/vorstand/Andre-Wicki_SVP.jpg",
      profileLink: "/profil/andre-wicki",
      category: "Stadtrat"
    },
    // 2. Adrian Risi
    {
      name: "Adrian Risi",
      role: "Präsident",
      position: "Kantonsrat",
      image: "./assets/people/profilbilder/adrian-risi.jpg",
      profileLink: "/profil/adrian-risi",
      category: "Vorstand"
    },
    // 3. Roman Küng
    {
      name: "Roman Küng",
      role: "Vizepräsident",
      position: "GGR Fraktionspräsident",
      image: "./assets/people/profilbilder/roman-kueng.jpg",
      profileLink: "/profil/roman-kueng",
      category: "Vorstand"
    },
    // 4. Raphael Tschan
    {
      name: "Raphael Tschan",
      role: "Vizepräsident",
      position: "Mitglied RPK",
      image: "./assets/people/profilbilder/raphael-tschan.jpg",
      profileLink: "/profil/raphael-tschan",
      category: "Vorstand"
    },
    // 5. Rest of Vorstand
    {
      name: "Philip C. Brunner",
      role: "Vorstandsmitglied",
      position: "Gemeinderat, Präsident GPK",
      image: "./assets/people/profilbilder/philip-c-brunner.jpg",
      profileLink: "/profil/philip-brunner",
      category: "Vorstand"
    },
    {
      name: "Marcus Bühler",
      role: "Vorstandsmitglied",
      position: "Gemeinderat",
      image: "./assets/people/vorstand/Marcus-Buehler_SVP.jpg",
      profileLink: "/profil/marcus-buehler",
      category: "Vorstand"
    },
    // 6. Others with profiles
    {
      name: "Norbert Schlumpf",
      role: "Gemeinderat",
      position: "GGR",
      image: "./assets/people/profilbilder/norbert-schlumpf.jpg",
      profileLink: "/profil/norbert-schlumpf",
      category: "GGR-Fraktion"
    },
    {
      name: "Alex Odermatt",
      role: "Gemeinderat",
      position: "Mitglied Spezialkommission",
      image: "./assets/people/profilbilder/alex-odermatt.jpg",
      profileLink: "/profil/alex-odermatt",
      category: "GGR-Fraktion"
    },
    {
      name: "René Gretener",
      role: "Gemeinderat",
      position: "GGR",
      image: "./assets/people/profilbilder/rene-gretener.jpg",
      profileLink: "/profil/rene-gretener",
      category: "GGR-Fraktion"
    },
    {
      name: "Manfred Pircher",
      role: "Gemeinderat",
      position: "Mitglied Bau- und Planungskommission",
      image: "./assets/people/profilbilder/manfred-pircher.jpg",
      profileLink: "/profil/manfred-pircher",
      category: "GGR-Fraktion"
    }
  ];

  return (
    <section id="people" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Wer mir sind
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dini Nachbare. Dini Stimm.
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
              {allPeople.map((person, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Link
                    to={person.profileLink}
                    className="group flex flex-col items-center text-center p-4 hover:scale-105 transition-transform duration-300"
                  >
                    {/* Circular avatar with green border and shiny effects - fixed size for consistency */}
                    <div className="relative mb-4">
                      <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[hsl(var(--svp-green))] shadow-lg group-hover:shadow-xl group-hover:border-[hsl(var(--svp-green-light))] transition-all duration-300">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                          width="160"
                          height="160"
                          style={{ objectPosition: 'center top' }}
                        />
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
                    
                    {/* Role */}
                    <p className="text-sm font-semibold text-primary mb-1">
                      {person.role}
                    </p>
                    
                    {/* Position */}
                    <p className="text-xs text-muted-foreground">
                      {person.position}
                    </p>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12 bg-background/80 backdrop-blur-sm border-2 border-[hsl(var(--svp-green))] hover:bg-[hsl(var(--svp-green))] hover:text-white" />
            <CarouselNext className="right-0 md:-right-12 bg-background/80 backdrop-blur-sm border-2 border-[hsl(var(--svp-green))] hover:bg-[hsl(var(--svp-green))] hover:text-white" />
          </Carousel>
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-8">
          <Link to="/wer-wir-sind">
            <Button className="btn-outline group">
              Alli Aktive ahluege
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PeopleSection;
