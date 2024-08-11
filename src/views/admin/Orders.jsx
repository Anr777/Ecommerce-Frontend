import { useState } from "react";

import { LuArrowDownSquare } from "react-icons/lu";
import { Link } from 'react-router-dom';




export default function Orders() {

  const [ currentPage, setCurrentPage ] = useState( 1 );
  const [ searchValue, setSearchValue ] = useState( '' );
  const [ parPage, setParPage ] = useState( 5 );
  const [ show, setShow ] = useState( false );

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#161e29] rounded-md">
        <div className="flex justify-between items-center text-gray-600">
          <select
            value={ parPage }
            onChange={ ( e ) => setParPage( e.target.value ) }
            name="" id="" className="px-4 py-2 hover:cursor-pointer focus:border-indigo-500 outline-none bg-[#161e29] border border-slate-700 rounded-md text-[#d6dae0]">
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='20'>20</option>
          </select>
          <input
            value={ searchValue }
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#161e29] border border-slate-700 rounded-md text-[#d6dae0]"
            placeholder="search"
            type="text" onChange={ ( e ) => setSearchValue( e.target.value ) }
          />
        </div>

        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left bg-[#161e29]">
            <div className="text-sm text-[#d6dae0] uppercase border-b border-slate-700">
              <div className="flex justify-between items-center text-gray-400">
                <div className="py-3 w-[25%] font-bold">
                  Order id
                </div>
                <div className="py-3 w-[13%] font-bold">
                  Price
                </div>
                <div className="py-3 w-[18%] font-bold">
                  Payment Status
                </div>
                <div className="py-3 w-[18%] font-bold">
                  Order Status
                </div>
                <div className="py-3 w-[18%] font-bold">
                  Action
                </div>
                <div className="py-3 w-[8%] font-bold">
                  <LuArrowDownSquare />
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="text-[#d6dae0]">
          <div className="flex justify-between items-start border-b border-slate-700 text-gray-400">
            <div className="py-3 w-[25%] font-medium whitespace-nowrap">
              #123456
            </div>
            <div className="py-3 w-[13%] font-medium">
              $666
            </div>
            <div className="py-3 w-[18%] font-medium">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium">
              <Link>
                View
              </Link>
            </div>
            <div className="py-3 w-[8%] font-medium cursor-pointer"  onClick={ () => setShow( prev => !prev )}>
              <LuArrowDownSquare />
            </div>
          </div>

          <div className={ show ? 'block border-b border-slate-700 bg-[#273446]' : 'hidden' }>
            <div className="flex justify-start items-start text-gray-400">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                #1234562
              </div>
              <div className="py-3 w-[13%] font-medium">
                $6662
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
            </div>
            <div className="flex justify-start items-start text-gray-400">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                #1234562
              </div>
              <div className="py-3 w-[13%] font-medium">
                $6662
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
            </div>
          </div>

        </div>
        <div className="text-[#d6dae0]">
          <div className="flex justify-between items-start border-b border-slate-700 text-gray-400">
            <div className="py-3 w-[25%] font-medium whitespace-nowrap">
              #123456
            </div>
            <div className="py-3 w-[13%] font-medium">
              $666
            </div>
            <div className="py-3 w-[18%] font-medium">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium">
              <Link>
                View
              </Link>
            </div>
            <div className="py-3 w-[8%] font-medium cursor-pointer"  onClick={ () => setShow( prev => !prev )}>
              <LuArrowDownSquare />
            </div>
          </div>

          <div className={ show ? 'block border-b border-slate-700 bg-[#273446]' : 'hidden' }>
            <div className="flex justify-start items-start text-gray-400">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                #1234562
              </div>
              <div className="py-3 w-[13%] font-medium">
                $6662
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
            </div>
            <div className="flex justify-start items-start text-gray-400">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                #1234562
              </div>
              <div className="py-3 w-[13%] font-medium">
                $6662
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
            </div>
          </div>

        </div>
        <div className="text-[#d6dae0]">
          <div className="flex justify-between items-start border-b border-slate-700 text-gray-400">
            <div className="py-3 w-[25%] font-medium whitespace-nowrap">
              #123456
            </div>
            <div className="py-3 w-[13%] font-medium">
              $666
            </div>
            <div className="py-3 w-[18%] font-medium">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium">
              <Link>
                View
              </Link>
            </div>
            <div className="py-3 w-[8%] font-medium cursor-pointer"  onClick={ () => setShow( prev => !prev )}>
              <LuArrowDownSquare />
            </div>
          </div>

          <div className={ show ? 'block border-b border-slate-700 bg-[#273446]' : 'hidden' }>
            <div className="flex justify-start items-start text-gray-400">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                #1234562
              </div>
              <div className="py-3 w-[13%] font-medium">
                $6662
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
            </div>
            <div className="flex justify-start items-start text-gray-400">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                #1234562
              </div>
              <div className="py-3 w-[13%] font-medium">
                $6662
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
            </div>
          </div>

        </div>
        <div className="text-[#d6dae0]">
          <div className="flex justify-between items-start border-b border-slate-700 text-gray-400">
            <div className="py-3 w-[25%] font-medium whitespace-nowrap">
              #123456
            </div>
            <div className="py-3 w-[13%] font-medium">
              $666
            </div>
            <div className="py-3 w-[18%] font-medium">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium">
              <Link>
                View
              </Link>
            </div>
            <div className="py-3 w-[8%] font-medium cursor-pointer"  onClick={ () => setShow( prev => !prev )}>
              <LuArrowDownSquare />
            </div>
          </div>

          <div className={ show ? 'block border-b border-slate-700 bg-[#273446]' : 'hidden' }>
            <div className="flex justify-start items-start text-gray-400">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                #1234562
              </div>
              <div className="py-3 w-[13%] font-medium">
                $6662
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
            </div>
            <div className="flex justify-start items-start text-gray-400">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                #1234562
              </div>
              <div className="py-3 w-[13%] font-medium">
                $6662
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
            </div>
          </div>

        </div>
        <div className="text-[#d6dae0]">
          <div className="flex justify-between items-start border-b border-slate-700 text-gray-400">
            <div className="py-3 w-[25%] font-medium whitespace-nowrap">
              #123456
            </div>
            <div className="py-3 w-[13%] font-medium">
              $666
            </div>
            <div className="py-3 w-[18%] font-medium">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium">
              Pending
            </div>
            <div className="py-3 w-[18%] font-medium">
              <Link>
                View
              </Link>
            </div>
            <div className="py-3 w-[8%] font-medium cursor-pointer"  onClick={ () => setShow( prev => !prev )}>
              <LuArrowDownSquare />
            </div>
          </div>

          <div className={ show ? 'block border-b border-slate-700 bg-[#273446]' : 'hidden' }>
            <div className="flex justify-start items-start text-gray-400">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                #1234562
              </div>
              <div className="py-3 w-[13%] font-medium">
                $6662
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
            </div>
            <div className="flex justify-start items-start text-gray-400">
              <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                #1234562
              </div>
              <div className="py-3 w-[13%] font-medium">
                $6662
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
              <div className="py-3 w-[18%] font-medium">
                Pending
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
