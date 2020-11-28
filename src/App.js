import React, {Component} from "react";
import RenderList from './components/RenderList';
import './App.css';
const lists = [
  { image: "https://res.cloudinary.com/dm9bs55dz/image/upload/v1605940595/OIP_h2r7oi.jpg", name: "phong098", follow: "Theo dõi"},
  { image: "https://res.cloudinary.com/dm9bs55dz/image/upload/v1605940595/OIP_h2r7oi.jpg", name: "phong098", follow: "Theo dõi"},
  { image: "https://res.cloudinary.com/dm9bs55dz/image/upload/v1605940595/OIP_h2r7oi.jpg", name: "phong098", follow: "Theo dõi"}
]
class App extends Component {
  render(){
    return (
      <div className="App">
        <div className='render-list'>
                  <div className="headerOflist">
                  <p>Gợi ý cho bạn</p>
                  <p>Xem tất cả</p>
                  </div>
                  <ul className="listItem">
                      {lists.map((item,index) =>
                         <RenderList key={index} item={item}/>
                      )}
                  </ul>
              </div>
      </div>
    );
  }
}

export default App;
