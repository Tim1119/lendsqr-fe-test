import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Users from "../pages/Users"

const DashboardLayout = () => {
  return (
    <section>
        <section className="dashboard" >
            <Header />
            <Sidebar />
            <main className="main-view" >
{/* main dashboard */}
    <Users />
            </main>
            
        </section>

    </section>
  )
}

export default DashboardLayout