import { FaUsers } from "react-icons/fa";
import { FaCartShopping, FaMoneyBills } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import React from "react";




export default function AdminDashboard() {

  const state = {
    series: [
      {
        name: 'Orders',
        data: [ 23, 34, 45, 56, 59, 67, 76, 67, 97, 22, 56, 58 ]
      },
      {
        name: 'Revenue',
        data: [ 22, 34, 97, 56, 58, 67, 25, 67, 97, 34, 56, 58 ]
      },
      {
        name: 'Sellers',
        data: [ 29, 38, 97, 102, 68, 67, 48, 76, 97, 67, 56, 58 ]
      },
    ],
    options: {
      color: [ '#3475ec', '#9f4aed' ],
      plotOptions: {
        radius: 30
      },
      chart: {
        background: 'transparent',
        foreColor: '#d0d2d6'
      },
      dataLabels: {
        enabled: false
      },
      strock: {
        show: true,
        curve: [ 'smooth', 'straight', 'stepline' ],
        lineCap: 'butt',
        colors: '#f0f0f0',
        width: .5,
        dashArray: 0,
      },
      xaxis: {
        categories: [ 'Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
      },
      legend: {
        position: 'top'
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [ 'Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            chart: {
              height: '550px'
            }
          }
        }
      ]
    }
  }

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="flex justify-center min-[300px]:justify-between items-center p-5 bg-[#161e29] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#757d89]">
            <div className="flex justify-center items-center gap-3 w-full">
              <div className="rounded-full bg-[#125b2e] w-[55px] h-[55px] text-white flex justify-center items-center">
                <span className="text-[25px] shadow-lg">
                  <FaMoneyBills />
                </span>
              </div>
              <div>
                <span className="text-md uppercase font-extrabold text-[10px]">Total Sales</span>
                <h2 className="text-2xl ">$3434</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center min-[300px]:justify-between items-center p-5 bg-[#161e29] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#757d89]">
            <div className="flex justify-center items-center gap-3 w-full">
              <div className="rounded-full bg-[#094e75] w-[55px] h-[55px] text-white flex justify-center items-center">
                <span className="text-[25px] shadow-lg">
                  <MdOutlineProductionQuantityLimits />
                </span>
              </div>
              <div>
                <span className="text-md uppercase font-extrabold text-[10px]">Products</span>
                <h2 className="text-2xl ">30</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center min-[300px]:justify-between items-center p-5 bg-[#161e29] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#757d89]">
            <div className="flex justify-center items-center gap-3 w-full">
              <div className="rounded-full bg-[#2f2891] w-[55px] h-[55px] text-white flex justify-center items-center">
                <span className="text-[25px] shadow-lg">
                  <FaUsers />
                </span>
              </div>
              <div>
                <span className="text-md uppercase font-extrabold text-[10px]">Sellers</span>
                <h2 className="text-2xl ">10</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center min-[300px]:justify-between items-center p-5 bg-[#161e29] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-[#757d89]">
            <div className="flex justify-center items-center gap-3 w-full">
              <div className="rounded-full bg-[#7a4414] w-[55px] h-[55px] text-white flex justify-center items-center">
                <span className="text-[25px] shadow-lg">
                  <FaCartShopping />
                </span>
              </div>
              <div>
                <span className="text-md uppercase font-extrabold text-[10px]">Orders</span>
                <h2 className="text-2xl ">$434</h2>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#161e29] p-4 rounded-md text-black">
            <Chart options={ state.options } series={ state.series } type='bar'
              height={ 350 }
            />
          </div>
        </div>

        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#161e29] p-4 rounded-md text-[#d6dae0]">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-[#d6dae0] pb-3">
                Recent Seller Message
              </h2>
              <Link to={ '' } className="font-semibold text-sm text-[#d6dae0]">
                View All
              </Link>
            </div>

            <div className="flex flex-col gap-2 pt-6 text-[#d6dae0]">
              <ol className="relative border-1 border-slate-600 ml-4">
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#313e50] rounded-full z-10">
                    <img className="w-full rounded-full h-full shadow-lg" src="/images/admin.jpg" alt="admin" />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">2 day ago</time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      How are you ?
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#313e50] rounded-full z-10">
                    <img className="w-full rounded-full h-full shadow-lg" src="/images/admin.jpg" alt="admin" />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">2 day ago</time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      How are you ?
                    </div>
                  </div>
                </li>
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#313e50] rounded-full z-10">
                    <img className="w-full rounded-full h-full shadow-lg" src="/images/admin.jpg" alt="admin" />
                  </div>
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">2 day ago</time>
                    </div>
                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      How are you ?
                    </div>
                  </div>
                </li>
              </ol>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full p-4 bg-[#161e29] rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-[#d6dae0] pb-3">Recent Orders</h2>
          <Link className="font-semibold text-sm text-[#d6dae0]">
            View All
          </Link>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-[#d6dae0] ">
            <thead className="text-sm text-[#d6dae0] uppercase border-b border-slate-700">
              <tr>
                <th scope="col" className="py-3 px-4">Order Id</th>
                <th scope="col" className="py-3 px-4">Price</th>
                <th scope="col" className="py-3 px-4">Payment Status</th>
                <th scope="col" className="py-3 px-4">Order Status</th>
                <th scope="col" className="py-3 px-4">Active</th>
              </tr>
            </thead>

            <tbody>
              {
                [ 1, 2, 3, 4, 5 ].map( item => (
                  <React.Fragment key={ item }>
                    <tr className="">
                      <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                        #34344
                      </td>
                      <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                        $454
                      </td>
                      <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                        Pending
                      </td>
                      <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                        Pending
                      </td>
                      <td scope="row" className="py-3 px-4 font-medium whitespace-nowrap">
                        <Link>
                          View
                        </Link>
                      </td>
                    </tr>
                  </React.Fragment>
                ) )
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
