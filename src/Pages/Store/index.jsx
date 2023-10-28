import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const index = () => {
  const [data, setData] = useState([
    { title: "chair", price: "22.89", id: 4 },
    { title: "lamp", price: "82.89", id: 1 },
    { title: "watch", price: "32.89", id: 3 },
    { title: "minecraft", price: "4.89", id: 8 },
  ]);
  return (
    <div className="container">
      <h1>PRODUCT STORE</h1>
      <section>
        {data.map((product) => {
          return (
            <div className="product">
              <h2>
                {product.title} - <i>${product.price}</i>
              </h2>

              <Link
                to={`/store/${product.id}/detail`}
                style={{ textDecoration: "none" }}
              >
                View
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default index;
