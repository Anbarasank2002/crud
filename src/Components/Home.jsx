import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Style/home.css";

const Home = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("https://65d7900a27d9a3bc1d7b507d.mockapi.io/api/bikes/b")
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>
        <img className="so" src="https://wallpapercave.com/wp/wp10946347.jpg" />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {users.map((item, index) => {
          return (
            <>
              <div key={index} className="col mb-4">
                <div class="card h-">
                  <img src={item.img} class="card-img-top" alt="Bike Image" />
                  <div class="card-body">
                    <h5 class="card-title ">{item.product_id}</h5>
                    <h5 class="card-title border-bottom">{item.brand}</h5>
                    <dl class="row">
                      <dt class="col-sm-4 ">Brand:</dt>
                      <dd class="col-sm-8">{item.brand}</dd>

                      <dt class="col-sm-4">Type:</dt>
                      <dd class="col-sm-8">{item.type}</dd>

                      <dt class="col-sm-4">Year:</dt>
                      <dd class="col-sm-8">{item.year}</dd>

                      <dt class="col-sm-4">Color:</dt>
                      <dd class="col-sm-8">{item.color}</dd>

                      <dt class="col-sm-4 border-top">Price:</dt>
                      <dd class="col-sm-8 border-top">{item.price}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
