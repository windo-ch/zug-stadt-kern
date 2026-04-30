import ThemaPage from "@/components/thema/ThemaPage";

const ThemaRaum = () => (
  <ThemaPage
    meta={{
      title: "Begrenzter Raum – Ei Tropfe z'vill. | SVP Stadt Zug",
      description:
        "Die Schweiz hat begrenzten Raum. Zuwanderung muss so gesteuert werden, dass sie dem Land dient – nicht es überfordert.",
    }}
    hero={{
      image: "/assets/thema/raum.png",
      alt: "Wasserglas mit Oberflächenspannung",
      headline: "Ei Tropfe z'vill.",
    }}
    lead="Die Schweiz ist ein kleines Land mit begrenztem Raum. Zuwanderung muss so gesteuert werden, dass sie dem Land dient – nicht es überfordert."
    intro={{
      title: "Begrenzter Raum. Unbegrenztes Wachstum.",
      paragraphs: [
        "Die Schweiz hat 41'285 Quadratkilometer. Weniger als Niedersachsen. Jeder Mensch, der hier lebt, braucht eine Wohnung, Strom, ein Bett im Spital, einen Platz in der Schule. Das ist keine Politik. Das ist Physik.",
        "Seit dem Jahr 2000 ist die Bevölkerung der Schweiz um 25.4 Prozent gewachsen. 16 Mal schneller als Deutschland. Wir stehen vor der 10-Millionen-Grenze.",
      ],
    }}
    stats={{
      title: "Bevölkerungswachstum 2000–2024",
      rows: [
        { label: "Deutschland", value: "+1.6 %" },
        { label: "Italien", value: "+3.5 %" },
        { label: "Frankreich", value: "+12.5 %" },
        { label: "Österreich", value: "+14.6 %" },
        { label: "Schweiz", value: "+25.4 %" },
      ],
      source: "Quelle: Weltbank (SP.POP.TOTL)",
    }}
    consequences={{
      title: "Die Folgen spüren wir alle.",
      items: [
        {
          label: "Wohnungsmarkt",
          text: "Bezahlbarer Wohnraum verschwindet. Mieten steigen schneller als die Löhne.",
        },
        {
          label: "Schulen",
          text: "Klassenzimmer an der Kapazitätsgrenze. Immer mehr Sondermassnahmen nötig.",
        },
        {
          label: "Verkehr",
          text: "Staustunden auf Nationalstrassen haben sich seit 2000 vervierfacht.",
        },
        {
          label: "Energie",
          text: "Jeder Zuwanderer braucht Strom. Die Spareffekte pro Kopf werden durch das Bevölkerungswachstum aufgefressen.",
        },
        {
          label: "Natur",
          text: "Kulturland verschwindet. Jede Sekunde gehen 1.1 Quadratmeter Landwirtschaftsfläche verloren.",
        },
      ],
    }}
    demands={{
      title: "Was wir fordern.",
      items: [
        "Umsetzung des Verfassungsauftrags von 2014: eigenständige Steuerung der Zuwanderung",
        "Keine 10-Millionen-Schweiz",
        "Infrastruktur vor Wachstum, nicht umgekehrt",
        "Erhalt von Kulturland und Grünflächen",
        "Zuwanderung, die dem Land dient, nicht es überfordert",
      ],
    }}
    person={{
      name: "Adrian Risi",
      role: "Kantonsrat",
      profilePath: "/profil/adrian-risi",
    }}
    weiterlesen={[
      { title: "Heimat und Identität", href: "/thema/heimat" },
      { title: "Sicherheit", href: "/thema/sicherheit" },
      { title: "Selbstbestimmung", href: "/thema/selbstbestimmung" },
    ]}
  />
);

export default ThemaRaum;

