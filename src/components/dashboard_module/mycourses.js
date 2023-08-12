import { Box, Divider, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Head from '../dashboard_head/header';
import MyCourseCard from './mycourse_card';
import course from '../../assets/course.png';
import course1 from '../../assets/course1.png';
import course2 from '../../assets/course2.png';
import course3 from '../../assets/course3.png';
import DialogComp from '../dialog_component/dialog_comp';

function MyCourses() {
    const [courseStatus, setStatus] = useState(0);
    const [isLoading,setLoading]=useState(true);
    const [courseDetail, setCourseDetail] = useState({
        In_Progress: [],
        History: []
    });
    useEffect(() => {
        fetch("http://192.168.29.220:8000/mycourses/?user_id=1").then(res => res.json()).then(data => {
            console.log("Coursed data-->", data);
            setCourseDetail(data);
            setLoading(false);
        })
    }, []);
    return (
        <Box>
            {isLoading?<Box>
                        <DialogComp comp={isLoading}/>
                    </Box>:<Box></Box>}
            <Head />
            <Text mt={10} padding="0px 0px 50px 50px" fontSize='21px' fontWeight="600">My Courses</Text>
            <Box padding="0 0 0 50px" display="flex">
                <Text fontSize="18px" onClick={() => setStatus(0)} color={courseStatus === 0 ? "#F09A3E" : ""} fontWeight="600" borderBottom={courseStatus === 0 ? "5px solid #F09A3E" : ""} padding="0 20px 0 20px">In Progress</Text>
                <Text fontSize="18px" onClick={() => setStatus(1)} color={courseStatus === 1 ? "#F09A3E" : ""} fontWeight="600" borderBottom={courseStatus === 1 ? "5px solid #F09A3E" : ""} padding="0 20px 0 20px">History</Text>
            </Box>
            <Divider border="1px solid #E9E9E9" />
            {courseStatus === 0 ?
                <Box padding="0 50px 0 50px" display="flex" flexDirection="column">
                    {courseDetail.In_Progress.map((e, idx) => {
                        return <Box key={idx}>
                            <MyCourseCard timeLeft={courseDetail?.In_Progress[idx].minutes_left} progress={courseDetail?.In_Progress[idx].percentage_completed} isCompleted={false} title={courseDetail?.In_Progress[idx].course_name}
                                duration={courseDetail.In_Progress[idx].deactivation_days_left + "days left"} author={courseDetail.In_Progress[idx].author} time={courseDetail.In_Progress[idx].date_of_subscription} imgs={courseDetail.In_Progress[idx].thumbnail} />
                            <Divider border="1px solid #E9E9E9" />
                        </Box>
                    })}
                    {/* <MyCourseCard isCompleted={false} title="Back to Basics" duration="5 days left" author="John Doe" time="Aug 2021" imgs={course2} /> */}
                </Box>
                : <Box padding="0 50px 0 50px" display="flex" flexDirection="column">
                    <MyCourseCard isCompleted={true} title="Market Mapping" duration="28 days left" author="John Doe" time="Aug 2021" imgs={course1} />
                    <Divider border="1px solid #E9E9E9" />
                    <MyCourseCard isCompleted={true} title="Back to Basics" duration="5 days left" author="John Doe" time="Aug 2021" imgs={course} />
                </Box>}
        </Box>
    )
}

export default MyCourses;