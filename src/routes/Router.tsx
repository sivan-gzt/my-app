import { Route, Routes, createBrowserRouter } from "react-router-dom";
import ROUTES from './routesModel';
import FavoriteCardsPage from "@/pages/Cards/FavoriteCardsPage/FavoriteCardsPage";
import CreateCardPage from "@/pages/Cards/CreateCardPage/CreateCardPage";
import MyCardsPage from "@/pages/Cards/MyCardsPage/MyCardsPage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import CardsPage from "@/pages/Cards/CardsPage/CardsPage";
import BusinessViewPage from "@/pages/BusinessViewPage/BusinessViewPage";
import EditCardPage from "@/pages/Cards/EditCardPage/EditCardPage";
import SignupPage from "@/pages/User/SignupPage/SignupPage";
import LoginPage from "@/pages/User/LoginPage/LoginPage";
import SandboxPage from "@/pages/SandboxPage/SandboxPage";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.FAV_CARDS} element={<FavoriteCardsPage />}></Route>
            <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />}></Route>
            <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />}></Route>
            <Route path={ROUTES.ABOUT} element={<AboutPage />}></Route>
            <Route path={ROUTES.CARDS} element={<CardsPage />}></Route>
            <Route path={`${ROUTES.CARD_DETAILS}/:id`} element={<BusinessViewPage />}></Route>
            <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />}></Route>
            <Route path={ROUTES.SIGNUP} element={<SignupPage />}></Route>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.SANDBOX} element={<SandboxPage />} />
            <Route path={"/"} element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    );
};

export default Router;