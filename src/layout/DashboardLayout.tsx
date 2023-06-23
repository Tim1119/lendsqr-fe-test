import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const DashboardLayout = () => {
  return (
    <section>
        <section className="dashboard" >
            <Header />
            <Sidebar />
            <main className="dashboard__main-view" >
{/* main dashboard */}
            </main>
            
        </section>

    </section>
  )
}

export default DashboardLayout