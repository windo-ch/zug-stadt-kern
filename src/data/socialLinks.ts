export type SocialPlatform = "instagram" | "tiktok" | "youtube" | "facebook";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/svpzug/",
  },
  {
    platform: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@svpzug",
  },
  {
    platform: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCzw0augd912spmBIZQrNVuA",
  },
  {
    platform: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/SvpStadtZug",
  },
];
