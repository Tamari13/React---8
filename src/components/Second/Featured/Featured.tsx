import type { GameItem } from '../../../types/game.ts';
import GTA5Image from '../../../assets/GTA5.svg';
import GTAOnlineImage from '../../../assets/GTAonline.svg';
import REDImage from '../../../assets/RED.svg';
import REDOnlineImage from '../../../assets/REDOnline.svg';
import { Link } from 'react-router-dom';



const games: GameItem[] = [
  { id: 1, image: { src: GTA5Image, alt: "GTA 5" } },
  { id: 2, image: { src: GTAOnlineImage, alt: "GTA Online" } },
  { id: 3, image: { src: REDImage, alt: "Red Dead Redemption" } },
  { id: 4, image: { src: REDOnlineImage, alt: "Red Dead Online" } },
];

const Featured = () => {
  return (
    <section className=" mx-auto p-20 w-full bg-gray-900 text-white ">
      <div className="flex justify-between items-center">
        <Link to="/second/Featured">
          <h1 className="text-3xl font-bold hover:cursor-pointer hover:text-amber-400">Jogos em Destaque</h1>
        </Link>

        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-full bg-[#222] cursor-pointer hover:scale-110 transition-transform">PC</button>
          <button className="px-4 py-2 rounded-full bg-[#222] cursor-pointer hover:scale-110 transition-transform">Console</button>
          <button className="px-4 py-2 rounded-full bg-[#222] cursor-pointer hover:scale-110 transition-transform">
            Dispositivos Portáteis
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-10">
        {games.map((g) => (
          <img key={g.id} src={g.image.src} alt={g.image.alt} className="rounded-lg w-full" />
        ))}
      </div>

      <button className="mt-8 bg-[#FCAF17] px-6 py-3 rounded-lg font-semibold text-black cursor-pointer hover:bg-yellow-600 transition-colors">
        Ver todos os jogos
      </button>
    </section>
  );
};

export default Featured