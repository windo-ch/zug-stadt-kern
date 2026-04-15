import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const DanielGrammProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["daniel-gramm"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Stadtrat", href: "/stadtrat" },
    ]}
  />
);

export default DanielGrammProfil;

