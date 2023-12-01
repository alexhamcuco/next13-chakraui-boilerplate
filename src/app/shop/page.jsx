'use client'

import React, { useState } from "react";
import './shop.css'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useColorMode } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";




const ShopPage = () => {
  const { colors } = useTheme();


  const { colorMode, toggleColorMode } = useColorMode();

  const [size, setSize] = useState('')
  return (
    <>
      <div className="container">
        <div className="inner-container">
          <div className="card_outer" style={colorMode === 'light' ? { backgroundColor: colors.light.bgSecondary } : { backgroundColor: colors.dark.bgSecondary }}>
            <div className="card_main" style={colorMode === 'light' ? { backgroundColor: colors.light.bgPrimary, borderColor: colors.light.border } : { backgroundColor: colors.dark.bgPrimary, borderColor: colors.dark.border }}>
              <div className="card_first_div">
                <h2 className="card_first_div_heading">CUP VERBS</h2>
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
                    <SwiperSlide>
                      <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="card_second_div">
                <p>$ <span>20</span></p>
              </div>
              <div className="card_third_div">
                <div className="card_third_div_first">
                  <p>Quantity: </p>
                  <input type="number" style={colorMode === 'light' ? { backgroundColor: 'lightgrey' } : { backgroundColor: 'white' }} />
                </div>
                <div className="card_third_div_second">
                  <p>T-Shirt</p>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <p>SIZE:</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', cursor: 'pointer', backgroundColor: size.size === 'S' && size.id === '1' ? 'lightslategray' : 'lightgray' }} onClick={() => setSize({ size: 'S', id: '1' })}>S</div>
                      <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', cursor: 'pointer', backgroundColor: size.size === 'MD' && size.id === '1' ? 'lightslategray' : 'lightgray' }} onClick={() => setSize({ size: 'MD', id: '1' })}>MD</div>
                      <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', cursor: 'pointer', backgroundColor: size.size === 'X' && size.id === '1' ? 'lightslategray' : 'lightgray' }} onClick={() => setSize({ size: 'X', id: '1' })}>X</div>
                      <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', cursor: 'pointer', backgroundColor: size.size === 'XL' && size.id === '1' ? 'lightslategray' : 'lightgray' }} onClick={() => setSize({ size: 'XL', id: '1' })}>XL</div>
                    </div>
                  </div>
                </div>
                <div className="card_third_div_third">
                  <button>add to basket</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card_outer" style={colorMode === 'light' ? { backgroundColor: colors.light.bgSecondary } : { backgroundColor: colors.dark.bgSecondary }}>
            <div className="card_main" style={colorMode === 'light' ? { backgroundColor: colors.light.bgPrimary, borderColor: colors.light.border } : { backgroundColor: colors.dark.bgPrimary, borderColor: colors.dark.border }}>
              <div className="card_first_div">
                <h2 className="card_first_div_heading">CUP VERBS</h2>
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
                    <SwiperSlide>
                      <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="card_second_div">
                <p>$ <span>20</span></p>
              </div>
              <div className="card_third_div">
                <div className="card_third_div_first">
                  <p>Quantity: </p>
                  <input type="number" style={colorMode === 'light' ? { backgroundColor: 'lightgrey' } : { backgroundColor: 'white' }} />
                </div>
                <div className="card_third_div_second">
                  <p>T-Shirt</p>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <p>SIZE:</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', cursor: 'pointer', backgroundColor: size.size === 'S' && size.id === '2' ? 'lightslategray' : 'lightgray' }} onClick={() => setSize({ size: 'S', id: '2' })}>S</div>
                      <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', cursor: 'pointer', backgroundColor: size.size === 'MD' && size.id === '2' ? 'lightslategray' : 'lightgray' }} onClick={() => setSize({ size: 'MD', id: '2' })}>MD</div>
                      <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', cursor: 'pointer', backgroundColor: size.size === 'X' && size.id === '2' ? 'lightslategray' : 'lightgray' }} onClick={() => setSize({ size: 'X', id: '2' })}>X</div>
                      <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', cursor: 'pointer', backgroundColor: size.size === 'XL' && size.id === '2' ? 'lightslategray' : 'lightgray' }} onClick={() => setSize({ size: 'XL', id: '2' })}>XL</div>
                    </div>
                  </div>
                </div>
                <div className="card_third_div_third">
                  <button>add to basket</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card_outer" style={colorMode === 'light' ? { backgroundColor: colors.light.bgSecondary } : { backgroundColor: colors.dark.bgSecondary }}>
            <div className="card_main" style={colorMode === 'light' ? { backgroundColor: colors.light.bgPrimary, borderColor: colors.light.border } : { backgroundColor: colors.dark.bgPrimary, borderColor: colors.dark.border }}>
              <div className="card_first_div">
                <h2 className="card_first_div_heading">CUP VERBS</h2>
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
                    <SwiperSlide>
                      <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="card_second_div">
                <p>$ <span>20</span></p>
              </div>
              <div className="card_third_div">
                <div className="card_third_div_first">
                  <p>Quantity: </p>
                  <input type="number" style={colorMode === 'light' ? { backgroundColor: 'lightgrey' } : { backgroundColor: 'white' }} />
                </div>
                <div className="card_third_div_second">
                  <p>T-Shirt</p>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <p>SIZE:</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', cursor: 'pointer', backgroundColor: size.size === 'S' && size.id === '3' ? 'lightslategray' : 'lightgray' }} onClick={() => setSize({ size: 'S', id: '3' })}>S</div>
                      <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', cursor: 'pointer', backgroundColor: size.size === 'MD' && size.id === '3' ? 'lightslategray' : 'lightgray' }} onClick={() => setSize({ size: 'MD', id: '3' })}>MD</div>
                      <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', cursor: 'pointer', backgroundColor: size.size === 'X' && size.id === '3' ? 'lightslategray' : 'lightgray' }} onClick={() => setSize({ size: 'X', id: '3' })}>X</div>
                      <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px', cursor: 'pointer', backgroundColor: size.size === 'XL' && size.id === '3' ? 'lightslategray' : 'lightgray' }} onClick={() => setSize({ size: 'XL', id: '3' })}>XL</div>
                    </div>
                  </div>
                </div>
                <div className="card_third_div_third">
                  <button>add to basket</button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default ShopPage;
