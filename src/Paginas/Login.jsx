import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alerta from '../Componets/Alerta'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState(false)
  
  const navigate = useNavigate()

  
  

  const handleSubmint = async e => {
      e.preventDefault();

      return
      
      //Validamos que los campos no este vacios

    if ([email, password].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      });
      return
      }
      //Validamos que los campos no esten vacios

      try {
        
     // una vez que los datos sea validos se la petincion la DB
      const { data } = await clienteAxios.post('/usuarios/login', { email, password });
     // una vez que los datos sea validos se la petincion la DB
      
        setAlerta({});
      // Almacenamito de token en local storage    
        localStorage.setItem('token', data.token)
      // Almacenamito de token en local storage
    
     // enviamos a la siguientes pagina
     navigate('/panel')
     // enviamos a la siguientes pagina
    } catch (error) {
      console.log(error)
      setAlerta({
        msg: error.response.data.msg,
        error: true
    })
      
    }
  }

  const { msg } = alerta;


  return (
    <>
    <h1 className="display-1 text-primary text-uppercase fw-bold ">Inicia sesión y administra tu {''}
        <span className="text-muted">Sitio</span>
    </h1>

    {msg && <Alerta alerta={alerta } />}

    <form 
        className="my-10 bg-white sombra rounded-lg p-10"
        onSubmit={handleSubmint}
    >
        <div className="my-5">
            <label 
                className="uppercase text-gray-600 block text-xl font-bold "
                htmlFor="email"
            >Email</label>
            <input
                id="email"
                type="email"
                placeholder="Email de Registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={email}
                onChange={ e => setEmail(e.target.value)}
            />
        </div>
        <div className="my-5">
            <label 
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="password">
            Password
          </label>
            <input
                id="password"
                type="password"
                placeholder="Password de Registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={password}
                onChange={ e => setPassword(e.target.value)}
            />
        </div>

        <input 
            type="submit"
            value="Iniciar Sesión"
            className="bg-sky-700 w-full py-3 my-3 mb-5 text-white uppercase font-bold rounded 
          hover:cursor-pointer hover:bg-sky-800 hover: transition-colors"
        />
        
    </form>

</>
)
  
}

export default Login