import {
  Box,
  Button,
  chakra,
  Checkbox,
  CheckboxGroup,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from '@chakra-ui/react'
import { FormikHelpers, useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const COLOURS = ['Blue', 'Green', 'Red', 'Black', 'Brown']
const ANIMALS = ['Bear', 'Tiger', 'Snake', 'Donkey']

interface FormValues {
  email: string
  password: string
  colour: string
  animal: string[]
  tigerText: string
}

const INITIAL_VALUES: FormValues = {
  email: '',
  password: '',
  colour: '',
  animal: [],
  tigerText: '',
}

const VALIDATION_SCHEMA = Yup.object({
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: Yup.string()
    .min(8, 'Password is too short - it should contain at least 8 letters')
    .required('No password provided'),
  colour: Yup.string().required('You must select a colour'),
  animal: Yup.array().test({
    name: 'animal_test',
    exclusive: true,
    message: 'You must select at least one animal',
    test: (value = ['']) => value.length > 0,
  }),
  tigerText: Yup.string(),
})

export default function Form() {
  const handleFormSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    await new Promise((r) => setTimeout(r, 500))
    const formattedValues = JSON.stringify(values, null, 2)
    actions.setSubmitting(false)
    alert(`Form submitted with values: ${formattedValues}`)
    window.location.reload()
  }

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: handleFormSubmit,
  })

  return (
    <Container maxWidth="container.sm">
      <chakra.form __css={{ '> *': { marginBottom: 12 } }} onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={Boolean(formik.errors.email)}>
          <FormLabel as="legend" htmlFor="email">
            Email:
          </FormLabel>
          <Input
            variant="brand"
            type="email"
            name="email"
            placeholder="joebloggs@email.com"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!formik.errors.password && !!formik.touched.password}>
          <FormLabel as="legend" htmlFor="password">
            Password:
          </FormLabel>
          <Input
            variant="brand"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>

        <FormControl as="fieldset" id="colour" isInvalid={!!formik.errors.colour}>
          <FormLabel as="legend" htmlFor="colour">
            Choose a favourite colour:
          </FormLabel>
          <RadioGroup name="colour">
            <HStack spacing="24px">
              {COLOURS.map((choice, index) => (
                <Radio key={`${index}-${choice}`} colorScheme="green" value={choice} onChange={formik.handleChange}>
                  <Box color="brand.darkGray">{choice}</Box>
                </Radio>
              ))}
            </HStack>
          </RadioGroup>
          <FormErrorMessage>{formik.errors.colour}</FormErrorMessage>
        </FormControl>

        <FormControl as="fieldset" id="animal" isInvalid={!!formik.errors.animal && !!formik.errors.animal}>
          <FormLabel as="legend" htmlFor="animal">
            Select one or more favourite animals:
          </FormLabel>
          <CheckboxGroup>
            <HStack spacing="24px">
              {ANIMALS.map((choice, index) => (
                <Checkbox
                  key={`${index}-${choice}`}
                  color="brand.darkGray"
                  name="animal"
                  value={choice}
                  onChange={formik.handleChange}
                  colorScheme="green"
                  id={`${index}-${choice}`}
                >
                  {choice}
                </Checkbox>
              ))}
            </HStack>
          </CheckboxGroup>
          <FormErrorMessage>{formik.errors.animal}</FormErrorMessage>
        </FormControl>

        {formik.values.animal.includes('Tiger') && (
          <FormControl>
            <FormLabel as="legend" htmlFor="tigerText">
              If you want, please tell us a story about a tiger:
            </FormLabel>
            <Textarea
              id="tigerText"
              placeholder="Once a 🐯 tried to eat me..."
              variant="brand"
              height="150px"
              onChange={formik.handleChange}
              value={formik.values.tigerText}
            />
          </FormControl>
        )}

        <Button colorScheme="green" color="brand.darkGray" _hover={{ backgroundColor: '#0da053' }} type="submit">
          Submit
        </Button>
      </chakra.form>
    </Container>
  )
}
