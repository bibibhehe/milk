import React, { useState } from 'react';
import ProductLines from "../components/ProductLines";
import ProductList from "../components/ProductList";

export default function Products() {
  const productsData = {
    'Sua-chua-an': [
      { id: 1, label: 'Sản phẩm 1', img: 'https://picsum.photos/800/450?random=1', capacity: 'Dung tích 1' },
      { id: 2, label: 'Sản phẩm 2', img: 'https://picsum.photos/800/450?random=2', capacity: 'Dung tích 2' },
      // Thêm các sản phẩm khác...
    ],
    'Sua-tuoi-tiet-trung': [
      { id: 3, label: 'Sản phẩm 3', img: 'https://picsum.photos/800/450?random=3', capacity: 'Dung tích 3' },
      { id: 4, label: 'Sản phẩm 4', img: 'https://picsum.photos/800/450?random=4', capacity: 'Dung tích 4' },
      // Thêm các sản phẩm khác...
    ],
    'Sua-tuoi-thanh-trung': [
      { id: 5, label: 'Sản phẩm 5', img: 'https://picsum.photos/800/450?random=5', capacity: 'Dung tích 3' },
      { id: 6, label: 'Sản phẩm 6', img: 'https://picsum.photos/800/450?random=6', capacity: 'Dung tích 4' },
      // Thêm các sản phẩm khác...
    ],
    'Sua-chua-uong': [
      { id: 7, label: 'Sản phẩm 7', img: 'https://picsum.photos/800/450?random=7', capacity: 'Dung tích 3' },
      { id: 8, label: 'Sản phẩm 8', img: 'https://picsum.photos/800/450?random=8', capacity: 'Dung tích 4' },
      // Thêm các sản phẩm khác...
    ],
    // Thêm các loại sản phẩm khác...
  };

  const [selectedProductType, setSelectedProductType] = useState('Sua-chua-an');

  const handleProductLineClick = (route) => {
    setSelectedProductType(route);
  };

  return (
    <>
      <h1>Products</h1>
      <ProductLines onProductLineClick={handleProductLineClick}/>
      <ProductList   products={productsData[selectedProductType]}/>
    </>
  );
}
