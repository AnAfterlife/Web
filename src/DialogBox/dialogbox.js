
import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;


export default class DialodBox extends React.Component{
    render(){
        return(<TextArea rows={4} />)
    }
}