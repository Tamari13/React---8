import Logo from '../../../assets/Logo.svg' 
import SearchIcon from '../../../assets/Icone pesquisar.svg' 
import LoginIcon from '../../../assets/Icone login.svg' 

const NavBar = () => {
  return (
    <nav className="h-24 flex justify-between items-center px-10 bg-black border-b border-[#222]">
        <div className="flex items-center gap-10">
            <img src={Logo} alt="logo" className="w-16" />

            <ul className="flex gap-6 text-sm text-gray-300">
            <li className="cursor-pointer">Jogos ▾</li>
            <li className="cursor-pointer">Notícias</li>
            <li className="cursor-pointer">Vídeos</li>
            <li className="cursor-pointer">Downloads</li>
            <li className="cursor-pointer">Suporte ▾</li>
            <li className="cursor-pointer">Loja ▾</li>
            </ul>
        </div>

        <div className="flex items-center gap-4">
            <button className="bg-[#ffce00] px-4 py-2 rounded text-black font-bold cursor-pointer hover:bg-yellow-600 transition-colors">
            GTA VI LAUNCHER
            </button>
            <img src={SearchIcon} className="w-9 cursor-pointer hover:scale-110 transition-transform" />
            <img src={LoginIcon} className="w-9 cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </nav>
      )
      
}

export default NavBar