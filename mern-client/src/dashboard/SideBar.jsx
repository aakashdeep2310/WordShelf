import React, { useContext } from "react";
import userImg from "../assets/profile.jpg";
import { Sidebar } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import { BiBuoy } from "react-icons/bi";
import p3 from "../assets/p3.jpg"
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
  HiOutlineCloudUpload,
} from "react-icons/hi";
import { AuthContext } from './AuthProvider';

const SideBar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      console.log('Attempting to log out...');
      await logout();
      console.log('Logout successful.');
      navigate('/admin/dashboard/signin');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="bg-gray-50">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Logo href="#" img={p3} imgAlt="WordShelf Logo">
          <p className="px-3 py-3">WordShelf</p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="/admin/dashboard"
              icon={HiChartPie}
              className="flex items-center justify-start space-x-2"
            >
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/upload"
              icon={HiOutlineCloudUpload}
              className="flex items-center justify-start space-x-2"
            >
              Upload Books
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/manage"
              icon={HiInbox}
              className="flex items-center justify-start space-x-2"
            >
              Manage Books
            </Sidebar.Item>
        
            <Sidebar.Item
              href="/admin/dashboard/products"
              icon={HiShoppingBag}
              className="flex items-center justify-start space-x-2"
            >
              Products
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/signin"
              icon={HiArrowSmRight}
              className="flex items-center justify-start space-x-2"
            >
              Sign In
            </Sidebar.Item>
            <Sidebar.Item
              onClick={handleLogout}
              icon={HiTable}
              className="flex items-center justify-start space-x-2 cursor-pointer"
            >
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              href="#"
              icon={HiChartPie}
              className="flex items-center justify-start space-x-2"
            >
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={HiViewBoards}
              className="flex items-center justify-start space-x-2"
            >
              Documentation
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={BiBuoy}
              className="flex items-center justify-start space-x-2"
            >
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
