import { Outlet } from 'react-router-dom'
const AuthLayout = () => {
  return (
    <>
    <main className="containe mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center ">
      <div className='container-md'>
      <Outlet />
      </div>
    </main>

   
  </>
  )
}

export default AuthLayout