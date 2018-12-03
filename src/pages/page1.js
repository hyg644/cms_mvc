import React, {Component} from 'react';
import style from  './page1.css'
import image from '../../public/images/123.jpg'
export default class Page1 extends Component {
    render() {
        return (
            <div className={style.box}>
                this is Page1~
                <img src={image}></img>
            </div>
        )
    }
}