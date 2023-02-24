import { Flex, Heading,Stack,Text } from "@chakra-ui/react"
export default function Ratings(){
    return(
        <Flex justify="space-evenly" flexDirection={{base:"column",sm:"column",lg:"row"}} mt="50px">
           <Stack >
            <Heading textAlign={"center"} size="xl" color="primary">10 years</Heading>
            <Text textAlign={"center"} fontFamily={"sans-serif"} fontSize={"18px"}>in business</Text>
           </Stack>
           <Stack>
           <Heading textAlign={"center"}size="xl" color="primary">140,000</Heading>
            <Text textAlign={"center"} fontFamily={"sans-serif"} fontSize={"18px"}>users</Text>
           </Stack>
           <Stack>
           <Heading textAlign={"center"} size="xl" color="primary">100k+</Heading>
            <Text textAlign={"center"} fontFamily={"sans-serif"} fontSize={"18px"}>monthly blog readers</Text>
           </Stack>
           <Stack>
           <Heading textAlign={"center"}size="xl" color="primary">1.2m+</Heading>
            <Text textAlign={"center"}fontFamily={"sans-serif"} fontSize={"18px"}>social followers</Text>
           </Stack>
        </Flex>
    )
}