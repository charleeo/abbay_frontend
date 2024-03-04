import 'react-toastify/dist/ReactToastify.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import ApplyLoan from './Components/Clients/Loans/Apply';
import {
  AdminProtectedRoute,
} from './Components/Protected/AdminProtectedRoute';
import {
  ClientProtectedRoute,
} from './Components/Protected/ClientProtectedRoute';
import Dashboard from './Components/Protected/Dashboard';
import Logout from './Components/Protected/Logout';
import ProfilePage from './Components/Protected/Profile';
import ProfileSettings from './Components/Protected/ProfileSettings';
import { ProtectedRoute } from './Components/Protected/ProtectedRoute';
import HomePage from './Components/Public/HomePage';
import NotAuthorized from './Components/Public/NotAuthorized';
import NotFound from './Components/Public/NotFound';
import { routesNested } from './routes';
import Navbar from './widgets/layout/Navbar/navbar';

import ClientLoanRecords from './Components/Protected/Loans/Loans';
import Loans from './Components/Admin/Loans';
import AdminProfile from './Components/Protected/AdminProfile';

const App: React.FC = () => {

  return (
    <>
      <Router>
        <Navbar routes={routesNested} />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/" element={<ProtectedRoute />}>

            {/* Admin Protected Routes */}
            <Route path="/" element={<AdminProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/loans" element={<Loans />} />
              <Route path='/admin/profile' element={<AdminProfile/>} />
          </Route>

          {/* Client Protected Routes */}
          <Route path="/" element={<ClientProtectedRoute />}>
            <Route path="/loan/apply" element={<ApplyLoan />} />
            <Route path="/applied/loans" element={<ClientLoanRecords />} />
          </Route>

          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/:id/ProfileSettings" element={<ProfileSettings />} />
        
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/not-allowed" element={<NotAuthorized />} />

      </Routes>
     
      </Router>
    </>
  )


}

export default App



