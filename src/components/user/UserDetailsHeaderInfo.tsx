import '../../styles/components/userDetailsHeaderInfo.scss'
import userIcon from '../../assets/icons/pages/user.svg'
import positiveRatingIcon from '../../assets/icons/pages/positive-rating.svg'
import emptyRatingIcon from '../../assets/icons/pages/empty-rating.svg'
import { useState } from 'react'
import { User } from '../../types/user'

interface UserDetailsHeaderInfo{
    user:User;
}


const UserDetailsHeaderInfo = ({user}:UserDetailsHeaderInfo) => {
   
  return (
    <div className='userDetailsHeader' >
        <div className="userDetailsHeader__top-info">
            <div className='userDetailsHeader__profile-and-name-container'>
                 
                <div className="userDetailsHeader__profile-container" >
                    <img src={user?.image} alt="user-icon" />
                </div>
                <div className="userDetailsHeader__name-and-id" >
                    <h3>{user?.username}</h3>
                    <p>{user?.id}</p>
                </div>
            </div>
            <div className='userDetailsHeader__top-info-user-tier' >
                <h4>User's Tier</h4>

                <div className="userDetailsHeader__rating">
                    {[...Array(user?.userTier)].map((_, index) => (
                      <span key={index}><img  src={positiveRatingIcon} alt="rating" /></span>  
                    ))}
                    
                 
                       <span   ><img src={emptyRatingIcon} alt="empty-rating" /></span>
                    
                </div>
                <p></p>
            </div>
            <div className="userDetailsHeader__top-info-bank-and-amount" >
                <div>
                <h3>₦{user?.monthlyIncome}</h3>
                <p>{user?.bankAccount}/{user?.bank}</p>
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