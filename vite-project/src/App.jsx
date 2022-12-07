import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


const YoutubeComponent = (props) => {
  return (
    <div className="container">
      <img src={props.thumbnailImg} />
      <div className="content">
        <p>{props.videoTitle}</p>
        <p>{props.uploader}</p>
        <p>{props.videoUploaded}</p>
        <p>{props.videoViews}</p>
      </div>
    </div>
  );
};


function App() {
  

//   return (
//     <div className="App">
//       <YoutubeComponent thumbnailImg = "https://via.placeholder.com/600x400" />
//       <YoutubeComponent videoTitle = "Why a cheeseburger?"
//         uploader="Mark"
//         videoUploaded="11/30/2022"
//         videoViews= "100"
//       />
//       <YoutubeComponent
//         thumbnailImg="https://via.placeholder.com/600x400/000000/FFFFFF/?text=placeholder image"
//         videoTitle="Luis's big break"
//         uploader="Luis"
//         videoUploaded="11/30/2022"
//         videoViews= "200"
//       />
//       <YoutubeComponent
//         thumbnailImg="https://via.placeholder.com/600x400/000000/FFFFFF/?text=placeholder image"
//         videoTitle="How to make a taco"
//         uploader="CookingFoods"
//         videoUploaded="11/28/2022"
//         videoViews= "300"
//       />
//     </div>
  
// )}

let sampleData = [
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "He did WHAT?!?! (My intial reaction)",
    videoUploader: "MaxTongster",
    dateVideoUploaded: "10-31-2022",
    videoViews: 10
  },
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "I bought my best friend a Tesla (EMOTIONAL)",
    videoUploader: "Dave Doughbrick",
    dateVideoUploaded: "11-02-2022",
    videoViews: 300000
  },
  {
    thumbnailImg: "https://via.placeholder.com/600x400",
    videoTitle: "React in 100 seconds",
    videoUploader: "Fireship",
    dateVideoUploaded: "2022-09-08",
    videoViews: 255
  }
];
    return (
      <div className="app-container">
      {
        sampleData.map(element => (
          <YoutubeComponent
          thumbnailImg={element.thumbnailImg}
          videoTitle={element.videoTitle}
          uploader={element.uploader}
          videoUploaded={element.videoUploaded}
          videoViews={element.videoViews}
          />
          
        ))
      }
    
    </div>
      )}
    export default App
    
