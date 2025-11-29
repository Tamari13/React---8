import LogoFooter from '../../../assets/_847692912.png';
import TwitchIcon from '../../../assets/twitch.svg';
import InstagramIcon from '../../../assets/instagram.svg';
import TwitterIcon from '../../../assets/twitter.svg';
import YoutubeIcon from '../../../assets/youtube.svg';
import FacebookIcon from '../../../assets/facebook.svg';
import type { FooterLink, SocialLink } from '../../../types/footer.ts';

const SocialIcon = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className="w-6 h-6" />;
};


const Footer = () => {
    const footerLinks: FooterLink[] = [
    { name: "Contato", href: "#" },
    { name: "Sobre", href: "#" },
    { name: "Suporte", href: "#" },
    { name: "Empregos", href: "#" },
  ];

    const socialLinks: SocialLink[] = [
    { label:"twich", icon: "twitch", href: "#", img: { src: TwitchIcon, alt: "Twitch" } },
    {  label:"inst", icon: "instagram", href: "#", img:{ src: InstagramIcon, alt: "Instagram" } },
    {  label:"twit", icon: "twitter", href: "#", img: { src: TwitterIcon, alt: "Twitter" } },
    {  label: "you", icon: "youtube",href: "#", img: { src: YoutubeIcon, alt: "YouTube" } },
    {  label:"FC",icon: "facebook", href: "#", img: { src: FacebookIcon, alt: "Facebook" } },
  ]
  return (
     <footer className="bg-[#111] py-12 px-10 mt-20">
        <div className="flex justify-between items-center">
            <img src={LogoFooter} className="w-16 cursor-pointer" />

        <div className="flex gap-15 text-white">
          {footerLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-gray-300 transition-colors">
                {link.name}
              </a>
            ))}
        </div>

        <div className="flex gap-3">
               {socialLinks.map((social) => (
                <a  className="hover:opacity-80 transition">
                    <SocialIcon src={social.img.src} alt={social.img.alt} />
                </a>
              ))}
        </div>
      </div>

      <p className="text-center text-gray-500 mt-6">© 2024 Rockstar Games</p>
    </footer>
  )
}

export default Footer