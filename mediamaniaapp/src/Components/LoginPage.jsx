import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Text,
    HStack
  } from '@chakra-ui/react';
  import logo from "../Images/Mediamania365.png"
  export default function LoginPage() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        {/* <Flex alignContent="flex-start" > */}
        {/* <Image src={logo} width="100px" alt="error"/> */}
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
          {/* <HStack pb='200px'><Image  src={logo} width="100px" alt="error"/><Text>Mediamania365</Text></HStack> */}
            <Heading fontSize={'2xl'}>Log in</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
            <Button colorScheme={'blue'} variant={'solid'}>
                Log in
              </Button>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Text>Create an account</Text>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
            </Stack>
            <Text textAlign='center'>We no longer support social sign on. Please click here to set your password and access your account.</Text>
          </Stack>
        </Flex>
        {/* flex={1} */}
        {/* </Flex> */}
        <Flex flex={2}>
          <Stack bg="rgb(250,222,42)" p="100px 100px">
            <Text textAlign="center" borderRadius={'10%'} width="130px" bg="#FFFFFF" color="#645911">New from Buffer</Text>
            <Heading width="58%">Introducing: A free micro-site by Buffer</Heading>
            <Text width="68%">A Start Page is a beautiful, flexible, mobile-friendly landing page that you can build in minutes and update in seconds</Text>
          <Image
            alt={'Login Image'}
            // objectFit={'cover'}
            width='100%'
            height={'100%'}
            src={
              'https://login.buffer.com/img/sp-login-image.png'
            }
          />
          </Stack>
          {/* <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          /> */}
        </Flex>
      </Stack>
    );
  }