import { Fetching } from "@/components/Fetch";
import { useEffect, useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((data) => data.json())
      .then((main) => setList(main.posts));
  }, []);
  console.log(list);
  return (
    <div className="outer">
      <div className="inner">
        <img src="Logo.svg"></img>
        <div className="centered_tab">
          <p>Home</p>
          <p>Blog</p>
          <p style={{ minWidth: "max-content" }}>Single Post</p>
          <p>Pages</p>
          <p>Contact</p>
          <input className="inputs" placeholder="search..."></input>
          <div className="theme">
            <img src="sunny.svg" height="28px"></img>
          </div>
        </div>
      </div>
      <div className="author">
        <div className="content">
          <div className="profile">
            <img src="image.png"></img>
            <div>
              <h1>John Doe</h1>
              <p>Collaborator & Editor</p>
            </div>
          </div>
          <div className="para">
            <p className="text">
              Meet Jonathan Doe, a passionate writer and blogger with a love for
              technology and travel. Jonathan holds a degree in Computer Science
              and has spent years working in the tech industry, gaining a deep
              understanding of the impact technology has on our lives.
            </p>
          </div>
          <div className="logos">
            <div className="icons">
              <img src="logo-facebook.svg"></img>
            </div>
            <div className="icons">
              <img src="logo-instagram.svg"></img>
            </div>
            <div className="icons">
              <img src="logo-twitter.svg"></img>
            </div>
            <div className="icons">
              <img src="logo-youtube.svg "></img>
            </div>
          </div>
        </div>
      </div>
      <div className="posts">
        <h1>posts</h1>
        <div className="files">
          {list.map((element) => {
            return (
              <div>
                <Fetching
                  title={element.title}
                  body={element.body}
                  id={element.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
