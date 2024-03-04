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
  ClientProtectedRoute,
} from './Components/Protected/ClientProtectedRoute';
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



