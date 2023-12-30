import { Center, Container, VStack } from '@yamada-ui/react'
import Post from '../components/Post'
import PostForm from '../components/PostForm'

export default function Timeline() {
  return (
    <Container>
      <Center>
        <VStack sx={{ width: '100%' }}>
          <PostForm />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </VStack>
      </Center>
    </Container>
  )
}
