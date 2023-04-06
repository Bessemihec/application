import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";


import Home from './pages/Home';
import Details from './pages/Details';
import Register from './pages/Register';

import Sliding from './components/slider';
import HomePage from './pages/mainhome';

import Page from './pages/Employee';
import UserForm from './pages/Addcandidat';
import UserList from './pages/ShowUser';
import Update from './pages/updateCandidat';
import UpdateEmployee from './pages/UpdateUsers';
import EmployeeList from './pages/ShowUser';
import AddEmployee from './pages/AddUsers';
import UserProfile from './pages/profile';
import MyForm from './pages/CandidatFormulare';
import Sidebar from './components/Sidebar';
import Education from './pages/education';
import Experience from './pages/experience';
import Information from './pages/informationsgenerales';
import InformationProfessionelles from './pages/informationprofessinelles';
import UpdateUser from './pages/UpdateUsers';
import AddUser from './pages/AddUsers';
import Footerpage from './components/footer';
import Navbar from './components/Navbar';
import Login from './pages/login';
import ProtectedRoute from './components/Protectedroutes';
import ChangePasswordPage from './pages/profile';
import OffresList from './pages/offres';
import OffreDetails from './pages/offredetails';
import AddOffre from './pages/Addoffres';
import EditOffre from './pages/updateoffre';
import CandidatureForm from './pages/Candidatureform';


function App() {


  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/register" element={<Register />} />
       <Route path="/Sliding" element={<Sliding />} />
       <Route path="/" element={<HomePage />} />
      <Route path="/User/:id" element={<UpdateUser/>}/>
       <Route path="/adduser" element={<AddUser />}/>
       <Route path="/user" element={ <UserList /> }/>
      <Route path="/profile" element={<UserProfile />}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/education" element={<Education/>}/>
       <Route path="/experience" element={<Experience/>}/>
       <Route path="/informationsgenerales" element={<ProtectedRoute><Information/></ProtectedRoute>}/>
       <Route path="/changepassword/:userId" element={<ChangePasswordPage/>} />
       <Route  path="/formulaire" element={ <ProtectedRoute><MyForm /></ProtectedRoute> }/>
       <Route  path="/offre" element={ <OffresList /> }/>
       <Route exact path="/offres/:id" element={<OffreDetails/>} />
       <Route exact path="/offres/:id/edit" element={<EditOffre/>} />
       <Route  path="/addoffre" element={ <AddOffre /> }/>
       <Route path="/offres/:id/postuler" element={<CandidatureForm/>}/>
       <Route path="/informationsprofessionnelles" element={<ProtectedRoute><InformationProfessionelles/></ProtectedRoute>}/>
       <Route path="/education" element={
       <ProtectedRoute><Education/></ProtectedRoute> 
        } />
      
    </Routes>
    
    <Footerpage />
  </BrowserRouter>

  
  );
}

export default App;
