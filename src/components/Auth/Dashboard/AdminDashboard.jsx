import React from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTAsk';

const AdminDashboard = () => {
    return (
        <div className='h-screen w-full p-7'>
          <Header />
         <CreateTask />
         <AllTask />
        </div>
    );
};

export default AdminDashboard;