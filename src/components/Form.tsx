import {
  Box,
  Button,
  chakra,
  Container,
  FormControl,
  // FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Textarea,
} from '@chakra-ui/react'

const COLOURS = ['Blue', 'Green', 'Red', 'Black', 'Brown']
const ANIMALS = ['Bear', 'Tiger', 'Snake', 'Donkey']

export default function Form() {
  return (
    <Container maxWidth="container.sm">
      <chakra.form
        __css={{
          '> *': {
            marginBottom: 8,
          },
        }}
      >
        <FormControl>
          <FormLabel as="legend">Email address</FormLabel>
          <Input id="email" type="email" variant="brand" />
          <FormHelperText>Please enter your email address.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel as="legend">Password</FormLabel>
          <Input id="email" type="password" variant="brand" />
          <FormHelperText>Please enter a password.</FormHelperText>
        </FormControl>

        <FormControl as="fieldset">
          <RadioGroup defaultValue="Blue">
            <HStack spacing="24px">
              {COLOURS.map((choice, index) => (
                <Radio key={`${index}-${choice}`} value={choice} colorScheme="green">
                  <Box color="brand.darkGray">{choice}</Box>
                </Radio>
              ))}
            </HStack>
          </RadioGroup>
          <FormHelperText>Please select a colour.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="animal">Country</FormLabel>
          <Select id="animal" placeholder="Select an animal" variant="brand">
            {ANIMALS.map((choice, index) => (
              <option key={`${index}-${choice}`}>{choice}</option>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="animal">Country</FormLabel>
          <Textarea id="tiger-query" placeholder="Tigers want to eat you..." variant="brand"></Textarea>
        </FormControl>

        <Button colorScheme="green" color="brand.darkGray" _hover={{ backgroundColor: '#0da053' }}>
          Submit
        </Button>
      </chakra.form>
    </Container>
  )
}
