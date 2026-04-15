import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const MarcusBuehlerProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["marcus-buehler"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Stadtrat", href: "/stadtrat" },
    ]}
  />
);

export default MarcusBuehlerProfil;

