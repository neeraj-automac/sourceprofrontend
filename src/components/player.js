import { Box } from '@chakra-ui/react';
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = (props) => {
    return (
        <Box height={"450px"} width="100%">
            <ReactPlayer height="100%" width={"100%"} controls url={props.url}/>
        </Box>
    );
};

export default VideoPlayer;