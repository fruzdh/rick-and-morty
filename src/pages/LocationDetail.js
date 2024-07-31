import { SimpleGrid } from "@chakra-ui/react"
import CharacterBox from "../Component/CharacterBox"
import { useParams } from "react-router-dom";
import { locationCharacterState } from "../recoil/atom";
import { useRecoilValue } from "recoil";

const LocationDetail = () => {
    const { name } = useParams();
    const locations = useRecoilValue(locationCharacterState);
    
    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10} pb='10px'>
            {locations.filter(loc => loc.location === name).map(character => (
                <CharacterBox key={character.id} character={character} />
            ))}
        </SimpleGrid>
    )
}

export default LocationDetail