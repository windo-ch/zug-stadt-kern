import ThemaPage from "@/components/thema/ThemaPage";

const ThemaSelbstbestimmung = () => (
  <ThemaPage
    meta={{
      title: "Selbstbestimmung – Euse Schlüssel. Euses Schloss. | SVP Stadt Zug",
      description:
        "Die Schweiz funktioniert, weil Entscheidungen nah am Bürger getroffen werden. Jedes Abkommen, das Entscheidungsgewalt nach Brüssel verlagert, schwächt dieses Prinzip.",
    }}
    hero={{
      image: "/assets/thema/selbstbestimmung.jpg",
      alt: "Goldener Schlüssel mit Schweizerkreuz",
      headline: "Euse Schlüssel. Euses Schloss.",
    }}
    lead="Die Schweiz funktioniert, weil Entscheidungen nah am Bürger getroffen werden. Jedes Abkommen, das Entscheidungsgewalt nach Brüssel verlagert, schwächt dieses Prinzip."
    intro={{
      title: "Von unten nach oben gebaut.",
      paragraphs: [
        "Die Schweiz ist das einzige Land der Welt, in dem der Bürger bei jeder wichtigen Frage das letzte Wort hat. Initiative, Referendum, Volksabstimmung. Kein Parlament, kein Gericht, keine internationale Institution steht über dem Volkswillen. Das ist kein Zufall. Das ist das Fundament unseres Wohlstands.",
        "Was der Einzelne tun kann, soll nicht die Gemeinde tun. Was die Gemeinde tun kann, soll nicht der Kanton tun. Was der Kanton tun kann, soll nicht der Bund tun. Und was der Bund tun kann, soll nicht Brüssel tun.",
      ],
    }}
    consequences={{
      title: "Was auf dem Spiel steht.",
      items: [
        {
          label: "Dynamische Rechtsübernahme",
          text: "Die EU macht ein Gesetz, und die Schweiz übernimmt es automatisch – ohne Mitwirkung des Volkes.",
        },
        {
          label: "Soft Law",
          text: "Handlungsrichtlinien, die als unverbindlich gelten, aber schrittweise bindend werden.",
        },
        {
          label: "Masseneinwanderungsinitiative 2014",
          text: "Vom Volk angenommen, vom Parlament verwässert.",
        },
        {
          label: "Ausschaffungsinitiative 2010",
          text: "Vom Volk angenommen, von den Gerichten ausgehebelt. Das ist kein Rechtsstaat. Das ist ein Demokratiedefizit.",
        },
        {
          label: "Überlegenheit",
          text: "Die Schweiz ist der EU in Sachen Demokratie, Wohlstand und Lebensqualität überlegen – nicht trotz ihrer Unabhängigkeit, sondern wegen ihr.",
        },
      ],
    }}
    demands={{
      title: "Was wir fordern.",
      items: [
        "Keine institutionelle Anbindung an die EU",
        "Keine dynamische Rechtsübernahme",
        "Keine fremden Richter",
        "Konsequente Umsetzung angenommener Volksinitiativen",
        "Transparenz und Volksabstimmungen bei Soft Law",
        "Stärkung des Föderalismus und der kantonalen Kompetenzen",
        "Immerwährende, bewaffnete und integrale Neutralität",
      ],
    }}
    person={{
      name: "Heinz Tännler",
      role: "Regierungsrat",
      profilePath: "/profil/heinz-taennler",
    }}
    weiterlesen={[
      { title: "Neutralität", href: "/thema/neutralitaet" },
      { title: "Heimat und Identität", href: "/thema/heimat" },
      { title: "Begrenzter Raum", href: "/thema/raum" },
    ]}
  />
);

export default ThemaSelbstbestimmung;

