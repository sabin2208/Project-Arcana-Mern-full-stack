import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Anunt reclame
        </Typography>
        <Typography color={medium}>!</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Arcane Projects</Typography>
        <Typography color={medium}>www.instagram.com/cdj_sabin</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Alaturi de Ilie Sabin-Andrei de la Arcane Projects lansam in premiera Project Arcana, o retea noua de socializare in continua dezvoltare
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
