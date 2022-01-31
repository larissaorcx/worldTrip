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
import { Center, Flex, Img, Stack, Text } from "@chakra-ui/react";

export default function SlideContinents() {
  return (
      <Flex w='1240px' h='450px' mt="80px" mb='40px' align='center'>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          modules={[Navigation, Pagination, Mousewheel]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Flex
              bgImg=" url( 'https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-12-at-17.38.11.png ' ) "
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
                    América do Norte
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
            bgImg=" url( 'https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-12-at-14.31.46.png' ) "
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
                    América do Sul
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
            bgImg=" url( 'https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-14-at-12.45.18.png' ) "
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
                    Ásia
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
            bgImg=" url( 'https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-14-at-09.35.43.png' ) "
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
                    África
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
          <Flex bgImg=" url( 'slideContinents/europa.png ' ) " w='1240px' h='450px'>
              <Center w='1240px'>
                <Stack>
                  <Text
                    fontWeight='700'
                    fontSize='48px'
                    lineHeight='72px'
                    color='brand.600'
                    mx='auto'>
                    Europa
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
            bgImg=" url( 'https://c4.wallpaperflare.com/wallpaper/324/269/183/bowen-falls-wallpaper-preview.jpg' ) "
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
                    Oceania
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
