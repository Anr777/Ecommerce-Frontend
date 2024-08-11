
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNav } from '../navigation';

// import { getNav } from '../navigation/index';

import { SlLogout } from "react-icons/sl";



export function Sidebar( { showSidebar, setShowSidebar } ) {

  const { pathname } = useLocation();
  console.log( pathname )

  const [ allNav, setAllNav ] = useState( [] );

  useEffect( () => {
    const navs = getNav( 'admin' );
    setAllNav( navs );
  }, [] );

  console.log( allNav );

  return (
    <div className="">
      <div
        className={`fixed duration-200 ${ !showSidebar ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto' } w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`} 
        onClick={ () => {
          console.log('Clicked del sidebar');
          setShowSidebar( false )
      } }
        
      >

      </div>
      <div className={ `w-[260px] fixed bg-[#11111d] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${ showSidebar ? 'left-0' : '-left-[260px] lg:left-0' } text-slate-200` }>
        <div className="h-[70px] flex justify-center items-center">
          <Link to={ '/' } className='w-[180px] h-[50px]'>
            <img src="/images/logo.svg" alt="" className="w-full h-full" />
          </Link>
        </div>
        <div className='px-[16px]'>
          <ul>
            {
              allNav.map( ( nav, i ) => (
                <li className='hover:bg-[#353546] hover:rounded-md  ' key={ i }>
                  <Link to={ nav.path } className={ `${ pathname === nav.path ? 'bg-white shadow-white-500/50 text-black font-semibold hover:pl-4' : 'hover:pl-7 transition-all' } flex gap-3 items-center rounded-lg px-4 py-3 my-4 w-full transition-all duration-[500ms]` }>
                    <span>{ nav.icon }</span>
                    <span>{ nav.title }</span>
                  </Link>
                </li>
              ) )
            }

            <li className=''>
              <button className='hover:pl-7 transition-all flex gap-3 items-center rounded-lg px-4 py-3 my-4 w-full duration-[500ms]'>
                <span>
                  <SlLogout />
                </span>
                <span>
                  Logout
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
