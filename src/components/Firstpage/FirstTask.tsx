import TopBar from '../Firstpage/TopBar/TopBar'
import Navbar from '../Firstpage/NavBar/NavBar'
import Hero from '../Firstpage/HeroFirst/HeroFirst'
import Bulletin from '../Firstpage/Bulletin/Bulletin'
import FeaturedGames from '../Firstpage/FeaturedGames/FeaturedGames'
import Footerfirst from '../Firstpage/FooterFirst/Footerfirst'

const FirstTask = () => {
  return (
    <div className="bg-[#0d0d0d] text-white w-full">
      <TopBar />
      <Navbar />
      <Hero />
      <Bulletin />
      <FeaturedGames />
      <Footerfirst />
    </div>  
    )
}

export default FirstTask