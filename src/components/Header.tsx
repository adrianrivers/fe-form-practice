import { Box, Container, Heading } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box as="header" paddingY={16}>
      <Container maxWidth="container.sm">
        <Heading>Adrian{`'`}s Frontend Form Problem Solution</Heading>
      </Container>
    </Box>
  )
}
