import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import './jscss.css';

class TodoList extends Component {
  
  constructor(props){
    super(props);
    this.state= {
      list:[],
      inputValue: ""
    }
    //clean code :
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleInputChange(e){
    //console.log(e.target.value);
    this.setState({
      inputValue:e.target.value
    })
  }

  
  handleBtnClick(){
      //If you want to change the values in the state, don't just change its value, go use setState method 
      this.setState({
        //you need to set the values in state, in here it is list
        // ...是es6的展开运算符
        list:[...this.state.list,this.state.inputValue],
        inputValue: ''
      
      })      
  }

  handleItemClick(index){
    //当你要改state里面的list时候，尽量不要直接取改这个list，
    //拷贝一个副本，改副本再赋值给state里面的值，避免以后叼霸天以后
    //遇到一些麻烦事情。
    const list = [...this.state.list];
    list.splice(index,1);
    //es6 syntax
    //equal to 
    //this.setState({list:list})
    this.setState({list})
  }

  getTodoItems(){
    return (            // map is used for output every element in the list
      this.state.list.map((item,index) => {
        
        //父组件 通过属性 的方式向 子组件 传递参数
        return(
          <TodoItem 
          delete = {this.handleItemClick} 
          key={index} 
          content= {item} 
          index ={index} />
        ) 
      })
    )
  }


  // this render function is a must
  // be responsible for the content of the component
  render() {
    // this is called jsx
    //在这里要用到bind，因为函数里的this，如果不bind的话就是指向这个button，但是我们想让这个函数指向这个class
    //所以要把函数跟button的this绑定起来（因为btn指向的是class）
    return (
      <Fragment>
        {
          // use htmlFor instead of 'for' in react
        }
        <label htmlFor='typeArea'>输入内容</label>
        <input
        id='typeArea'  
        className = 'input'
        value={this.state.inputValue}
        onChange={this.handleInputChange}/>
        
        <button onClick={this.handleBtnClick}>add</button>
        <ul>
          {this.getTodoItems()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
