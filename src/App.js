import React from 'react';
import {Cardd} from './components/Cardd';
import {NameFilter} from './components/NameFilter';
import './index.css';
import images from './sources/data.json';



function App() {
  const x= images.filter((imagesInfo => imagesInfo.size > 20))
  //const z= images.sort(imagesInfo=>imagesInfo.name)

  return (
    
    <div className="App">
   
     <div class="header">
       <h3>Kitap Listeleri</h3>
     </div>
      {images.map(image => (
        <Cardd image={image}/>
       ) )} 
      <div class="Navbar">
         <h3>Kitap Listeleri </h3>
      {images.map(image => (
        <NameFilter image={image}/>   
       ) )}     
       </div>  
       
      <div class="Navbar">
      <h3>Kitap Boyutu 20 den Büyük Olanlar</h3>
       {x.map(image => (
        <NameFilter image={image}/>   
       ) )}    
       </div>
  
   </div>
  );
}
export default App;
