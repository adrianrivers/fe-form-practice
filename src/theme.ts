import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      html: {
        height: '100%',
      },
      label: {
        color: 'white',
      },
    },
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
    overflowX: 'hidden',
  },
  colors: {
    white: '#fff',
    brand: {
      green: '#0dad59',
      darkGray: '#2f2f2f',
    },
  },
  components: {
    Link: {
      baseStyle: {
        color: 'brand.darkGray',
        textDecoration: 'underline',
        textDecorationColor: 'brand.green',
        '&:hover': {
          color: 'brand.green',
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'brand.darkGray',
      },
    },
    Heading: {
      baseStyle: {
        color: 'brand.darkGray',
      },
    },
    Select: {
      variants: {
        brand: {
          field: {
            borderColor: 'brand.green',
            borderWidth: '1px',
          },
        },
      },
    },
    Input: {
      variants: {
        brand: {
          field: {
            borderColor: 'brand.green',
            borderWidth: '1px',
          },
        },
      },
    },
    Textarea: {
      variants: {
        brand: {
          border: '1px solid',
          borderColor: 'brand.green',
        },
      },
    },
  },
})

export default theme
