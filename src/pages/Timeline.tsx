import { Center, Container, VStack } from '@yamada-ui/react'
import Post from '../components/Post'

export default function Timeline() {
  return (
    <Container>
      <Center>
        <VStack sx={{ width: '100%' }}>
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
