import React,{Component} from 'react';


class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleDelete(){
    //子组件如果想和父组件通信，子组件要调用父组件就传递过来的方法
        this.props.delete(this.props.index);
    }

    render(){
        const {content} = this.props;
        return(
            //子组件通过 props 接收到父组件传递来的参数
            <div onClick={this.handleDelete}>{content}</div>
        )
    }
}

export default TodoItem;