import { gql, useQuery } from "@apollo/client"
import { SimpleGrid } from "@chakra-ui/react";
import Spinner from "../Component/Spinner";
import Error from "../Component/Error";
import CharacterBox from "../Component/CharacterBox";

const GET_CHARACTERS = gql`
    query GetCharacters($page: Int!) {
        characters(page: $page) {
            results {
                id
                name
                image
            }
            info {
                next
            }
        }
    }
`;

const CharacterList = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
        variables: { page: 1 }
    });

    if (loading) return <Spinner />;
    if (error) return <Error text={error.message} />;

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10} pb='10px'>
            {data.characters.results.map(character => (
                <CharacterBox key={character.id} character={character} />
            ))}
        </SimpleGrid>
    )
}

export default CharacterList;