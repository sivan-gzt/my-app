import {
    createCardData,
    createCardNormalizedData,
} from "../../../cards/models/CreateCardModels";
import { loginData, signupData } from "../../../types/types";

export type formDataType =
    | signupData
    | loginData
    | createCardData
    | createCardNormalizedData;