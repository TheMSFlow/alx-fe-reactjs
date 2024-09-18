import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './components/Home'


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
   
  )
}

export default App
