import React from 'react';
import { useNavigate } from 'react-router-dom';
import p3 from "../assets/p3.jpg";
const Dashboard = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Dashboard</h1>
        <p className="text-lg text-gray-600 mt-1">Overview of your account and activities</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Statistics Cards */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Total Books Sold</h2>
          <p className="text-3xl font-bold text-blue-600">123</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Total Books Purchased</h2>
          <p className="text-3xl font-bold text-green-600">456</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800">Pending Orders</h2>
          <p className="text-3xl font-bold text-red-600">7</p>
        </div>
      </section>
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <ul>
          <li className="border-b border-gray-200 py-2">Order #1234 - Book sold</li>
          <li className="border-b border-gray-200 py-2">Order #1235 - Book purchased</li>
          <li className="border-b border-gray-200 py-2">Order #1236 - Book sold</li>
          <li className="border-b border-gray-200 py-2">Order #1237 - Book purchased</li>
        </ul>
      </section>
      <section className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User Information</h2>
        <div className="flex items-center">
          <img
            src={p3}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-2 border-gray-300 mr-6"
          />
          <div>
            <p className="text-lg font-semibold text-gray-800">Aakash Deep</p>
            <p className="text-gray-600">Email: aakash@example.com</p>
            <p className="text-gray-600">Joined: January 2024</p>
          </div>
        </div>
      </section>
      <div className="mt-8 text-center">
        <button
          onClick={goToHomePage}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-700 transition duration-300"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
