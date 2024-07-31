import { Box } from "@chakra-ui/react"
import BoxButton from "../Component/BoxButton"
import { useState } from "react"
import CharacterList from "./CharacterList";
import CharacterLocation from "./CharacterLocation";

const Home = () => {
    const [page, setPage] = useState(localStorage.getItem('page') || 'list');
    const togglePage = (nextPage) => {
        setPage(nextPage);
        localStorage.setItem('page', nextPage);
    }

    return (
        <Box w='100%' display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'10px'}>
            <Box display={'flex'} flexWrap={'wrap'} gap={'50px'}>
                <BoxButton text={'List'} active={page === 'list'} h={'50px'} onClick={() => togglePage('list')} />
                <BoxButton text={'Location'} active={page === 'location'} h={'50px'} onClick={() => togglePage('location')} />
            </Box>
            {page === 'list' ? <CharacterList /> : <CharacterLocation />}
        </Box>
    )
}

export default Home