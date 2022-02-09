import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        brand:{
            100:  '#FFBA08',
            200: '#000000',
            300: '#47585B',
            400: '#999999',
            500: '#DADADA',
            600: '#F5F8FA',
            700: '#C4C4C4',

        }
    },

    fonts:{
        heading: 'Poppins',
        body: 'Poppins'
    },
})