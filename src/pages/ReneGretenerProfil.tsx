import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const ReneGretenerProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["rene-gretener"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Stadtrat", href: "/stadtrat" },
    ]}
  />
);

export default ReneGretenerProfil;

