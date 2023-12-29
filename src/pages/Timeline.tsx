import {
  Avatar,
  Card,
  Center,
  Container,
  HStack,
  VStack,
  Wrap,
  Text,
} from '@yamada-ui/react'

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

function Post() {
  const name = 'John Doe'
  const text =
    'この文章はダミーです。\n文字の大きさ、量、字間、行間等を確認するために入れています。\nこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。'
  return (
    <Card sx={{ p: 4 }}>
      <HStack alignItems='top'>
        <Wrap gap='md'>
          <Avatar name={name} />
        </Wrap>
        <VStack gap='0'>
          <Text fontWeight='bold'>{name}</Text>
          <Text whiteSpace='pre-wrap'>{text}</Text>
        </VStack>
      </HStack>
    </Card>
  )
}
