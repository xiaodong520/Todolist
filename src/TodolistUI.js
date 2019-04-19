import React, {Component, Fragment} from 'react'
import {Button, Input} from "antd";
import Todoitem from "./Todoitem";

class TodolistUI extends Component {
    render(){
        return(
            <Fragment>
                <div>
                    <Input value={this.props.InputValue} onChange={this.props.HandleChange}
                           style={{width: '300px', marginRight: '10px'}}/>
                    <Button type="primary" onClick={this.props.HandleBtnClick}>提交</Button>
                </div>
                <div>
                    <ul>
                        {this.props.list.map((item, index) => {
                            return <Todoitem HandleDelete={this.props.HandleDelete} key={index} content={item}
                                             index={index}/>
                            // return <li key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </Fragment>
        );
    }
}
export default TodolistUI;