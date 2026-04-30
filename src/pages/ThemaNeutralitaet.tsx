import ThemaPage from "@/components/thema/ThemaPage";

const ThemaNeutralitaet = () => (
  <ThemaPage
    meta={{
      title: "Neutralität – Friede brucht Stärchi. | SVP Stadt Zug",
      description:
        "Die Schweiz war 200 Jahre lang neutral. Nicht aus Feigheit, sondern aus Überzeugung. Die Welt braucht neutrale Vermittler mehr denn je.",
    }}
    hero={{
      image: "/assets/thema/neutralitaet.jpg",
      alt: "Weisse Taube mit Schweizerkreuz",
      headline: "Friede brucht Stärchi.",
    }}
    lead="Die Schweiz war 200 Jahre lang neutral. Nicht aus Feigheit, sondern aus Überzeugung. Die Welt braucht neutrale Vermittler mehr denn je."
    intro={{
      title: "Neutralität ist kein Wegschauen.",
      paragraphs: [
        "Neutralität ist die aktive Entscheidung, der Ort zu sein, an dem Frieden verhandelt wird – nicht der Ort, der Kriege verlängert. 200 Jahre ohne Krieg. Nicht weil die Schweiz Glück hatte. Sondern weil sie konsequent war.",
        "Immerwährend: Nicht situativ. Nicht je nach Sympathie. Immer. Bewaffnet: Nicht wehrlos. Verteidigungsfähig. Glaubwürdig. Integral: Militärisch, diplomatisch, wirtschaftlich, finanziell. Genau diese Dreiteilung macht die Schweizer Neutralität einzigartig. Und genau diese Dreiteilung wird gerade aufgeweicht.",
      ],
    }}
    consequences={{
      title: "Was auf dem Spiel steht.",
      items: [
        {
          label: "EU-Sanktionen",
          text: "Die Übernahme von EU-Sanktionen gegen Russland war ein Bruch mit der Schweizer Neutralitätstradition. Nicht weil Russlands Krieg gerechtfertigt wäre – sondern weil die Schweiz dadurch ihre Rolle als glaubwürdige Vermittlerin verloren hat.",
        },
        {
          label: "Armee",
          text: "Die Armee wird seit Jahrzehnten kaputtgespart. Bewaffnete Neutralität ohne funktionsfähige Armee ist ein leeres Versprechen. Die Armeeausgaben liegen weit unter einem Prozent des Bruttoinlandprodukts.",
        },
        {
          label: "Abhängigkeit",
          text: "Wer die Neutralität aufgibt, gibt die Schweiz auf. Ohne Neutralität wäre die Schweiz ein Kleinstaat ohne strategische Bedeutung – abhängig von Grossmächten, die ihre eigenen Interessen verfolgen.",
        },
      ],
    }}
    demands={{
      title: "Was wir fordern.",
      items: [
        "Festschreibung der immerwährenden, bewaffneten Neutralität in der Verfassung",
        "Keine Übernahme einseitiger Sanktionen",
        "Keine NATO-Annäherung und keine militärischen Verpflichtungen",
        "Erhöhung des Armeebudgets auf mindestens 1 Prozent des BIP",
        "Wiederaufbau der Verteidigungsfähigkeit",
        "Stärkung der Guten Dienste und der Vermittlerrolle",
      ],
    }}
    person={{
      name: "André Wicki",
      role: "Stadtpräsident",
      profilePath: "/profil/andre-wicki",
    }}
    weiterlesen={[
      { title: "Selbstbestimmung", href: "/thema/selbstbestimmung" },
      { title: "Sicherheit", href: "/thema/sicherheit" },
      { title: "Heimat und Identität", href: "/thema/heimat" },
    ]}
  />
);

export default ThemaNeutralitaet;

