import { Divider, Flex, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import SlideContinents from "../components/SlideContinents";

export default function Home() {
  return (
    <Flex
      w="1440px"
      h="1440px"
      maxWidth={1440}
      direction="column"
      align="center"
      mx="auto"
    >
      <Header homepage />
      <Banner />
      <Sidebar />
      <Flex w="90px" mt="80px" mr="40px" mb="52px">
        <Divider colorScheme="brand.300" borderBottom="2px" />
      </Flex>
      <Flex
        align="center"
        justify="center"
        w="839px"
        h="101px"
        direction="column"
      >
        <Text color="brand.300" fontWeight="500" fontSize="36px">
          Vamos nessa?
        </Text>
        <Text color="brand.300" fontWeight="500" fontSize="36px">
          Então escolha seu continente
        </Text>
      </Flex>
      <SlideContinents />
    </Flex>
  );
}
