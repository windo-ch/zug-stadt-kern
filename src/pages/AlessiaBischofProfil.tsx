import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const AlessiaBischofProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["alessia-bischof"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Wer wir sind", href: "/wer-wir-sind" },
    ]}
  />
);

export default AlessiaBischofProfil;

