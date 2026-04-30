import ThemaPage from "@/components/thema/ThemaPage";

const ThemaSprache = () => (
  <ThemaPage
    meta={{
      title: "Sprache und Mundart – Eusi Sprach. Eusi Identität. | SVP Stadt Zug",
      description:
        "Mundart ist nicht Folklore. Sie ist das tägliche Bekenntnis zu einer Gemeinschaft. Wer die Sprache verliert, verliert die Zugehörigkeit.",
    }}
    hero={{
      image: "/assets/thema/sprache.jpg",
      alt: "Schweizer Sackmesser mit eingravierten Buchstaben",
      headline: "Eusi Sprach. Eusi Identität.",
    }}
    lead="Mundart ist nicht Folklore. Sie ist das tägliche Bekenntnis zu einer Gemeinschaft. Wer die Sprache verliert, verliert die Zugehörigkeit."
    intro={{
      title: "Sprache ist Heimat.",
      paragraphs: [
        "Die Schweiz hat vier Landessprachen. Aber sie hat mehr als das. Sie hat Hunderte von Dialekten. Jedes Tal, jede Stadt, jedes Dorf hat seine eigene Art zu sprechen. Das ist kein Problem. Das ist Reichtum. Es ist gelebter Föderalismus in seiner ursprünglichsten Form.",
        "Mundart ist das, was die Schweiz von Deutschland, Frankreich und Italien unterscheidet. Es ist der Klang der Zugehörigkeit. Wer Mundart spricht, sagt damit: Ich gehöre hierher. Ich bin Teil dieser Gemeinschaft.",
      ],
    }}
    consequences={{
      title: "Was auf dem Spiel steht.",
      items: [
        {
          label: "Schulen",
          text: "In vielen Schulklassen, besonders in den Städten, ist Mundart zur Minderheitensprache geworden. Wenn mehr als die Hälfte der Kinder eine andere Muttersprache spricht, verschwindet der natürliche Spracherwerb.",
        },
        {
          label: "Pflege",
          text: "Mundart wird dann nicht mehr gelebt, sondern bestenfalls noch gepflegt – wie eine bedrohte Tierart im Zoo.",
        },
        {
          label: "Gendersprache",
          text: "Gendersternchen, Doppelpunkte und künstliche Formen entstellen die Sprache im Namen einer Ideologie, die von einer kleinen Minderheit getragen wird. Wer sich nicht anpasst, riskiert Notenabzüge.",
        },
      ],
    }}
    demands={{
      title: "Was wir fordern.",
      items: [
        "Stärkung des Mundart-Unterrichts an den Schulen",
        "Deutsch als selbstverständliche Umgangssprache im öffentlichen Raum",
        "Keine Gender-Sprachvorschriften in Verwaltung und Schulen",
        "Einhaltung der geltenden Rechtschreibregeln",
        "Sprachkenntnisse als zwingende Voraussetzung für Einbürgerung (Niveau C1)",
        "Integration bedeutet auch: die lokale Sprache sprechen",
      ],
    }}
    person={{
      name: "Roman Küng",
      role: "Fraktionspräsident",
      profilePath: "/profil/roman-kueng",
    }}
    weiterlesen={[
      { title: "Heimat und Identität", href: "/thema/heimat" },
      { title: "Begrenzter Raum", href: "/thema/raum" },
      { title: "Selbstbestimmung", href: "/thema/selbstbestimmung" },
    ]}
  />
);

export default ThemaSprache;

