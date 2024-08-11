import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useState } from "react";



export default function Register() {

  const [ state, setState ] = useState({
    name: '',
    email: '',
    password: '',
  });

  function inputHandle({ target }) {
    setState( prev => (
      {
        ...prev,
        [ target.name ] : target.value,
      }
    ));
  }

  function submit( e ) {
    e.preventDefault();
    console.log(state)
  }

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-center text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium">Please register your account</p>
          <form onSubmit={ submit }>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                onChange={ inputHandle }
                value={ state.name }
                className="px-3 py-2 outline-none border border-slate-700 rounded-md bg-transparent"
                type="text" name="name" id='name' placeholder="Name" required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={ inputHandle }
                value={ state.email }
                className="px-3 py-2 outline-none border border-slate-700 rounded-md bg-transparent"
                type="text" name="email" id='email' placeholder="Email" required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={ inputHandle }
                value={ state.password }
                className="px-3 py-2 outline-none border border-slate-700 rounded-md bg-transparent"
                type="password" name="password" id='password' placeholder="Password" required
              />
            </div>

            <div className="flex items-center w-full gap-3 mb-3">
              <input type="checkbox" name='checkbox' id="checkbox"
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="checkbox"
                className="text-sm"
              >I agree to privacy policy & treams</label>
            </div>
            <button type="submit"
              className="bg-slate-800 w-full rounded-md py-2 hover:shadow-blue-300 hover:shadow-lg text-white px-7 mb-3"
            >
              Sign Up
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center cursor-pointer">
              <p>Already have an account ? <Link to={ '/login' } className="font-bold">Sing In</Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

