import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const SimonRuckstuhlProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["simon-ruckstuhl"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Wer wir sind", href: "/wer-wir-sind" },
    ]}
  />
);

export default SimonRuckstuhlProfil;

