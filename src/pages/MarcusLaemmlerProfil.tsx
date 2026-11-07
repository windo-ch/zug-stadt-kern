import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const MarcusLaemmlerProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["markus-laemmler"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Wahlen", href: "/wahlen" },
    ]}
  />
);

export default MarcusLaemmlerProfil;

