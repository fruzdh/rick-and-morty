import { Box, Link, SimpleGrid, Text } from "@chakra-ui/react"
import BoxButton from "../Component/BoxButton"
import { useRecoilValue } from "recoil"
import { locationCharacterState } from "../recoil/atom"
import { Link as RouterLink } from 'react-router-dom'

const CharacterLocation = () => {
    const locations = useRecoilValue(locationCharacterState);

    return locations.length > 0 ? (
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4, lg: 6 }} spacing={10} pb='10px'>
            {[...new Set(locations.map(loc => loc.location))].map(loc => (
                <Link key={loc} as={RouterLink} to={`/location/${loc}`} _hover={{textDecoration: 'none'}} >
                    <BoxButton text={loc} />
                </Link>
            ))}
        </SimpleGrid>
    ) : (
        <Box h='100%' w='100%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={'xx-large'} textColor={'#35BACD'}>There is no data</Text>
        </Box>
    )
}

export default CharacterLocation