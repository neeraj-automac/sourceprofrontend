import Arrows from '../../assets/arrow.png';
import { Box, Button, Img, Text, RadioGroup, Radio, Stack, Divider, CircularProgress, useDisclosure } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Head from '../dashboard_head/header';
import { Link } from 'react-router-dom';
import DialogComp from '../dialog_component/dialog_comp';

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'


function QuizTest() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const [quiz, setQuiz] = useState([]);
    const [isLoading,setLoading]=useState(true);

    useEffect(() => {
        fetch("http://192.168.235.147:8000/quiz/?Course_id=1&lesson_id=1").then(res => res.json()).then(data => {
            console.log("Coursed data-->", data);
            setQuiz(data);
            setLoading(false);
        })
    }, [])
    return (
        <Box>
            {isLoading?<Box>
                        <DialogComp comp={isLoading}/>
                    </Box>:<Box></Box>}
            <Head />
            <Box h={12} bg={"#272727"} alignItems={"center"} justifyContent="space-between" px={10} display={"flex"}>
                <Box display={"flex"} alignItems={"center"}>
                    <Link to="course"><Img src={Arrows} h={4} mr={6} /></Link>
                    <Text color={"#FFFFFF"} fontWeight={600}>Quiz-1.Lesson name</Text>
                </Box>
                <Box display={"flex"}>
                    <Button mr={6} h={8} variant="outline" color={"#ffffff"} >
                        RE-TAKE QUIZ
                    </Button>
                    <Button onClick={onOpen} h={8} variant="raised" color={"#ffffff"} bg="#F09A3E">
                        SUBMIT
                    </Button>
                    <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                        isCentered
                    >
                        <AlertDialogOverlay>
                            <AlertDialogContent>
                                <AlertDialogBody p={16}>
                                    <Box display={"flex"} flexDir={"column"} alignItems="center">
                                        <CircularProgress isIndeterminate color='#3A3A3A' />
                                        <Text my={4} fontWeight={"600"} color="#3A3A3A" fontSize={18}>Please wait...</Text>
                                        <Text fontWeight={"600"} color="#3A3A3A" fontSize={18}>Generating your quiz score</Text>
                                    </Box>
                                </AlertDialogBody>
                            </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>
                </Box>
            </Box>
            {/* <Box color={"#FFFFFF"} fontWeight={"600"} h={10} display="flex" alignItems={"center"} bg={"#E34040"} px={10}>
                Oops! You need to score more than 70%
            </Box> */}
            {quiz.map((e, id) => {
                return (
                    <Box mx={10} mt={6} display={"flex"} flexDir="column">
                        <Text fontWeight={600}>{id + 1}. {quiz[id].Question}</Text>
                        <RadioGroup >
                            <Stack my={4} spacing={4} direction='column'>
                                <Radio value='1'>A. {quiz[id].Option1}</Radio>
                                <Radio value='2'>B. {quiz[id].Option2}</Radio>
                                <Radio value='3'>C. {quiz[id].Option3}</Radio>
                                <Radio value='3'>D. {quiz[id].Option4}</Radio>
                            </Stack>
                        </RadioGroup>

                        <Divider />
                    </Box>
                )
            })}
        </Box>
    )
}

export default QuizTest;