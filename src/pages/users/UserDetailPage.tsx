import { Link } from 'react-router-dom'
import arrowLeft from '../../assets/icons/pages/arrow-left.svg'
import '../../styles/pages/userDetail.scss'
import UserDetailsHeaderInfo from '../../components/user/UserDetailsHeader'
import dummyUser from '../../utils/dummy'
import UserDetailsMainInfo from '../../components/user/UserDetailsMainInfo'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'
import { User } from '../../types/user'
import Loader from '../../components/Loader'



const UserDetailPage = () => {

  const { userId } = useParams(); // Get userId from route param
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log('userId',userId)

  useEffect(() => {
    const fetchUserData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Check if user data is already in localStorage
        const cachedUser = localStorage.getItem(`user-${userId}`);
        console.log('hahahahah','Local storage')

        if (cachedUser) {
          // Use cached user data if available
          setUser(JSON.parse(cachedUser));
        } else {
          console.log('hahahahah','Fetched User')
          // Fetch user details from API if not cached
          const response = await axios.get<User>(`${import.meta.env.VITE_MOCK_API_GENERATOR_URL}/users/${userId}`);
         
          setUser(response.data);

          // // Store fetched user data in localStorage for future use
          localStorage.setItem(`user-${userId}`, JSON.stringify(response.data));
          console.log(response)
        }
      } catch (error) {
        setError('Failed to fetch user details.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [userId]); // Run useEffect only when userId changes

  return (
    <div className='userDetailsPage' >
      <Link className='userDetailsPage__back-page-icon' to="/dashboard/users" ><img src={arrowLeft} alt="arrow-left" /><span  >Back to Users</span></Link>
      <div className='userDetailsPage__header-container' >
        <h3 className='userDetailsPage__page-title'> User Details</h3>
        <div>
          <button className='userDetailsPage__blacklist-button' >Blacklist User</button>
          <button className='userDetailsPage__activate-button'>Activate User</button>
        </div>
      </div>
      {isLoading ? <Loader /> : (
        
        
      <> 
      
      <UserDetailsHeaderInfo user={user} />
      <UserDetailsMainInfo user={user} />
 
      </>
       
      )}
    </div>
  )
}

export default UserDetailPage