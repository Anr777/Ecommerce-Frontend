import { Outlet } from "react-router-dom";
import { Header, Sidebar } from ".";
import { useState } from "react";




export function MainLayout() {

  const [ showSidebar, setShowSidebar ] = useState(false);

  return (
    <div className="bg-[#0f1720] w-full min-h-screen">
      <Header showSidebar={ showSidebar } setShowSidebar={ setShowSidebar } />
      <Sidebar showSidebar={ showSidebar } setShowSidebar={ setShowSidebar } />
      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all text-white">
        <Outlet />
      </div>
    </div>
  )
}
