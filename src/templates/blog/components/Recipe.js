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
    image: "/Blueberry-Cookie-Iced-Blended-300x300-1.jpg",
    title: "Khám phá thức uống Blueberry Cookie Iced...",
    alt: "Blueberry Cookie Iced",
  },
  {
    image: "/Blueberry-Cookie-Iced-Blended-300x300-1.jpg",
    title: "Công thức Khúc bạch sữa chua giải nhiệt cho mùa hè",
    alt: "Khúc Bạch Sữa Chua",
  },
  {
    image: "/Blueberry-Cookie-Iced-Blended-300x300-1.jpg",
    title: "Đổi vị với Yogurt Chocolate Cốt Dừa mát lạnh",
    alt: "Yogurt Chocolate Coconut",
  },
  {
    image: "/Blueberry-Cookie-Iced-Blended-300x300-1.jpg",
    title: "Công thức Blueberry Yogurt Shake độc lạ ngon như tiệ...",
    alt: "Blueberry Yogurt Shake",
  },
];

const Recipe = () => {
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
        Công thức món ăn
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
                "&:hover": {
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
                <CardContent sx={{ backgroundColor: "white", padding: 1, height:"100px" }}>
                  <Typography
                    variant="body2"
                    color="#0056B8"
                    fontSize="22px"
                    fontWeight={500}
                  >
                    {recipe.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Recipe;
