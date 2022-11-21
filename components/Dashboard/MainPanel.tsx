import { Flex, useColorModeValue } from '@chakra-ui/react'

import JoinRoom from '../Forms/JoinRoom'

import PanelActivities from './PanelActivities'

const MainPanel = () => {
  const bg = useColorModeValue('blue.400', '#1a1d21')
  return (
    <>
      <Flex gap={0} bg={bg} p={6} direction='column' width='100%'>
        <JoinRoom />
        <PanelActivities />
      </Flex>
    </>
  )
}

export default MainPanel
