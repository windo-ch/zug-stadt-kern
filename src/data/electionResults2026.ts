export const STADT_WAHLSIEG_PATH = "/artikel/erfolgreichste-wahlen-svp-stadt-zug-2026";
export const KANTON_WAHLSIEG_PATH = "/artikel/svp-staerkste-kraft-kantonsrat-2026";

export const ggrElected2026 = [
  { name: "Roman Küng", votes: "3'354", bisher: true, slug: "roman-kueng", image: "/assets/people/jpg-2026/Roman-Kueng_kravatte.jpg" },
  { name: "Philip C. Brunner", votes: "3'336", bisher: true, slug: "philip-brunner", image: "/assets/people/profilbilder/philip-c-brunner.jpg" },
  { name: "Adrian Risi", votes: "3'218", bisher: false, slug: "adrian-risi", image: "/assets/people/profilbilder/adrian-risi.jpg" },
  { name: "Gregor R. Bruhin", votes: "3'201", bisher: false, slug: "gregor-bruhin", image: "/assets/people/jpg-2026/Gregor-Bruhin_kravatte_g.jpg" },
  { name: "Alex Odermatt", votes: "3'094", bisher: true, slug: "alex-odermatt", image: "/assets/people/jpg-2026/Alex-Odermatt.jpg" },
  { name: "René Gretener", votes: "3'035", bisher: true, slug: "rene-gretener", image: "/assets/people/profilbilder/rene-gretener.jpg" },
  { name: "Marcus H. Bühler", votes: "2'990", bisher: true, slug: "marcus-buehler", image: "/assets/people/jpg-2026/Marcus-Buehler_kravatte.jpg" },
  { name: "Norbert Schlumpf", votes: "2'971", bisher: true, slug: "norbert-schlumpf", image: "/assets/people/profilbilder/norbert-schlumpf.jpg" },
  { name: "Alessia Bischof", votes: "2'937", bisher: false, slug: "alessia-bischof", image: "/assets/people/jpg-2026/Alessia-Bischof.jpg" },
] as const;

export const kantonsratStadtZugElected2026 = [
  { name: "Adrian Risi", votes: "3'508", bisher: true, slug: "adrian-risi", image: "/assets/people/profilbilder/adrian-risi.jpg" },
  { name: "Gregor R. Bruhin", votes: "3'423", bisher: true, slug: "gregor-bruhin", image: "/assets/people/jpg-2026/Gregor-Bruhin_kravatte_g.jpg" },
  { name: "Philip C. Brunner", votes: "3'312", bisher: true, slug: "philip-brunner", image: "/assets/people/profilbilder/philip-c-brunner.jpg" },
  { name: "Roman Küng", votes: "3'168", bisher: false, slug: "roman-kueng", image: "/assets/people/jpg-2026/Roman-Kueng_kravatte.jpg" },
] as const;

export const OFFICIAL_RESULT_LINKS = {
  overview: "https://stadtzug.ch/de/politik/gesamterneuerungswahlen-2026",
  stadtrat:
    "https://cdn.zg.ch/dam/jcr:1fdc7329-8190-42fe-916c-0e7b04d026e5/Wahlprotokoll%20Stadtratswahlen%2004.10.2026.pdf",
  ggr: "https://cdn.zg.ch/dam/jcr:022acc88-443f-4b1b-9024-a171f5b50c28/20261004_Protokoll_Formular_5b_Proporzwahl_kommunal.pdf",
  kantonsrat:
    "https://cdn.zg.ch/dam/jcr:07caca95-8a7d-4810-ac2e-271486325505/20261004_Ergebnisbroschüre_KR.pdf",
} as const;
