import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    HStack,
    Image
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import FooterofNavPage from './FooterofNavPage';
  import logo from "../Images/Mediamania365.png"
  import PauseOnHover from './CarouselofNavBar';
  import {Link as RouterLink} from "react-router-dom"
  import styles from "./NavigationBar.module.css"
  import ChunkofCards from './ChunkofCards';
  import AfterNavBar from './AfterNavBar';
  import Ratings from './Ratings';
  import TopOfNavBar from './TopOfNavBar';
  
  export default function NavigationBar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box  >
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'} >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1  }} justify={{ base: 'center', md: 'start' }}>
         <RouterLink to='/'><Flex><Image src={logo} width='100px' height="50px" alt='err'/><span>Mediamania365</span></Flex></RouterLink>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav className={styles.horizontal}/>
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              color="primary"
              href={'#'}>
              <RouterLink to="/login">Log In</RouterLink>
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'l'}
              fontWeight={600}
              color={'white'}
              bg='primary'
              href={'#'}
              _hover={{
                bg: 'primary',
              }}>
              Get Started now
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
        <AfterNavBar/>
        <ChunkofCards/>
        <PauseOnHover/>
        <Ratings/>
        <FooterofNavPage/>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4} className={styles.horizontal}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'18px'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'underline',
                    color: "primary",
                  }}>
                  <RouterLink to={navItem.to}>{navItem.label}</RouterLink>
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel,d }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('Gray.600', 'gray.900') }}>
        <Stack direction={'row'} align={'center'} >
          <HStack>
          <Icon viewBox="0 0 24 24" width="18px" height="18px"  color="#000000">
      <path
    fill='currentColor'
    d={d}
  />
</Icon>
             <Text
              transition={'all .3s ease'}
              _groupHover={{ color: '#000000' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </HStack>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  const NAV_ITEMS= [
    {
      label: 'Tool',
      to:'/',
      children: [
        {
          label: 'Publishing',
          subLabel: 'Plan,collaborate, and publish thumb stopping content',
          href: '#',
          d:"M9.967 8.193L5 13h3v6h4v-6h3L9.967 8.193zM18 1H2C.9 1 0 1.9 0 3v12c0 1.1.9 2 2 2h4v-2H2V6h16v9h-4v2h4c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM2.5 4.25a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zm2 0a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5zM18 4H6V3h12.019L18 4z"

        },
        {
          label: 'Analytics',
          subLabel: 'Analyse socila media performance and create reports',
          href: '#',
          d:"M5 12a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-1-1Zm5-10a1 1 0 0 0-1 1v18a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Zm10 14a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Zm-5-8a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Z"
        },
        {
          label: 'Engagement',
          subLabel: 'Quickely navigate your comments and engage with your audience',
          href: '#',
          d:"M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"
        },
        {
          label: 'Start Page',
          subLabel: 'Build a customized landing page in minutes',
          href: '#',
          d:"M21.329 7.207c0-1.212-.472-2.352-1.329-3.207s-1.996-1.329-3.207-1.329a4.5 4.5 0 0 0-3.18 1.304c-.027.025-7.967 7.964-7.967 7.964c-.373.373-.717.91-.967 1.514c-.195.473-1.979 5.863-2.336 6.939a1 1 0 0 0 1.263 1.263c1.076-.355 6.465-2.141 6.938-2.336c.603-.248 1.14-.592 1.515-.967l2.157-2.156l.076.01c.64 0 1.28-.244 1.769-.732l4.5-4.5a2.487 2.487 0 0 0 .588-2.572c.107-.386.18-.783.18-1.195zM9.465 17.586c-.406.143-1.145.393-2.038.691l-1.704-1.704c.301-.894.551-1.634.691-2.038l3.051 3.051zm-4.097.047l.999.999l-1.498.499l.499-1.498zm7.698-3.113l-2.42 2.42l-.235.18l-3.53-3.529l.18-.234l7.131-7.131l2.731 2.731l-3.69 3.69c-.513.512-.549 1.289-.167 1.873zm6.08-4.959l-4.5 4.5a.502.502 0 0 1-.708 0a.5.5 0 0 1 0-.707l4.5-4.5a.502.502 0 0 1 .707 0a.499.499 0 0 1 .001.707zm.107-1.764a1.489 1.489 0 0 0-1.521.35l-.102.102l-2.731-2.731l.078-.078c.984-.98 2.652-.981 3.608-.023a2.52 2.52 0 0 1 .743 1.793c.001.199-.03.394-.075.587z"
        },
      ],
    },
    {
      label: 'Channels',
      to:"/",
      children: [
        {
          label: 'Facebook',
          href: '#',
          
          d:"M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
        },
        {
          label: 'Google Business Profile',
          href: '#',
          
          d:"M22 8.5c0 1.37-1.12 2.5-2.5 2.5S17 9.87 17 8.5c0 1.37-1.12 2.5-2.5 2.5S12 9.87 12 8.5c0 1.37-1.12 2.5-2.5 2.5S7 9.87 7 8.5C7 9.87 5.88 11 4.5 11S2 9.87 2 8.5l1.39-5.42S3.68 2 4.7 2h14.6c1.02 0 1.31 1.08 1.31 1.08L22 8.5m-1 3.7V20c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-7.8a3.96 3.96 0 0 0 4-.58c.69.55 1.56.88 2.5.88c.95 0 1.82-.33 2.5-.88c.69.55 1.56.88 2.5.88c.95 0 1.82-.33 2.5-.88c.68.55 1.56.88 2.5.88c.53 0 1.04-.11 1.5-.3m-2 5.13c0-.2 0-.41-.05-.63l-.03-.16h-2.97v1.17h1.81c-.06.22-.14.44-.31.62c-.33.33-.78.51-1.26.51c-.5 0-.99-.21-1.35-.56c-.69-.71-.69-1.86.02-2.58c.69-.7 1.83-.7 2.55-.03l.14.13l.84-.85l-.16-.14c-.56-.52-1.3-.81-2.08-.81h-.01c-.81 0-1.57.31-2.14.87c-.59.58-.92 1.34-.92 2.13c0 .8.31 1.54.88 2.09a3.2 3.2 0 0 0 2.22.91h.02c.8 0 1.51-.29 2.03-.8c.47-.48.77-1.2.77-1.87Z"
        },
        {
          label: 'Instagram',
          href: '#',
          
          d:"M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
        },
        {
          label: 'Linkedin',
          href: '#',
          d:"M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
        },
        {
          label: 'Pinterest',
          href: '#',
          d:"M11.99 2C6.472 2 2 6.473 2 11.99c0 4.232 2.633 7.85 6.35 9.306c-.088-.79-.166-2.006.034-2.868c.182-.78 1.172-4.966 1.172-4.966s-.299-.599-.299-1.484c0-1.388.805-2.425 1.808-2.425c.853 0 1.264.64 1.264 1.407c0 .858-.546 2.139-.827 3.327c-.235.994.499 1.805 1.479 1.805c1.775 0 3.141-1.872 3.141-4.575c0-2.392-1.719-4.064-4.173-4.064c-2.843 0-4.512 2.132-4.512 4.335c0 .858.331 1.779.744 2.28a.3.3 0 0 1 .069.286c-.076.315-.245.994-.277 1.133c-.044.183-.145.222-.335.134c-1.247-.581-2.027-2.405-2.027-3.871c0-3.151 2.289-6.045 6.601-6.045c3.466 0 6.159 2.469 6.159 5.77c0 3.444-2.171 6.213-5.184 6.213c-1.013 0-1.964-.525-2.29-1.146l-.623 2.374c-.225.868-.834 1.956-1.241 2.62a10 10 0 0 0 2.958.445c5.517 0 9.99-4.473 9.99-9.99S17.507 2 11.99 2"
        },
        {
          label: 'Shopify',
          href: '#',
          d:"m14.49 20.937l5.381-1.166S17.93 6.633 17.914 6.546c-.016-.086-.086-.144-.158-.144s-1.439-.101-1.439-.101s-.949-.949-1.064-1.05c-.027-.029-.057-.043-.086-.058l-.677 15.744zm.446-15.772c-.016 0-.043.014-.057.014c-.016 0-.217.059-.533.158c-.318-.919-.879-1.768-1.871-1.768h-.086c-.289-.361-.633-.519-.936-.519c-2.316 0-3.426 2.892-3.77 4.359c-.892.275-1.538.476-1.613.505c-.504.158-.517.172-.574.648c-.057.344-1.367 10.489-1.367 10.489l10.117 1.899l.69-15.785zm-2.635.704v.102c-.559.173-1.178.36-1.783.547c.346-1.323.992-1.972 1.553-2.217c.146.375.23.878.23 1.568zm-.92-2.2c.1 0 .201.028.303.102c-.732.344-1.539 1.222-1.871 2.978a59.11 59.11 0 0 1-1.411.432c.389-1.339 1.325-3.512 2.979-3.512zm.402 7.812s-.604-.315-1.322-.315c-1.08 0-1.123.676-1.123.849c0 .921 2.418 1.28 2.418 3.453c0 1.712-1.08 2.806-2.547 2.806c-1.756 0-2.648-1.094-2.648-1.094l.475-1.554s.922.792 1.697.792a.693.693 0 0 0 .721-.69c0-1.209-1.986-1.268-1.986-3.252c0-1.669 1.195-3.295 3.627-3.295c.936 0 1.395.272 1.395.272l-.707 2.028zm.922-7.281c.518.06.85.648 1.064 1.311c-.258.087-.547.173-.863.273v-.187c0-.561-.072-1.022-.201-1.397z"
        },
        {
          label: 'TikTok',
          href: '#',
          d:"M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
        },
        {
          label: 'Twitter',
          href: '#',
          d:"M18.89 7.012c.808-.496 1.343-1.173 1.605-2.034a8.68 8.68 0 0 1-2.351.861c-.703-.756-1.593-1.14-2.66-1.14c-1.043 0-1.924.366-2.643 1.078a3.56 3.56 0 0 0-1.076 2.605c0 .309.039.585.117.819C8.806 9.096 6.26 7.82 4.254 5.364c-.34.601-.51 1.213-.51 1.846c0 1.301.549 2.332 1.645 3.089c-.625-.053-1.176-.211-1.645-.47c0 .929.273 1.705.82 2.388a3.623 3.623 0 0 0 2.115 1.291c-.312.08-.641.118-.979.118c-.312 0-.533-.026-.664-.083c.23.757.664 1.371 1.291 1.841a3.652 3.652 0 0 0 2.152.743c-1.332 1.045-2.855 1.562-4.578 1.562c-.422 0-.721-.006-.902-.038C4.696 18.753 6.585 19.3 8.675 19.3c2.139 0 4.029-.542 5.674-1.626c1.645-1.078 2.859-2.408 3.639-3.974a10.77 10.77 0 0 0 1.172-4.892V8.34A7.788 7.788 0 0 0 21 6.419a8.142 8.142 0 0 1-2.11.593z"
        },
      ],
    },
    {
      label: 'Pricing',
      href: '#',
      to:'/pricing'
    },
    {
      label: 'Blog',
      href: '#',
      to:'/blog'
    },
  ];
  // <ChunkofCards/>