// pages/index.js
import { Carousel } from 'antd';
import Image from 'next/image';


const MyCarousel = () => {
  const imageNames = Array.from({ length: 4 }, (_, i) => String(i + 1).padStart(2, '0') + '.jpg');
  console.log(imageNames);
  const handleError = (e) => {
    e.target.style.display = 'none'; // Hide the image element if it fails to load
  };

  return (
    <div className="carousel-container">
      <Carousel autoplay autoplaySpeed={3000}>
        {imageNames.map((imageName, index) => (
          <div className="carousel-item" key={index}>
            <Image
              src={`/${imageName}`}
              alt={`Image ${imageName}`}
              width={500}
              height={250}
              onError={handleError}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <MyCarousel />
    </div>
  );
}
