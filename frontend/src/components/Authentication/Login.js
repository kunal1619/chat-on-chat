import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Login = () => {

    const [show, setShow] = useState(true)

 
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    const handleSubmit = ()=>{}
    const handleGuestUser=()=>{
        setEmail("guest@example.com")
        setPassword("123456")
    }
    
  return (
    <VStack spacing={'5px'}>
 

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


     <Button
     colorScheme='blue'
     width={"100%"}
     style={{marginTop : 15}}
     onClick={handleSubmit}>
    Login
     </Button>

     <Button
     colorScheme='red'
     variant={'solid'}
     width={"100%"}
     style={{marginTop : 15}}
     onClick={handleGuestUser}>
    Get Guest User Credential
     </Button>

    </VStack>
  )
}

export default Login
