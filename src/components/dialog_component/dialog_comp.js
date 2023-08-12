import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    AlertDialogCloseButton,
    useDisclosure,
    Spinner,
    Box
  } from '@chakra-ui/react'

function DialogComp(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
    return (
        <Box>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={props.comp}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent alignItems={"center"}>
          <AlertDialogBody>
          <Spinner   thickness='4px'  color='blue.500'  emptyColor='gray.200' size={"xl"}/>
          </AlertDialogBody>
          <AlertDialogFooter fontWeight={"bold"}>Please wait...</AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
        </Box>
    );
}

export default DialogComp;