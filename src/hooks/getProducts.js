import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('api: ' + process.env.REACT_APP_API_FAKE_STORE)
    axios.get(`${process.env.REACT_APP_API_FAKE_STORE}/products`)
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};

export const useGetProductById = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_FAKE_STORE}/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return { product, loading, error };
};