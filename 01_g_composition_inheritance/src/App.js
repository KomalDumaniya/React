import {Imagecard, Textcard, Videocard } from './components/Card';
import image from "./media/example.jpg";
import video from "./media/example.mp4"
import './App.css';

const App = () => {
  const imageCard = {
    title: "ImageCard",
    image: image,
    description: "This is ImageCard",
  }

  const videoCard = {
    title: "VideoCard",
    video: video,
    description: "This is VideoCard ",
  }

  const textCard = {
    title: "TextCard",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolorem, dignissimos nesciunt debitis exercitationem sapiente temporibus ipsum nam inventore quia ullam sed.",
  }
  
  return (
    <div className="card-container">
      <Imagecard imageCard={imageCard} />
      <Textcard textCard={textCard} />
      <Videocard videoCard={videoCard} />
    </div>
  );
};

export default App;
