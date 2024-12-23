// News.js
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";

const articles = [
  {
    title:
      "DALATMILK BARISTA CHAMPIONSHIP 2023 – CUỘC THI PHA CHẾ CHUYÊN NGHIỆP",
    image: "Thumbnail-1.png",
    description: "April 18, 2023",
  },
  {
    title:
      "Hội đồng bảo hộ sở hữu trí tuệ quốc tế chất lượng quốc tế về việc sử dụng Dalatmilk",
    image: "Thumbnail-1.png",
    description: "April 18, 2023",
  },
  {
    title:
      "Dalatmilk đồng hành cùng Twitter Beans hợp tác xây dựng chuỗi cà phê",
    image: "Thumbnail-1.png",
    description: "April 18, 2023",
  },
  {
    title: "Dalatmilk chính thức thay đổi thiết kế bao bì",
    image: "Thumbnail-1.png",
    description: "April 18, 2023",
  },
  {
    title: "Dalatmilk - Vĩnh hạnh là hộp sữa tươi mới toanh...",
    image: "Thumbnail-1.png",
    description: "April 18, 2023",
  },
  {
    title: "Lượng sản xuất sữa tăng cao nhờ chất lượng cao",
    image: "Thumbnail-1.png",
    description: "April 18, 2023",
  },
];

const News = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the component is in view
    threshold: 0.3, // Trigger when 50% of the component is in view
  });
  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        component="h1"
        sx={{
          fontFamily: "'SFUFutura', sans-serif",
          position: "relative",
          fontWeight: "bold",
          fontSize: "38px",
          color: "#0056B8",
        }}
      >
        Tin tức
      </Typography>
      <Grid container spacing={2}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              ref={index === 0 ? ref : null}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                padding: 0,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(100px)",
                transition: "opacity 1s, transform 1s", // Add transition for the slide-in effect
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
                  height="370"
                  image={article.image}
                  alt={article.title}
                />
                <CardContent
                  sx={{ backgroundColor: "white", padding: 1, height: "124px" }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    variant="body2"
                    color="#0056B8"
                    fontSize="22px"
                  >
                    {article.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News;
