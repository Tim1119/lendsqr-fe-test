import { sidebarNavItems } from '../utils/sidebarData';
import { ReactComponent as Dropdown } from '../assets/images/down-arrow.svg';


const Sidebar = () => {
  return (
    <nav className="sidebar" >
        {sidebarNavItems.slice(0,1).map((item,index)=>{
            return (
                <>

                    {item.header? (
                        <div className='sidebar__item-header big-margin' >
                            {item.title}
                        </div>
                    ) : (
                    <div  className={`sidebar__link big-margin ${item.selected ? "selected" : "" }` }>
                       <span> {item.icon}</span>
                        <span>{item.title}</span>
                        <span><Dropdown /></span>
                    </div>) }
                </> 
            )
        })}
        {sidebarNavItems.slice(1,2).map((item,index)=>{
            return (
                <>

                    {item.header? (
                        <div className='sidebar__item-header big-margin' >
                            {item.title}
                        </div>
                    ) : (
                    <div  className={`sidebar__link big-margin ${item.selected ? "selected" : "" }` }>
                       <span> {item.icon}</span>
                        <span>{item.title}</span>
                    </div>) }
                </> 
            )
        })}
        {sidebarNavItems.slice(2,sidebarNavItems.length).map((item,index)=>{
            return (
                <>

                    {item.header? (
                        <div className='sidebar__item-header' >
                            {item.title}
                        </div>
                    ) : (
                    <div  className={`sidebar__link ${item.selected ? "selected" : "" }` }>
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