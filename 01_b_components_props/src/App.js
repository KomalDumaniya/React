import { Userprofile } from "./components/Userprofile";
import image from "./image/komal.jpg";

const App = () => {
  const user = {
    name: "Komal Dumaniya",
    image: image,
    bio: "I am Komal Dumaniya. I am Learning Props in react."
  };

  return (
    <div>
      <Userprofile user={user}/>
    </div>
  );
};
export default App;

