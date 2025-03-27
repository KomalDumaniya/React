import { useEffect, useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
    </div>
  );
}

export default App;