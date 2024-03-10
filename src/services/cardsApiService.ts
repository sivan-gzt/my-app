import {
    getFromAPI,
    patchToAPI,
    postToAPI,
    putToAPI,
} from "./apiService";
import { createCardNormalizedData } from "../models/CreateCardModels";
import { IBusiness } from "../models/BusinessModel";

export const getCards = async () => {
    const cards = (await getFromAPI("cards")) as IBusiness[];
    return cards;
};

export const getCardByID = async (id: string) => {
    const card = (await getFromAPI("cards", id)) as IBusiness[];
    return [card];
};

export const getMyCards = () => getFromAPI("cards", "my-cards");

export const deleteCard = (id: string) => { };

export const likeCard = async (cardID: string, token: string) => {
    patchToAPI("cards", cardID, token);
};

export const createCard = async (
    data: createCardNormalizedData,
    token: string,
) => {
    return postToAPI("cards", data, token);
};

export const updateCard = async (
    normalizedCard: createCardNormalizedData,
    cardID: string,
    token: string,
) => {
    return putToAPI("cards", cardID, normalizedCard, token);
};