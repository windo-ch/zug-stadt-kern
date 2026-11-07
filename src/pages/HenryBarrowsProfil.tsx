import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const HenryBarrowsProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["henry-barrows"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Wahlen", href: "/wahlen" },
    ]}
  />
);

export default HenryBarrowsProfil;

