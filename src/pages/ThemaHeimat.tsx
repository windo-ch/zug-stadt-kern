import ThemaPage from "@/components/thema/ThemaPage";

const ThemaHeimat = () => (
  <ThemaPage
    meta={{
      title: "Heimat und Identität – Heimat isch kei Hashtag. | SVP Stadt Zug",
      description:
        "Heimat ist der Ort, an dem man die Regeln kennt, ohne dass sie einem jemand erklären muss. Das ist keine Romantik. Das ist der Grund, warum die Schweiz funktioniert.",
    }}
    hero={{
      image: "/assets/thema/heimat.jpg",
      alt: "Sicherheitsnadel um Schweizer Chalet",
      headline: "Heimat isch kei Hashtag.",
    }}
    lead="Heimat ist der Ort, an dem man die Regeln kennt, ohne dass sie einem jemand erklären muss. Das ist keine Romantik. Das ist der Grund, warum die Schweiz funktioniert."
    intro={{
      title: "Gemeinsame Werte. Gemeinsame Regeln.",
      paragraphs: [
        "Heimat entsteht nicht durch Gesetze. Sie entsteht durch ein gemeinsames Verständnis. Durch Werte, die man teilt. Durch Bräuche, die man lebt. Durch eine Sprache, die man spricht. Durch die Bereitschaft, Verantwortung für die Gemeinschaft zu übernehmen – in der Familie, im Verein, in der Gemeinde.",
        "Die Schweiz ist eine Willensnation. Vier Kulturen, die sich entschieden haben, gemeinsam einen Weg zu gehen. Das funktioniert, weil die gemeinsamen Werte stärker sind als die Unterschiede. Direkte Demokratie. Föderalismus. Eigenverantwortung. Respekt vor dem Anderen. Bescheidenheit. Vertragstreue.",
      ],
    }}
    consequences={{
      title: "Was auf dem Spiel steht.",
      items: [
        {
          label: "Sprache",
          text: "In vielen Schulklassen sprechen weniger als die Hälfte der Kinder Mundart. Brauchtum wird zum Folklore-Event statt zum gelebten Alltag.",
        },
        {
          label: "Kultur",
          text: "Eine kleine, laute Minderheit versucht, unsere Kultur umzuschreiben. Strassennamen werden geändert. Traditionen werden in Frage gestellt.",
        },
        {
          label: "Identität",
          text: "Wer stolz auf sein Land ist, muss sich rechtfertigen. Das ist nicht Fortschritt. Das ist Identitätsverlust.",
        },
        {
          label: "Gemeinschaft",
          text: "Wer zu uns kommt und Teil dieser Gemeinschaft werden will, ist willkommen. Aber das setzt voraus, dass es eine Heimat gibt, die erkennbar bleibt.",
        },
      ],
    }}
    demands={{
      title: "Was wir fordern.",
      items: [
        "Schutz und Pflege von Brauchtum, Mundart und Traditionen",
        "Schulen, die unsere Geschichte, unsere Werte und unsere Landeshymne vermitteln",
        "Integration als Bringschuld: Wer hier lebt, hält sich an unsere Regeln",
        "Keine staatliche Umerziehung und keine Kulturrelativierung",
        "Meinungsfreiheit ohne Maulkorb",
      ],
    }}
    person={{
      name: "Gregor R. Bruhin",
      role: "Kantonsrat",
      profilePath: "/profil/gregor-bruhin",
    }}
    weiterlesen={[
      { title: "Begrenzter Raum", href: "/thema/raum" },
      { title: "Sprache und Mundart", href: "/thema/sprache" },
      { title: "Selbstbestimmung", href: "/thema/selbstbestimmung" },
    ]}
  />
);

export default ThemaHeimat;

