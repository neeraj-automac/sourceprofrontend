import React from 'react';
import {Text,Box} from '@chakra-ui/react'

function TitleCard(props){
    return (
        <Box mb={8}>
            <Text color="#828282" fontSize={14}>{props.title}</Text>
            <Text color="#3A3A3A" fontSize={22} fontWeight="600">{props.content}</Text>
        </Box>
    )
}
export default TitleCard;