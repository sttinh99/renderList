import React, { Component } from 'react';
import "./renderList.css";
class RenderList extends Component {
    render() {
        const { item } = this.props;
        // console.log(lists);
        return (
            <li className="single-item">
                <div className="user-img"><img src={item.image} alt="img" /></div>
                    <div className="username">
                        <p className="name">{item.name}</p>
                        <p className="suggest">Gợi ý theo dõi</p>
                </div>
            <button>{item.follow}</button>
        </li>
        );
    }
}
export default RenderList;