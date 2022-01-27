import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Home () {
    return(
        <>
            <Flex
              w='1440px'h='1469px'
              maxWidth={1440}
              direction='column'
              align='center'
              mx='auto'
              >
                <Header homepage/>
                <Banner />
                <Sidebar />
            </Flex>
        </>
    )
}