import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Text, Progress } from '@chakra-ui/react'
// import { Checkbox} from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom';


function MyCourseCard(props) {
    return (
        <Box margin="20px 0 20px 0" display="flex">
            <Box w="220px" h="150px" border="1px solid #BDBDBD" marginRight="10px" borderRadius="10px" backgroundSize="cover" backgroundRepeat="no-repeat" backgroundImage={props.imgs}></Box>
            <Box display="flex" flexDirection="column">
                <Link to="course"><Text fontWeight="600" fontSize="18px">{props.title}</Text></Link>
                <Text>Deactivation: {props.duration}</Text>
                <Text>By: {props.author} . {props.time}</Text>
                <Box mt={8} display={props.isCompleted ? "flex" : "none"} alignItems="center">
                    <CheckCircleIcon mr="10px" color="#009C17" />
                    <Text color="#009C17">Completed</Text>
                </Box>
                <Box mt={8} display={!props.isCompleted ? "flex" : "none"} alignItems="center">
                    <Progress h="10px" border="1px solid #BDBDBD" mr="15px" value={props.progress} size='sm' colorScheme="orange" w="130px" borderRadius="10px" />
                    <Text>{props.timeLeft}mins left</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default MyCourseCard;