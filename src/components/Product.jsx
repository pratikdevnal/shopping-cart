import React from "react";

function Product({ post }) {
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} alt="product" />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
