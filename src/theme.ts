import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  global: {
    html: {
      overflow: 'scroll',
      overflowX: 'hidden',
    },
    body: {
      position: 'relative',
      bg: 'white',
      overflowX: 'hidden',
      width: '100vw',
      WebkitFontSmoothing: 'auto',
    },
  },
  colors: {
    white: '#fff',
    brand: {
      green: '#0dad59',
      darkGray: '#2f2f2f',
    },
  },
})

export default theme
