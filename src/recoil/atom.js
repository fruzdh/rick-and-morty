import { atom } from "recoil";

export const selectedCharacterIdState = atom({
    key: 'selectedCharacterIdState',
    default: null,
});

export const locationCharacterState = atom({
    key: 'locationCharacterState',
    default: JSON.parse(localStorage.getItem('locations')) || [],
});