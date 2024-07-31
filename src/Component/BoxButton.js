import { Box, Text } from "@chakra-ui/react";

const BoxButton = ({text, active, ...props}) => {
    return (
        <Box h={'150px'} w={'150px'} display={'flex'} justifyContent={'center'} alignItems={'center'} 
            bgColor={'#35BACD'} borderRadius={'30px'} {...props} borderWidth={active ? '5px' : 'none'}
            borderColor={active ? '#D3F0F5' : 'none'} cursor={'pointer'}
        >
            <Text textTransform={'uppercase'} textColor={active ? '#FCE736' : '#FCE736'} fontSize={'x-large'} fontWeight={'bold'}>{text}</Text>
        </Box>
    )
}

export default BoxButton