export default function Card({ title, description, image, price }) {
  return (
    <div className="flex flex-col ">
        <img src = {image}/>
      <h3 >{title}</h3>
      <p>{description}</p>
      <p>R$ {price}</p>
    </div>
  );
}