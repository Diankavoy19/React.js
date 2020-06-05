import React from 'react';
import './Item.css';
const Item=props=>{
    const resolvedClass={
        textDecoration: 'line-through'
    }
return(
    <div className="item">
        <center>
        <div className="description">
            <p style={props.completed == true ? resolvedClass:{}}>
            {props.description}
            </p>
        </div>
        <div className="pics">
            <p style={props.completed == true ? resolvedClass:{}}>
            <img src ={props.pics}></img>
            </p>
            </div>
        <div className="links">
            <p style={props.completed == true ? resolvedClass:{}}>
            <a href ={props.links}>Дивитися</a>
            </p>
        </div>
        <div className="about">
            <p style={props.completed == true ? resolvedClass:{}}>
            <p>Жанр:</p><p style={props.completed == true ? resolvedClass:{}}></p>
            {props.about}
            </p>
        </div>

        <div className="input-wrapper">
            <p className="input"><input  type="checkbox"
            defaultChecked={props.completed}
            onChange={props.handleChange}
            /></p>
        </div>

       </center>
    </div>
)

}
export default Item;