import { useState } from "react";
import { useEffect } from "react";

export function Fetching(props) {
  const [photo, setPhoto] = useState();
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=1")
      .then((res) => res.json())
      .then((data) => setPhoto(data[0].url));
  }, []);
  return (
    <div className="maping">
      <div className="thumbnail">
        <img src={photo} height="240px" width="360px"></img>
      </div>
      <div className="text_contents">
        <p className="h1">{props.title}</p>
        <p>{props.body}</p>
      </div>
    </div>
  );
}
