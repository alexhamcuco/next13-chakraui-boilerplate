import React, { useState } from "react";
import "./shop2.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useColorMode } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import toast, { Toaster } from "react-hot-toast";

const ProductCard = ({ item, addToCart }) => {
  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  const [quantity, setQuantity] = useState(item.id === 3 ? 1 : 1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(isNaN(newQuantity) || newQuantity <= 0 ? 1 : newQuantity);
  };

  const handleAddToCart = () => {
    if (isNaN(quantity) || quantity <= 0) {
      toast.error("Por favor, introduce una cantidad válida", {
        position: "top-center",
        style: {
          backgroundColor: "#FF6347",
          color: "white",
          padding: "15px",
          fontSize: "16px",
          fontWeight: "bold",
        },
      });
      return;
    }

    addToCart(item, quantity);

    // Mostrar notificación de éxito
    toast.success(`${quantity} ${item.name} añadido al carrito`, {
      position: "top-center",
      style: {
        backgroundColor: "#32CD32",
        color: "white",
        padding: "15px",
        fontSize: "16px",
        fontWeight: "bold",
      },
    });
  };

  return (
    <div
      className="card_outer"
      style={
        colorMode === "light"
          ? { backgroundColor: colors.light.bgSecondary }
          : { backgroundColor: colors.dark.bgSecondary }
      }
    >
      <div
        className="card_main"
        style={
          colorMode === "light"
            ? {
                backgroundColor: colors.light.bgPrimary,
                borderColor: colors.light.border,
              }
            : {
                backgroundColor: colors.dark.bgPrimary,
                borderColor: colors.dark.border,
              }
        }
      >
        <div className="card_first_div">
          <h2 className="card_first_div_heading">{item.name}</h2>
          <div className="card_first_div_image_div">
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              className="swiper_container"
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return `<span class="dot swiper-pagination-bullet"></span>`;
                },
              }}
            >
              {item.images.map((image, i) => (
                <SwiperSlide key={i}>
                  <Image
                    src={image}
                    alt="shop"
                    width={300}
                    height={300}
                    className="card_first_div_image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="card_second_div">
          <p>
            $ <span>{item.price}</span>
          </p>
        </div>
        <div className="card_third_div">
          {item.id === 3 && (
            <div className="card_third_div_first">
              <p>Quantity: </p>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                style={
                  colorMode === "light"
                    ? { backgroundColor: "lightgrey" }
                    : { backgroundColor: "white" }
                }
              />
            </div>
          )}
          <div className="card_third_div_second">
            <p>T-Shirt</p>
          </div>
          <div className="card_third_div_third">
            <button onClick={handleAddToCart}>add to basket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShopPage2 = () => {
  let data = [
    {
      id: 1,
      name: "CURSO VERBOS SER Y ESTAR",
      price: 25,
      images: ["/images/cami1.jpg", "/images/cami2.jpg", "/images/cami3.jpg"],
    },
    {
      id: 2,
      name: "CURSO POR Y PARA, IR Y VENIR, LLEVAR Y TRAER",
      price: 20,
      images: ["/images/shop.jpg", "/images/shop.jpg", "/images/shop.jpg"],
    },
    {
      id: 3,
      name: "TARJETAS FRASES",
      price: 20,
      images: ["/images/shop.jpg", "/images/shop.jpg", "/images/shop.jpg"],
    },
  ];

  const { colors } = useTheme();
  const { colorMode } = useColorMode();

  const addToCart = (item, quantity) => {
    // Implement your addToCart logic here
    console.log("Adding to cart:", item, "Quantity:", quantity);
  };

  return (
    <>
      <Toaster />
      <div className="container">
        <div className="inner-container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
           
          </div>
          {data.map((item, index) => (
            <ProductCard key={index} item={item} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopPage2;
