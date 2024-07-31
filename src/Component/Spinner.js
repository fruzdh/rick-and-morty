import { Box, Spinner as ChakraSpinner } from '@chakra-ui/react'

const Spinner = () => {
    return (
        <Box h={'100%'} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <ChakraSpinner thickness='5px' speed='0.65s' emptyColor='#D3F0F5' color='#35BACD' size='xl'/>
        </Box>
    )
}

export default Spinner