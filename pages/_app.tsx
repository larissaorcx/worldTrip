import {AppProps} from 'next/app'
import { theme } from '../styles/theme'
import { ChakraProvider } from '@chakra-ui/react'

import './../components/SlideContinents/slideContinents.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp