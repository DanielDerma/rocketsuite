import { Flex } from '@chakra-ui/react'

import { Profile as UserProfile } from 'types'
import useAuth from 'hooks/useAuth'
import useRefresh from 'hooks/useRefresh'

import RoomsAvailable from './RoomsAvailable'
import Profile from './Profile'
import MainPanel from './MainPanel'

type Props = {
  profile: UserProfile
}

const Dashboard = ({ profile }: Props) => {
  useAuth()
  useRefresh()

  return (
    <>
      <Profile profile={profile} />
      <Flex
        height='100vh'
        direction={{
          base: 'column',
          lg: 'row',
          xl: 'row',
          '2xl': 'row'
        }}
      >
        <Flex
          direction='column'
          gap={0}
          width={{
            base: '100%',
            lg: '70%',
            xl: '70%',
            '2xl': '50%'
          }}
          height='screen'
        >
          <RoomsAvailable />
        </Flex>
        <MainPanel />
      </Flex>
    </>
  )
}

export default Dashboard
