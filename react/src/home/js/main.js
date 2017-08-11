import React,{Component}from 'react';

class M extends Component{
  change=()=>{
      this.props.eve(this.props.id)
  }
  click=()=>{
       this.props.dele(this.props.id)
  }
  render(){
    return(
      <li className={this.props.checked?"":"completed"}>
             <div className="view">
                 <input
                   className="toggle"
                   type="checkbox"
                   checked={this.props.checked}
                   onChange={this.change}
                    />
              <label>{this.props.txt}</label>
              <button className="destroy" onClick={this.click}></button>
          </div>
      </li>
    )
  }
}


export default M
