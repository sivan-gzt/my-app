// Website header

import { ModeToggle } from "@/components/ui/DarkThemeToggle";
import NavBar from "./NavBar/NavBar";
import Box from "@/components/Box";
import { Input } from "@/components/ui/Input";
import { Link } from "react-router-dom";
import ROUTES from "@/routes/routesModel";
import { useUser } from "@/providers/UserProvider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

const Header = () => {

    const userContext = useUser();

    return (
        <Box className="flex flex-row min-w-full">
            <NavBar />
            <Box className="flex flex-row max-w-64">
                <ModeToggle />
                <Input />

            </Box>
            {/* 
                IF (loggedIn) render(Avatar)
                ELSE render(SignupLoginBox)
             */}

            {userContext.user &&
                <Box>
                    <Avatar>
                        {/* <AvatarImage src={userContext.user.image.url} /> */}
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Box>
            }

            {!userContext.user &&
                <Box>
                    <Link to={ROUTES.SIGNUP}>Sign up</Link>
                    <Link to={ROUTES.LOGIN}>Login</Link>
                </Box>
            }

        </Box>
    );
};

export default Header;