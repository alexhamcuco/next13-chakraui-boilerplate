import React from "react";
import './shop.css'
import Image from "next/image";

const ShopPage = () => {
  return (
    <>
      <div className="container">
        <div className="inner-container">
          <div className="card_outer">
            <div className="card_main">
              <div className="card_first_div">
                <h2 className="card_first_div_heading">CUP VERBS</h2>
                <div className="card_first_div_image_div">
                  <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                </div>
              </div>
              <div className="card_second_div">
                <p>$ <span>20</span></p>
              </div>
              <div className="card_third_div">
                <div className="card_third_div_first">
                  <p>Quantity: </p>
                  <input type="number" />
                </div>
                <div className="card_third_div_second">
                  <p>T-Shirt</p>
                  <p>SIZES: S / MD / X / XL</p>
                </div>
                <div className="card_third_div_third">
                  <button>add to basket</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card_outer">
            <div className="card_main">
              <div className="card_first_div">
                <h2 className="card_first_div_heading">CUP VERBS</h2>
                <div className="card_first_div_image_div">
                  <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                </div>
              </div>
              <div className="card_second_div">
                <p>$ <span>20</span></p>
              </div>
              <div className="card_third_div">
                <div className="card_third_div_first">
                  <p>Quantity: </p>
                  <input type="number" />
                </div>
                <div className="card_third_div_second">
                  <p>T-Shirt</p>
                  <p>SIZES: S / MD / X / XL</p>
                </div>
                <div className="card_third_div_third">
                  <button>add to basket</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card_outer">
            <div className="card_main">
              <div className="card_first_div">
                <h2 className="card_first_div_heading">CUP VERBS</h2>
                <div className="card_first_div_image_div">
                  <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                </div>
              </div>
              <div className="card_second_div">
                <p>$ <span>20</span></p>
              </div>
              <div className="card_third_div">
                <div className="card_third_div_first">
                  <p>Quantity: </p>
                  <input type="number" />
                </div>
                <div className="card_third_div_second">
                  <p>T-Shirt</p>
                  <p>SIZES: S / MD / X / XL</p>
                </div>
                <div className="card_third_div_third">
                  <button>add to basket</button>
                </div>
              </div>
            </div>
          </div>
          <div className="card_outer">
            <div className="card_main">
              <div className="card_first_div">
                <h2 className="card_first_div_heading">CUP VERBS</h2>
                <div className="card_first_div_image_div">
                  <Image src={'/images/shop.jpg'} alt="shop" width={300} height={300} className="card_first_div_image" />
                </div>
              </div>
              <div className="card_second_div">
                <p>$ <span>20</span></p>
              </div>
              <div className="card_third_div">
                <div className="card_third_div_first">
                  <p>Quantity: </p>
                  <input type="number" />
                </div>
                <div className="card_third_div_second">
                  <p>T-Shirt</p>
                  <p>SIZES: S / MD / X / XL</p>
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
