import { Image, Button, Heading, SimpleGrid, Stack,Text,Box,id,Flex, Center,Container } from "@chakra-ui/react"

const CardComponent=({startingText,heading,text,img,btnText,id})=>{
    return(
        
        <SimpleGrid columns={[1,2]} spacing={10} bg="#ffffff" mb="200px">
            <Stack pl='70px'>
                <Flex pb='35px' pt='80px'  >
        <Text>{id}</Text><Text>.</Text><Text pl="5px" fontSize="18px" color="primary" fontWeight={"bold"}>{startingText}</Text>
        </Flex>
        <Heading as='h1' size='xl' pb='35px'>{heading} </Heading>
        <Text fontSize="20px" pb='35px' fontFamily="sans-serif"  width="80%">{text} </Text>
        <Button  colorScheme='blue' width='150px' >{btnText}</Button>
            </Stack>
            <Box pr='70px'>
               <Image src={img} alt='err' width='800px' height="500px"/>
            </Box>
        </SimpleGrid>
  
       
    )
}
export default CardComponent