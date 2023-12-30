import { Avatar, Card, HStack, VStack, Wrap, Text } from '@yamada-ui/react'

export default function Post() {
  const id = 'john_doe'
  const name = 'John Doe'
  const text =
    'この文章はダミーです。\n文字の大きさ、量、字間、行間等を確認するために入れています。\nこの文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。'
  const createdAt = new Date()
  return (
    <Card sx={{ p: 4 }}>
      <HStack alignItems='top'>
        <Wrap gap='md'>
          <Avatar name={name} />
        </Wrap>
        <VStack gap='0'>
          <HStack>
            <Text fontWeight='bold'>{name}</Text>
            <Text fontSize='sm' color='gray.500'>
              @{id}
            </Text>
          </HStack>
          <Text whiteSpace='pre-wrap'>{text}</Text>
          <Text fontSize='sm' color='gray.500' textAlign='end'>
            {createdAt.toLocaleString()}
          </Text>
        </VStack>
      </HStack>
    </Card>
  )
}
