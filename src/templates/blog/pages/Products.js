import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductLines from "../components/ProductLines";
import ProductList from "../components/ProductList";
import Typography from "@mui/material/Typography";
export default function Products() {
  const productsData = {
    "Sua-chua-an": [
      {
        id: 1,
        label: "Sản phẩm 1",
        img: "https://picsum.photos/800/450?random=1",
        capacity: "Dung tích 1",
      },
      {
        id: 2,
        label: "Sản phẩm 2",
        img: "https://picsum.photos/800/450?random=2",
        capacity: "Dung tích 2",
      },
    ],
    "Sua-tuoi-tiet-trung": [
      {
        id: 3,
        label: "Sản phẩm 3",
        img: "https://picsum.photos/800/450?random=3",
        capacity: "Dung tích 3",
      },
      {
        id: 4,
        label: "Sản phẩm 4",
        img: "https://picsum.photos/800/450?random=4",
        capacity: "Dung tích 4",
      },
    ],
    "Sua-tuoi-thanh-trung": [
      {
        id: 5,
        label: "Sản phẩm 5",
        img: "https://picsum.photos/800/450?random=5",
        capacity: "Dung tích 3",
      },
      {
        id: 6,
        label: "Sản phẩm 6",
        img: "https://picsum.photos/800/450?random=6",
        capacity: "Dung tích 4",
      },
    ],
    "Sua-chua-uong": [
      {
        id: 7,
        label: "Sản phẩm 7",
        img: "https://picsum.photos/800/450?random=7",
        capacity: "Dung tích 3",
      },
      {
        id: 8,
        label: "Sản phẩm 8",
        img: "https://picsum.photos/800/450?random=8",
        capacity: "Dung tích 4",
      },
    ],
  };

  const productTitles = {
    "Sua-chua-an": "Sữa chua ăn",
    "Sua-tuoi-tiet-trung": "Sữa tươi tiệt trùng",
    "Sua-tuoi-thanh-trung": "Sữa tươi thanh trùng",
    "Sua-chua-uong": "Sữa chua uống",
  };

  const { name } = useParams();
  const location = useLocation();
  const [selectedProductType, setSelectedProductType] = useState("all");

  useEffect(() => {
    if (name) {
      setSelectedProductType(name);
    } else {
      setSelectedProductType("all");
    }
  }, [location, name]);

  const handleProductLineClick = (route) => {
    setSelectedProductType(route);
  };

  const productsToDisplay =
    selectedProductType === "all"
      ? productsData
      : { [selectedProductType]: productsData[selectedProductType] };

  return (
    <>
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
       Sản phẩm
      </Typography>
      <ProductLines onProductLineClick={handleProductLineClick} />
      <ProductList
        productsData={productsToDisplay}
        productTitles={productTitles}
        groupedProducts={selectedProductType === "all"}
      />
    </>
  );
}
