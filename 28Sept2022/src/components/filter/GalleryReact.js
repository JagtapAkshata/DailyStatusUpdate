import React, { useState } from "react";
import { GalleryData } from "./GalleryData";
const GalleryReact = () => {
  const [items, setItems] = useState(GalleryData);

  const filterItem =(categItem)=>{
    alert(categItem);
    const updateItems = GalleryData.filter((curElem)=>{
        return curElem.category === categItem;
    });
    setItems(updateItems);
  };
  return (
    <>
      <h2 className="mt-5 text-center main-heading">
        Order your favourite Dish
      </h2>
      <hr />

      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button className="btn btn-warning" onClick={()=> filterItem('breakfast')}>Breakfast</button>
          <button className="btn btn-warning" onClick={()=> filterItem('desert')}>Desert</button>
          <button className="btn btn-warning" onClick={()=> filterItem('evening')}>Evening</button>
          <button className="btn btn-warning" onClick={()=> setItems(GalleryData)}>All</button>
        </div>
      </div>

      {/* display menus */}

      <div className="menu-items container-fliud mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { id, name, price, description } = elem;

                return (
                  <>
                    <div className="item1 col-md-6 col-lg-6 col-xl-4 my-5">
                      <div className="row Item-inside">
                        <div className="col-12 col-md-12 col-lg-4 img-div">
                          <img src="" alt="MenuPicture" className="img-fluid" />
                        </div>

                        <div className="col-12 col-md-12 col-lg-8">
                          <div className="main-title pt-4 pb-3">
                            <h1>{name}</h1>
                            <p>Description: {description}</p>
                          </div>
                          <div className="menu-price-book">
                            <div className="price-book-divide d-flex justify-content-between">
                              <h2>Rs. {price}</h2>
                              <a href="#">
                                <button className="btn btn-primary">
                                  Order Now
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr/>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryReact;
