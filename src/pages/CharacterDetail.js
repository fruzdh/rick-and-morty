import { gql, useQuery } from "@apollo/client";
import { Box, ButtonGroup, Editable, EditableInput, EditablePreview, Flex, Heading, IconButton, Image, Input, Text, useEditableControls } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Spinner from "../Component/Spinner";
import Error from "../Component/Error";
import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import { useRecoilState } from "recoil";
import { locationCharacterState } from "../recoil/atom";

const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
        character(id: $id) {
            id
            name
            status
            species
            gender
            image
        }
    }
`;

const CustomButton = ({icon, ...props}) => {
    return (
        <IconButton size='sm' icon={icon} bgColor={'#F1E14D'} textColor={'#00ADD2'} _hover={{bgColor: '#FCE736'}} {...props} />
    )
}

const EditableControls = () => {
    const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
    } = useEditableControls()

    return isEditing ? (
        <ButtonGroup justifyContent='center'>
            <CustomButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
            <CustomButton icon={<CloseIcon />} {...getCancelButtonProps()} />
        </ButtonGroup>
    ) : (
        <CustomButton icon={<EditIcon />} {...getEditButtonProps()} />
    )
}

const CharacterDetail = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_CHARACTER, {
        variables: { id },
    });
    const [locations, setLocations] = useRecoilState(locationCharacterState);

    const toggleLocation = (character, locationName) => {
        const hasLocation = locations.some(loc => loc.id === character.id);
        if (hasLocation || locationName) {
            const tempLocations = hasLocation && locationName
                ? locations.map(loc => loc.id === character.id ? {...loc, location: locationName} : loc)
                : hasLocation && !locationName
                ? locations.filter(loc => loc.id !== character.id)
                : [...locations, {...character, location: locationName}];

            setLocations(tempLocations)
            localStorage.setItem('locations', JSON.stringify(tempLocations));
        }
    }

    if (loading) return <Spinner />;
    if (error) return <Error text={error.message} />;

    const { name, image, species, gender, status} = data.character;
    const location = locations.filter(loc => loc.id === id)
    const locationName = location.length > 0 ? location[0].location : ''

    return (
        <Box p={'30px'} bgColor={'#35BACD'} borderRadius={'10px'} textColor={'#FCE736'}>
            <Image src={image} alt={name} h={'300px'} w={'300px'}/>
            <Heading as={'h1'} mt='20px'>{name}</Heading>
            <Box fontSize={'md'} borderWidth={'1px'} borderRadius={'10px'} p={'10px 20px'} borderColor={'#D3F0F5'} mt='10px'>
                <Text>Species: {species}</Text>
                <Text>Gender: {gender}</Text>
                <Text>Status: {status}</Text>
            </Box>
            <Editable fontSize='sm' isPreviewFocusable={false} mt='20px' defaultValue={locationName} onSubmit={(nextValue) => toggleLocation(data.character, nextValue)} >
                <Flex mb='10px' justifyContent={'space-between'}>
                    <Heading as={'h2'} size={'md'}>Location</Heading>
                    <EditableControls />
                </Flex>
                <EditablePreview />
                <Input as={EditableInput} _focus={{borderColor: '#D3F0F5', boxShadow: 'none'}} />
            </Editable>
        </Box>
    );
};

export default CharacterDetail;