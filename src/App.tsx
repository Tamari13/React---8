import { Routes, Route, Navigate } from 'react-router-dom'
import SecondTask from './components/Second/SecondTask'
import FirstPage from './components/Firstpage/FirstTask'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/first" />} />

      <Route path="/first" element={<FirstPage />} />
      <Route path="/second" element={<SecondTask />} />
    </Routes>
    </>
  )
}

export default App