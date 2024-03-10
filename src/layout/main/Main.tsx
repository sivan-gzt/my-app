import Box from "@/components/ui/Box";
import { CommonProps } from "@/types/types";

const Main: React.FC<CommonProps> = ({ children }) => {
    return (
        <Box className="flex flex-col content-center justify-center align-center min-w-full">
            {children}
        </Box>
    );
}

export default Main;