import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Toast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'

const SignUp = () => {

    const [show, setShow] = useState(true)
    const [showCnf, setShowCnf] = useState(true)
    const [loader, setLoader] = useState(false)

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState();
    const [pic, setPic] = useState();

    const postDetails= (pic)=>{
        setLoader(true)
       if(pic === undefined){
          Toast({
            title: 'failed',
            description: "Image uploading failed , check type jpeg or png",
            status: 'warning',
            duration: 6000,
            isClosable: true,
          })
        return;
       }

       if(pic.type === "image/jpeg" || pic.type === "image/png"){
        const data = new FormData();
        data.append("file", pic);
        data.append("upload_present", "chat-on-chat");
        data.append("cloud_name", "kunalcloud");
        console.log(data);
        fetch("https://api.cloudinary.com/v1_1/kunalcloud/image/upload", {
            method : "post",
            body : data,
        }).then((res) => res.json())
        .then((data)=>{
            setPic(data.url.toString());
            setLoader(false)
        })
       
       }
    }
    const handleSubmit = ()=>{}
    
  return (
    <VStack spacing={'5px'}>
     <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
            <Input
                placeholder='Enter Your Name'
                onChange={(e)=> setName(e.target.value)}
            />
       
     </FormControl>

     <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
            <Input
                placeholder='Enter Your Name'
                onChange={(e)=> setEmail(e.target.value)}
            />
     </FormControl>
     
     <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
        <Input
            type= {show ? "password" : "text"}
            placeholder='Enter Password'
            onChange={(e)=> setPassword(e.target.value)}
            />
            <InputRightElement width={"4.5rem"}>
                <Button h={"1.75rem"} size={"sm"} onClick={()=>setShow(!show)}>
                    {show ? "show" : "hide"}
                </Button>
            </InputRightElement>
        </InputGroup>
        
     </FormControl>

     <FormControl id='cnfPassword' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
        <Input
            type= {showCnf ? "password" : "text"}
            placeholder='Confirm Your Password'
            onChange={(e)=> setConfirmPassword(e.target.value)}
            />
            <InputRightElement width={"4.5rem"}>
                <Button h={"1.75rem"} size={"sm"} onClick={()=>setShowCnf(!showCnf)}>
                    {showCnf ? "show" : "hide"}
                </Button>
            </InputRightElement>
        </InputGroup>
        
     </FormControl>

     <FormControl id='pic' >
        <FormLabel>Upload Your Picture</FormLabel>
            <Input
            type='file'
            p={1.5}
            accept='image/*'
            onChange={(e)=> postDetails(e.target.files[0])}
            />
       
     </FormControl>

     <Button
     colorScheme='blue'
     width={"100%"}
     style={{marginTop : 15}}
     onClick={handleSubmit}>
    Submit
     </Button>

    </VStack>
  )
}

export default SignUp
