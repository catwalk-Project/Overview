

class Style extends React.Component {
  constructor(props) {
    super(props);
};

render(){
 
    return(
   <div>    
      <div className="grid grid-cols-4 gap-4">
        {this.props.productImage.map((e, i) => 
    <div key={i}>
         <img className="w-20 h-20 rounded-full mx-auto" src={e.photos[0].thumbnail_url} onClick={()=>this.props.handleChange(e)} />
    </div>
        )}
     </div> 
   </div>
    )
 }
}

export default Style;