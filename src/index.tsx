import * as React from "react";
import ReactDom from "react-dom";
import Todo from './components/Todo';
import './styles/app.scss';

const wrapper = document.getElementById('container');
wrapper ? ReactDom.render(<Todo/>, wrapper) : false;