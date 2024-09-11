import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import './index.css'
import Signin from './components/Pages/Signup';
import PasswordReset from './components/Pages/PasswordReset';
import Otpverification from './components/Pages/Otpverification';
import OtpPasswordReset from './components/Pages/OtpPasswordReset';
import Dashboard from './components/Pages/Dashboard';
import LoginSelect from './components/Pages/LoginSelect';
import ExplorePage from './components/Pages/ExplorePage';
import OverviewReview from './components/Pages/OverviewReview';
import RatingPage from './components/Pages/RatingPage';
import WriteReview from './components/Pages/WriteReview';






import Notfound from './components/Pages/Noutfound'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signin />} />
                <Route path="/password_reset" element={<PasswordReset />} />
                <Route path="/otpverification" element={<Otpverification />} />
                <Route path="/otp-reset-code" element={<OtpPasswordReset />} />
                <Route path="/dashboard" element ={<Dashboard/>}/>
                <Route path="/login-select" element ={<LoginSelect/>}/>
                <Route path="/explore-page" element ={<ExplorePage/>}/>
                <Route path="/establishment-overview" element ={<OverviewReview/>}/>
                <Route path="/rating-page" element ={<RatingPage/>}/>
                <Route path="/write-review" element ={<WriteReview/>}/>



                <Route path="*" element={<Notfound />} />
            </Routes>
        </Router>
  </StrictMode>,
)


