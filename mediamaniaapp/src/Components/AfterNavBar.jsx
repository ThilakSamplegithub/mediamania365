import { Heading, HStack, SimpleGrid,Image,Box,Stack, Button,Text,Flex } from "@chakra-ui/react";

export default function AfterNavBar(){
    return(
        // <SimpleGrid textAlign={"center"} templateColumns={{base:"1fr",md:"1fr",lg:"1fr 1fr"}} spacing={8} border="1px solid red" >
        <Flex justify="space-around" mt="100px">
            <Stack  width="32%" spacing={"40px"} ml='130px' mt='40px' >
            <Heading lineHeight="60px" size="2xl" color="#000000" >Grow your audience on social and beyond</Heading>  
            <Text lineHeight="30px" letterSpacing="0.5px" color="#000000" fontSize="18px">Buffer helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.</Text>
            <HStack>
                <Button colorScheme={"blue"}  >Get started now</Button>
                <Button border="1px solid primary" color="primary">Watch video</Button>
            </HStack>
            </Stack>
            <Box mr='130px'>
                <Image width="640px" height="500px" src="https://buffer.com/static/homepage/webp/hero.webp" alt="error" />
            </Box>
      </Flex>
        // </SimpleGrid>
    )
}