import { Box, Center, Flex, Img, Stack, Text } from '@chakra-ui/react';

interface BannerProps {
    inHome?: boolean;
    continent?: {
        imgName: string;
        name: string;
    };
}

export function Banner({ inHome, continent }: BannerProps) {
    return (
        <>
            {!inHome ? (
                <Flex
                    bgImg={`url('/slideContinents/${continent.imgName}.png')`}
                    w="1440px"
                    maxWidth={1440}
                    h="500px"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    bgPosition="center"
                    mx="auto"
                >
                    <Text
                        fontSize="48px"
                        fontWeight="600"
                        ml="140px"
                        color="brand.600"
                        mt="360px"
                    >
                        {continent.name}
                    </Text>
                </Flex>
            ) : (
                <Flex
                    bgImg=" url( 'banner/Background.png ' ) "
                    w="1440px"
                    maxWidth={1440}
                    h="368.21px"
                    bgRepeat="no-repeat"
                    mx="auto"
                >
                    <Stack mt="80px" ml="140px" w="100%" h="100%">
                        <Text
                            color="brand.600"
                            fontSize="36px"
                            w="426px"
                            h="108px"
                            lineHeight="54px"
                            fontWeight="500"
                        >
                            5 Continentes,
                            <br /> infinitas possibilidades.
                        </Text>
                        <Text
                            color="brand.500"
                            fontSize="20px"
                            w="524px"
                            h="57px"
                            lineHeight="30px"
                            fontWeight="400"
                        >
                            Chegou a hora de tirar do papel a viagem que você{' '}
                            <br /> sempre sonhou.
                        </Text>
                    </Stack>
                    <Flex direction="column" w="100%" h="100%">
                        <Center mr="146.8px" mt="86.73px">
                            <Img
                                src="banner/Airplane.png"
                                alt="Avião"
                                w="417.15px"
                                h="270.74px"
                            />
                        </Center>
                    </Flex>
                </Flex>
            )}
        </>
    );
}
