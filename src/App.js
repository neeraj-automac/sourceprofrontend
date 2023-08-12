import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter , Route,Routes} from 'react-router-dom';
import LoginPage from './components/login_module/login_page';
import DashBoard from './components/dashboard_module/dashboard';
import MyCourses from './components/dashboard_module/mycourses';
import ProfileDetails from './components/profile/profile_details';
import CourseHome from './components/course_details/course_home';
import QuizTest from './components/quiz_view/quiz_test';
import React from "react";
function App() {
  return (
   
      
       <BrowserRouter>
        <ChakraProvider>
    <Routes>
      
        {/* <Switch> */}
        <Route path="/"  exact element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashBoard/>}></Route>
        <Route path="/mycourses" element={<MyCourses/>}></Route>
        <Route path="/profile" element={<ProfileDetails/>}></Route>
        <Route path="/course" element={<CourseHome/>}></Route>
        <Route path="/quiz" element={<QuizTest/>}></Route>
        {/* </Switch> */}
  
    </Routes>
    </ChakraProvider>
    </BrowserRouter>
   
  );
}

export default App;
