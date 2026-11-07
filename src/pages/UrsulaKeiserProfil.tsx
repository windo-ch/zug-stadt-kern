import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const UrsulaKeiserProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["ursula-keiser"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Wahlen", href: "/wahlen" },
    ]}
  />
);

export default UrsulaKeiserProfil;

