import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const MarcusLaemmlerProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["marcus-laemmler"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Wahlen", href: "/wahlen" },
      { label: "Kandidaten 2026", href: "/wahlen/kandidaten" },
    ]}
  />
);

export default MarcusLaemmlerProfil;

