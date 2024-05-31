import { Outlet } from 'react-router-dom';
import Navbar from '../components/dashboard/Navbar';
import Sidebar from '../components/dashboard/Sidebar';
import { useState } from 'react';

const DashboardLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`dashboard ${isSidebarOpen ? 'sidebar-open' : ''}`}>
    <Navbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    <div>
      <Outlet />
    </div>

  </div>
  )
}

export default DashboardLayout