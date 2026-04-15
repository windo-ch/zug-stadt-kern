import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const AndreWickiProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["andre-wicki"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Stadtrat", href: "/stadtrat" },
    ]}
  />
);

export default AndreWickiProfil;

