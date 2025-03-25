// import Sidebar from "./components/sidebar/core.sidebar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JavascriptApp from './javascript/Javascript.App'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/cheats" element={<JavascriptApp />} />
        <Route path="/cheats/javascript" element={<JavascriptApp />} />
        <Route path="/cheats/terminal" element={<JavascriptApp />} />
      </Routes>
    </BrowserRouter>
//     <>
//       <Sidebar />
//     </>
  )
}

export default App