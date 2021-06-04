
import $ from "jquery"


import ProductInformation from "./components/ProductInformation.jsx"
import Style from './components/Style.jsx'
import Navbar from './components/Navbar.jsx'
import Carousel from './components/Carousel.jsx'
import DropDownMenu from './components/DropDownMenu.jsx'




const OverView = () => {
  const { useState, useEffect } = React;
  const [products, setProducts] = useState([]);
  const [productInformation, setproductInformation] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [styles,setStyles] = useState([]);
  const [image,setImage] = useState(11001);
  const [size,setSize] = useState({});

  

  useEffect(() => {
    $.ajax({
      url:'http://localhost:3001/listproducts',
      type:'GET',
      success:(products) =>{
        setProducts(products)
      }
    });
  }, []);


//productInformation  
useEffect(() => {
  $.ajax({
    url:`http://localhost:3001/productInformation/${image}`,
    type:'GET',
    success:(productInformation) =>{
      setproductInformation(productInformation)
    }
  });
}, []);


//Carousel
useEffect(() => {
  $.ajax({
    url:`http://localhost:3001/productStyles/${image}`,
    type:'GET',
    success:(styles) =>{
      setStyles(styles.results[0].photos)
    }
  });
}, []);

//styles
useEffect(() => {
  $.ajax({
    url:`http://localhost:3001/productStyles/${image}`,
    type:'GET',
    success:(productImage) =>{
       setProductImage(productImage.results)
    }
  });
}, []);


//DropDown
useEffect(() => {
  $.ajax({
    url:`http://localhost:3001/productStyles/${image}`,
    type:'GET',
    success:(size) =>{
       setSize(size.results[0].skus)
    }
  });
}, []);

  return (
    <div>
     <Navbar />
    <div className="flex flex-row">
        <Carousel styles={styles}/> 
      <div>
          <ProductInformation productInformation={productInformation} />
          <Style productImage={productImage}  />
          <DropDownMenu size={size}/>
      </div>
    </div>
    </div>
  );
};

export default OverView;