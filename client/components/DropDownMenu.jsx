class DropDownMenu extends React.Component{
  constructor(props){
    super(props)
    this.state={
      sizes:[]
    }
  }

  
//   componentDidMount(){
//     this.fetchSize()
//   }


// fetchSize(){
//   this.setState({
//     sizes:Object.keys(this.props.size).size
//   })
// }


render(){
  return (
  <div>
    {console.log(this.state.size)}
<div className="p-10">
<div className="dropdown inline-block relative">
  <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
    <span className="mr-1">SELECT STYLE</span>
    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  </button>
  {/* {this.state.sizes.map((e,i) =>
  <div key={i}>
  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
    <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">{e.size}</a></li>
  </ul>
  </div>
  )} */}
</div>

</div>
    </div>
  )
}
};
  export default DropDownMenu ;


  // Object.keys(props.size).size