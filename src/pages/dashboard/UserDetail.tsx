import {useNavigate} from "react-router-dom"
import {ReactComponent as BackIcon} from "../../assets/images/back-arrow-icon.svg"
import profilePicture from '../../assets/images/adedeji.svg'
import AvatarIcon from "../../assets/images/avatar.svg";
import StarGroup from "../../components/StarGroup";
import UserDetailsHeader from "../../components/UserDetailsHeader";
import UserDetailsMain from "../../components/UserDetailsMain";

const UserDetail = () => {
    const navigate = useNavigate();

  return (
    <div className="user-detail" >
         <span className="user-detail__back" onClick={() => navigate("/dashboard")}><BackIcon /><span>Back to Users</span></span>
         <div className="user-detail__page-title-container">
            <h2 className="user-detail__page-title">
                Users Details
            </h2>
            <aside>
                <button className="user-detail__blacklist">
                    BLACKLIST USER
                </button>
                <button className="user-detail__activate">
                    ACTIVATE USER
                </button>
            </aside>
      </div>
    
      <UserDetailsHeader />
      <UserDetailsMain />
    </div>
  )
}

export default UserDetail