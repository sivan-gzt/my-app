import Box from "@/components/Box";
import { CommonProps } from "@/models/types";

const Main: React.FC<CommonProps> = ({ children }) => {
    return (
        <Box className="flex flex-col w-dvw min-w-min">
            {children}
        </Box>
    );
}

export default Main;