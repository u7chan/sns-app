import {
  Container,
  Center,
  VStack,
  Spacer,
  Heading,
  Card,
  FormControl,
  Input,
  Button,
} from '@yamada-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useSignIn from '../hooks/useSignIn'
import { SignInForm } from '../types'

export default function SignIn() {
  const navigate = useNavigate()
  const signIn = useSignIn()
  const { handleSubmit, register } = useForm<SignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const submitForm: SubmitHandler<SignInForm> = (value) => {
    signIn(value).then(() => {
      navigate('/')
    })
  }
  return (
    <Container>
      <Center>
        <VStack sx={{ w: 500 }}>
          <Heading>闇SNS</Heading>
          <Card sx={{ padding: 8 }}>
            <form onSubmit={handleSubmit(submitForm)}>
              <VStack>
                <FormControl label='Email'>
                  <Input type='email' {...register('email')} />
                </FormControl>
                <FormControl label='Password'>
                  <Input type='password' {...register('password')} />
                </FormControl>
                <Spacer />
                <Button type='submit'>Login</Button>
              </VStack>
            </form>
          </Card>
        </VStack>
      </Center>
    </Container>
  )
}
