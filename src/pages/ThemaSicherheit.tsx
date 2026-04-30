import ThemaPage from "@/components/thema/ThemaPage";

const ThemaSicherheit = () => (
  <ThemaPage
    meta={{
      title: "Sicherheit – Zue isch zue. | SVP Stadt Zug",
      description:
        "In der Schweiz soll sich jeder Mensch sicher fühlen. Auf der Strasse, im Ausgang, zu Hause. Sicherheit ist kein Luxus. Sie ist ein Grundrecht.",
    }}
    hero={{
      image: "/assets/thema/sicherheit.jpg",
      alt: "Türriegel, geschlossen",
      headline: "Zue isch zue.",
    }}
    lead="In der Schweiz soll sich jeder Mensch sicher fühlen. Auf der Strasse, im Ausgang, zu Hause. Sicherheit ist kein Luxus. Sie ist ein Grundrecht."
    intro={{
      title: "Sicherheit ist die Basis von allem.",
      paragraphs: [
        "Ohne Sicherheit keine Freiheit. Ohne Freiheit kein Wohlstand. Das wussten schon die Gründer unseres Landes 1291. Der Bundesbrief regelt zwei Dinge: Freiheit und Sicherheit. Beides gehört zusammen.",
        "Die Schweiz gehörte einst zu den sichersten Ländern der Welt. Das ist keine Selbstverständlichkeit. Es ist das Resultat von klaren Regeln und konsequenter Durchsetzung.",
      ],
    }}
    stats={{
      title: "Was schief läuft.",
      rows: [
        { label: "Vergewaltigungen 2021", value: "757 – höchster Wert in 10 Jahren" },
        { label: "Schwere Körperverletzungen", value: "steigen seit 2018 kontinuierlich" },
        { label: "Ausländeranteil Haftanstalten", value: "70 %" },
        { label: "Jugendkriminalität 2018–2021", value: "+27.5 %" },
        { label: "Cyberkriminalität 2021", value: "30'351 Fälle, +24 %" },
      ],
      source:
        "Quellen: BFS, Polizeiliche Kriminalstatistik. Obwohl das Volk 2010 mit der Ausschaffungsinitiative klar entschieden hat, werden kriminelle Ausländer nicht konsequent ausgeschafft. In 42 Prozent der Fälle wird die Härtefallklausel angerufen.",
    }}
    demands={{
      title: "Was wir fordern.",
      items: [
        "Konsequente Umsetzung der Ausschaffungsinitiative",
        "Nulltoleranz bei Gewaltdelikten",
        "Opferschutz vor Täterschutz",
        "Verstärkung des Grenzschutzes",
        "Härtere Strafen für Wiederholungstäter",
        "Unbedingte Freiheitsstrafen für verurteilte Vergewaltiger",
        "Ausbau der Cyberabwehr",
      ],
    }}
    person={{
      name: "Philip C. Brunner",
      role: "Gemeinderat",
      profilePath: "/profil/philip-brunner",
    }}
    weiterlesen={[
      { title: "Begrenzter Raum", href: "/thema/raum" },
      { title: "Heimat und Identität", href: "/thema/heimat" },
      { title: "Neutralität", href: "/thema/neutralitaet" },
    ]}
  />
);

export default ThemaSicherheit;

