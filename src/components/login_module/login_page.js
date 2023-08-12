import React from 'react';
import {Box} from '@chakra-ui/react'
import backgroundImg from '../../assets/background.png';
import Login from '../loginPage';
import VPlayer from '../player';

function LoginPage() {
    return (
            <div className="App">
                {/* <VPlayer/> */}
      <Box className="bgimg" width="100%" h={["80vh","80vh","100vh","100vh"]} backgroundBlendMode="saturation" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={backgroundImg}>
      <Box zIndex="998" background="rgb(0,0,0,0.7)" position="fixed" w="100%" h={["80vh","80vh","100vh","100vh"]}></Box>
      <Login/>
      </Box>
        </div>
    );
}

export default LoginPage;