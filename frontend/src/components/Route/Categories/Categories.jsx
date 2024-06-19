import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={` my-12 w-full shadow-sm bg-secondary  rounded-md grid grid-cols-2 lg:grid-cols-4  `}>
          {brandingData &&
            brandingData.map((i, index) => (
              <div
                className="flex items-start border-r border-primary/20 p-5"
                key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-semibold text-sm md:text-base text-primary">
                    {i.title}
                  </h3>
                  <p className="text-xs md:text-sm text-secondary-light-foreground">
                    {i.Description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section} bg-secondary  rounded-lg mb-12`}
        id="categories">
        <div className="grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4  xl:grid-cols-5 ">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="w-full flex flex-col items-center justify-between cursor-pointer overflow-hidden border py-6 group hover:shadow-md"
                  key={i.id}
                  onClick={() => handleSubmit(i)}>
                  <img
                    src={i.image_Url}
                    className="w-[120px] object-cover"
                    alt=""
                  />
                  <h5
                    className={`text-sm leading-[1.3] text-secondary-DEFAULT-foreground group-hover:text-primary`}>
                    {i.title}
                  </h5>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
