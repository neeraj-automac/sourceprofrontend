import React, { Component } from 'react';
import {Text,Box,Image,Button,Modal,ModalContent,ModalOverlay,Input,InputGroup,InputRightElement,Drawer,DrawerBody,DrawerContent,DrawerHeader,DrawerOverlay} from '@chakra-ui/react';
import Logo from '../assets/logo.png';
import Hidden from '../assets/hidden.png';
import Eye from '../assets/eye.png';
import Right from '../assets/right.png';
import LeftArrow from '../assets/whiteArrow.png';
import {Link} from 'react-router-dom';

class loginPage extends Component {
    constructor(props){
        super(props)
        this.state={
            pwdVisible:true,
            inCorrectEmail:false,
            inCorrectPassword:false,
            login:true,
            OTP:false,
            sendEmail:false,
            isOpen:false,
            openDialog:false
        }
    }
    togglePassword=()=>{
        this.setState({
            pwdVisible:!this.state.pwdVisible
        })
    }
    toggleDrawer=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    moveToForgotPassword=()=>{
        this.setState({
            login:false,
            OTP:true,
            sendEmail:false
        })
    }
    moveToLogin=()=>{
        this.setState({
            login:true,
            OTP:false,
            sendEmail:false
        })
    }
    opendialog=()=>{
        this.setState({
            openDialog:true
        })
    }
    moveToSetPassword=()=>{
        this.setState({
            login:false,
            OTP:false,
            sendEmail:true
        })
    }
    moveToSetPasswordDialog=()=>{
        this.setState({
            openDialog:false,
            login:false,
            OTP:false,
            sendEmail:true
        })
    }
    render() {
        const {pwdVisible,inCorrectEmail,inCorrectPassword,isOpen,login,OTP,sendEmail,openDialog}=this.state;
        return (
            <Box  zIndex="999" position="fixed" p={[8,8,10,10]} right={[0,0,32,32]} top={[0,0,150,50]} 
            w={["100%","100%","500px","500px"]} h={["90vh","90vh","600px","600px"]} background="#ffffff" borderRadius={[0,0,20,20]}>
               <Image ml={["0","0","30%","30%"]} display={[sendEmail?"none":"block",sendEmail?"none":"block","block","block"]} width={150} height={50} src={Logo}></Image>
               {(login)?<Box>
               <Text fontSize={20} fontWeight="bold" my="30px">Log in</Text>
               <Text fontSize={14} fontWeight="600">Email ID</Text>
               <Input fontWeight="600" focusBorderColor="#F09A3E" isInvalid={inCorrectEmail} errorBorderColor="#E34040" borderWidth={inCorrectEmail?"0px":"thin"}></Input>
               <Box display={inCorrectEmail?"block":"none"} color="#E34040" float="right">The email address you entered is invalid</Box>
               <Text fontSize={14} fontWeight="600" mt="40px">Password</Text>
               <InputGroup>
               <Input fontWeight="600" type={pwdVisible?"password":"text"} focusBorderColor="#F09A3E" isInvalid={inCorrectPassword} errorBorderColor="#E34040" borderWidth={inCorrectPassword?"0px":"thin"}></Input>
               <InputRightElement children={<Image onClick={this.togglePassword} src={!pwdVisible?Hidden:Eye}/>} />
               </InputGroup>
               <Box display={inCorrectPassword?"block":"none"} color="#E34040" float="right">The password you entered is invalid</Box>
               <Text  fontSize={16} mt={6} display={["block","block",'none','none']} fontWeight="bold" cursor="pointer" onClick={this.opendialog} >Forgot your password?</Text>
               <Text  fontSize={16} mt={6} display={['none','none',"block","block"]} fontWeight="bold" cursor="pointer" onClick={this.moveToForgotPassword}>Forgot your password?</Text>
               <Button _hover="none" mt="40px" width="100%" background="#F09A3E" color="#FFFFFF" onClick={this.moveToForgotPassword}>LOG IN</Button>
               </Box>:(OTP)?<Box>
               <Box display="flex" alignItems="center">
                <Image src={Right} h="20px" mr={4} onClick={this.moveToLogin}></Image>
               <Text fontSize={20} fontWeight="bold" my="30px">Forgot your password?</Text>
               </Box>
               <Text fontSize={14} fontWeight="600">Email ID</Text>
               <Input fontWeight="600" focusBorderColor="#F09A3E"></Input>
               <Text w="100%" fontSize={14}>
               An OTP will be set to your registered email
               </Text>
               <Box display="flex" justifyContent="end">
               <Button variant="ghost" _hover="none" mt="40px" color="#3A3A3A" fontWeight="bold">CANCEL</Button>
               <Button variant="ghost" _hover="none" mt="40px" color="#0433DD" fontWeight="bold" type="button" onClick={this.moveToSetPassword} >SET NEW PASSWORD</Button>
               </Box>
                   </Box>:<Box>
                   <Box mb={[4,4,0,0]} background={["#272727","#272727","#FFFFFF","#FFFFFF"]} display="flex" alignItems="center">
                <Image src={Right} h="20px" mr={4} onClick={this.moveToForgotPassword}></Image>
               <Text fontSize={20} fontWeight="bold" my="30px" color={["#FFFFFF","#FFFFFF","#000000","#000000"]}>Set new password</Text>
               </Box>
               <Text fontSize={14} fontWeight="600">Email ID</Text>
               <Input fontWeight="600" focusBorderColor="#F09A3E"></Input>
               <Box display={inCorrectEmail?"block":"none"}  color="#E34040" float="right">The email address you entered is invalid</Box>
               <Text fontSize={14} fontWeight="600" mt={6}>Enter OTP code</Text>
               <InputGroup>
               <Input fontWeight="600" type={pwdVisible?"password":"text"} focusBorderColor="#F09A3E"></Input>
               <InputRightElement>
               <Text fontSize="sm" mr={6} fontWeight="600" onClick={this.togglePassword} color="#0433DD">RESEND</Text>
               </InputRightElement>
               </InputGroup>
               <Box fontSize={14} display={inCorrectPassword?"block":"none"} color="#E34040">Wrong OTP. Please check the OTP & enter gain.</Box>
               <Text w="100%" fontSize={14}>
               Please enter the OTP sent to your registered Email ID
               </Text>
               <Text mt={6} fontSize={14} fontWeight="600">Enter your new password</Text>
               <Input fontWeight="600" focusBorderColor="#F09A3E"></Input>
               {/* <Button _hover="none" mt="40px" width="100%" background="#F09A3E" onClick={this.toggleDrawer} color="#FFFFFF">DONE</Button> */}
               <Link to="/dashboard"><Button _hover="none" mt="40px" width="100%" background="#F09A3E" color="#FFFFFF">DONE</Button></Link>
               </Box>}
               <Drawer onOverlayClick={this.toggleDrawer} placement="bottom"  isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody background="#E34040" color="#FFFFFF">
            <Text fontSize={12} textAlign="center">Wrong OTP. Please check the OTP & enter gain.</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Modal size="md" isOpen={openDialog} onClose={!openDialog} isCentered>
        <ModalOverlay />
        <ModalContent p={4} m={4}>
        <Box>
               <Text fontSize={20} fontWeight="bold" my="30px">Forgot your password?</Text>
               <Text fontSize={14} fontWeight="600">Email ID</Text>
               <Input fontWeight="600" focusBorderColor="#F09A3E"></Input>
               <Text w="100%" fontSize={14}>
               An OTP will be set to your registered email
               </Text>
               <Box display="flex" justifyContent="end">
               <Button variant="ghost" _hover="none" mt="40px" color="#3A3A3A" fontWeight="bold">CANCEL</Button>
               <Button variant="ghost" _hover="none" mt="40px" color="#0433DD" fontWeight="bold" type="button" onClick={this.moveToSetPasswordDialog} >SET NEW PASSWORD</Button>
               </Box>
                   </Box>
        </ModalContent>
      </Modal>
            </Box>
        );
    }
}

export default loginPage;