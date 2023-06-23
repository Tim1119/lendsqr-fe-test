import {ReactComponent as NumberOfUsersIcon} from '../assets/images/users-information-board.svg'
import {ReactComponent as ActiveUsersIcon} from '../assets/images/active-users.svg'
import {ReactComponent as UsersWithSavingsIcon} from '../assets/images/users-with-savings.svg'
import {ReactComponent as UsersWithLoansIcon} from '../assets/images/users-with-loans.svg'

export const dashboardInformation = [
    {
        title:"USERS",
        data: "2,453",
        icon: <NumberOfUsersIcon />,
    },
    {
        title:"ACTIVE USERS",
        data: "2,453",
        icon: <ActiveUsersIcon />,
    },
    {
        title:"USERS WITH LOANS",
        data: "12,453",
        icon: <UsersWithLoansIcon />,
    },
    {
        title: "USERS WITH SAVINGS",
        data: "102,453",
        icon: <UsersWithSavingsIcon />,
    },
  ]