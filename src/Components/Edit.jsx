import React, { useEffect, useState } from "react";
import "../Style/edit.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    product_id: "",
    brand: "",
    model: "",
    type: "",
    year: "",
    color: "",
    price: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`https://65d7900a27d9a3bc1d7b507d.mockapi.io/api/bikes/b/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleForSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(
        `https://65d7900a27d9a3bc1d7b507d.mockapi.io/api/bikes/b/${id}`,
        editData
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate("/products");
  };
  return (
    <div>
      <div class="container mt-4">
        <form onSubmit={handleForSubmit}>
          <div class="form-group">
            <label for="product_id">product_id:</label>
            <input
              type="text"
              name="product_id"
              value={editData.product_id}
              onChange={handleChange}
              required
            />

            <label for="brand">Brand:</label>
            <input
              type="text"
              class="form-control"
              id="brand"
              name="brand"
              value={editData.brand}
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
              value={editData.model}
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
              value={editData.type}
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
              value={editData.year}
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
              value={editData.color}
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
              value={editData.price}
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

export default Edit;
