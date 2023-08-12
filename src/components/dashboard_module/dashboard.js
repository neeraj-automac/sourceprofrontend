import React, { Component, useEffect, useState } from 'react';
import { Box, Text, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import Card from './card';
import Logo from '../../assets/logo.png';
import Book from '../../assets/book.png';
import User from '../../assets/user.png';
import Home from '../../assets/home.png';
import Glass from '../../assets/glass.png';
import Head from '../dashboard_head/header';
import DialogComp from '../dialog_component/dialog_comp';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: {
                Continue_Learning: [],
                New_Courses: [],
                All_Courses: []
            },
            isLoading:true
        }
    }
    componentDidMount() {
        console.log("First Method");
        fetch("http://192.168.29.220:8000/home/?user_id=1").then(
            resp => resp.json()).then(
                resp => {
                    this.setState({ courses: resp });
                    this.setState({isLoading:false})
                    console.log("<><>", resp);
                });
    }
    render() {
        const coursesData = this.state.courses;
        console.log("<<<<---", coursesData);
        console.log("<<<<---", coursesData.Continue_Learning);
        return (
                <Box>
                    {this.state.isLoading?<Box>
                        <DialogComp comp={this.state.isLoading}/>
                    </Box>:<Box></Box>}
                    <Box>
                <Head />
                <Box mt={10} w="100%" p={["0 0px 0 0px", "0 0px 0 0px", "0 50px 0 50px", "0 50px 0 50px"]}>
                    <Text pl={4} fontSize={20} fontWeight="bold">Continue Learning</Text>
                    <Box w="100%" display="flex" flexWrap="wrap" flexDirection="row" overflowX={["scroll", "scroll", "hidden", "hidden"]}>
                        <Box display='flex'>
                            {coursesData.Continue_Learning.map((e, idx) => {
                                return <Card data="true" courseDetails={coursesData.Continue_Learning[idx]} key={idx} />
                            })}
                        </Box>
                    </Box>
                    <Text pl={4} fontSize={20} fontWeight="bold">New Courses</Text>
                    <Box w="100%" display="flex" flexWrap="wrap" flexDirection="row" overflowX={["scroll", "scroll", "hidden", "hidden"]}>
                        <Box display='flex'>
                            {coursesData.New_Courses.map((e, idx) => {
                                return <Card key={idx} courseDetails={coursesData.New_Courses[idx]} />
                            })}
                        </Box>
                    </Box>
                    <Text pl={4} fontSize={20} fontWeight="bold">All Courses</Text>
                    <Box w="100%" display="flex" flexWrap="wrap" flexDirection="row" overflowX={["scroll", "scroll", "hidden", "hidden"]}>
                        <Box display='flex'>
                            {coursesData.All_Courses.map((e, idx) => {
                                return <Card key={idx} courseDetails={coursesData.All_Courses[idx]} />
                            })}
                        </Box>
                    </Box>
                    <Box zIndex="999" display={["flex", "flex", "none", "none"]} alignItems="center" px={6} position="fixed" bottom="30px" borderRadius={40}
                        height="50px" mx={10} backgroundColor="white" boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)">
                        <Image src={Home} h="25px"></Image>
                        <Image src={Book} mx={10} h="25px"></Image>
                        <Image src={Glass} h="25px"></Image>
                        <Image src={User} ml={10} h="25px"></Image>
                    </Box>
                </Box>
                    </Box>
                </Box>
        );
    }
}

export default DashBoard;