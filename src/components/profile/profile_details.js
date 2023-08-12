import { Box,Text,Divider} from '@chakra-ui/react';
import React,{useState,useEffect} from 'react';
import Head from '../dashboard_head/header';
import TitleCard from './title_cards';
import DialogComp from '../dialog_component/dialog_comp';

function ProfileDetails(){
    const [isLoading,setLoading]=useState(true);
    const [profileDetails,setProfileDetails]=useState({
        "user_details":[{
            "name":"",
            "contact_no":"",
            "company":"",
            "business_email":"",
            "years_of_experience":"",
            "job_position":"",
            "location":""
        }]
    });

    useEffect(() => {
        fetch("http://192.168.29.220:8000/user_details/?user_id=1").then(res => res.json()).then(data => {
            console.log("useProfile data-->", data);
            setProfileDetails(data);
            setLoading(false);
        })
    }, []);
    return (
        <Box>
            {isLoading?<Box>
                        <DialogComp comp={isLoading}/>
                    </Box>:<Box></Box>}
            <Head/>
            <Box mt={10} display="flex" flexDirection="column"  padding="20px 0 30px 50px">
                <Box alignItems="end" display="flex">
                <Text mr={4} fontSize="21px" fontWeight="600">My Details</Text>
                <Text fontSize="12px" fontWeight="600" color="#0075E1">EDIT</Text>
                </Box>
                <Divider m="16px 0 30px 0" border="1px solid #E9E9E9"/>
                <Box display="flex">
                    <Box mr={64}>
                        <TitleCard title="Name" content={profileDetails.user_details[0].Name}/>
                        <TitleCard title="Company" content={profileDetails.user_details[0].company}/>
                        <TitleCard title="Years of Experience" content={profileDetails.user_details[0].years_of_experience}/>
                        <TitleCard title="Location" content={profileDetails.user_details[0].location}/>
                    </Box>
                    <Box>
                        <TitleCard title="Contact No." content={profileDetails.user_details[0].contact_no}/>
                        <TitleCard title="Business Email" content={profileDetails.user_details[0].business_email}/>
                        <TitleCard title="Job Position" content={profileDetails.user_details[0].job_position}/>
                
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileDetails;