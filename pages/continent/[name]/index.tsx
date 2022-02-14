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
    let country = [];
    let imgName = '';

    switch (name) {
        case 'america-do-norte': {
            continentName = 'América do norte';
            description =
                'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano.';
            paises = 23;
            language = 6;
            cities = 23;
            country = [
                {
                    pais: 'Canadá',
                    cidade: 'Toronto',
                    imgCountry: '/cidades/AmericaDoNorte/toronto.jpg',
                    flag: '/flag/AmericaDoNorte/canada.jpg',
                },
                {
                    pais: 'Estados Unidos',
                    cidade: 'Nova York',
                    imgCountry: '/cidades/AmericaDoNorte/ny.jpg',
                    flag: '/flag/AmericaDoNorte/eua.jpg',
                },
                {
                    pais: 'México',
                    cidade: 'Puerto Vallarta',
                    imgCountry: '/cidades/AmericaDoNorte/pv.jpg',
                    flag: '/flag/AmericaDoNorte/mexico.png',
                },
                {
                    pais: 'Bahamas',
                    cidade: 'Nassau',
                    imgCountry: '/cidades/AmericaDoNorte/nassau.jpg',
                    flag: '/flag/AmericaDoNorte/bhamas.png',
                },
                {
                    pais: 'Belize',
                    cidade: 'Caye Caulker',
                    imgCountry: '/cidades/AmericaDoNorte/cc.jpg',
                    flag: '/flag/AmericaDoNorte/belize.png',
                },
            ];
            imgName = '/bgImage/AN';
            break;
        }
        case 'america-do-sul': {
            continentName = 'América do sul';
            description =
                'A América do Sul é um dos subcontinentes que formam a América. Ela é composta por 12 países que foram colonizados, proritariamente, por portugueses e espanhóis. A população sul-americana é compostada por descendentes de povos indígenas, europeus e africanos.';
            paises = 12;
            language = 8;
            cities = 22;
            country = [
                {
                    pais: 'Brasil',
                    cidade: 'Rio de Janeiro',
                    imgCountry: '/cidades/AmericaDoSul/rj.jpg',
                    flag: '/flag/AmericaDoSul/br.jpg',
                },
                {
                    pais: 'Argentina',
                    cidade: 'Buenos Aires',
                    imgCountry: '/cidades/AmericaDoSul/ba.jpg',
                    flag: '/flag/AmericaDoSul/argentina.jpg',
                },
                {
                    pais: 'Peru',
                    cidade: 'Cusco ',
                    imgCountry: '/cidades/AmericaDoSul/cusco.jpg',
                    flag: '/flag/AmericaDoSul/peru.jpg',
                },
                {
                    pais: 'Chile',
                    cidade: 'Santiago',
                    imgCountry: '/cidades/AmericaDoSul/santiago.jpg',
                    flag: '/flag/AmericaDoSul/chile.png',
                },
                {
                    pais: 'Colômbia',
                    cidade: 'Santa Marta',
                    imgCountry: '/cidades/AmericaDoSul/sm.jpg',
                    flag: '/flag/AmericaDoSul/colombia.png',
                },
            ];
            imgName = '/bgImage/AS';
            break;
        }
        case 'Asia': {
            continentName = 'Ásia';
            description =
                'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.';
            paises = 50;
            language = 2.301;
            cities = 10;
            country = [
                {
                    pais: 'Indonésia',
                    cidade: 'Bali',
                    imgCountry: '/cidades/Asia/bali.jpg',
                    flag: '/flag/Asia/indonesia.png',
                },
                {
                    pais: 'Tailândia',
                    cidade: 'Bangkok ',
                    imgCountry: '/cidades/Asia/bang.jpg',
                    flag: '/flag/Asia/tailandia.png',
                },
                {
                    pais: 'Japão',
                    cidade: 'Tóquio',
                    imgCountry: '/cidades/Asia/toquio.jpg',
                    flag: '/flag/Asia/japao.png',
                },
                {
                    pais: 'Turquia',
                    cidade: 'Istambul ',
                    imgCountry: '/cidades/Asia/istambul.jpg',
                    flag: '/flag/Asia/turquia.png',
                },
                {
                    pais: 'Emirados Árabes',
                    cidade: 'Dubai',
                    imgCountry: '/cidades/Asia/dubai.jpg',
                    flag: '/flag/Asia/em.png',
                },
            ];
            imgName = '/bgImage/asia';
            break;
        }
        case 'Africa': {
            continentName = 'África';
            description =
                'Considerada o berço da humanidade – teses indicam que o gênero homo tenha surgido no continente africano há mais de 2 milhões de anos – a África em sua história recente vive inúmeros conflitos políticos e uma grave crise social e econômica.';
            paises = 54;
            language = 2.092;
            cities = 13;
            country = [
                {
                    pais: 'África do Sul',
                    cidade: 'Joanesburgo',
                    imgCountry: '/cidades/Africa/jb.jpg',
                    flag: '/flag/Africa/As.jpg',
                },
                {
                    pais: 'Uganda ',
                    cidade: 'Entebbe',
                    imgCountry: '/cidades/Africa/entebbe.jpg',
                    flag: '/flag/Africa/uganda.png',
                },
                {
                    pais: 'Quênia',
                    cidade: 'Nairobi ',
                    imgCountry: '/cidades/Africa/nairobi.jpg',
                    flag: '/flag/Africa/quenia.png',
                },
                {
                    pais: 'Moçambique',
                    cidade: 'Maputo',
                    imgCountry: '/cidades/Africa/maputo.jpg',
                    flag: '/flag/Africa/mocambique.png',
                },
                {
                    pais: 'África do Sul',
                    cidade: 'Durban',
                    imgCountry: '/cidades/Africa/durban.jpg',
                    flag: '/flag/Africa/As.jpg',
                },
            ];
            imgName = '/bgImage/Africa';
            break;
        }
        case 'Europa': {
            continentName = 'Europa';
            description =
                'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.';
            paises = 50;
            language = 60;
            cities = 27;
            country = [
                {
                    pais: 'Reino Unido',
                    cidade: 'Londres',
                    imgCountry: '/cidades/Europa/londres.png',
                    flag: '/flag/Europa/Ru.png',
                },
                {
                    pais: 'França',
                    cidade: 'Paris',
                    imgCountry: '/cidades/Europa/paris.png',
                    flag: '/flag/Europa/franca.png',
                },
                {
                    pais: 'Itália',
                    cidade: 'Roma ',
                    imgCountry: '/cidades/Europa/roma.png',
                    flag: '/flag/Europa/italia.png',
                },
                {
                    pais: 'República Tcheca',
                    cidade: 'Praga',
                    imgCountry: '/cidades/Europa/praga.png',
                    flag: '/flag/Europa/rt.png',
                },
                {
                    pais: 'Holanda',
                    cidade: 'Amsterdã',
                    imgCountry: '/cidades/Europa/ams.png',
                    flag: '/flag/Europa/holanda.png',
                },
            ];
            imgName = '/bgImage/europa';
            break;
        }
        case 'Oceania': {
            continentName = 'Oceania';
            description =
                'Seu território possui aproximadamente 8,5 milhões de km² sendo que só a Austrália ocupa cerca de 96% do total. Podemos dizer que a Austrália é o único continente da Oceania, uma vez que o restante dela se constitui de inúmeras ilhas e fiordes.';
            paises = 14;
            language = 820;
            cities = 2;
            country = [
                {
                    pais: 'Austrália',
                    cidade: 'Sydney',
                    imgCountry: '/cidades/Oceania/sydney.jpg',
                    flag: '/flag/Oceania/australia.png',
                },
                {
                    pais: 'Fiji',
                    cidade: 'Yasawa',
                    imgCountry: '/cidades/Oceania/yasawa.jpg',
                    flag: '/flag/Oceania/fiji.png',
                },
                {
                    pais: 'Nova Zelândia',
                    cidade: 'Waitomo',
                    imgCountry: '/cidades/Oceania/w.jpg',
                    flag: '/flag/Oceania/nz.png',
                },
                {
                    pais: 'Polinésia Francesa',
                    cidade: 'Bora Bora',
                    imgCountry: '/cidades/Oceania/borabora.jpeg',
                    flag: '/flag/Oceania/pf.png',
                },
                {
                    pais: 'Samoa',
                    cidade: 'Apia',
                    imgCountry: '/cidades/Oceania/apia.jpg',
                    flag: '/flag/Oceania/samoa.png',
                },
            ];
            imgName = '/bgImage/oceania';
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
                    imgName: imgName,
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
                            mr="70px"
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
                                    align="center"
                                    justify="center"
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
                                    align="center"
                                    justify="center"
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
                                        align="center"
                                        justify="center"
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
                    {country.map((obj) => (
                        <WrapItem key={obj.imgCountry}>
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
                                    src={obj.imgCountry}
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
                                            {obj.cidade}
                                        </Text>
                                        <Text
                                            color="brand.400"
                                            fontWeight="500"
                                            fontSize="16px"
                                            lineHeight="26px"
                                            ml="24px"
                                            mb="24px"
                                        >
                                            {obj.pais}
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
                                            src={obj.flag}
                                            w="30px"
                                            h="30px"
                                            borderRadius="100px"
                                        />
                                    </Flex>
                                </Flex>
                            </Box>
                        </WrapItem>
                    ))}
                </Wrap>
            </Flex>
        </>
    ) : null;
}
