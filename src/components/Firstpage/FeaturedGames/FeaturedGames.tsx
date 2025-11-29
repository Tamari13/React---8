import Gta5 from '../../../assets/GTA5.svg';
import GtaOnline from '../../../assets/GTAOnline.svg';
import Red from '../../../../src/assets/RED.svg';
import RedOnline from '../../../assets/RedOnline.svg';

const FeaturedGames = () => {
  return (
  <section className="px-10 py-16">
    <h2 className="text-2xl mb-6 font-bold">Jogos em destaque</h2>
    <div className="grid grid-cols-4 gap-6">
      <img src={Gta5} className="rounded" />
      <img src={GtaOnline} className="rounded" />
      <img src={Red} className="rounded" />
      <img src={RedOnline} className="rounded" />
    </div>
    <div className="text-center mt-8">
        <button className=" text-gray-300 px-6 py-2 rounded cursor-pointer hover:underline decoration-yellow-500 underline-offset-4">
        View More
        </button>
    </div>
  </section>  )
}

export default FeaturedGames