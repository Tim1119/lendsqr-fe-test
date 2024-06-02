import '../../styles/components/userDetailsHeaderInfo.scss'
import userIcon from '../../assets/icons/pages/user.svg'
import positiveRatingIcon from '../../assets/icons/pages/positive-rating.svg'
import emptyRatingIcon from '../../assets/icons/pages/empty-rating.svg'
import { useState } from 'react'

interface UserDetailsHeaderInfo{
    user:any;
}


const UserDetailsHeaderInfo = ({user}:UserDetailsHeaderInfo) => {
    const [userImage, setUserImage] = useState(null)
    const [rating, setRating] = useState<number>(1)
  return (
    <div className='userDetailsHeader' >
        <div className="userDetailsHeader__top-info">
            <div className='userDetailsHeader__profile-and-name-container'>
                {userImage ? (
                <div className="userDetailsHeader__profile-container" >
                    <img src={userIcon} alt="user-icon" />
                </div>):(

                <div className="userDetailsHeader__default-profile-container" >
                    <img src={userIcon} alt="user-icon" />
                </div>
                )}
                <div className="userDetailsHeader__name-and-id" >
                    <h3>Grace Effiom</h3>
                    <p>LSQFf587g90</p>
                </div>
            </div>
            <div className='userDetailsHeader__top-info-user-tier' >
                <h4>User's Tier</h4>

                <div className="userDetailsHeader__rating">
                    {[...Array(rating)].map((_, index) => (
                      <span><img key={index} src={positiveRatingIcon} alt="rating" /></span>  
                    ))}
                    {[...Array(3-rating)].map((_, index) => (
                       <span><img key={index} src={emptyRatingIcon} alt="empty-rating" /></span>
                    ))}
                </div>
                <p></p>
            </div>
            <div className="userDetailsHeader__top-info-bank-and-amount" >
                <div>
                <h3>₦200,000.00</h3>
                <p>9912345678/Providus Bank</p>
                </div>
            </div>
        </div>
        <div className="userDetailsHeader__Bottom-Info" >
            <div >
                <li>General Details</li>
            </div>
            <div>
                <li>Documents</li>
            </div>
            <div>
                <li>Bank Details</li>
            </div>
            <div>
                <li>Loans</li>
            </div>
            <div>
                <li>Savings</li>
            </div>
            <div>
                <li>App and System</li>
            </div>
        </div>
    </div>
  )
}

export default UserDetailsHeaderInfo