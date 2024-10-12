import React, {useState, useEffect, useRef} from "react";

function MyComponent(){
    
    const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    // Dọn dẹp khi component bị unmount
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <button onClick={() => clearInterval(timerRef.current)}>Dừng Timer</button>
    </div>
    );
}
export default MyComponent