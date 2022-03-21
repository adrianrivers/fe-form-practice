import { Box, Container, Link } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box as="footer" paddingY={8}>
      <Container maxWidth="container.sm">
        <Link href="/" target="_blank">
          Link to repository
        </Link>
      </Container>
    </Box>
  )
}
