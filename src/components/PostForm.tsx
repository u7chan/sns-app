import {
  Avatar,
  Box,
  Button,
  HStack,
  Textarea,
  VStack,
  Wrap,
} from '@yamada-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function PostForm() {
  const name = 'John Doe'
  const {
    handleSubmit,
    register,
    formState: { isValid },
  } = useForm<{
    post: string
  }>({ defaultValues: { post: '' } })
  const submitForm: SubmitHandler<{
    post: string
  }> = (value) => {
    alert(value.post)
  }
  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <VStack>
        <HStack alignItems='top'>
          <Wrap gap='md'>
            <Avatar name={name} />
          </Wrap>
          <VStack gap='0'>
            <Textarea {...register('post', { required: true })} />
          </VStack>
        </HStack>
        <Box display='flex' justifyContent='end'>
          <Button
            type='submit'
            w='100'
            colorScheme='primary'
            disabled={!isValid}
          >
            Post
          </Button>
        </Box>
      </VStack>
    </form>
  )
}
