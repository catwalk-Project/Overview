
import $ from "jquery"


import ProductInformation from "./components/ProductInformation.jsx"
import Style from './components/Style.jsx'
import Navbar from './components/Navbar.jsx'
import Carousel from './components/Carousel.jsx'
import Size from './components/Size.jsx'
import Quantity from './components/Quantity.jsx'




const OverView = () => {
  const { useState, useEffect } = React;
  const [products, setProducts] = useState([]);
  const [productInformation, setproductInformation] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [styles,setStyles] = useState([]);
  const [image,setImage] = useState(11001);
  const [size,setSize] = useState([]);
  const [quantity,setQuantity] = useState([]);
  const [array,setarray] = useState([]) 
  const [boolean,setboolean] = useState(false) 
  

  function handleChange(e){
    setarray(e)
    setboolean(true)
  }

  useEffect(() => {
    let acc =[];
    let acc2=[];
    $.ajax({
      url:'http://localhost:3001/listproducts',
      type:'GET',
      success:(products) =>{
        setProducts(products)
      }
    });
    $.ajax({
      url:`http://localhost:3001/productInformation/${image}`,
      type:'GET',
      success:(productInformation) =>{
        setproductInformation(productInformation)
      }
    });
    $.ajax({
      url:`http://localhost:3001/productStyles/${image}`,
      type:'GET',
      success:(styles) =>{
        setStyles(styles.results[0].photos)
      }
    });
    $.ajax({
      url:`http://localhost:3001/productStyles/${image}`,
      type:'GET',
      success:(productImage) =>{
         setProductImage(productImage.results)
      }
    });
    $.ajax({
      url:`http://localhost:3001/productStyles/${image}`,
      type:'GET',
      success:(size) =>{
        for(let key in size.results[0].skus){
          acc.push(size.results[0].skus[key].size)
        }
         setSize(acc)
      }
    });
    $.ajax({
      url:`http://localhost:3001/productStyles/${image}`,
      type:'GET',
      success:(quantity) =>{
        for(let key in quantity.results[0].skus){
          acc2.push(quantity.results[0].skus[key].quantity)
        }
         setQuantity(acc2)
      }
    });
  }, []);


  return (
    <div>
     <Navbar />
    <div className="flex flex-row">
        <Carousel boolean={boolean} array={array} styles={styles}/> 
      <div>
          <ProductInformation productInformation={productInformation} />
          <Style handleChange={handleChange} productImage={productImage}  />
          <Size size={size}/>
          <Quantity quantity={quantity} />
      </div>
    </div>
    </div>
  );
};

export default OverView;