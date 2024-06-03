import UsersInfoCardRow from '../../components/cards/UsersInfoCardRow'
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import UsersTable from '../../components/user/UsersTable';
import { useEffect, useState } from 'react';
import downArrowIcon from '../../assets/icons/pages/down-arrow.svg'
import usersData from '../../utils/users-data.json'
import '../../styles/pages/users.scss'


const UsersPage = () => {

	const [loading, setLoading] = useState<boolean>(false);
	// const [users, setUsers] = useState([]);
	const [users, setUsers] = useState(usersData);
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 9;

	// Used to show other users not on current page 
	const handlePageChange = (event: _any) => {
		const newOffset = (event.selected * itemsPerPage) % users.length;
		setItemOffset(newOffset);
	};

	const fetchUsers = async () => {
		setLoading(true);
		
		await axios.get(`${import.meta.env.VITE_MOCK_API_GENERATOR_URL}`)
			.then((response) => {
				setUsers(response.data);
				console.log('DATA------>',response.data);
				setLoading(false);
			})
			.catch((error) => {
				const err = error.response.data;
				console.log(err);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(users?.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(users?.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, users]);


  return (
   <div className='users-page' >
      <h3 className='users-page__title'>Users</h3>

      <UsersInfoCardRow />

      {loading ? (
					<div>
						{/* <Loader /> */}
						Loading
					</div>
				) : (
					<>
						<UsersTable users={currentItems}  />
						<div className="users-page__paginate">
							<div className="users-page__paginate-info">
								<p>
									Showing{' '}
									<span>
										{itemOffset + itemsPerPage} <img src={downArrowIcon} alt="down arrow" />
									</span>{' '}
									out of {users.length}
								</p>
							</div>
							<ReactPaginate
								nextLabel=">"
								onPageChange={handlePageChange}
								pageRangeDisplayed={3}
								marginPagesDisplayed={2}
								pageCount={pageCount}
								previousLabel="<"
								pageClassName="users-page__page-item"
								pageLinkClassName="users-page__page-link"
								previousClassName="users-page__next-and-previous-page"
								nextClassName="users-page__next-and-previous-page"
								breakLabel="..."
								containerClassName="users-page__pagination-container"
								activeClassName="users-page__active-page"
								
							/>
						</div>
					</>
				)}

      
   </div>
  )
}

export default UsersPage