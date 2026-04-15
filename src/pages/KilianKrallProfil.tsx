import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const KilianKrallProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["kilian-krall"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Wer wir sind", href: "/wer-wir-sind" },
    ]}
  />
);

export default KilianKrallProfil;

