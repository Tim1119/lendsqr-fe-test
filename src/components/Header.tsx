import {ReactComponent as Logo} from "../assets/images/lendsqr-logo.svg"
import searchIcon from "../assets/images/search-icon.svg" 
import notificationIcon from "../assets/images/notification-icon.svg" 
import adedejiProfilePicture from "../assets/images/adedeji.svg"
import dropdownSVG from "../assets/images/dropdown.svg"
import menuIcon from "../assets/images/menu.svg"
const Header = () => {
  return (
    <header className="header" >
        <div className="header__container" >
            <section className="header__top-left" >
                <Logo />
                <div className="header__search-container" >
                    <input type="text" placeholder="Search for anything" />
                    <button>
                        <img src={searchIcon} alt="" />
                    </button>
                </div>
            </section>
            <section className="header__top-right" >
                <p>Docs</p>

                <img src={notificationIcon} alt="" />

                <div className="header__profile" >
                    <img  src={adedejiProfilePicture} className="header__profile-picture" alt="" />
                    <h5>Adedeji</h5>
                    <img src={dropdownSVG} className="header__profile-dropdown" alt="" />
                </div>

            </section>

            <div className="header__menu" >
                <img src={menuIcon} alt="" />
            </div>
        </div>
    </header>
  )
}

export default Header