import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";

const recipes = [
  {
    image: "/BMartCongHoa.png",
    alt: "Blueberry Cookie Iced",
  },
  {
    image: "/BMartCongHoa.png",
    alt: "Khúc Bạch Sữa Chua",
  },
  {
    image: "/BMartCongHoa.png",
    alt: "Yogurt Chocolate Coconut",
  },
  {
    image: "/BMartCongHoa.png",
    alt: "Blueberry Yogurt Shake",
  },
];

const Partners = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontFamily: "'SFUFutura', sans-serif",
          position: "relative",
          fontWeight: "bold",
          fontSize: "38px",
          color: "#0056B8",
        }}
      >
        Đối tác của chúng tôi
      </Typography>
      <Grid container spacing={4} sx={{ margin: 0 }}>
        {recipes.map((recipe, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ padding: 0 }}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                padding: 0,
                transition: "filter 0.3s ease-in-out",
                "&:hover": {
                  filter: "brightness(0.9)", // Darkens the card on hover
                  "& .MuiTypography-root": {
                    color: "green", // Màu chữ xanh lá cây khi hover toàn bộ thẻ Card
                  },
                },
              }}
            >
              <CardActionArea sx={{ flex: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ height: "250", objectFit: "cover" }}
                  image={recipe.image}
                  alt={recipe.alt}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Partners;
