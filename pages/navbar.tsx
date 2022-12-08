import React, { ReactNode } from 'react';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Image, Button, ButtonGroup, Divider, Stack, Heading,Spacer } from '@chakra-ui/react';


interface LinkItemProps {
    name: string;
    icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Moonbeam', icon: 'https://i.pravatar.cc/150?img=' },
    { name: 'Acala', icon: 'https://i.pravatar.cc/150?img=' },
    { name: 'Astar', icon: 'https://i.pravatar.cc/150?img=' },
    { name: 'Kilt', icon: 'https://i.pravatar.cc/150?img=' },
    { name: 'Phala', icon: 'https://i.pravatar.cc/150?img=' },
    { name: 'RMRK', icon: 'https://i.pravatar.cc/150?img=' },
    { name: 'Polkadot', icon: 'https://i.pravatar.cc/150?img=' },
    { name: 'Kusama', icon: 'https://i.pravatar.cc/150?img=' },
    { name: 'mplampla', icon: 'https://i.pravatar.cc/150?img=' },
    { name: 'mplou', icon: 'https://i.pravatar.cc/150?img=' },

];

export default function SidebarWithHeader({
    children,
}: {
    children: ReactNode;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.700', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}

                <Grid templateColumns='repeat(5, 3fr)' gap={6}>
                    <GridItem w='100%'   >

                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>

                    </GridItem>
                    <GridItem w='100%'   >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>
                    </GridItem>
                    <GridItem w='100%'   >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>

                    </GridItem>
                    <GridItem w='100%'   >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>

                    </GridItem>
                    <GridItem w='100%'  >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>
                    </GridItem>

                    <GridItem w='100%'  >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>
                    </GridItem>

                    <GridItem w='100%'  >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>
                    </GridItem>

                    <GridItem w='100%'  >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>
                    </GridItem>

                    <GridItem w='100%'  >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>
                    </GridItem>

                    <GridItem w='100%'  >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>
                    </GridItem>

                    <GridItem w='100%'  >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>
                    </GridItem>

                    <GridItem w='100%'  >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>
                    </GridItem>

                    <GridItem w='100%'  >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>
                    </GridItem>

                    <GridItem w='100%'  >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>
                    </GridItem>

                    <GridItem w='100%'  >
                        <Card maxW='sm' boxShadow='xl' bg='gray.600'>
                            <CardBody>
                                <Image
                                    src='https://miro.medium.com/max/720/1*WoMwh7FoDBN2TwqWtqYMxA.webp'
                                    alt=''
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'></Heading>
                                    <Text color='gray.300'>
                                        In September 2020 the initial team behind the development of KILT Protocol published the original Polimec whitepaper...
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>

                                <Button variant='solid' colorScheme='white' bg='gray' w='100%'>
                                    Read now
                                </Button>


                            </CardFooter>
                        </Card>
                    </GridItem>

                    


                </Grid>



            </Box>
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            color='gray.100'
            bg={useColorModeValue('#171923', 'white.100')}
            borderRight="1px"
            borderRightColor={useColorModeValue('#171923', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};



interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'gray.400',
                    color: 'black',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('gray.300', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.900', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold">
                dotnews
            </Text>


<Button m='2'> Defi</Button>
<Button m='2'> NFTs</Button>
<Button m='2'> Smart Contracts</Button>
<Button m='2'> Gaming</Button>
<Button m='2'> DAO</Button>
<Button m='2'> Bridge</Button>

<Spacer />    
    

            <HStack spacing={{ base: '0', md: '6' }}>
                <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell />}
                />
                <Flex alignItems={'center'}>
                    <Menu>
                    
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://i.pravatar.cc/150?img=3'
                                    }
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="sm">PetK</Text>
                                    <Text fontSize="xs" color="gray.600">
                                        Admin
                                    </Text>

                                    
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('#171923', '#171923')}
                            borderColor={useColorModeValue('gray.700', 'gray.700')}>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>

                            <MenuDivider />
                            <MenuItem>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};