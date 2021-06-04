
const ProductInformation = (props) => {

  return (
    <div >
      <div className="ProductInformation prod-info">
          <div className="category">{props.productInformation.category}</div>
          <div className="name">{props.productInformation.name}</div>
          <div className="default_price">${props.productInformation.default_price}</div>
      </div>
    </div>
  );
};

export default ProductInformation;