import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const UrsulaKeiserProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["ursula-keiser"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Wahlen", href: "/wahlen" },
      { label: "Kandidaten 2026", href: "/wahlen/kandidaten" },
    ]}
  />
);

export default UrsulaKeiserProfil;

