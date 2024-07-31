import { Box, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom'

const CharacterBox = ({character}) => {
    const { id, image, name } = character;
    
    return (
        <Box borderRadius={'20px'} bgColor={'#35BACD'} pb='3'>
            <Link as={RouterLink} to={`/character/${id}`} _hover={{textDecoration: 'none'}}>
                <Image borderRadius={'20px'} src={image} alt={name} />
                <Text textAlign='center' mt={3} fontSize={'md'} textColor={'#FCE736'}>{name}</Text>
            </Link>
        </Box>
    )
}

export default CharacterBox