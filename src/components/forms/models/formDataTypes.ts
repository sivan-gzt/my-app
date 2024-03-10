import {
    createCardData,
    createCardNormalizedData,
} from "../../../models/CreateCardModels";
import { loginData, signupData } from "../../../models/types";

export type formDataType =
    | signupData
    | loginData
    | createCardData
    | createCardNormalizedData;