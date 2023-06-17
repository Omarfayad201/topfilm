import logo from './logo.svg';
import './App.css';
import { Navigate, RouterProvider, createHashRouter, useNavigate } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Movies from './Components/Movies/Movies';
import Actors from './Components/Actors/Actors';
import Tvshow from './Components/Tvshowe/Tvshow';
import Register from './Components/Register/Register';
import Detailsmovies from './Components/Detailsmovies/Detailsmovies';
import Similarmovie from './Components/Similarmovie/Similarmovie';
import Detailstvshow from './Components/Detailstvshow/Detailstvshow';
import Similartv from './Components/Similartv/Similartv';
import NotFound from './Components/NotFound/NotFound';
import Logout from './Components/Logout/Logout';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';


function App() {
  // let navigate = useNavigate();
const [userData, setUserData] = useState(null)

  useEffect(() => {
    if(localStorage.getItem("userToken") !==null)

 saveUserData();
      
  },[])
  
  
  function saveUserData() {

    let inCode = localStorage.getItem('userToken');

    let deCodeToken = jwtDecode(inCode);

    setUserData(deCodeToken);
}  

  
  let routers = createHashRouter([
    {
      path: "",element:  <Layout setUserData={setUserData}   userData={userData} />,
      children: [
        { index: true, element:<ProtectedRoute><Home /></ProtectedRoute>  },
        { path: "movies", element:<ProtectedRoute><Movies /></ProtectedRoute>  },
        { path: "/detailsmovies/:id", element:<ProtectedRoute><Detailsmovies /></ProtectedRoute>  },
        { path: "/semilarmovie/:id", element:<ProtectedRoute><Similarmovie /></ProtectedRoute>  },
        { path: "/detailstvshow/:id", element:<ProtectedRoute><Detailstvshow /></ProtectedRoute>  },
        { path: "/similartv/:id", element:<ProtectedRoute><Similartv /></ProtectedRoute>  },
        { path: "tvshow", element:<ProtectedRoute><Tvshow /></ProtectedRoute>  },
        { path: "actors", element:<ProtectedRoute><Actors /></ProtectedRoute>  },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
        { path: "logout", element:<Logout /> },
        { path: "register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);















  return <RouterProvider router={routers}/>;
  
  
   
     
     
    
  
    
 
}

export default App;
