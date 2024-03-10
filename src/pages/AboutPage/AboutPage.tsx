import Box from "@/components/ui/Box";
import React from "react";
import TypographyH1 from "../../components/ui/Typography/TypographyH1";
import TypographyH2 from "@/components/ui/Typography/TypographyH2";
import TypographyP from "@/components/ui/Typography/TypographyP";

const AboutPage: React.FC = () => {
    return (
        <Box>
            <TypographyH1>About Us</TypographyH1>
            <TypographyH2>CardsBoostX</TypographyH2>
            <TypographyP>Welcome to CardBoostX, your go-to platform for boosting your business's online presence through beautifully designed cards. At CardBoostX, we believe in the power of effective digital marketing tools to drive growth and success for businesses of all sizes. Our mission is to provide business owners with a user-friendly platform where they can easily create, customize, and manage their digital cards to showcase their products and services to the world. With a focus on innovation, creativity, and customer satisfaction, we're dedicated to helping businesses thrive in today's competitive market. Join us on our journey to elevate your business to new heights with CardBoostX!</TypographyP>
        </Box>
    )
}

export default AboutPage;

