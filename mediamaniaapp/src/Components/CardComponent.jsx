import { Image, Button, Heading, SimpleGrid, Stack,Text,Box,id,Flex, Center } from "@chakra-ui/react"

const CardComponent=({startingText,heading,text,img,btnText,id})=>{
    return(
        <SimpleGrid  spacing={10}>
            <Stack>
                <Flex>
        <Text>{id}</Text><Text>.</Text><Text font-size="18px" color="primary">{startingText}</Text>
        </Flex>
        <Heading as='h1' size='3xl'>{heading} </Heading>
        <Text font-size="18px">{text} </Text>
        <Button bg='primary' width="120px">{btnText}</Button>
            </Stack>
            <Box>
               <Image src={img} alt='err' width='300px'/>
            </Box>
        </SimpleGrid>
       
    )
}
export default CardComponent