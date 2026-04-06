import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { projectsData } from "../Data/ProjectsData";
import ProjectCard from "./ProjectCard";

function ProjectCards() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
      grabCursor={true}
      style={{
        "--swiper-navigation-size": "24px",
        "--swiper-theme-color": "#000"
      }}
    >
      {projectsData.map((data) => {
        return (
          <SwiperSlide key={data.id}>
            <ProjectCard {...data} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default ProjectCards;
