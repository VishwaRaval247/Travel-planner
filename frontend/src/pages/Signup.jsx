import React,{ useState, useContext } from 'react'
import { signupFields } from '../assets/formFields/formFields'
import Input from '../components/Input'
import LoginHeader from '../components/header/LoginHeader'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const fields=signupFields;
    let fieldsState={};

    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    fields.forEach(field => fieldsState[field.id]='');

    const [signupState,setSignupState]=useState(fieldsState);

    const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

    const handleSubmit= async (e)=>{
        e.preventDefault();
        console.log(signupState)
        try {
            const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/signup`,{
              method:'post',
              headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify(signupState)
            })
            const result = await res.json()

            if(!res.ok) alert(result.message)

            dispatch({type:'REGISTER_SUCCESS'})
            navigate('/login')

        } catch (error) {
          alert(error.message)
        }

        console.log(signupState)
        createAccount()
    }

    //handle Signup API Integration here
    const createAccount=()=>{

    }

  return (
    <div className="mt-9 inset-0 flex items-center justify-center bg-white bg-opacity-70">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <LoginHeader
          heading="Signup to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login"
        />

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px">
            {fields.map((field) => (
                <div key={field.id} className="mb-4">
                    <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={signupState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        placeholder={field.placeholder}
                    />
                </div>
            ))
            }
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-10"
          >
            Sigup
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup