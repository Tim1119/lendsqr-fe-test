import { sidebarNavItems } from '../utils/sidebarData';


const Sidebar = () => {
  return (
    <nav className="sidebar" >
        {sidebarNavItems.map((item,index)=>{
            return (
                <>
                    {item.header?"" : (
                    <div  className='sidebar__link'>
                       <span> {item.icon}</span>
                        <span>{item.title}</span>
                    </div>) }
                </>
                
            )
        })}
    </nav>
  )
}

export default Sidebar