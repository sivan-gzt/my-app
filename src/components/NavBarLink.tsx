import React from "react";
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from "react-router-dom";
import { NavigationMenuTrigger, NavigationMenuItem } from "./ui/NavigationMenu";

interface NavBarLinkProps extends ReactRouterLinkProps {
    label: string;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ label, to, ...rest }) => {
    return (

        <NavigationMenuItem>
            <NavigationMenuTrigger>
                <ReactRouterLink to={to} {...rest}>{label}</ReactRouterLink>
            </NavigationMenuTrigger>
        </NavigationMenuItem>
    );
};

export default NavBarLink;
