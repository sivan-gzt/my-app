import NavBarLink from "@/components/NavBarLink";
import Box from "@/components/ui/Box";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import ROUTES from "@/routes/routesModel";

const NavBar: React.FC = () => {
    return (
        <Box className="flex-auto list-none">
            <NavigationMenu>

                <NavBarLink to={ROUTES.FAV_CARDS} label="Favorite Cards" />
                <NavBarLink to={ROUTES.CREATE_CARD} label="Create Card" />
                <NavBarLink to={ROUTES.MY_CARDS} label="My Cards" />
                <NavBarLink to={ROUTES.ABOUT} label="About" />
                <NavBarLink to={ROUTES.CARDS} label="Cards" />
                {/* Add more NavBarLink components for other routes */}
            </NavigationMenu>

        </Box>

    );
};

export default NavBar;