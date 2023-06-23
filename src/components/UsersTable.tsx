import Pagination from "../components/Pagination";
import { Popover, Transition, Listbox, Menu } from "@headlessui/react";
import { Fragment, useCallback, useState } from "react";
import {ReactComponent as FilterIcon} from '../assets/images/filter.svg'
import {ReactComponent as ThreeDotsIcon} from '../assets/images/three-dots.svg'
import {ReactComponent as BlacklistUserIcon} from '../assets/images/blacklist-user.svg'
import {ReactComponent as ActivateUserIcon} from '../assets/images/activate-user.svg'
import {ReactComponent as ViewDetailsIcon} from '../assets/images/view-details.svg'
import {ReactComponent as ChevronDownIcon} from '../assets/images/chevron-down.svg'
import { useNavigate } from "react-router-dom";



const UsersTable = () => {
    const navigate = useNavigate();
    const users = [{}]
  return (
    <>
         <table>
            <thead>
              <tr>
                {[
                  "ORGANIZATION",
                  "USERNAME",
                  "EMAIL",
                  "PHONE NUMBER",
                  "DATE JOINED",
                  "STATUS",
                ].map((heading) => (
                  <th className="table-heading" key={heading}>
                    <Popover style={{ position: "relative" }}>
                      {() => (
                        <>
                          <Popover.Button as="span">
                            <span>{heading}</span>
                            <FilterIcon />
                          </Popover.Button>
                          <Transition as={Fragment}>
                            <Popover.Panel className="popover-panel">
                              <div className="filter-container">
                                <form>
                                  <label
                                    htmlFor="organization"
                                    className="form-label"
                                  >
                                    Organization
                                  </label>
                                  <Listbox value={""} onChange={() => {}}>
                                    <Listbox.Button className="form-control select-button">
                                      <span>Select</span>
                                      <ChevronDownIcon fillOpacity="0.2" />
                                    </Listbox.Button>
                                  </Listbox>

                                  <label
                                    htmlFor="userName"
                                    className="form-label"
                                  >
                                    Username
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="User"
                                  />

                                  <label htmlFor="email" className="form-label">
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                  />

                                  <label htmlFor="date" className="form-label">
                                    Date
                                  </label>
                                  <input
                                    type="text"
                                    onFocus={(e) => (e.target.type = "date")}
                                    onBlur={(e) => (e.target.type = "text")}
                                    className="form-control"
                                    placeholder="Date"
                                  />

                                  <label
                                    htmlFor="phoneNumber"
                                    className="form-label"
                                  >
                                    Phone Number
                                  </label>
                                  <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone Number"
                                  />

                                  <label
                                    htmlFor="status"
                                    className="form-label"
                                  >
                                    Status
                                  </label>
                                  <Listbox value={""} onChange={() => {}}>
                                    <Listbox.Button className="form-control select-button">
                                      <span>Select</span>
                                      <ChevronDownIcon fillOpacity="0.2" />
                                    </Listbox.Button>
                                  </Listbox>

                                  <div className="button-group">
                                    <button>Reset</button>
                                    <button>Filter</button>
                                  </div>
                                </form>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>{" "}
                  </th>
                ))}
              </tr>
            </thead>
            {/* <tbody>
              {users
                ?.slice(
                  pageSize * (currentPage - 1),
                  pageSize * currentPage + pageSize
                )
                ?.map((user: UserDetail) => (
                  <tr
                    key={user?.id}
                    onClick={() => navigate(`/dashboard/users/${user?.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <td
                      className="table-data"
                      style={{ textTransform: "capitalize" }}
                    >
                      {user?.orgName}
                    </td>
                    <td className="table-data">{user?.userName}</td>
                    <td className="table-data">{user?.email}</td>
                    <td className="table-data">{user?.profile?.phoneNumber}</td>
                    <td className="table-data">
                      {formatDate(user?.createdAt)}
                    </td>
                    <td className="table-data">
                      <span className="table-data__status__active">
                        {"Active"}{" "}
                      </span>
                    </td>
                    <td
                      className="table-data"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <>
                        <Menu as="div" style={{ position: "relative" }}>
                          <Menu.Button as="span" className="">
                            <ThreeDotsIcon className="" aria-hidden="true" />
                          </Menu.Button>

                          <Transition as={Fragment}>
                            <div>
                              <Menu.Items
                                as="div"
                                className="dropdown-container"
                              >
                                <>
                                  <Menu.Item>
                                    <button
                                      className="dropdown-button"
                                      onClick={() =>
                                        navigate(`/dashboard/users/${user?.id}`)
                                      }
                                    >
                                      <ViewDetailsIcon />
                                      <span>View Details</span>
                                    </button>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <button className="dropdown-button">
                                      <BlacklistUserIcon />
                                      <span>Blacklist User</span>
                                    </button>
                                  </Menu.Item>
                                  <Menu.Item>
                                    <button className="dropdown-button">
                                      <ActivateUserIcon />
                                      <span>Activate User</span>
                                    </button>
                                  </Menu.Item>
                                </>
                              </Menu.Items>
                            </div>
                          </Transition>
                        </Menu>
                      </>
                    </td>
                  </tr>
                ))}
            </tbody> */}
          </table>
    </>
  )
}

export default UsersTable