// Website header

import { ModeToggle } from "@/components/ui/DarkThemeToggle";
import NavBar from "./NavBar/NavBar";
import Box from "@/components/ui/Box";
import { Input } from "@/components/ui/Input";
import { Link } from "react-router-dom";
import ROUTES from "@/routes/routesModel";
import useUsers from "@/users/hooks/useUsers"
import { useUser } from "@/users/providers/UserProvider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

const Header = () => {

    const userContext = useUser();
    console.log(userContext);
    return (
        <Box className="flex flex-row min-w-full">
            <NavBar />
            <Box className="flex flex-row max-w-64">
                <ModeToggle />
                <Input />

            </Box>
            {!userContext.user &&
                <Box>
                    <Link to={ROUTES.SIGNUP}>Sign up</Link>
                    <Link to={ROUTES.LOGIN}>Login</Link>
                </Box>
            }
            {userContext.user &&
                <Box>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </Box>
            }
        </Box>
    );
};

export default Header;