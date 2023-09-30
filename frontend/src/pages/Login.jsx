import React,{useState,useContext} from 'react'
import LoginHeader from '../components/header/LoginHeader'
import Input from '../components/Input';
import { loginFields } from '../assets/formFields/formFields';
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const fields=loginFields;
    let fieldsState = {};
    fields.forEach(field=>fieldsState[field.id]='');

    const [loginState,setLoginState]=useState(fieldsState);

    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()


    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();

        dispatch({type:'LOGIN_START'})

        try {
          const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/login`,{
            method:'post',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(loginState)
          })
          const result = await res.json()

          console.log('result: ',result)
          if(!res.ok) alert(result.message)

          dispatch({type:'LOGIN_SUCCESS', payload:result.data})
          navigate('/')

        } catch (error) {
          dispatch({type:'LOGIN_FAILURE',payload:error.message})
        }

        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{

    }

  return (
    <div className="mt-9 inset-0 flex items-center justify-center bg-white bg-opacity-70">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <LoginHeader
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px">
            {fields.map((field) => (
              <Input
                key={field.id}
                handleChange={handleChange}
                value={loginState[field.id]}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
          </div>

          <div className="flex items-center justify-between ">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-red-600 hover:text-red-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-10"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login