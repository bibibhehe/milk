import React from 'react';
import { Box, IconButton, Pagination} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// Tạo component tự động phát
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// Danh sách hình ảnh
const images = [
  { id: 1, url: 'https://picsum.photos/800/450?random=1' },
  { id: 2, url: 'https://picsum.photos/800/450?random=2' },
  { id: 3, url: 'https://picsum.photos/800/450?random=3' },
];

// Component Carousel
export default function Carousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Hàm thay đổi chỉ số
  const handleChangeIndex = (index) => {
    setCurrentIndex(index);
  };

  // Hàm chuyển sang slide tiếp theo
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Hàm quay lại slide trước
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handlePageChange = (event, value) => {
    setCurrentIndex(value - 1);
  };

  return (
    <Box sx={{  width: '100%', margin: '0 auto', position: 'relative' }}>
      <AutoPlaySwipeableViews index={currentIndex} onChangeIndex={handleChangeIndex}>
        {images.map((image) => (
          <Box
            key={image.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 450,
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </AutoPlaySwipeableViews>

      {/* Nút mũi tên trái */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          zIndex: 1,
          outline: 'none',
          border: 'none',
          backgroundColor: 'transparent',
          color: 'white',
          '&:hover': {
            color: 'gray',
            backgroundColor: 'transparent', // Đảm bảo nền không thay đổi khi hover
          },
        }}

      >
        <ArrowBackIosIcon sx={{ fontSize: 40 }}/>
      </IconButton>

      {/* Nút mũi tên phải */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          zIndex: 1,
          outline: 'none',
          border: 'none',
          backgroundColor: 'transparent',
          color: 'white',
          '&:hover': {
            color: 'gray',
            backgroundColor: 'transparent', // Đảm bảo nền không thay đổi khi hover
          },
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: 40 }}/>
      </IconButton>
      {/* <Pagination
        count={images.length}
        page={currentIndex + 1}
        onChange={handlePageChange}
        sx={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          '& .MuiPaginationItem-root': {
            color: 'white', // Màu chấm tròn
            '&.Mui-selected': {
              color: 'gray', // Màu chấm tròn được chọn
            },
          },
        }}
      /> */}
       <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
              transition: 'background-color 0.3s',
              cursor: 'pointer',
            }}
            onClick={() => handleChangeIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );
}
