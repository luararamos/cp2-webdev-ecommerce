import Card from "../components/Card";
import Section from "../components/Section";
import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        data.forEach((category) => {
          fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`)
            .then((res) => res.json())
            .then((products) => {
              setProductsByCategory((prev) => ({ ...prev, [category]: products }));
            });
        });
      });
  }, []);

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
