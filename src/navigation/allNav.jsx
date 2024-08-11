
// import { AiTwotoneDashboard } from 'react-icons/ai';
import { MdDashboard, MdPayment } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { FaUserTimes, FaUsers } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoChatbubblesSharp } from "react-icons/io5";



export const allNav = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <MdDashboard />,
    role: 'admin',
    path: '/admin/dashboard'
  },
  {
    id: 2,
    title: 'Orders',
    icon: <AiOutlineShoppingCart />,
    role: 'admin',
    path: '/admin/dashboard/orders'
  },
  {
    id: 3,
    title: 'Category',
    icon: <MdOutlineCategory />,
    role: 'admin',
    path: '/admin/dashboard/category'
  },
  {
    id: 4,
    title: 'Sellers',
    icon: <FaUsers />,
    role: 'admin',
    path: '/admin/dashboard/sellers'
  },
  {
    id: 5,
    title: 'Payment Request',
    icon: <MdPayment />,
    role: 'admin',
    path: '/admin/dashboard/payment-request'
  },
  {
    id: 6,
    title: 'Desactive Sellers',
    icon: <FaUserTimes />,
    role: 'admin',
    path: '/admin/dashboard/desactive-sellers'
  },
  {
    id: 7,
    title: 'Seller Request',
    icon: <FaCodePullRequest />,
    role: 'admin',
    path: '/admin/dashboard/seller-request'
  },
  {
    id: 8,
    title: 'Live Chat',
    icon: <IoChatbubblesSharp />,
    role: 'admin',
    path: '/admin/dashboard/chat-seller'
  },
  // {
  //   id: 9,
  //   title: 'Logout',
  //   icon: <IoChatbubblesSharp />,
  //   role: 'admin',
  //   path: 'admin/dashboard/chat-seller'
  // },
]