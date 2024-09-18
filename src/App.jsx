import Header from './componentes/Header'
import { Outlet } from 'react-router-dom'
import Footer from './componentes/Footer'

export default function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 via-black-800 to-black 
      grid-rows-3 place-items-center 
      min-h-screen 
      font-kanit">  {/*   */}
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
