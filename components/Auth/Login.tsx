import { Box, Button, Center, Flex, Heading, Stack, Text } from '@chakra-ui/react'

import { DiscordIc, GoogleIc } from 'components/Icons'
import Image from 'next/image'
import { signInWithProvider } from 'services/auth'

const LoginWithProvider: React.FC = () => {
  return (
    <Flex minH='100vh' align='center' justify='center'>
      <Stack spacing={4} w='full' maxW='md' boxShadow='lg' p={6} bg='gray.900'>
        <Heading
          lineHeight={1.1}
          fontSize={{ base: '2xl', md: '3xl' }}
          mx='auto'
          color='white'
          fontWeight='semibold'
        >
          Welcome to{' '}
          <Text as='span' color='red.600'>
            Rocket Suite
          </Text>
        </Heading>
        <Box height={140} position='relative'>
          <Image src='/static/logo.png' alt='logo' width={200} objectFit='contain' layout='fill' />
        </Box>

        <Button
          w='full'
          bg='gray.700'
          leftIcon={<GoogleIc />}
          _hover={{ bg: 'gray.700' }}
          onClick={() => signInWithProvider('google')}
        >
          <Center>
            <Text>Log in with Google</Text>
          </Center>
        </Button>
      </Stack>
    </Flex>
  )
}

export default LoginWithProvider
