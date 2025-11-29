import First from '../../../assets/847692912.svg';
import Rdr2 from '../../../assets/rgl-rdr2-buynow1.svg';

const LauncherSection = () => {
  return (
    <section className="w-[80%] mx-auto mt-5 p-10 rounded-xl bg-linear-to-r from-[#e0a01e] to-[#E9453D] flex">
      <div className="flex-1 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <img src={First} className="w-12" />
          <h1 className="text-3xl font-bold text-black">Games <br /> Launcher</h1>
        </div>

        <h2 className="text-xl font-semibold text-black p-2">Todos os seus jogos <br/> em um só lugar.</h2>

        <button className="w-40 py-3 mt-4 cursor-pointer  text-black bg-amber-600 hover:bg-black hover:text-amber-50 rounded-md">
          Download
        </button>
      </div>

      <img src={Rdr2} alt="Red Dead Redemption 2" className="w-1/2 rounded-xl"/>
    </section>
  );
};
export default LauncherSection