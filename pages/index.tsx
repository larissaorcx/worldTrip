import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";

export default function Home () {
    return(
        <>
            <Flex
              w='1440px'h='100vh'
              maxWidth={1440}
              direction='column'
              align='center'
              mx='auto'
              >
                <Header homepage/>
                <Banner />
            </Flex>
        </>
    )
}