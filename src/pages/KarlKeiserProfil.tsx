import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const KarlKeiserProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["karl-keiser"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Wahlen", href: "/wahlen" },
    ]}
  />
);

export default KarlKeiserProfil;

