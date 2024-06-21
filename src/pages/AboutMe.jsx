import { Container, Tooltip, Typography, Grid } from "@mui/material";
import { COLOR_3 } from "../assets/color";
import { motion } from "framer-motion";
import { LOGO_SKILLS } from "../data/commons";
import Reveal from "../components/Reveal";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <Reveal>
      <Container id={"about"}>
        <Typography
          my={5}
          color={COLOR_3}
          variant="h3"
          fontWeight={"BOLD"}
          textAlign={"center"}
        >
          {t("about_me.section_title")}
        </Typography>
        <Typography variant="body2" fontSize={29}>
          {t("about_me.paragraph1")}
          <strong style={{ color: COLOR_3 }}>{t("about_me.skills")}</strong>
          {t("about_me.paragraph_continue")}
        </Typography>
        <Typography pt={4} variant="body2" fontSize={29}>
          {t("about_me.paragraph2")}
        </Typography>
        <Typography
          py={10}
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          color={COLOR_3}
        >
          {t("about_me.skillset_title")}
        </Typography>
        <Grid container mb={4} spacing={2} justifyContent="center">
          {LOGO_SKILLS.map((logo) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={logo.alt}>
              <Tooltip
                title={<Typography fontSize="1.5em">{logo.tooltip}</Typography>}
              >
                <motion.div
                  style={{ width: "100%", textAlign: "center" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={logo.url} alt={logo.alt} style={{ width: "50%" }} />
                </motion.div>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Reveal>
  );
};

export default AboutMe;
