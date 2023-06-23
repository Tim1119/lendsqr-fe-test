interface UserData {
    icon:JSX.Element;
    title:string;
    data:string
}


const UserInformationCard = ({icon,title,data}:UserData) => {
  return (
    <section className="users__information-card" >
         {icon}
            <p>{title}</p>
            <p>{data}</p>
    </section>
  )
}

export default UserInformationCard