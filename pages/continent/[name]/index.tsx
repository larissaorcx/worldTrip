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

    let continentName = '';
    let description = '';
    let paises = 0;
    let language = 0;
    let cities = 0;
    let country = '';
    let city = '';
    let imgCoutry = '';
    let imgFlag = '';

    switch (name) {
        case 'america-do-norte': {
            continentName = 'América do norte';
            description =
                'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano.';
            paises = 23;
            language = 6;
            cities = 23;
            break;
        }
        case 'america-do-sul': {
            continentName = 'América do sul';
            description =
                'A América do Sul é um dos subcontinentes que formam a América. Ela é composta por 12 países que foram colonizados, proritariamente, por portugueses e espanhóis. A população sul-americana é compostada por descendentes de povos indígenas, europeus e africanos, que contribuíram diretamente para a formação das sociedades locais.';
            paises = 12;
            language = 8;
            cities = 22;
            break;
        }
        case 'Asia': {
            continentName = 'Ásia';
            description =
                'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.';
            paises = 50;
            language = 2.301;
            cities = 10;
            break;
        }
        case 'Africa': {
            continentName = 'África';
            description =
                'Considerada o berço da humanidade – teses indicam que o gênero homo tenha surgido no continente africano há mais de 2 milhões de anos – a África em sua história recente vive inúmeros conflitos políticos e uma grave crise social e econômica.';
            paises = 54;
            language = 2.092;
            cities = 13;
            break;
        }
        case 'Europa': {
            continentName = 'Europa';
            description =
                'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.';
            paises = 50;
            language = 60;
            cities = 27;
            break;
        }
        case 'Oceania': {
            continentName = 'Oceania';
            description =
                'Seu território possui aproximadamente 8,5 milhões de km² sendo que só a Austrália ocupa cerca de 96% do total. Podemos dizer que a Austrália é o único continente da Oceania, uma vez que o restante dela se constitui de inúmeras ilhas e fiordes.';
            paises = 14;
            language = 820;
            cities = 2;
            break;
        }

        default:
            break;
    }
    return name ? (
        <>
            <Header />
            <Banner
                continent={{
                    imgName: String(name),
                    name: continentName,
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
                            {description}
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
                                    {paises}
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
                                    {language}
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
                                    {cities}
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
    ) : null;
}
