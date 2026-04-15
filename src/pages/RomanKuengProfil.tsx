import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const RomanKuengProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["roman-kueng"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Stadtrat", href: "/stadtrat" },
    ]}
  />
);

export default RomanKuengProfil;

