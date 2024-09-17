import Header from './componentes/Header'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 via-black-800 to-black min-h-screen">
        <Header />
        <Outlet />
      </div>
    </>
  )
}
