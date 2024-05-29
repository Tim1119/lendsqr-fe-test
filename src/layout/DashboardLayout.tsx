import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div>
      <h3>This dashboard layout</h3>
      <Outlet />
    </div>
  )
}

export default DashboardLayout