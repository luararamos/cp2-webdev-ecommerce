import Card from "../components/Card";
import Section from "../components/Section";
import { useEffect, useState } from "react";

export default function Home() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/products/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        data.forEach((category) => {
          fetch(`${API_URL}/products/category/${encodeURIComponent(category)}`)
            .then((res) => res.json())
            .then((products) => {
              setProductsByCategory((prev) => ({ ...prev, [category]: products }));
            });
        });
      });
  }, [API_URL]);

  return (
    <div className="p-6 flex-1 bg-gray-100">
      {categories.map((category) => (
        <Section key={category} titulo={category}>
          {productsByCategory[category]?.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </Section>
      ))}
    </div>
  );
}
