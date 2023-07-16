import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import { section10Content } from "../utils/content";
import "../App.css";

const { SOCIALS } = section10Content;

const Section6 = () => {
  return (
    <div className="section6">
    <Container maxWidth="md" sx={{}}>
      <Title
        variant={{ xs: "h3", md: "h2" }}
        sx={{ textAlign: "center", mb: { xs: 5 } }}
      >
        Join us
      </Title>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ px: { xs: 0, md: 5, lg: 8 } }}
      >
        {SOCIALS.map(({ name, image }) => (
          <Grid
            item
            xs={6}
            md={3}
            key={name}
            sx={(theme) => ({
              cursor: "pointer",
              "& :hover": {
                "& img": {
                  transform: "scale(1.2)",
                  transition: "transform .3s",
                },
                "& p": { color: "text.primary", transition: "all .3s ease-in" },
              },
            })}
          >
            <Stack alignItems="center">
              <img
                src={image}
                style={{ width: "120px", objectFIt: "contain" }}
              />

              <Typography variant="body2" color="text.secondary">
                {name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
};

export default Section6;