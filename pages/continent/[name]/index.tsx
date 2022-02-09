import {
    Box,
    Center,
    Flex,
    Icon,
    SimpleGrid,
    HStack,
    Text,
    Tooltip,
    Img,
    Stack,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Banner } from '../../../components/Banner';
import { Header } from '../../../components/Header';

import { HiOutlineInformationCircle } from 'react-icons/hi';

export default function Continent() {
    const router = useRouter();
    const { name } = router.query;
    return (
        <>
            <Header />
            <Banner
                continent={{
                    name: String(name),
                }}
            />

            <Flex mt="80px" ml="140px" mb="80px">
                <SimpleGrid columns={2} spacing={70}>
                    <Box w="600px" h="211px">
                        <Text
                            fontSize="24px"
                            fontWeight="400"
                            color="brand.300"
                            textAlign="justify"
                            lineHeight="36px"
                        >
                            A {name} é, por convenção, um dos seis continentes
                            do mundo. Compreendendo a península ocidental da
                            Eurásia, a Europa geralmente divide-se da Ásia a
                            leste pela divisória de águas dos montes Urais, o
                            rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
                            sudeste
                        </Text>
                    </Box>
                    <SimpleGrid columns={3} spacing={42}>
                        <Center w="100%">
                            <Box mx="auto">
                                <Text
                                    fontWeight="600"
                                    fontSize="48px"
                                    lineHeight="36px"
                                    color="brand.100"
                                    align="center"
                                    justify="center"
                                >
                                    50
                                </Text>
                                <Text
                                    fontWeight="600"
                                    fontSize="24px"
                                    lineHeight="72px"
                                    color="brand.300"
                                >
                                    países
                                </Text>
                            </Box>
                        </Center>
                        <Center w="100%">
                            <Box>
                                <Text
                                    fontWeight="600"
                                    fontSize="48px"
                                    lineHeight="36px"
                                    color="brand.100"
                                    align="center"
                                    justify="center"
                                >
                                    60
                                </Text>
                                <Text
                                    fontWeight="600"
                                    fontSize="24px"
                                    lineHeight="72px"
                                    color="brand.300"
                                >
                                    línguas
                                </Text>
                            </Box>
                        </Center>
                        <Center w="100%">
                            <Box>
                                <Text
                                    fontWeight="600"
                                    fontSize="48px"
                                    lineHeight="36px"
                                    color="brand.100"
                                    align="center"
                                    justify="center"
                                >
                                    27
                                </Text>
                                <HStack align="center">
                                    <Text
                                        fontWeight="600"
                                        fontSize="24px"
                                        lineHeight="72px"
                                        color="brand.300"
                                    >
                                        cidade +100
                                    </Text>
                                    <Tooltip label="100" fontSize="xs">
                                        <span>
                                            <Icon
                                                as={HiOutlineInformationCircle}
                                                color="brand.700"
                                                mt="5px"
                                            />
                                        </span>
                                    </Tooltip>
                                </HStack>
                            </Box>
                        </Center>
                    </SimpleGrid>
                </SimpleGrid>
            </Flex>
            <Flex w="1440px" h="700px" mx="140px" direction="column">
                <Text
                    lineHeight="54px"
                    fontSize="36px"
                    fontWeight="500px"
                    color="brand.300"
                    align="left"
                    mb="40px"
                >
                    Cidades +100
                </Text>
                <Wrap>
                    <WrapItem>
                        <Box
                            maxW="sm"
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor="brand.100"
                            w="256px"
                            mb="48px"
                            mr="49px"
                        >
                            <Img
                                src="/slideContinents/Europa.png"
                                w="256px"
                                h="173px"
                                borderRadius="5px"
                            />
                            <Flex>
                                <Flex direction="column" mt="0px">
                                    <Text
                                        mb="12px"
                                        fontWeight="600"
                                        fontSize="20px"
                                        lineHeight="25px"
                                        mt="18px"
                                        color="brand.300"
                                        ml="24px"
                                    >
                                        Londres
                                    </Text>
                                    <Text
                                        color="brand.400"
                                        fontWeight="500"
                                        fontSize="16px"
                                        lineHeight="26px"
                                        ml="24px"
                                    >
                                        Reino unido
                                    </Text>
                                </Flex>
                                <Flex
                                    w="30px"
                                    h="30px"
                                    ml="auto"
                                    mr="24px"
                                    mt="38px"
                                    my="auto"
                                >
                                    <Img
                                        src="/banner/bandeira.png"
                                        w="30px"
                                        h="30px"
                                        borderRadius="100px"
                                    />
                                </Flex>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box
                            maxW="sm"
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor="brand.100"
                            mr="49px"
                            mb="48px"
                        >
                            <Img
                                src="/slideContinents/Europa.png"
                                w="256px"
                                h="173px"
                                borderRadius="5px"
                            />
                            <Flex>
                                <Flex direction="column" mt="0px">
                                    <Text
                                        mb="12px"
                                        fontWeight="600"
                                        fontSize="20px"
                                        lineHeight="25px"
                                        mt="18px"
                                        color="brand.300"
                                        ml="24px"
                                    >
                                        Londres
                                    </Text>
                                    <Text
                                        color="brand.400"
                                        fontWeight="500"
                                        fontSize="16px"
                                        lineHeight="26px"
                                        ml="24px"
                                    >
                                        Reino unido
                                    </Text>
                                </Flex>
                                <Flex
                                    w="30px"
                                    h="30px"
                                    ml="auto"
                                    mr="24px"
                                    mt="38px"
                                    my="auto"
                                >
                                    <Img
                                        src="/banner/bandeira.png"
                                        w="30px"
                                        h="30px"
                                        borderRadius="100px"
                                    />
                                </Flex>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box
                            maxW="sm"
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor="brand.100"
                            mr="49px"
                            mb="48px"
                        >
                            <Img
                                src="/slideContinents/Europa.png"
                                w="256px"
                                h="173px"
                                borderRadius="5px"
                            />
                            <Flex>
                                <Flex direction="column" mt="0px">
                                    <Text
                                        mb="12px"
                                        fontWeight="600"
                                        fontSize="20px"
                                        lineHeight="25px"
                                        mt="18px"
                                        color="brand.300"
                                        ml="24px"
                                    >
                                        Londres
                                    </Text>
                                    <Text
                                        color="brand.400"
                                        fontWeight="500"
                                        fontSize="16px"
                                        lineHeight="26px"
                                        ml="24px"
                                    >
                                        Reino unido
                                    </Text>
                                </Flex>
                                <Flex
                                    w="30px"
                                    h="30px"
                                    ml="auto"
                                    mr="24px"
                                    mt="38px"
                                    my="auto"
                                >
                                    <Img
                                        src="/banner/bandeira.png"
                                        w="30px"
                                        h="30px"
                                        borderRadius="100px"
                                    />
                                </Flex>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box
                            maxW="sm"
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor="brand.100"
                            mb="48px"
                        >
                            <Img
                                src="/slideContinents/Europa.png"
                                w="256px"
                                h="173px"
                                borderRadius="5px"
                            />
                            <Flex>
                                <Flex direction="column" mt="0px">
                                    <Text
                                        mb="12px"
                                        fontWeight="600"
                                        fontSize="20px"
                                        lineHeight="25px"
                                        mt="18px"
                                        color="brand.300"
                                        ml="24px"
                                    >
                                        Londres
                                    </Text>
                                    <Text
                                        color="brand.400"
                                        fontWeight="500"
                                        fontSize="16px"
                                        lineHeight="26px"
                                        ml="24px"
                                    >
                                        Reino unido
                                    </Text>
                                </Flex>
                                <Flex
                                    w="30px"
                                    h="30px"
                                    ml="auto"
                                    mr="24px"
                                    mt="38px"
                                    my="auto"
                                >
                                    <Img
                                        src="/banner/bandeira.png"
                                        w="30px"
                                        h="30px"
                                        borderRadius="100px"
                                    />
                                </Flex>
                            </Flex>
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box
                            maxW="sm"
                            borderWidth="1px"
                            borderRadius="lg"
                            borderColor="brand.100"
                            mr="49px"
                            mb="48px"
                        >
                            <Img
                                src="/slideContinents/Europa.png"
                                w="256px"
                                h="173px"
                                borderRadius="5px"
                            />
                            <Flex>
                                <Flex direction="column" mt="0px">
                                    <Text
                                        mb="12px"
                                        fontWeight="600"
                                        fontSize="20px"
                                        lineHeight="25px"
                                        mt="18px"
                                        color="brand.300"
                                        ml="24px"
                                    >
                                        Londres
                                    </Text>
                                    <Text
                                        color="brand.400"
                                        fontWeight="500"
                                        fontSize="16px"
                                        lineHeight="26px"
                                        ml="24px"
                                    >
                                        Reino unido
                                    </Text>
                                </Flex>
                                <Flex
                                    w="30px"
                                    h="30px"
                                    ml="auto"
                                    mr="24px"
                                    mt="38px"
                                    my="auto"
                                >
                                    <Img
                                        src="/banner/bandeira.png"
                                        w="30px"
                                        h="30px"
                                        borderRadius="100px"
                                    />
                                </Flex>
                            </Flex>
                        </Box>
                    </WrapItem>
                </Wrap>
            </Flex>
        </>
    );
}
