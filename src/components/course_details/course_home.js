import { LockIcon } from '@chakra-ui/icons';
import {
    Box, Divider, Text, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Avatar,
    Image,
    Spinner
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Head from '../dashboard_head/header';
import VideoPlayer from '../player';
import Like from '../../assets/like.png';
import Tick from '../../assets/tick.png';
import { Link } from 'react-router-dom';
import DialogComp from '../dialog_component/dialog_comp';

function CourseHome() {
    const [description, setDesc] = useState(0);
    const [isLoading,setLoading]=useState(true);
    const [couseData, setCourseData] = useState({
        "course details":[{"likes":0,"views":0}],
        "lesson details":[{"lesson_url":"","completed_duration":"","lesson_status":""}]
    });
    const [videourl,setvideourl]=useState("https://samplelib.com/lib/preview/mp4/sample-30s.mp4");
    useEffect(() => {
        fetch("http://192.168.235.147:8000/course_page/?Course_id=1&user_id=1").then(res => res.json()).then(data => {
            console.log("Coursed data-->", data);
            setCourseData(data);
            setLoading(false);
            // alert(couseData['lesson details'][0].lesson_url);
            console.log(data['lesson details'][0].lesson_url+"<<--");
            setvideourl(data['lesson details'][0].lesson_url);
        })
    }, []);
    return (
        <Box>
            {isLoading?<Box>
                        <DialogComp comp={isLoading}/>
                    </Box>:<Box></Box>}
            <Head />
            <Box display="flex">
                <Box height={"450px"} w="70%">
                    {isLoading?<Spinner/>:<VideoPlayer url={videourl}/>}
                    <Box justifyContent="space-between" display={"flex"} px={4}>
                        <Box display={"flex"}>
                            <Box onClick={() => setDesc(0)} p={4} borderBottom={description === 0 ? "5px solid #F09A3E" : "none"} fontWeight="600" color={description === 0 ? "#F09A3E" : "#626262"} px={6} h={"100%"}>
                                <Text>Overview</Text>
                            </Box>
                            <Box onClick={() => setDesc(1)} p={4} borderBottom={description === 1 ? "5px solid #F09A3E" : "none"} fontWeight="600" color={description === 1 ? "#F09A3E" : "#626262"} px={6} h={"100%"}>
                                <Text>FAQ</Text>
                            </Box>
                        </Box>
                        <Box p={4} display={"flex"}>
                            <Image mr={4} w={"25px"} h={"25px"} src={Like} />
                            <Text fontWeight={"600"} fontSize={18}>{couseData['course details'][0].likes} . {couseData['course details'][0].views} </Text>
                            <Text ml={4} fontSize={18}>learners</Text>
                        </Box>
                    </Box>
                    <Divider border="1px solid #E9E9E9" />
                    {description === 0 ? <Box p={6}>
                        <Text fontSize={18} color={"#3A3A3A"}>Released: September 2, 2021 . Tutor: John Doe, Adam Smith</Text>
                        <Text fontSize={21} color="#3A3A3A" fontWeight={"600"} mt={4}>Course description</Text>
                        <Text w={"80%"} fontSize={18} color={"#3A3A3A"}>Course description goes here...including design, research, strategy, development, interactive and visual design, content, accessibility, localization, and data science—and explore the various roles within the UX field</Text>
                    </Box> : <Box mx={6}>
                        <Accordion defaultIndex={[0]}>
                            {[0, 1, 2].map((item, idx) => {
                                return <AccordionItem key={idx}>
                                    <h2>
                                        <AccordionButton>
                                            <Box py={2} flex='1' fontWeight={"600"} color="#3A3A3A" textAlign='left'>
                                                Lorem ipsum question {item + 1}
                                            </Box>
                                            <AccordionIcon color="#727272" />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel color="#3A3A3A" pb={4}>
                                        Lorem ipsum answer Lorem ipsum answer Lorem ipsum answer Lorem ipsum answer
                                        Lorem ipsum answer
                                    </AccordionPanel>
                                </AccordionItem>
                            })}
                        </Accordion>
                    </Box>}
                </Box>
                <Box display="flex" flexDirection="column" backgroundColor="#3A3A3A"
                    w="30%">
                    <Text color="#FFFFFF" p={6} fontWeight="600" fontSize={22}>Content</Text>
                    <Divider />
                    <Accordion defaultIndex={[0, 1]} allowMultiple>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' color="#FFFFFF" textAlign='left'>
                                        Materials
                                    </Box>
                                    <AccordionIcon color="#727272" />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel color="#ffffff" pb={4}>
                                Social Media Recruiter Material1<br />
                                Social Media Recruiter Material2
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' color="#FFFFFF" textAlign='left'>
                                        Clipboard
                                    </Box>
                                    <AccordionIcon color="#727272" />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel color="#ffffff" pb={4}>
                                Social Media Recruiter Material1<br />
                                Social Media Recruiter Material1<br />
                                Social Media Recruiter Material1<br />
                                Social Media Recruiter Material1<br />
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <Box display='flex' flexDirection={"column"}>
                        {couseData['lesson details'].map((e, idx) => {
                            return <Box backgroundColor={idx === 1 ? "#262626" : "#727272"} key={idx}>
                                <Divider display={idx !== 0 ? "block" : "none"} mx={6} />
                                <Box p={4} color="white" backgroundColor="#262626">
                                    <Box alignItems={"center"} display={"flex"}>
                                        {e.lesson_status === "unlocked" ? <Box mr={2} backgroundColor={"#5F5F5F"} borderRadius={10} h={4} w={4}></Box> :
                                            idx == 0 ? <Image m={2} h={4} w={4} src={Tick}></Image> :
                                                <LockIcon mr={2} color={"#5F5F5F"} />}
                                       <Text fontWeight="600">{idx + 1}. {e.lesson_name}</Text>
                                    </Box>
                                    <Box display={"flex"} justifyContent={"space-between"}>
                                        <Box display={"flex"} alignItems="center">
                                            <Text ml={6} fontSize={12}>{e.lesson_duration}</Text>
                                            <Text display={idx == 0 ? "block" : "none"} ml={4}>. Score</Text>
                                            <Text display={idx == 0 ? "block" : "none"} ml={2} color={"green"}>{e.quiz_score}%</Text>
                                        </Box>
                                        <Link to={"quiz"}><Text display={couseData['lesson details'][idx]["lesson_status"] == "unlocked" ? "block" : "none"}
                                         color="#0075E1" fontSize={"12px"} 
                                         fontWeight="bold">{couseData['lesson details'][idx]["completed_duration"]==" "?"TAKE QUIZ":"RE-TAKE QUIZ"}
                                         </Text></Link>
                                    </Box>
                                </Box>
                            </Box>
                        })}
                    </Box>  
                    {/* {
                [0,1,2,3,4,5,6].map(function(e,i) =>{
                    return <Box>
                    <Divider mx={4}/>
                    <Box p={4} color="white" backgroundColor="#262626">
                        <Box alignItems={"center"} display={"flex"}>
                        <Box mr={2} backgroundColor={"#5F5F5F"} borderRadius={10} h={4} w={4}></Box>
                        <Text fontWeight="600">1. Lesson name</Text>
                        </Box>
                        <Text ml={6} fontSize={12}>40m</Text>
                    </Box>
                    </Box>
                })
            } */}
                </Box>
            </Box>
        </Box>
    )
}

export default CourseHome;