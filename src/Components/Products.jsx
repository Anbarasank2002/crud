import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Style/product.css";
import { useNavigate } from "react-router-dom";

const Products = ({ setId }) => {
  const [users, setUser] = useState([]);
  const [deleteData, setDeleteData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, [deleteData]);
  const fetchData = async () => {
    await axios
      .get("https://65d7900a27d9a3bc1d7b507d.mockapi.io/api/bikes/b")
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };
  const handleDelete = async (id) => {
    await axios
      // .delete(`https://65d7900a27d9a3bc1d7b507d.mockapi.io/api/bikes/b/${id}`)
      .then((res) => setDeleteData(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button
        className="bv"
        onClick={() => {
          navigate("/create");
        }}
      >
        Create
      </button>
      <br />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">productId</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Type</th>
            <th scope="col">Year</th>
            <th scope="col">Color</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.product_id}</td>
                  <td>{item.brand}</td>
                  <td>{item.model}</td>
                  <td> {item.type}</td>
                  <td> {item.year}</td>
                  <td> {item.color}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEdit(item.id);
                      }}
                      // class="edit"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                      class="delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
