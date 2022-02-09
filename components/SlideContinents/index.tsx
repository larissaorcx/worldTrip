import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel } from "swiper";

//import chakra
import { Center, Flex, Img, Link, Stack, Text } from "@chakra-ui/react";

export default function SlideContinents() {
  return (
      <Flex w='1240px' h='450px' mt="80px" mb='40px' align='center'>
        <Swiper
          cssMode
          navigation
          pagination
          mousewheel
          modules={[Navigation, Pagination, Mousewheel]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Flex
              bgImg=" url( 'slideContinents/america-do-norte.png' ) "
              w='1240px'
              h='450px'
              bgPosition='center'
              >
              <Center w='1240px'>
                <Stack>
                    <Text
                      fontWeight='700'
                      fontSize='48px'
                      lineHeight='72px'
                      color='brand.600'
                      mx='auto'>
                      <Link href='/continent/america-do-norte' textDecoration='none'>
                        América do Norte
                      </Link>
                    </Text>
                    <Center w='100%'>
                      <Text
                        fontSize='24px'
                        fontWeight='700'
                        lineHeight='36px'
                        color='brand.600'
                        >
                        A maior fronteira em termos de extensão do planeta
                      </Text>
                    </Center>
                </Stack>
              </Center>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
          <Flex
            bgImg=" url( 'slideContinents/america-do-sul.png' ) "
            w='1240px'
            h='450px'
            bgPosition='center'
            >
              <Center w='1240px'>
                <Stack>
                  <Text
                    fontWeight='700'
                    fontSize='48px'
                    lineHeight='72px'
                    color='brand.600'
                    mx='auto'>
                      <Link href='/continent/america-do-sul' passHref>
                        América do Sul
                      </Link>
                  </Text>
                  <Center w='100%'>
                    <Text
                      fontSize='24px'
                      fontWeight='700'
                      lineHeight='36px'
                      color='brand.600'
                      >
                      O segundo maior continente do mundo
                    </Text>
                  </Center>
                </Stack>
              </Center>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
          <Flex
            bgImg=" url( 'slideContinents/Asia.png' ) "
            w='1240px'
            h='450px'bgPosition='center'>
              <Center w='1240px'>
                <Stack>
                  <Text
                    fontWeight='700'
                    fontSize='48px'
                    lineHeight='72px'
                    color='brand.600'
                    mx='auto'>
                      <Link href='/continent/Asia' passHref>
                        Ásia
                      </Link>
                  </Text>
                  <Center w='100%'>
                    <Text
                      fontSize='24px'
                      fontWeight='700'
                      lineHeight='36px'
                      color='brand.600'
                      >
                        O maior dos continentes
                    </Text>
                  </Center>
                </Stack>
              </Center>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
          <Flex
            bgImg=" url( 'slideContinents/Africa.png' ) "
            w='1240px'
            h='450px'
            bgRepeat='no-repeat'
            bgPosition='center'
            >
              <Center w='1240px'>
                <Stack>
                  <Text
                    fontWeight='700'
                    fontSize='48px'
                    lineHeight='72px'
                    color='brand.600'
                    mx='auto'>
                      <Link href='/continent/Africa' passHref>
                        África
                      </Link>
                  </Text>
                  <Center w='100%'>
                    <Text
                      fontSize='24px'
                      fontWeight='700'
                      lineHeight='36px'
                      color='brand.600'
                      >
                      O terceiro continente mais extenso
                    </Text>
                  </Center>
                </Stack>
              </Center>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
          <Flex bgImg=" url( 'slideContinents/europa.png' ) " w='1240px' h='450px'>
              <Center w='1240px'>
                <Stack>
                    <Text
                      fontWeight='700'
                      fontSize='48px'
                      lineHeight='72px'
                      color='brand.600'
                      mx='auto'>
                      <Link href='/continent/Europa'>
                        Europa
                      </Link>
                    </Text>
                  <Center w='100%'>
                    <Text
                      fontSize='24px'
                      fontWeight='700'
                      lineHeight='36px'
                      color='brand.600'
                      >
                      O continente mais antigo
                    </Text>
                  </Center>
                </Stack>
              </Center>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
          <Flex
            bgImg=" url( 'slideContinents/Oceania.png' ) "
            w='1240px'
            h='450px'
            bgPosition='center'
            bgSize='cover'
            >
              <Center w='1240px'>
                <Stack>
                  <Text
                    fontWeight='700'
                    fontSize='48px'
                    lineHeight='72px'
                    color='brand.600'
                    mx='auto'>
                      <Link href='/continent/Oceania' passHref>
                        Oceania
                      </Link>
                  </Text>
                  <Center w='100%'>
                    <Text
                      fontSize='24px'
                      fontWeight='700'
                      lineHeight='36px'
                      color='brand.600'
                      >
                      O menor continente do mundo
                    </Text>
                  </Center>
                </Stack>
              </Center>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
  );
}
