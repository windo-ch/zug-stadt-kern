export type SteckbriefCandidateSlug =
  | "adrian-risi"
  | "alessia-bischof"
  | "alex-odermatt"
  | "andre-wicki"
  | "andrea-risi"
  | "benny-elsener"
  | "claudio-schmid"
  | "daniel-gramm"
  | "henry-barrows"
  | "karl-keiser"
  | "kilian-krall"
  | "markus-laemmler"
  | "marcus-buehler"
  | "rene-gretener"
  | "roman-kueng"
  | "simon-ruckstuhl"
  | "ursula-keiser"
  | "philip-stierli";

export type ElectionOffice = "Stadtpräsidium" | "Stadtrat" | "GGR" | "Kantonsrat";
export type ElectionStatus = "Bisher" | "Neu";

export interface ElectionCandidacy {
  office: ElectionOffice;
  status: ElectionStatus;
}

export interface SteckbriefCandidate {
  slug: SteckbriefCandidateSlug;
  name: string;
  kandidatur: string;
  currentOffices?: string[];
  candidacies2026?: ElectionCandidacy[];
  birthDateISO?: string;
  address?: string;
  location?: string;
  phone?: string;
  mobile?: string;
  email?: string;
  maritalStatus?: string;
  children?: string;
  profession?: string;
  statement?: string;
  biography?: string;
  mandate?: string[];
  commissions?: string[];
  positions?: string[];
  education?: string[];
  clubs?: string[];
  hobbies?: string[];
  priorities?: string[];
  socials?: {
    website?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
  image: string;
}

export const steckbriefCandidates: Record<SteckbriefCandidateSlug, SteckbriefCandidate> = {
  "adrian-risi": {
    slug: "adrian-risi",
    name: "Adrian Risi",
    kandidatur: "GGR, Kantonsrat",
    currentOffices: ["Kantonsrat", "Präsident SVP Stadt Zug"],
    candidacies2026: [
      { office: "Kantonsrat", status: "Bisher" },
      { office: "GGR", status: "Neu" },
    ],
    birthDateISO: "1962-11-10",
    address: "Eichwaldstrasse 22",
    location: "6300 Zug",
    phone: "041 766 99 49",
    mobile: "079 606 62 56",
    email: "adrian.risi@risiimmobilienag.ch",
    maritalStatus: "verheiratet",
    children: "Nik (2009)",
    profession: "Dipl. Betr. Oec. FH (Immobilien, Private Equity)",
    statement: "Mit allen Mitteln unsere Schweiz erhalten!",
    priorities: ["Mehr Freiheit, Selbstverantwortung, weniger Staat und Bürokratie"],
    biography:
      "Ich bin in Zug geboren und bin seit 6 Jahrzehnten in Zug tätig, sowohl gesellschaftlich, als auch unternehmerisch. Daher liegt mir viel am Herzen den Zuger Weg zu pflegen und weiterzuentwickeln. Viele beneiden uns! Ich setze alles ein, um Zug weiterhin auf dem Erfolgspfad halten zu können.",
    mandate: ["Präsident SVP Stadt Zug (2024)", "Kantonsrat SVP Stadt Zug (2019)"],
    commissions: [
      "Präsident Kommission für Tiefbau und Gewässer (2023)",
      "Mitglied der Kommission für Raumplanung und Verkehr (2019)",
    ],
    positions: [
      "Präsident SVP Stadt Zug",
      "Vorstand SVP Stadt Zug",
      "Mitglied Zuger Wirtschaftskammer",
      "Mitglied Schneiderzunft",
      "VR EVZ Sport AG",
    ],
    education: ["Matura Typ B", "Fachhochschule für Wirtschaft, Luzern (Dipl. Betr. Oec. FH)"],
    clubs: ["Passivmitglied vieler Sportvereine im Kanton Zug"],
    hobbies: ["Sport (Fitness, Ski)", "Berge", "Lesen"],
    socials: {},
    image: "/assets/people/profilbilder/adrian-risi.jpg",
  },

  "alessia-bischof": {
    slug: "alessia-bischof",
    name: "Alessia Bischof",
    kandidatur: "GGR, Kantonsrat",
    currentOffices: ["Vizepräsidentin SVP Stadt Zug"],
    candidacies2026: [
      { office: "GGR", status: "Neu" },
      { office: "Kantonsrat", status: "Neu" },
    ],
    birthDateISO: "2001-01-11",
    address: "Pilatusstrasse 3",
    location: "6300 Zug",
    email: "alessia.bischof@goforit-ag.com",
    maritalStatus: "ledig",
    children: "keine",
    profession: "Unternehmerin (Immobilien)",
    statement: "Jede Zugerin soll nachts um zwei sicher durch die Stadt gehen können.",
    priorities: ["Für eine hohe Lebensqualität in Zug: Sicherheit im Alltag und Politik nahe bei den Menschen."],
    biography:
      "Unternehmergeist liegt mir im Blut. Ich bin in einer Familie aufgewachsen, in der seit Generationen angepackt statt abgewartet wird. Heute führe ich gemeinsam mit meiner Mutter unser familieneigenes Immobilienunternehmen. International geprägt und zugleich fest in Zug verwurzelt – hier bin ich zuhause. Für meine Heimat will ich Verantwortung übernehmen, in der Überzeugung, dass Leistung Türen öffnet und harte Arbeit den Unterschied macht. Den Kopf frei bekomme ich am besten bei einer Wanderung auf den Zugerberg – dort oben wird mir klar, wofür sich der Einsatz lohnt.",
    positions: ["Vizepräsidentin SVP Stadt Zug"],
    education: [
      "Bachelor Sozialwissenschaften (Kommunikation und Medien)",
      "Master International Management (MIM)",
    ],
    clubs: [
      "Nachbarschaft Vorstadt-Neustadt Zug",
      "Gewerbeverein der Stadt Zug",
      "Zuger Wanderwege",
    ],
    hobbies: ["Tauchen", "Wandern", "Reisen"],
    socials: { instagram: "https://www.instagram.com/alessia_k_bischof/" },
    image: "/assets/people/jpg-2026/Alessia-Bischof.jpg",
  },

  "alex-odermatt": {
    slug: "alex-odermatt",
    name: "Alex Odermatt",
    kandidatur: "GGR / KR",
    currentOffices: ["GGR", "Bau- und Planungskommission"],
    candidacies2026: [
      { office: "GGR", status: "Bisher" },
      { office: "Kantonsrat", status: "Neu" },
    ],
    birthDateISO: "1969-03-25",
    address: "St. Johannesstrasse 4",
    location: "6300 Zug",
    mobile: "079 335 63 54",
    email: "alexodermatt@bluewin.ch",
    maritalStatus: "geschieden",
    children: "1",
    profession: "Verkauf Büroeinrichtungen, gepr. Arbeitsplatzexperte (Gewerbe)",
    statement:
      "Mir ist es wichtig auf die Bevölkerung zu hören und ihr Anliegen wahrzunehmen. Darum setze ich mich für Vereine ein. Man muss achten, dass Vereine nicht mit Bürokratie belastet werden, sondern sich auf den Einsatz für die Bevölkerung in kulturellen, sportlichen und gesellschaftlichen Belangen konzentrieren können.",
    priorities: ["Vereine", "Gewerbe", "Leben in der Stadt"],
    biography: undefined,
    mandate: ["Gemeinderat seit 23.02.2021"],
    commissions: ["Bau- und Planungskommission", "Büro GGR"],
    clubs: [
      "Vorstand Zunft der Letzibuzäli Zug",
      "Vorstand Zuger Kantonales Schwingfest (Schwingklub Oberwil Zug)",
      "Vorstand IG Chriesi Zug",
    ],
    hobbies: ["Fasnacht", "Sport", "Wandern"],
    socials: {},
    image: "/assets/people/jpg-2026/Alex-Odermatt.jpg",
  },

  "andre-wicki": {
    slug: "andre-wicki",
    name: "André Wicki",
    kandidatur: "Stadtpräsident Zug",
    currentOffices: ["Stadtpräsident", "Stadtrat", "Vorstand SVP Stadt Zug"],
    candidacies2026: [
      { office: "Stadtpräsidium", status: "Bisher" },
      { office: "Stadtrat", status: "Bisher" },
    ],
    birthDateISO: "1962-08-04",
    address: "Stolzengraben 61",
    location: "6317 Oberwil",
    email: "andre.wicki@stadtzug.ch",
    maritalStatus: "verheiratet",
    children: "2",
    profession: "Stadtpräsident",
    statement:
      "Es braucht attraktive Bedingungen für Kleingewerbe und Wirtschaft.\nEs braucht zahlbaren Wohnraum für alle Zugerinnen und Zuger.",
    biography:
      "Frühe Jahre: Geboren 1962, wuchs ich in Cham und Hünenberg auf. Seit 1992 lebe ich mit meiner Familie in Zug und bin stolzer Zuger Bürger.\n\nFamilie: Meine Frau Lucia und ich heirateten im November 1992 im Stadthaus am Kolinplatz und sind enorm stolz auf unsere beiden Töchter.\n\nBerufliche Laufbahn: Nach meinem Ökonomie-Studium und MBA-Abschluss habe ich bis 2010 verschiedene Führungspositionen in nationalen und internationalen Unternehmen, zuletzt als Geschäftsleitungsmitglied bekleidet.\n\nStadtpräsident: Als Stadtpräsident setze ich mich für attraktive Bedingungen für Wirtschaft und bezahlbaren Wohnraum für alle Zugerinnen und Zuger ein.",
    mandate: [
      "2022–heute: Stadtpräsident und Vorsteher des Präsidialdepartements",
      "2018–2021: Stadtrat und Vorsteher des Finanzdepartements",
      "2011–2018: Stadtrat und Vorsteher des Baudepartements",
    ],
    education: [
      "VR Swiss Board School Corporate Uni SG (2019)",
      "European Executive MBA, Hochschule Luzern (2008–2009)",
      "Swiss Executive MBA, Hochschule Luzern (2000–2001)",
      "Studium Betriebsökonom, Hochschule Luzern (1984–1987)",
    ],
    positions: ["Vorstand SVP Stadt Zug"],
    hobbies: ["Biken", "Boxen", "Lesen", "Kochen", "Zeit mit Familie und Freunden"],
    socials: {},
    image: "/assets/people/profilbilder/Andre-Wicki_SVP.jpg",
  },

  "daniel-gramm": {
    slug: "daniel-gramm",
    name: "Daniel Gramm",
    kandidatur: "GGR, Kantonsrat",
    currentOffices: ["Kulturkommission"],
    candidacies2026: [
      { office: "GGR", status: "Neu" },
      { office: "Kantonsrat", status: "Neu" },
    ],
    birthDateISO: "1964-08-30",
    address: "Gartenstadt 11",
    location: "6300 Zug",
    phone: "077 510 43 04",
    mobile: "077 510 43 04",
    email: "daniel.gramm@bluewin.ch",
    maritalStatus: "verheiratet",
    children: "ja",
    profession: "Betriebsökonom und Lehrer (Bildung)",
    statement: "Zug soll lebenswert bleiben.",
    priorities: ["Freiheit", "Unabhängigkeit", "Sicherheit"],
    biography:
      "In meiner ersten Lebenshälfte stand vor allem der wirtschaftliche Erfolg im Zentrum meiner Tätigkeiten. Seither rückt mehr und mehr das Gemeinwohl und der Erfolg unserer Jugend in den Vordergrund.",
    mandate: [
      "Schulkommission der Stadt Zug (2018–2020)",
      "Bildungsrat des Kantons Zug (2020–2026)",
      "Kulturkommission der Stadt Zug (2024–2026)",
    ],
    education: [
      "Matura Typus E (Wirtschaftswissenschaften)",
      "Betriebsökonom HWV/FH",
      "Lehrer (Mathematik, Deutsch, Geografie, Geschichte)",
    ],
    clubs: ["Sportverein ehemaliger Kantischüler von Zug"],
    socials: {},
    image: "/assets/people/profilbilder/daniel-gramm.jpg",
  },

  "kilian-krall": {
    slug: "kilian-krall",
    name: "Kilian Krall",
    kandidatur: "GGR, Kantonsrat",
    candidacies2026: [
      { office: "GGR", status: "Neu" },
      { office: "Kantonsrat", status: "Neu" },
    ],
    birthDateISO: "2002-06-02",
    address: "Zugerbergstrasse 53",
    location: "6302 Zug",
    mobile: "078 648 45 14",
    email: "krallkilian@gmail.com",
    maritalStatus: "ledig",
    profession: "Innendekorateur (Luftfahrt)",
    statement:
      "Um unsere Stadt weiterzuentwickeln müssen wir attraktive Rahmenbedingungen für das heimische Unternehmertum bieten und unsere Kultur, Bräuche und das Vereinsleben pflegen.",
    priorities: [
      "Vernünftiger Umgang mit Steuergeldern",
      "Bürokratieabbau und attraktiver Wirtschaftsstandort (insb. Kleingewerbe)",
      "Autofreundliche Stadt – keine Schikanen für Autofahrer",
      "Erhalt von Kultur und Bräuchen",
    ],
    biography:
      "Meine ganze Kindheit verbrachte ich in Zug, ebenso absolvierte ich meine Berufslehre in der Stadt Zug, die ich im Sommer 2022 erfolgreich abschliessen durfte. Direkt darauf ging ich in die Rekrutenschule, liess mich zum Leutnant ausbilden und verdiente den neuen Dienstgrad bis Ende 2023 ab. 2024 arbeitete ich als Bodenleger und begann die Handelsschule. Im Dezember 2024 begann ich als Innendekorateur bei den Pilatus Flugzeugwerken zu arbeiten. Im Sommer 2025 schloss ich die Handelsschule ab.",
    positions: ["Leutnant (Zugführer)"],
    education: ["Innendekorateur EFZ", "Dipl. Kaufmann VSH"],
    clubs: [
      "Militärschiessverein Zug",
      "Freiwillige Feuerwehr Zug",
      "Offiziersgesellschaft des Kantons Zug",
    ],
    hobbies: ["Schiessen", "Feuerwehrdienst"],
    socials: {},
    image: "/assets/people/jpg-2026/Kilian-Krall_kravatte.jpg",
  },

  "marcus-buehler": {
    slug: "marcus-buehler",
    name: "Marcus H. Bühler",
    kandidatur: "Gemeinderat",
    currentOffices: ["GGR", "Vorstand SVP Stadt Zug", "Nachhaltigkeitskommission", "Mittelschulkommission"],
    candidacies2026: [{ office: "GGR", status: "Bisher" }],
    birthDateISO: "1962-07-15",
    address: "Bahnhofstrasse 27",
    location: "6300 Zug",
    phone: "079 340 81 68",
    mobile: "079 340 81 68",
    email: "mbuehler@weissenstein-partner.ch",
    maritalStatus: "liiert",
    children: "keine",
    profession:
      "Exekutiver Verwaltungsratspräsident Weissenstein & Partner AG, MBA, CFA (Finanz-/Vermögensverwaltung)",
    statement: "SVP Stadt Zug - Gemeinsam für Wirtschaft, Gesellschaft und unsere bürgerlichen Werte",
    priorities: [
      "Selbstverantwortung – für eine eigenständige, föderalistische Schweiz",
      "Umsichtiger Umgang mit Steuergeldern, lebenswerte Stadt Zug, pragmatische Lösungen und Umsetzung",
    ],
    biography:
      "Marcus H. Bühler ist ein Schweizer (Bürger der Stadt Zug) Unternehmer und Politiker (SVP) aus der Stadt Zug. Er verfügt über langjährige Erfahrung im Bankenwesen u. a. als Verwaltungsratspräsident sowie CEO bei Privatbanken. Politisch ist er Gemeinderat der Stadt Zug sowie Mitglied der städtischen Nachhaltigkeitskommission und der kantonalen Mittelschulkommission. Zudem engagiert er sich in verschiedenen wirtschaftsnahen Gremien.",
    mandate: ["Mitglied des Grossen Gemeinderats Stadt Zug (2024)"],
    commissions: [
      "Mitglied der Nachhaltigkeitskommission Stadt Zug (2020)",
      "Mitglied der Mittelschulkommission des Kantons Zug (2023)",
    ],
    positions: [
      "Vorstandsmitglied SVP Stadt Zug",
      "Präsident Sponsorenvereinigung «1000er Club»",
      "Beirat HWZ Banking & Finance",
      "Gerichtssachverständiger High Court of Justice London",
    ],
    education: [
      "Betriebswirtschafter",
      "MBA",
      "CFA",
      "Nachdiplom Verwaltungsrat (HSG-IMP / Swiss Board School)",
    ],
    clubs: [
      "Mitglied Zuger Wirtschaftskammer",
      "Mitglied Zuger Kantonaler Patentjägerverein",
      "Mitglied IG Chriesi Zug",
      "Mitglied Jägerverein Tasna",
      "Mitglied Baur au Lac Club, Zürich",
    ],
    hobbies: ["Jagd (Bündner- und Zugerjäger)", "Fliegenfischen"],
    socials: { instagram: "https://www.instagram.com/sirbumbleb?igsh=czdhcjZrNGJ1dWFv&utm_source=qr" },
    image: "/assets/people/jpg-2026/Marcus-Buehler_kravatte.jpg",
  },

  "rene-gretener": {
    slug: "rene-gretener",
    name: "René Gretener",
    kandidatur: "Grosser Gemeinderat",
    currentOffices: ["GGR", "Feuerwehrkommission"],
    candidacies2026: [{ office: "GGR", status: "Bisher" }],
    birthDateISO: "1961-09-15",
    address: "Lüssirainstrasse 1",
    location: "6300 Zug",
    mobile: "079 962 49 28",
    email: "rghkswiss@gmail.com",
    maritalStatus: "verheiratet",
    children: "2",
    profession: "Vermögensverwalter (Finanzdienstleistungen)",
    statement: "Steuerzahler schützen. Bürokratie abbauen. Wohnungsbau unterstützen.",
    priorities: ["Steuerzahler schützen", "Bürokratie abbauen", "Wohnungsbau unterstützen"],
    biography:
      "Geboren, aufgewachsen und Primar-/Bezirksschule absolviert in Mellingen/AG. Kaufmännische Versicherungslehre, dann Wechsel ins Bankwesen mit diversen Weiterbildungen zum Anlagespezialisten. Verschiedene Kaderstellen bei SBG/SBV/UBS sowie BNP Paribas. Über zehn Jahre in Hong Kong im Bereich Swiss Private Banking tätig. Seit der Rückkehr 2004 in der Stadt Zug daheim und seit 2011 auch hier arbeitstätig in einer lokalen Firma für unabhängige Vermögensverwaltung. Verheiratet, zwei erwachsene Töchter. Seit 2021 Bürger der Stadt Zug.",
    mandate: ["Mitglied Grosser Gemeinderat (2023–2026)"],
    commissions: ["Feuerwehrkommission (seit 2023)"],
    education: [
      "Kaufmännische Versicherungslehre",
      "Englischaufenthalte USA und Grossbritannien (Certificate of Proficiency)",
      "Weiterbildungen (Betriebswirtschaft, Investment Management, Finanzanalyse)",
    ],
    clubs: ["Mitglied Stadtzuger Letzibuzäli Zunft", "Vizepräsident Gönnerclub 200 (LA Hochwacht Zug)"],
    hobbies: ["Ski", "Oldtimerfahrzeuge"],
    socials: { instagram: "renegretener" },
    image: "/assets/people/profilbilder/rene-gretener.jpg",
  },

  "roman-kueng": {
    slug: "roman-kueng",
    name: "Roman Küng",
    kandidatur: "Gemeinderat, Kantonsrat",
    currentOffices: ["GGR", "Vizepräsident SVP Stadt Zug"],
    candidacies2026: [
      { office: "GGR", status: "Bisher" },
      { office: "Kantonsrat", status: "Neu" },
    ],
    birthDateISO: "1972-04-18",
    address: "Bernoldweg 9",
    location: "6300 Zug",
    mobile: "079 329 13 33",
    email: "roman.kueng@bluewin.ch",
    maritalStatus: "ledig",
    children: "0",
    profession: "Garagist / Unternehmer (Automobile)",
    statement:
      "«Ich setze mich für eine attraktive Stadt ein. Unsere Wirtschaft und unser Gewerbe brauchen gute Rahmenbedingungen und keine lebensfremde, bevormundende, bürokratische Politik. Die Wirtschaft soll wachsen, nicht der Staat!»",
    priorities: ["SVP: Freiheit, Sicherheit, Unabhängigkeit!"],
    biography:
      "Ich bin 1972 in Zug geboren und in Allenwinden aufgewachsen. Nach der Sekundarschule machte ich eine Lehre als Auto-Elektriker, mit anschliessender Weiterbildung zum eidg. diplomierten Automobil Diagnostiker. 1998 übernahmen mein Bruder und ich den elterlichen Garagenbetrieb; die heutige Garage Küng AG in Neuägeri. Mein ganzes Leben verbrachte ich im Kanton Zug (Gemeinden Zug und Baar) und würde mich deshalb als «Zuger Urgestein» bezeichnen. Ich habe keine Kinder und bin unverheiratet.",
    mandate: ["Mitglied GGR (seit 01.01.2019)"],
    positions: [
      "Vizepräsident SVP Stadt Zug",
      "Fraktionschef SVP GGR Stadt Zug",
      "Mitglied Vorstand Gewerbeverein Stadt Zug",
      "Präsident Stiftung Kinderdemenz Schweiz",
    ],
    education: ["Auto-Elektriker", "Automobil-Diagnostiker"],
    clubs: [
      "Gewerbeverein Stadt Zug",
      "Verein Zuger Wanderwege",
      "Quartierverein St. Michael Zug",
      "Zug94",
      "Verein Herzlich Zug",
    ],
    hobbies: ["Reisen", "Wandern", "historischer Motorsport", "Jassen"],
    socials: {
      instagram: "https://www.instagram.com/roman.kueng/",
      facebook: "https://www.facebook.com/roman.kung.94",
      website: "https://www.svp-zug.ch/personen/roman-kueng/",
    },
    image: "/assets/people/jpg-2026/Roman-Kueng_kravatte.jpg",
  },

  "simon-ruckstuhl": {
    slug: "simon-ruckstuhl",
    name: "Simon Ruckstuhl",
    kandidatur: "GGR, Kantonsrat",
    currentOffices: ["Vorstand SVP Stadt Zug"],
    candidacies2026: [
      { office: "GGR", status: "Neu" },
      { office: "Kantonsrat", status: "Neu" },
    ],
    birthDateISO: "1989-11-29",
    address: "Industriestrasse 8",
    location: "6300 Zug",
    mobile: "079 227 37 67",
    email: "simon@airhosted.ch",
    maritalStatus: "verheiratet",
    children: "1",
    profession: "Unternehmer (Immobilien/Tourismus)",
    statement:
      "Als Controller habe ich gelernt hinzuschauen. Als Unternehmer habe ich gelernt zu handeln. Beides braucht die Politik!",
    priorities: ["Für eine Stadt mit Herz und Politik mit Verstand"],
    biography:
      "Ich bin 1989 geboren, verheiratet und Vater einer Tochter.\n\nIch habe viele Jahre mit Bilanzen und Budgets gearbeitet, bevor ich 2017 mit einem Schulfreund mein eigenes Unternehmen aufgebaut habe. Dabei habe ich gelernt, Verantwortung zu übernehmen und mit Geld sorgfältig umzugehen.\n\nIch treffe Entscheidungen lieber gründlich als schnell – aber wenn sie getroffen sind, ziehe ich sie konsequent durch. Das erwarte ich auch von der Politik. Deshalb kandidiere ich.\n\nAls Familienvater setze ich mich für sichere Verhältnisse, Eigenverantwortung und eine starke Wirtschaft ein.",
    positions: ["Vorstand SVP Stadt Zug", "Edelweiss Longrange Verein"],
    education: ["Matura", "Kaufmannlehre"],
    clubs: ["ELR Verein"],
    hobbies: ["Wandern", "Ski fahren", "Ausflüge", "Spazieren mit Familie"],
    socials: { website: "www.simonruckstuhl.ch" },
    image: "/assets/people/jpg-2026/Simon-Ruckstuhl_kravatte_dunkel.jpg",
  },

  "andrea-risi": {
    slug: "andrea-risi",
    name: "Andrea Risi",
    kandidatur: "GGR",
    candidacies2026: [{ office: "GGR", status: "Neu" }],
    birthDateISO: "1964-01-01",
    address: "Schulweg 5",
    location: "6317 Oberwil",
    mobile: "079 373 52 81",
    maritalStatus: "In Partnerschaft",
    children: "Zwei",
    profession: "MPA",
    statement: "Mir ist eine Politik wichtig, in der das Miteinander und nicht das Gegeneinander im Vordergrund steht.",
    biography:
      "Ich bin in Oberwil aufgewachsen. Nach der Schulzeit absolvierte ich die Ausbildung Pflegefachfrau in Gynäkologie und Geburtshilfe. Danach arbeitete ich im Zuger Kantonsspital und anschliessend als MPA mehrere Jahre in einer Gynäkologischen Praxis in Zug. Nach einem 4 Monatigen Sprachaufenthalt habe ich entschlossen, mich beruflich zu verändern und besuchte die Bäuerinnenschule.",
    education: ["Bäuerinnenschule"],
    hobbies: ["Velofahren", "Wandern", "Garten"],
    priorities: ["Weniger Staat - mehr Freiheit"],
    image: "/assets/people/jpg-2026/Andrea-Risi.jpg",
  },

  "benny-elsener": {
    slug: "benny-elsener",
    name: "Benny Elsener",
    kandidatur: "GGR, Kantonsrat",
    candidacies2026: [
      { office: "GGR", status: "Neu" },
      { office: "Kantonsrat", status: "Neu" },
    ],
    birthDateISO: "1959-01-01",
    address: "Bahnhofstrasse 10",
    location: "6300 Zug",
    phone: "041 711 73 73",
    mobile: "079 331 99 55",
    maritalStatus: "verheiratet mit Adriana",
    children: "4 erwachsene Kinder",
    profession: "Unternehmer, Geschäftsleitung",
    statement: "Zug braucht Macher",
    biography:
      "Ich bin Urzuger, in der Stadt Zug geboren, tief verwurzelt, verheiratet und Vater von 4 erwachsenen Kindern. Vom Maurer habe ich mich hochgearbeitet zum KMU Unternehmer und führe seit 11 Jahren mit meinem Sohn einen Familienbetrieb in der Baubranche. An der Hochschule in Luzern dozierte ich Baukostenplanung. In der FFZ war ich Vizekommandant und Instruktor. Von 2016 bis 2024 war ich prägender Lokalpolitiker im Kantons- und Gemeinderat, in der Justiz-, Sozial-, Bildungs- und Geschäftsprüfungskommission.",
    mandate: [
      "Gemeinderat Stadt Zug 2016-2024",
      "Fraktionschef 2017 und 2018",
      "Geschäftsprüfungskommission 2016-2024",
      "Kantonsrat 2018-2024",
      "Justizprüfungskommission 2018-2024",
      "Kommission Bildung und Soziales 2018-2024",
    ],
    positions: ["Nebenamtlicher Schätzer Gebäudeversicherung Zug"],
    education: ["Eidg. dipl. Bauleiter", "dipl Projektleiter VSGU", "höheres Wirtschaftsdiplom IFKS"],
    clubs: [
      "Gewerbeverein Stadt Zug",
      "Obmann Ehrenmitgliederclub FFZ",
      "Ehrenmitglied 1. Löschzug FFZ",
      "Interessengemeinschaft FFZ",
      "Vizepräsident Nachbarhilfe KISS Genossenschaft Zug",
      "Vorstand AVES Zug",
      "IG Zuger Chriesi",
      "Verein Ehemalige Kollegium St. Michael",
    ],
    hobbies: ["Wandern", "Velotouren", "Skifahren", "aktiv Eishockey", "Hundesport", "Familie und Freunde"],
    priorities: [
      "Das einheimische Gewerbe schützen und fördern",
      "Zuerst die Zugerinnen und Zuger",
      "Sicherheit und Lebensqualität für alle",
      "Weniger Staat, mehr Eigenverantwortung",
    ],
    image: "/assets/people/jpg-2026/Benny-Elsener_karvatte.jpg",
  },

  "claudio-schmid": {
    slug: "claudio-schmid",
    name: "Claudio Schmid",
    kandidatur: "GGR",
    candidacies2026: [{ office: "GGR", status: "Neu" }],
    birthDateISO: "1971-01-01",
    address: "Bohlstrasse",
    location: "6300 Zug",
    phone: "044 862 49 89",
    maritalStatus: "verheiratet",
    children: "4",
    profession: "Eidg. Dipl. Buchhalter, MAS economic crime investigation",
    statement: "Mehr Freiheit, weniger Staat",
    biography:
      "Treuhand- und Immobilienunternehmer seit 1998, schweizweit tätig. Eidg. Dipl. Buchhalter, MAS economic crime investigation, verheiratet mit 4 erwachsenen Kindern. Politisch aktiv seit 1990.",
    mandate: [
      "2003-2023 Kantonsrat Zürich",
      "2010-2018 Vormundschafts- und Sozialbehörde Stadt Bülach",
      "2002-2006 Grosser Gemeinderat Stadt Bülach",
    ],
    positions: [
      "seit 2026 Wahl-Stab SVP Kanton Zug",
      "2003-2023 Vorstand SVP Kanton Zürich und Programmchef",
      "1999-2003 Präsident JSVP Kanton Zürich",
      "1996-1999 Präsident SVP Hochfelden",
      "seit 1991 Mitglied SVP",
    ],
    clubs: ["Schiessverein SVP"],
    hobbies: ["Sport", "Lesen", "Schreiben", "Familie"],
    priorities: ["Mehr Freiheit, weniger Staat"],
    image: "/logo/svp-stadt-zug-logo.png",
  },

  "henry-barrows": {
    slug: "henry-barrows",
    name: "Henry Barrows",
    kandidatur: "GGR",
    currentOffices: ["Vorstand SVP Stadt Zug"],
    candidacies2026: [{ office: "GGR", status: "Neu" }],
    birthDateISO: "1988-01-01",
    address: "Theilerstrasse 13",
    location: "6300 Zug",
    mobile: "079 175 20 20",
    maritalStatus: "verheiratet",
    profession: "Digitalstratege • Unternehmer",
    statement: "In der Schweiz bestimmt das Volk über den Staat. Nicht umgekehrt.",
    biography:
      "Henry Barrows, Jahrgang 1988, Stadt Zug. Seit rund 20 Jahren in der digitalen Kommunikation tätig — Webentwicklung, Branding und Strategie. Engagiert sich für eine moderne, bürgernahe Politik in Zug: weniger Bürokratie, mehr digitale Effizienz und eine Verwaltung, die den Bürgern dient — nicht sich selbst.",
    education: [
      "MSc. - Blockchain & Digital Currency",
      "BSc. - International Relations",
      "BBA - Bachelor Business Administration",
    ],
    clubs: ["See-Club Zug", "Swiss Rowing Indoors", "Crypto Valley Association", "Bitcoin Association"],
    hobbies: ["Tennis", "Rudern", "Lesen", "Schreiben", "DJ"],
    socials: { website: "https://www.henrybarrows.ch" },
    image: "/assets/people/jpg-2026/Henry-Barrows_kravatte.jpg",
  },

  "karl-keiser": {
    slug: "karl-keiser",
    name: "Karl Keiser",
    kandidatur: "GGR",
    candidacies2026: [{ office: "GGR", status: "Neu" }],
    statement: "Kandidat für den Grossen Gemeinderat der Stadt Zug.",
    priorities: ["Bürgerliche Politik für eine lebenswerte Stadt Zug"],
    image: "/assets/people/jpg-2026/Karl-Keiser.jpg",
  },

  "markus-laemmler": {
    slug: "markus-laemmler",
    name: "Markus Lämmler",
    kandidatur: "GGR",
    candidacies2026: [{ office: "GGR", status: "Neu" }],
    birthDateISO: "1968-01-01",
    address: "Waldhof 2",
    location: "6300 Zug",
    mobile: "079 445 10 84",
    maritalStatus: "ledig",
    children: "keine",
    profession: "Lead Account Management",
    statement: "Für eine nachhaltige Entwicklung und einen verantwortungsvollen Umgang mit Ressourcen in der Stadt Zug",
    positions: [
      "Präsident Tennisclub Zug",
      "Vorstandsmitglied Alumni ZHAW Managed Health Care & Marketing",
    ],
    education: ["MAS ZFH in Managed Health Care"],
    clubs: ["Tennisclub Zug"],
    hobbies: ["Tennis", "Skifahren", "Kochen"],
    priorities: [
      "Für eine nachhaltige Entwicklung und einen verantwortungsvollen Umgang mit Ressourcen in der Stadt Zug",
    ],
    image: "/logo/svp-stadt-zug-logo.png",
  },

  "philip-stierli": {
    slug: "philip-stierli",
    name: "Philip Stierli",
    kandidatur: "GGR",
    candidacies2026: [{ office: "GGR", status: "Neu" }],
    statement: "Kandidat für den Grossen Gemeinderat der Stadt Zug.",
    priorities: ["Bürgerliche Politik für eine lebenswerte Stadt Zug"],
    image: "/logo/svp-stadt-zug-logo.png",
  },

  "ursula-keiser": {
    slug: "ursula-keiser",
    name: "Ursula Keiser",
    kandidatur: "Profil",
    statement: "Engagiert für bürgerliche Politik in Stadt und Kanton Zug.",
    priorities: ["Bürgerliche Politik für Stadt und Kanton Zug"],
    image: "/logo/svp-stadt-zug-logo.png",
  },
};

