import React from 'react'
import { dashboardInformation } from '../../utils/dashboardInfo'
import UserInformationCard from '../../components/UserInformationCard'
import UserInformationFeed from '../../components/UserInformationFeed'
import UsersTable from '../../components/UsersTable'

const Users = () => {
  return (
    <div className='users__page' >
        <h2 className="users__page-title">Users</h2>
        <UserInformationFeed />
        <div className='users__table-container'  >
        <UsersTable />

        </div>
    </div>
  )
}

export default Users