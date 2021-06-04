const { default: axios } = require('axios');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/listProducts', (req,res)=>{ 
    axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products",{ headers: {
      'Authorization': `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`
    }
    
  })
    .then((response)=>{
    console.log(response)
  res.send(response.data)
    })
  .catch((error)=>
  console.log(error)
   )
  
 
})




app.get('/productInformation/:id', (req,res)=>{
  const id=req.params.id
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${id}`,{ headers: {
      'Authorization':`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`
}
  })
    .then((response)=>
  res.send(response.data)
   )
  .catch((error)=>
  console.log(error)
   )
})




app.get('/productStyles/:id', async(req,res)=>{
  const id=req.params.id
  
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/${id}/styles`,{ headers: {
      'Authorization':`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`
}
  })
    .then((response)=>
  res.send(response.data)
   )
  .catch((error)=>
  console.log(error)
   )
})




// app.get('/relatedProducts', async(req,res)=>{
//   try{
//     axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11001/related",{ headers: {
//       'Authorization':`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`
//     }
//   })
//     .then((response)=>
//   res.send(response.data)
//    )
//   .catch((error)=>
//   console.log(error)
//    )
//   }
//   catch(error){
//     console.log(error)
//   }
// })



app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
