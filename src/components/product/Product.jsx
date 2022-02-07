import "./product.css";

const Product = ({item,img,link}) => {
  return (
    <div className="p">
      <div className="">
        <div className=""></div>
        <div className="">
        <h1>{item.name}</h1>
        <p>{item.desc}</p>
        </div>
        <div className=""></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
