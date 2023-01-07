import { Outlet } from "react-router-dom"
import Header from "../Componets/Header"
import Nav from "../Componets/Nav"

const RutaProtegida = () => {
  return (
    <div className="row">
      <div className="col">
        
      <Header />

      </div>
      <div className="display-2">
              <Nav/>
          </div>
            <main className='p-10 flex-1'>
              <Outlet/>
           </main>
          
    </div>
  )
}

export default RutaProtegida