import React from 'react'

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
  }

const Sidebar = ({ isOpen, toggleSidebar }:SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        bfhabsahfbashbfashbfajh
      {/* Sidebar content */}
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
    </div>
  )
}

export default Sidebar