import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box,Image,Text,Icon, Center,Flex, HStack, SimpleGrid } from "@chakra-ui/react";
import styles from "./CarouselofNavBar.module.css"
export default class PauseOnHover extends Component {
//   .slick-slide {
//     margin: 0 10px;
// }
// /* the parent */
// .slick-list {
//     margin: 0 -10px;
// }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    const slidingImages=[{
      picture:"https://buffer.com/static/testimonials/rodrigo-hyago-happysocks@mobile.jpg",
      firstText:"Buffer makes it easy for us to monitor all of our engagement and strengthen the connection with our audience",
      d:"data:image/png;base64,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",
      designation:"Rodrigo Hyago, Social Media Content Manager"
    },
    {
      picture:"https://buffer.com/static/testimonials/joe-mercy-for-animals@mobile.jpg",
      firstText:"Buffer saves us, literally, hours and in turn helps us spread our message even further.",
      d:"https://upload.wikimedia.org/wikipedia/commons/1/11/Mercy_for_Animals_logo.svg",
      designation:"Joe Loria, Content Manager"
    },
    {
      picture:"https://buffer.com/static/testimonials/liz-gillis-dress-up@2x-mobile.jpg",
      firstText:"On social, we need to be fast, efficient, and intentional. Buffer allows us to be exactly that.",
      d:"https://media.licdn.com/dms/image/C4D0BAQHsU-TtZjgs9A/company-logo_200_200/0/1565105796958?e=2147483647&v=beta&t=HKpbiqasseY5vfZwv493rHhPl3QgUwrZtaTcP5nFhvM",
      designation:"Liz Gillis, Digital Marketer"
    },
    {
      picture:"https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg",
      firstText:"Buffer has made sharing our story and building our brand on social media so much easier.",
      d:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSymKl2LF8YoKcMKUwn5YnzG768Y01hIXBpVYFQ03BBw&s",
      designation:"Luis Cancel, Managing Editor"
    }
  ]
    return (
      <Box className={styles.parentBox}>
        <Slider {...settings} >
          {slidingImages.map(({picture,firstText,d,designation})=>(
            <Box className={styles.shadowing} height="400px" >
           <Center><Image src={picture} alt="err" width="100px" borderRadius={'50%'} /></Center>
            <Text>{firstText}</Text>
           <Center><Image src={d} alt="error" width="100px"  minH="50px" /></Center>
   <Text fontWeight='bold'>{designation}</Text>
          </Box>

          ))}
        </Slider>
      </Box>
    );
  }
}