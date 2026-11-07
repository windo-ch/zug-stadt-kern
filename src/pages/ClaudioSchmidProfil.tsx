import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const ClaudioSchmidProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["claudio-schmid"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Wahlen", href: "/wahlen" },
    ]}
  />
);

export default ClaudioSchmidProfil;

