import React from 'react';
import { Box, Text, Image, Progress } from '@chakra-ui/react';
import TemplateImg from '../../assets/templateimg.png';

function Card({ data, courseDetails }) {
    return (
        <Box m={4} h="192px" w={["230px", "230px", "277px", "277px"]}>
            <Image borderRadius="8px 8px 0px 0px" h="100px" w="100%" src={courseDetails.thumbnail}></Image>
            <Progress display={data ? "bloack" : "none"} value={courseDetails.percentage_completed} colorScheme="yellow" size="sm" backgroundColor="#835E36" />
            <Box p={2} backgroundColor="#ECECEC" borderRadius=" 0px 0px 8px 8px">
                <Text fontSize="16px" fontWeight="medium">{courseDetails.course_name}</Text>
                <Text>{courseDetails.minutes_left}mins left</Text>
            </Box>
        </Box >
    )
}
export default Card;