import { HStack,Box,Text,Flex } from "@chakra-ui/react"
import NavigationBar from "./NavigationBar"
const TopOfNavBar=()=>{
    return(
        <Box >
            <Box bg="primary" p='10px'>
            <Flex justify={'center'}>
                <Text p='3px' mr={"5px"} borderRadius={"35%"} bg='#D5DBFF'fontFamily={"sans-serif"} fontWeight="bold" color='#0020D6'>New</Text>
                <Text color="white"> Introducing the Buffer AI Assistant.</Text>
                <Text color="white" textDecoration="underline"> Learn more.</Text>
            </Flex>
            </Box>
            <NavigationBar/>
        </Box>
    )
}
export default TopOfNavBar