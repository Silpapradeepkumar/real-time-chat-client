import React from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';

// import App from '../Contacts';

////////////////////////////////////////////////////////////////////////////////////////

function LoginForm() {
  
  const [username,setusername] = useState('');
  const[password,setpassword] = useState('');
  const navigate = useNavigate(); 

  const OnSubmitAll=async(e)=>{
      e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8000/rtc/login`,{
        username:username,password:password
      });
      if (response.data.success) {
        const clientId = response.data.userId;
        navigate(`/client/${clientId}`);
        console.log(response.data.message);
      } else {
        console.error(response.data.message);
        alert("invalid credentials");
            }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <main>
        <section class='relative h-screen flex items-center '>
        <div class='absolute inset-0 bg-gradient-to-br from-transparent bg-slate-300'>

        </div>
        <div class="container mx-auto px-4 relative ">
        <div class="max-w-[400px] m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
        <h5 class="my-6 text-xl font-semibold text-black dark:text-white">sign in to your account</h5>
        <form action='' onSubmit={OnSubmitAll} >
                <div class="mb-4">
                    <label for="User Name" class="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                    <input class="w-full mt-2 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" type='text' name="UserName" id="name" onChange={(e) => setusername(e.target.value)}></input>
                </div>
                <div class="mb-4">
                  <div class='flex items-center w-full justify-between'>
                    <label for="Password" class="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                      <div>
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                      </div>
                  </div>
                  
                  <div>
                  <input class="w-full mt-2 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" type='password' name="Password" id="password" onChange={(e) => setpassword(e.target.value)}></input>
                  </div>  
                </div>
                <div class="mb-4">
                    <button type='submit'  class='py-2 px-5 inline-block border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full'>sign in</button>
                </div>
        </form>
        </div>
            
        </div>
        </section>
      </main>  
    </div>
  )
}

export default LoginForm
