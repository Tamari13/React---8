import { Link } from 'react-router-dom';
import type { BulletinGame } from '../../../types/bulletin.ts';
import Gta6 from '../../../assets/GTA6banner.svg';
import R25 from '../../../assets/Rectangle25.svg';
import R24 from '../../../assets/Rectangle24.svg';
import Img1 from '../../../assets/Screenshot2025-11-28at21.10.22.png';
import Img2 from '../../../assets/Screenshot2025-11-28at21.10.34.png';
import Img3 from '../../../assets/Screenshot2025-11-28at21.10.45.png';

const Bulletin = () => {
  const items: BulletinGame[] = [
    { 
      img: { src: Gta6, alt: "GTA 6 banner" }, date: "5 de novembro de 2023", title: "Grand Theft Auto VI – Veja o 1º trailer agora", 
      to: "/second" 
    },
    {
        img: { src: R25, alt: "Rectangle 25" }, date: "Rockstar Games • 30 de novembro de 2023", title: "1º TRAILER, TERÇA-FEIRA, 5 DE DEZEMBRO, 9H ET.",
        to: undefined
    },
    {
        img: { src: R24, alt: "Rectangle 24" }, date: "GTA Online • 29 de novembro de 2023", title: "Nova atualização de GTA Online chegando em dezembro",
        to: undefined
    },
    {
        img: { src: Img1, alt: "Screenshot 1" }, date: "GTA Online • 29 de novembro 2023", title: "2x GTA$ e RP nas missões do Projeto Subversão",
        to: undefined
    },
    {
        img: { src: Img2, alt: "Screenshot 2" }, date: "Rockstar Games • 29 novembro 2023", title: "Novos produtos da Rockstar Games já disponíveis",
        to: undefined
    },
    {
        img: { src: Img3, alt: "Screenshot 3" }, date: "GTA Online • 27 novembro 2023", title: "Fature com bônus em missões de História do Cassino",
        to: undefined
    },
  ];

  return (
    <section className="px-10 py-16 text-white">
      <Link to="/first/Bulletin">
      <h2 className="text-2xl text-gray-800 mb-6 font-bold hover:text-amber-600">Boletim</h2>
      </Link>

      <div className="grid grid-cols-3 gap-6">
        {items.map((item: BulletinGame, i: number) =>
          item.to ? (
            <Link
              key={i}
              to={item.to}
              className="bg-[#111] rounded overflow-hidden cursor-pointer hover:opacity-80 transition hover:size-101"
            >
              <img src={item.img.src} alt={item.img.alt} className="w-full rounded-2xl" />
              <p className="text-gray-400 text-xs pt-15 mt-4">{item.date}</p>
              <h3 className="px-3 pb-4">{item.title}</h3>
            </Link>
          ) : (
            <div key={i} className="bg-[#111] rounded overflow-hidden cursor-pointer">
              <img src={item.img.src} alt={item.img.alt} className="w-full" />
              <p className="text-gray-400 text-xs px-3 mt-3">{item.date}</p>
              <h3 className="px-3 pb-4">{item.title}</h3>
            </div>
          )
        )}
      </div>

      <div className="text-center mt-8">
        <button className=" text-gray-300 px-6 py-2 rounded cursor-pointer hover:underline decoration-yellow-500 underline-offset-4">
          View More
        </button>
      </div>
    </section>
  );
};

export default Bulletin;
