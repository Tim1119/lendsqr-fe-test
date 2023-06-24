import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import StarGroup from './StarGroup';
import profilePicture from '../assets/images/adedeji.svg'
import AvatarIcon from "../assets/images/avatar.svg";

const userNavItems: String[] = ['General Details','Documents', 'Bank Details', 'Loans', 'Savings', 'App and System'];

// interface Props {
//     user: any;
// }

const UserDetailsHeader = () => {
	return (
		<div className="user-detail__basic-information-header">
			<div className="user-detail__basic-information">
				<div>
					<div className="user-detail__avatar">
						<img
							src={profilePicture}
							alt=""
							onError={({ currentTarget }) => {
							currentTarget.onerror = null;  // this prevents looping
							currentTarget.src = AvatarIcon;
						}}
						/>
					</div>
					<div>
						<p>Ajani Timothy</p>
						<p>1323547474</p>
						{/* <p>{`${user?.profile?.firstName} ${user?.profile?.lastName}`}</p>
						<p>{user?.profile?.bvn}</p> */}
					</div>
				</div>

				<div className="user-detail__user-tier">
					<p>User’s Tier</p>
					<StarGroup />
				</div>

				<div>
					<p>₦500</p>
					<p>First Bank/Providus Bank</p>
					{/* <p>₦{user?.accountBalance}</p>
					<p>{user?.accountNumber}/Providus Bank</p> */}
				</div>
			</div>
			<div className="user-detail__tab">
				{userNavItems.map((item, index) => {
					return (
						<Link key={index} to="#">
							<div>{item}</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default UserDetailsHeader;
