import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Users from "../pages/dashboard/Users"
import {Outlet} from "react-router-dom"

const DashboardLayout = () => {
  return (
    <section>
        <section className="dashboard" >
            <Header />
            <Sidebar />
            <main className="main-view" >
              <Outlet />
            </main>
            
        </section>

    </section>
  )
}

export default DashboardLayout