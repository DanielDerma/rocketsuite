import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor
} from '@chakra-ui/react'

import Image from 'next/image'

import { Profile } from 'types'
import { logout } from 'services/auth'
import { LogoutIc } from 'components/Icons'

type Props = {
  profile: Profile
}

const Profile = ({ profile }: Props) => {
  const { full_name, email, avatar_url } = profile
  const bg = useColorModeValue('blue.400', '#121016')

  return (
    <Box w='screen' bg={bg} p={2}>
      <Flex direction='row' w='100%' gap={4} justifyContent='space-between'>
        <Box height={39} width={40} position='relative'>
          <Image src='/static/logo.png' alt='logo' objectFit='contain' layout='fill' />
        </Box>
        <Popover>
          <PopoverTrigger>
            <button>
              <Avatar size='md' name={full_name} src={avatar_url} marginRight={2} />
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <Flex
              direction={{
                base: 'row',
                md: 'row'
              }}
              alignItems='center'
              gap={4}
            >
              <Flex
                direction='column'
                gap={2}
                alignItems={{
                  base: 'center',
                  md: 'flex-start'
                }}
              >
                <Text fontSize='md' color='white' fontWeight='bold' isTruncated>
                  {full_name}
                </Text>
                <Text fontSize='md' color='white' fontWeight='bold' isTruncated>
                  {email}
                </Text>
              </Flex>
            </Flex>
            <Button
              variant='solid'
              fontWeight='semibold'
              bg='red.600'
              rightIcon={<LogoutIc />}
              _hover={{ bg: 'red.500' }}
              onClick={() => logout()}
            />
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  )
}

export default Profile
