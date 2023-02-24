import CardComponent from "./CardComponent"
import { Box, SimpleGrid } from '@chakra-ui/react'
export default function ChunkofCards(){
    const arr=[
        {
            id:1,
            startingText:"SHARE CLICK-WORTHY CONTENT",
            heading:"Get the clicks you deserve",
            text:"Buffer will tell you when and what to publish to make your content stand out.",
            img:"https://buffer.com/static/homepage/webp/ShareClickWorthyContent.webp",
            btnText:"Start creating"
        },
        {
            id:2,
            startingText:"BUILD AN ENGAGED AUDIENCE",
            heading:"Grow your following",
            text:"Buffer will share your content on the right channels, with suggested hashtags to help you grow.",
            img:"https://buffer.com/static/homepage/webp/BuildAnEnagagedAudience-2.webp",
            btnText:"Start growing"
        },
        {
            id:3,
            startingText:"SAVE TONS OF TIME",
            heading:"Halve your workload",
            text:"Buffer will publish everything for you to save time and it’ll showcase your work with automated reports.",
            img:"https://buffer.com/static/homepage/webp/SaveTonsOfTime.webp",
            btnText:"Start optimizing"
        },
        {
            id:4,
            startingText:" COORDINATE WITH EASE",
            heading:"Collaboration has never been easier",
            text:"With Buffer’s permissions levels and approval flows, your team can work freely without any micro-management.",
            img:"https://buffer.com/static/homepage/webp/CoordinateWithEase.webp",
            btnText:"Start Collaborating"
        }
    ]
    return(
        <Box  ml='20px' pl='10px' mt='50px'>
         {arr.map(({startingText,heading,text,img,btnText,id})=><CardComponent id={id} key={id} startingText={startingText} text={text} img={img} btnText={btnText} heading={heading} />)}
        </Box>
        
    )
}