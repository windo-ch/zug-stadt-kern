import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const AlexOdermattProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["alex-odermatt"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Stadtrat", href: "/stadtrat" },
    ]}
  />
);

export default AlexOdermattProfil;

