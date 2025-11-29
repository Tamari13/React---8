import TwitchIcon from '../../../assets/twitch.svg';
import InstagramIcon from '../../../assets/instagram.svg';
import TwitterIcon from '../../../assets/twitter.svg';
import YoutubeIcon from '../../../assets/youtube.svg';
import FacebookIcon from '../../../assets/facebook.svg';
import type { FooterLink, SocialLink, LocationLink } from '../../../types/footer.ts';

const SocialIcon = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className="w-6 h-6" />;
};

const Footerfirst = () => {
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
const locationLinks: LocationLink[] = [
  { label: "Brasil", href: "#" },
  { label: "Estados Unidos", href: "#" },
  { label: "Europa", href: "#" },
];
  return (
<footer className="bg-black border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
            <div>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Contact
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                  Empregos🔗
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                  Inscrever-se🔗
                </a>
                </div>

                
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500 mb-6 mt-8">
              {footerLinks.map((link, index) => (
                <a key={index} href={link.href} className="hover:text-gray-300 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

            <div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded hover:border-gray-500 transition-colors text-sm">
                🌐 Selecione um idioma ▼
              </button>

              <div className="flex  items-center gap-4 mt-8">
                {socialLinks.map((social) => (
                  <a  className="hover:opacity-80 transition">
                      <SocialIcon src={social.img.src} alt={social.img.alt} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          </div>


        <div className="border-t border-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-xl font-bold">
                Rockstar Games
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                {locationLinks
                  .map((location) => (
                    <a
                      key={location.href}
                      href={location.href}
                      className="hover:text-gray-300 transition-colors"
                    >
                      {location.label}
                    </a>
                  ))}
              </div>

              <div className="text-xs text-gray-500">
                © Rockstar Games
              </div>
            </div>
          </div>
      </div>
    </footer>  
    )
}

export default Footerfirst