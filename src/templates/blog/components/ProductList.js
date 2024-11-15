import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
  },
});

function ProductList({products}) {
  return (
    <ThemeProvider theme={theme}>
      <h1>ProductList</h1>
      <Grid container spacing={2}   sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}  sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={product.img}
                  alt={product.label}
                />
                <CardContent sx={{ backgroundColor: "white" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.label}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {product.capacity}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ProductList;
