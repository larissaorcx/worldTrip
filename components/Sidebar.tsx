import { Flex, Img } from "@chakra-ui/react";

export function Sidebar(){
    return(
        <Flex>
            <Img
                src='Copo.png'
                alt='Drink' 
                w='85px'
                h='85px'
            />
            <Img
                src='Prancha.png'
                alt='Prancha' 
                w='85px'
                h='85px'
            /> 
            <Img
                src='Predio.png'
                alt='predio' 
                w='85px'
                h='85px'
            />
            <Img
                src='museum.png'
                alt='museu'  
                w='85px'
                h='85px'
            />
            <Img
                src='terra.png'
                alt='terra' 
                w='85px'
                h='85px'
            />    

        </Flex>
    );
}