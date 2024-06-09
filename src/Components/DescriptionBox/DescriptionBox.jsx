import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <button className="descriptionbox-nav-box">Description</button>
        <button className="descriptionbox-nav-box fade">Reviews (122)</button>
      </div>

      <div className="descriptionbox-description">
        <p>
          Upgrade your wardrobe with sustainable style. Ethically-sourced
          clothing delivered to your door. Shop now! (Focuses on sustainability
          and convenience){" "}
        </p>
        <p>
          Unleash your inner chef! Discover gourmet ingredients and kitchenware
          you won't find anywhere else. Explore our culinary haven! (Highlights
          unique products and creates a sense of discovery)
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
