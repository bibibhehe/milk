import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ProductLines = () => {
  // Danh sách các icon
  const productLines = [
    { id: 1, label: 'Sữa chua ăn', route: 'Sua-chua-an' },
    { id: 2, label: 'Sữa tươi tiệt trùng', route: 'Sua-tuoi-tiet-trung' },
    { id: 3, label: 'Sữa tươi thanh trùng', route: 'Sua-tuoi-thanh-trung' },
    { id: 4, label: 'Sữa chua uống', route: 'Sua-chua-uong' },
  ];

   const formatProductName = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-'); // Chuyển thành chữ thường và thay khoảng trắng bằng dấu gạch nối
  };
 
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      {productLines.map((productLine) => (
        <Link  to={`/products/${formatProductName(productLine.route)}`} key={productLine.id}  style={{ textDecoration: 'none', textAlign: 'center', color: '#007cba' }}>
          <Icon icon="hugeicons:yogurt" width="60" height="60" color="#007cba" />
          <div>{productLine.label}</div>
        </Link>
      ))}
    </div>
  );
};

export default ProductLines;
