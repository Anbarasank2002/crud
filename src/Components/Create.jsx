import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    product_id: "",
    brand: "",
    model: "",
    type: "",
    year: "",
    color: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; //e.target.name and e.target.value
    setCreateData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `https://65d7900a27d9a3bc1d7b507d.mockapi.io/api/bikes/b`,
        createData
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate("/products");
  };
  return (
    <div>
      <div class="container mt-4">
        <form onSubmit={handleFormSubmit}>
          <div class="form-group">
            <label for="product_id">product_id:</label>
            <input
              type="text"
              name="product_id"
              value={createData.product_id}
              onChange={handleChange}
              required
            />

            <label for="brand">Brand:</label>
            <input
              type="text"
              class="form-control"
              id="brand"
              name="brand"
              value={createData.brand}
              onChange={handleChange}
              required
            />
          </div>

          <div class="form-group">
            <label for="model">Model:</label>
            <input
              type="text"
              class="form-control"
              id="model"
              name="model"
              value={createData.model}
              onChange={handleChange}
              required
            />
          </div>

          <div class="form-group">
            <label for="type">Type:</label>
            <input
              type="text"
              class="form-control"
              id="type"
              name="type"
              value={createData.type}
              onChange={handleChange}
              required
            />
          </div>

          <div class="form-group">
            <label for="year">Year:</label>
            <input
              type="text"
              class="form-control"
              id="year"
              name="year"
              value={createData.year}
              onChange={handleChange}
              required
            />
          </div>

          <div class="form-group">
            <label for="color">Color:</label>
            <input
              type="text"
              class="form-control"
              id="color"
              name="color"
              value={createData.color}
              onChange={handleChange}
              required
            />
          </div>

          <div class="form-group">
            <label for="price">Price:</label>
            <input
              type="text"
              class="form-control"
              id="price"
              name="price"
              value={createData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-warning w-50">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
