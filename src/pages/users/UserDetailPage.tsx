import { Link } from 'react-router-dom'
import arrowLeft from '../../assets/icons/pages/arrow-left.svg'
import '../../styles/pages/userDetail.scss'
import UserDetailsHeaderInfo from '../../components/user/UserDetailsHeaderInfo'
import dummyUser from '../../utils/dummy'
import UserDetailsMainInfo from '../../components/user/UserDetailsMainInfo'



const UserDetailPage = () => {
  return (
    <div className='userDetailsPage' >
      <Link className='userDetailsPage__back-page-icon' to="dashboard/users" ><img src={arrowLeft} alt="arrow-left" /><span  >Back to Users</span></Link>
      <div className='userDetailsPage__header-container' >
        <h3 className='userDetailsPage__page-title'> User Details</h3>
        <div>
          <button className='userDetailsPage__blacklist-button' >Blacklist User</button>
          <button className='userDetailsPage__activate-button'>Activate User</button>
        </div>
      </div>
        <UserDetailsHeaderInfo user={dummyUser} />
        <UserDetailsMainInfo user={dummyUser} />
    </div>
  )
}

export default UserDetailPage