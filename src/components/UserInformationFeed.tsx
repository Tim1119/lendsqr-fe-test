import { dashboardInformation } from "../utils/dashboardInfo"
import UserInformationCard from "./UserInformationCard"
const UserInformationFeed = () => {
  return (
    <section className="users__information-feed">
    {dashboardInformation.map((item,id)=>(
        <UserInformationCard key={id} icon={item.icon} title={item.title} data={item.data}  />
    ))}
    </section>
  )
}

export default UserInformationFeed