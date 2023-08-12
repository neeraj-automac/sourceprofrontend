import react,{useState} from "react";
import {Box,Image,Input,InputGroup,InputLeftElement} from '@chakra-ui/react';
import Logo from '../../assets/logo.png';
import Book from '../../assets/book.png';
import Book1 from '../../assets/book1.png';
import User1 from '../../assets/user1.png';
import User from '../../assets/user.png';
import Home from '../../assets/home.png';
import Home1 from '../../assets/home1.png';
import Glass from '../../assets/glass.png';
import { Link } from "react-router-dom";

function Head(){
    console.log("Location path is",window.location.pathname);
    return (
        <Box h="80px" 
         display={["none","none","flex","flex"]} alignItems="center" justifyContent="space-between" borderBottom="1px solid #E9E9E9" p="0px 50px 0px 50px">
                    <Box display="flex">
                    <Image mr={[10,10,20,32]} h="50px" src={Logo}></Image>
                    <InputGroup alignItems="center" backgroundColor="#EAEAEA" w="440px" borderRadius={6}>
                        <InputLeftElement
                        pointerEvents="none"
                        children={<Image mt={2} mx={2} h="20px" src={Glass} />}
                        />
                        <Input height="100%" type="text" fontSize="18px" placeholder="Search course" />
                    </InputGroup>
                    </Box>
                    <Box h="100%" display="flex" alignItems="center">
                        {/* <Image src={Home} width="35px"  ></Image> */}
                        <Box  w="80px" display="flex" alignItems="center" cursor="pointer"  justifyContent="space-around"
                         borderBottom={window.location.pathname==="/dashboard"?"5px solid #F09A3E":""} height="100%">
                            <Link to="/dashboard"><Image width="35px"  src={window.location.pathname==="/dashboard"?Home1:Home} ></Image></Link>
                        </Box>
                        <Box mx={10} w="80px" display="flex" alignItems="center" cursor="pointer"  justifyContent="space-around"
                         borderBottom={(window.location.pathname==="/mycourses"||window.location.pathname==="/course")?"5px solid #F09A3E":""} height="100%">
                            <Link to="mycourses"><Image width="35px"  src={(window.location.pathname==="/mycourses"||window.location.pathname==="/course")?Book1:Book} ></Image></Link>
                        </Box>
                        {/* <Image src={User}  w="35px"></Image> */}
                        <Box  w="80px" display="flex" alignItems="center" cursor="pointer" justifyContent="space-around"
                         borderBottom={window.location.pathname==="/profile"?"5px solid #F09A3E":""} height="100%">
                            <Link to="/profile"><Image width="35px"  src={window.location.pathname==="/profile"?User1:User} ></Image></Link>
                        </Box>
                    </Box>
                </Box>
    )
}

export default Head;