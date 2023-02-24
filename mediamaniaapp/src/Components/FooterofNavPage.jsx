import { ReactNode } from 'react';
import styles from "./FooterNavPage.module.css"
import {
  Image,
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  HStack,
  Icon
} from '@chakra-ui/react';
import {Link as RouterLink} from "react-router-dom"
import logo from "../Images/Mediamania365.png"

const Logo = (props) => {
  return (
    <Image src={logo} alt="error" width="100px"/>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};
const footerIcons=[
    {
        id:1,
        d:"M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
    },
    {
        id:2,
        d:"M13 10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189.374-2.691 1.118-3.512C11.862 4.41 12.791 4 13.904 4H16v3h-2.1c-.498 0-.9.402-.9.899V10z"
    },
    {
        id:3,
        d:"M18.89 7.012c.808-.496 1.343-1.173 1.605-2.034a8.68 8.68 0 0 1-2.351.861c-.703-.756-1.593-1.14-2.66-1.14c-1.043 0-1.924.366-2.643 1.078a3.56 3.56 0 0 0-1.076 2.605c0 .309.039.585.117.819C8.806 9.096 6.26 7.82 4.254 5.364c-.34.601-.51 1.213-.51 1.846c0 1.301.549 2.332 1.645 3.089c-.625-.053-1.176-.211-1.645-.47c0 .929.273 1.705.82 2.388a3.623 3.623 0 0 0 2.115 1.291c-.312.08-.641.118-.979.118c-.312 0-.533-.026-.664-.083c.23.757.664 1.371 1.291 1.841a3.652 3.652 0 0 0 2.152.743c-1.332 1.045-2.855 1.562-4.578 1.562c-.422 0-.721-.006-.902-.038C4.696 18.753 6.585 19.3 8.675 19.3c2.139 0 4.029-.542 5.674-1.626c1.645-1.078 2.859-2.408 3.639-3.974a10.77 10.77 0 0 0 1.172-4.892V8.34A7.788 7.788 0 0 0 21 6.419a8.142 8.142 0 0 1-2.11.593z"
    },
    {
        id:4,
        d:"M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
    },
    {
        id:5,
        d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
    },
    {
        id:6,
        d:"M11.99 2C6.472 2 2 6.473 2 11.99c0 4.232 2.633 7.85 6.35 9.306c-.088-.79-.166-2.006.034-2.868c.182-.78 1.172-4.966 1.172-4.966s-.299-.599-.299-1.484c0-1.388.805-2.425 1.808-2.425c.853 0 1.264.64 1.264 1.407c0 .858-.546 2.139-.827 3.327c-.235.994.499 1.805 1.479 1.805c1.775 0 3.141-1.872 3.141-4.575c0-2.392-1.719-4.064-4.173-4.064c-2.843 0-4.512 2.132-4.512 4.335c0 .858.331 1.779.744 2.28a.3.3 0 0 1 .069.286c-.076.315-.245.994-.277 1.133c-.044.183-.145.222-.335.134c-1.247-.581-2.027-2.405-2.027-3.871c0-3.151 2.289-6.045 6.601-6.045c3.466 0 6.159 2.469 6.159 5.77c0 3.444-2.171 6.213-5.184 6.213c-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62a10 10 0 0 0 2.958.445c5.517 0 9.99-4.473 9.99-9.99S17.507 2 11.99 2"
    },
    {
        id:7,
        d:"M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"
    },
]
export default function FooterofNavPage() {
  return (
    <Box
    mt="200px"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Box>
                <HStack>
            {footerIcons.map(({d,id})=>(<Box>
                <Icon key={id} xmlns="http://www.w3.org/2000/svg" width="7" height="7"  viewBox="0 0 24 24" color='#000000'>
  <path
    fill='currentColor'
    d={d}
  />
</Icon>
            </Box>))}
                </HStack>
           
            <Text>Download</Text>
           
                <HStack>
                    {/*<a href="https://play.google.com/store/apps/details?id=org.buffer.android&amp;hl=en" target="_blank" rel="noopener" class="style__AppDownload-sc-gfw3zt-1 beTYL"><svg height="18" style="enable-background:new 0 0 56.6934 56.6934" width="18" viewBox="0 0 60 60" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M39.332 18.062 12.674 3.79a5.094 5.094 0 0 0-4.187-.305l22.711 22.711 8.134-8.134zM49.273 23.384l-7.679-4.11-8.66 8.659 8.66 8.66 7.679-4.112c3.632-1.944 3.632-7.152 0-9.097zM6.408 4.88A5.09 5.09 0 0 0 5.08 8.338v39.188c0 1.37.513 2.564 1.328 3.46L29.46 27.933 6.408 4.879zM8.487 52.38c1.3.475 2.802.437 4.187-.305l26.658-14.271-8.134-8.134L8.487 52.38z"></path></svg>Google Play</a>  */}
        <RouterLink className={styles.IconsShowoff} to="https://apps.apple.com/app/apple-store/id490474324?pt=936146&amp;ct=SiteFooter&amp;mt=8"><Icon xmlns="http://www.w3.org/2000/svg" xmlSpace='preserve' height="10" width="120" viewBox='0 0 60 60' color='#000000'>
  <path
    fill='currentColor'
    d="M 41.777 30.517 c -0.062 -6.232 5.082 -9.221 5.312 -9.372 c -2.891 -4.227 -7.395 -4.807 -8.998 -4.873 c -3.83 -0.389 -7.477 2.256 -9.42 2.256 c -1.939 0 -4.941 -2.199 -8.117 -2.143 c -4.178 0.062 -8.029 2.43 -10.179 6.17 c -4.339 7.527 -1.11 18.682 3.118 24.791 c 2.067 2.986 4.532 6.346 7.766 6.223 c 3.117 -0.123 4.293 -2.016 8.061 -2.016 s 4.826 2.016 8.123 1.953 c 3.352 -0.061 5.477 -3.043 7.527 -6.041 c 2.373 -3.469 3.35 -6.828 3.408 -6.998 c -0.073 -0.034 -6.534 -2.509 -6.601 -9.95 Z M 35.582 12.229 c 1.715 -2.082 2.877 -4.975 2.561 -7.855 c -2.475 0.1 -5.471 1.645 -7.248 3.725 c -1.592 1.846 -2.984 4.785 -2.611 7.613 c 2.761 0.214 5.577 -1.405 7.298 -3.483 Z"
  /></Icon>Apple Store</RouterLink>   
{/* 2nd icon google icon */}
<RouterLink className={styles.IconsShowoff} to="https://play.google.com/store/apps/details?id=org.buffer.android&amp;hl=en" >
<Icon xmlns="http://www.w3.org/2000/svg" height="27" width="27" viewBox='0 0 60 60' color='#000000'>
  <path
    fill='currentColor'
    d="M 39.332 18.062 L 12.674 3.79 a 5.094 5.094 0 0 0 -4.187 -0.305 l 22.711 22.711 l 8.134 -8.134 Z M 49.273 23.384 l -7.679 -4.11 l -8.66 8.659 l 8.66 8.66 l 7.679 -4.112 c 3.632 -1.944 3.632 -7.152 0 -9.097 Z M 6.408 4.88 A 5.09 5.09 0 0 0 5.08 8.338 v 39.188 c 0 1.37 0.513 2.564 1.328 3.46 L 29.46 27.933 L 6.408 4.879 Z M 8.487 52.38 c 1.3 0.475 2.802 0.437 4.187 -0.305 l 26.658 -14.271 l -8.134 -8.134 L 8.487 52.38 Z"
  />
</Icon>Google Play
</RouterLink>
</HStack>
            </Box>
            <Text fontSize="12px" color="#000000">Copyright ©2023 Buffer|Privacy|Terms|Security</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Tool</ListHeader>
            <Link className={styles.footerTools} href={'#'}>Publishing</Link>
            <Link className={styles.footerTools} href={'#'}>Analytics</Link>
            <Link className={styles.footerTools} href={'#'}>Engagement</Link>
            <Link className={styles.footerTools} href={'#'}>New Start Page</Link>
            <Link className={styles.footerTools} href={'#'}>Extras</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Resources</ListHeader>
            <Link className={styles.footerTools} href={'#'}>Blog</Link>
            <Link className={styles.footerTools} href={'#'}>Content Library</Link>
            <Link className={styles.footerTools} href={'#'}>Browser Extension</Link>
            <Link className={styles.footerTools} href={'#'}>Free Image Editor</Link>
            <Link className={styles.footerTools} href={'#'}>Free Marketing Tools</Link>
          </Stack>
          <Stack  align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link className={styles.footerTools} href={'#'}>Help Center</Link>
            <Link className={styles.footerTools} href={'#'}>Status</Link>
            <Link className={styles.footerTools} href={'#'}>What's New</Link>
            <Link className={styles.footerTools} href={'#'}>Product Roadmap</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link className={styles.footerTools} href={'#'}>About</Link>
            <Link className={styles.footerTools} href={'#'}>Transparency</Link>
            <Link className={styles.footerTools} href={'#'}>Careers</Link>
            <Link className={styles.footerTools} href={'#'}>Accessibility</Link>
            <Link className={styles.footerTools} href={'#'}>Press</Link>
            <Link className={styles.footerTools} href={'#'}>Sitemap</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}