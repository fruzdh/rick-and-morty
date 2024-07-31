import { Alert, AlertIcon, Box, Text } from '@chakra-ui/react'

const Error = ({text}) => {
    return (
        <Box h={'100%'} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Alert status='error'>
                <AlertIcon />
                <Text>Error: {text}</Text>
            </Alert>            
        </Box>
    )
}

export default Error