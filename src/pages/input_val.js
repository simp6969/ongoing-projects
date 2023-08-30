import { useEffect, useState } from "react";

export default function App() {
  const [isEmail, setIsEmail] = useState(false);
  function event_handler(event) {
    if (event.key == "Enter") {
      let val = event.target.value;

      if (val.includes("@")) {
        setIsEmail(true);
      } else {
        setIsEmail(false);
      }
    }
  }
  useEffect(() => console.log("hellow"));
  return (
    <div>
      <h1>enter your email address</h1>
      <input spellCheck="false" onKeyDown={event_handler}></input>
      <div
        style={
          isEmail
            ? {
                backgroundColor: "blue",
                width: "300px",
              }
            : { backgroundColor: "red", width: "300px" }
        }
      >
        valid
      </div>
    </div>
  );
}
