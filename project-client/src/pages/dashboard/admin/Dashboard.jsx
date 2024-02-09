import React from 'react'
import { Link, Outlet } from "react-router-dom";
import {
  FaEdit,
  FaPlusCircle,
  FaRegUser,
  FaUser,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className='flex flex-col md:flex-row w-full space-x-6 mt-[10%]'>
      <Link to="/dashboard/add-menu">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          <FaPlusCircle />
          Add Menu</button>
      </Link>

      <Link to="/dashboard/manage-items">
        <button  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"><FaEdit /> Manage Items
        </button>
      </Link>

      <Link to="/dashboard/users">
        <button  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"><FaUser /> All Users</button>
      </Link>

    </div >
  )
}

export default Dashboard