import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import { useField } from 'formik'
import React from 'react'

export default function FormInput({ label, ...props }: any) {
  const [field, meta] = useField(props)

  console.log(...props)

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      <FormLabel as="legend">{label}</FormLabel>
      <Input {...field} />
      <FormHelperText>Please enter your email address.</FormHelperText>
    </FormControl>
  )
}
