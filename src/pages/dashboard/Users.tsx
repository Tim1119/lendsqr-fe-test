import React from 'react'
import { dashboardInformation } from '../../utils/dashboardInfo'
import UserInformationCard from '../../components/UserInformationCard'
import UserInformationFeed from '../../components/UserInformationFeed'

const Users = () => {
  return (
    <div className='users__page' >
        <h2 className="users__page-title">Users</h2>
        <UserInformationFeed />
    </div>
  )
}

export default Users