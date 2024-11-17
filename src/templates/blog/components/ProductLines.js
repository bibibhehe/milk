import React from 'react';
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { styled } from '@mui/material/styles';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  textAlign: 'center',
  color: '#007cba',
  transition: 'color 0.3s',
  '&:hover': {
    color: 'green',
    '& .icon': {
      color: 'green',
    },
  },
});

const StyledIcon = styled(Icon)({
  transition: 'color 0.3s',
  color: '#007cba',
});

const ProductLines = ({ onProductLineClick }) => {
  // Danh sách các icon
  const productLines = [
    { id: 1, label: "Sữa chua ăn", route: "Sua-chua-an" },
    { id: 2, label: "Sữa tươi tiệt trùng", route: "Sua-tuoi-tiet-trung" },
    { id: 3, label: "Sữa tươi thanh trùng", route: "Sua-tuoi-thanh-trung" },
    { id: 4, label: "Sữa chua uống", route: "Sua-chua-uong" },
  ];

  const formatProductName = (name) => {
    return name.replace(/\s+/g, "-"); // Chuyển thành chữ thường và thay khoảng trắng bằng dấu gạch nối
  };

  return (
    <Container>
      {productLines.map((productLine) => (
        <StyledLink
          to={`/products/${formatProductName(productLine.route)}`}
          key={productLine.id}
          onClick={() => onProductLineClick(productLine.route)}
        >
          <StyledIcon
            icon="hugeicons:yogurt"
            width="60"
            height="60"
            className="icon"
          />
          <div>{productLine.label}</div>
        </StyledLink>
      ))}
    </Container>
  );
};

export default ProductLines;
