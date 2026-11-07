import SteckbriefProfilePage from "@/components/profile/SteckbriefProfilePage";
import { steckbriefCandidates } from "@/data/steckbriefCandidates";

const PhilipStierliProfil = () => (
  <SteckbriefProfilePage
    candidate={steckbriefCandidates["philip-stierli"]}
    breadcrumb={[
      { label: "Home", href: "/" },
      { label: "Wahlen", href: "/wahlen" },
    ]}
  />
);

export default PhilipStierliProfil;

