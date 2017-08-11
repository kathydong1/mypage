import React,{Component}from 'react';
import './home/css/index.css';
import Head from './home/js/header';
import Main from './home/js/main';

class H extends Component{
    constructor(){
      super();
      this.state={
        arr:[
          {txt:'今天天气哈',checked:false,id:1},
          {txt:'明天放假啦',checked:false,id:2}
        ],
        val:'',
        all:false
      }
    }

  showVal=(v)=>{
         this.setState({
             val:v
           })
    }

   showData=(json)=>{
       let {arr}=this.state
       let arr2=Object.assign(arr)
       arr2.push(json)
       this.setState({
           arr:arr2
         })
   }

   checked=(id)=>{
        let {arr}=this.state;
        let list=Object.assign(arr);
        list.forEach((e,i)=>{
             if(e.id===id){
               e.checked=!e.checked
             }
        })
        this.setState({
          arr:list
        })
     }


   delet=(id)=>{
         let {arr}=this.state;
         let list=Object.assign(arr);
         list=list.filter((e,i)=>{
              return e.id !=id
            })
       this.setState({
         arr:list
       })
    }

clickall=(ev)=>{
         let {checked}=ev.target;
         let {arr}=this.state;
         let list=Object.assign(arr);
         list.forEach(e=>e.checked=checked)
         this.setState({
            arr:list
         })

    }

    render(){
      let {arr}=this.state;
      let List=Object.assign(arr);
      List=List.map((e,i)=>{
          let data={
            txt:e.txt,
            key:i,
            id:e.id,
            checked:e.checked,
            eve:this.checked,
            dele:this.delet
          }
          return <Main {...data} />
      })

      let allclick=this.state.arr.every(e=>e.checked)

      return(
          <div>
                <Head val={this.state.val}  showVal={this.showVal} showData={this.showData}/>
                <section className="main">
                    <input
                       className="toggle-all"
                       type="checkbox"
                       checked={allclick}
                       onClick={this.clickall}
                      />
                    <ul className="todo-list">{List}</ul>
                </section>
          </div>
       )
    }
}

export default H
