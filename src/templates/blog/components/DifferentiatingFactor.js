import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardMedia,
  Grid,
} from "@mui/material";
import DalatMilkImage from "../assets/dalatmilk.png"; // Replace with the actual path to your image
import checkIcon from "../assets/drop.png";
import { useInView } from "react-intersection-observer";

const DifferentiatingFactor = () => {
  const features1 = [
    "Hoàn toàn sữa tươi nguyên chất từ trang trại trên cao nguyên lâm đồng, khí hậu ôn đới quanh năm",
    "Quy trình sản xuất khép kín từ đồng cỏ đến ly sữa sạch",
  ];
  const features2 = [
    "Quản lý chất lượng từ khâu nuôi trồng đến khâu sản xuất và phân phối",
    "Không chất bảo quản",
    "Dịch vụ cung ứng tối ưu - 24h sản phẩm từ nhà máy đến người tiêu dùng",
  ];
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the component is in view
    threshold: 0.01, // Trigger when 50% of the component is in view
  });
  return (
    <Container maxWidth={false} style={{ marginTop: "2rem" }}>
      <Typography
        variant="h2"
        align="center"
        color="#0056B8"
        gutterBottom
        sx={{ fontSize: "3rem", fontWeight: "bold", paddingBottom: "25px" }}
      >
        <span style={{ display: "block" }}>Yếu tố khác biệt của</span>
        <span style={{ display: "block" }}>DALATMILK</span>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <List>
            {features1.map((feature, index) => (
              <ListItem
                key={index}
                ref={index === 0 ? ref : null}
                sx={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(-200px)",
                  transition: "opacity 2s, transform 2s",
                }}
              >
                <ListItemIcon>
                  <img
                    src={checkIcon} // Đường dẫn ảnh
                    alt="Icon"
                    style={{ width: "24px", height: "24px" }} // Điều chỉnh kích thước ảnh
                  />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card ref={ref}
              sx={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(200px)",
                transition: "opacity 2s, transform 2s",
              }}>
            <CardMedia
              component="img"
              alt="Dalat Milk"
              style={{ width: "100%", height: "auto" }}
              image={DalatMilkImage}
              title="Dalat Milk"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <List>
            {features2.map((feature, index) => (
              <ListItem
                key={index}
                ref={index === 0 ? ref : null}
                sx={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(-200px)",
                  transition: "opacity 2s, transform 2s",
                }}
              >
                <ListItemIcon>
                  <img
                    src={checkIcon} // Đường dẫn ảnh
                    alt="Icon"
                    style={{ width: "24px", height: "24px" }} // Điều chỉnh kích thước ảnh
                  />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DifferentiatingFactor;
