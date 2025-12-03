import { Routes, Route, Navigate } from 'react-router-dom'
import SecondTask from './components/Second/SecondTask'
import FirstPage from './components/Firstpage/FirstTask'
import Bulletin from './components/Firstpage/Bulletin/Bulletin'
import FeaturedGames from './components/Firstpage/FeaturedGames/FeaturedGames'
import Featured from './components/Second/Featured/Featured'
import LauncherSection from './components/Second/LauncherSection/LauncherSection'
import News from './components/Second/News/News'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/first" />} />

      <Route path="/first" element={<FirstPage />} />
      <Route path="/first/Bulletin" element={<Bulletin />} />
      <Route path="/first/FeaturedGames" element={<FeaturedGames />} />
      <Route path="/second" element={<SecondTask />} />
      <Route path="/second/Featured" element={<Featured />} />
      <Route path="/second/LauncherSection" element={<LauncherSection />} />
      <Route path="/second/News" element={<News/>} />

    </Routes>
    </>
  )
}

export default App