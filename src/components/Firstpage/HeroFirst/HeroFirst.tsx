import HeroImage from '../../../assets/Screenshot 2025-11-28 at 21.09.42.png';

const HeroFirst = () => {
  return (
    <section className="relative flex direction-row">
      <div className="w-[80%]">
        <img src={HeroImage} className="w-full" />
        </div>

      <div className="flex-col align-items-bottom p-8 bg-black text-white justify-center">
        <h4 className="text-gray-300 justify-center pt-8">Grand Theft Auto Online</h4>
        <h1 className="text-4xl font-bold mt-3">
          San Andreas <br /> Mercenaries já disponível
        </h1>

        <button className="mt-10 border border-white px-5 py-2 bg-black hover:bg-white hover:text-black transition-colors font-bold">
          ASSISTA AGORA
        </button>

        <div className="flex flex-row items-center space-x-4 pt-20">
        <div className="h-0.5 w-16  bg-gray-700 cursor-pointer hover:bg-white hover:h-1"></div>
        <div className="h-0.5 w-16 bg-gray-700 cursor-pointer hover:bg-white hover:h-1"></div>
        <div className="h-0.5 w-16 bg-gray-700 cursor-pointer hover:bg-white hover:h-1"></div >
        <div className="h-0.5 w-16 bg-gray-700 cursor-pointer hover:bg-white hover:h-1"></div>

        </div>
            
      </div>
    </section>  )
}

export default HeroFirst