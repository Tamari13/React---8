import Logo from '../../../assets/Logo.svg';
import SearchIcon from '../../../assets/Iconepesquisar.svg';
import LoginIcon from '../../../assets/Iconelogin.svg';
import { Link, useNavigate  } from 'react-router-dom';

const Header = () => {  
  const navigate = useNavigate();

  const previouspage = () => {
    navigate("/first")
  }

  return (
    <header className="w-full h-[90px] px-10 flex items-center justify-between border-b border-[#222]">
      <Link to="/first">
        <div className="w-32">
          <img src={Logo} alt="Logo" className="cursor-pointer"/>
        </div>
      </Link>


      <nav className="flex gap-6 text-white">
        <Link to="/first/Bulletin">Jogos</Link>
        <Link to="/second/News">Loja</Link>
        <Link to="/second/LauncherSection">Ajuda</Link>

      </nav>

      <button className="bg-[#FCAF17] px-5 py-2 rounded-lg font-bold text-black cursor-pointer hover:bg-yellow-600 transition-colors" onClick={previouspage}>
        Baixe o Launcher
      </button>

      <div className="flex gap-4">
        <img src={SearchIcon} className="w-10 cursor-pointer hover:scale-110 transition-transform" />
        <img src={LoginIcon} className="w-10 cursor-pointer hover:scale-110 transition-transform" />
      </div>
    </header>
  );
};

export default Header