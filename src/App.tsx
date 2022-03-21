import { ChakraProvider } from '@chakra-ui/react'

import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Form />
      <Footer />
    </ChakraProvider>
  )
}

export default App
