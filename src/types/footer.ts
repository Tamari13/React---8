

export type SocialLink = {
  label: string;
  href: string;
  icon: "twitch" | "instagram" | "twitter" | "youtube" | "facebook";
  img: {
    src: string;
    alt: string;
  };
};

export type FooterLink = {  
    name: string;
    href: string;
};
export type LocationLink = {
    label: string;
    href: string;
};