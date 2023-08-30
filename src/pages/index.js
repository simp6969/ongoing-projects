import { Fetching } from "@/components/Fetch";
import { useEffect, useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [link, setLink] = useState("https://dummyjson.com/posts/");
  useEffect(() => {
    fetch(link)
      .then((data) => data.json())
      .then((main) => setList(main.posts));
  }, []);
  function inputHandler(event) {
    if (event.key == "Enter") {
      setLink(link + event.target.value);
      console.log(link);
      fetch(link);
    }
  }
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
          <input
            onKeyDown={inputHandler}
            className="inputs"
            placeholder="search..."
          ></input>
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
      <div className="footer">
        <div className="content_of_foot">
          <div className="content_of_foot2">
            <h1>About</h1>
            <p1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p1>
          </div>
          <div className="contact_info">
            <p>email: some1@example.com</p>
            <p>phone number: 99696999</p>
          </div>
          <div className="copyright_info">
            <img src="Logo.svg"></img>
            <div className="privacy">
              <div>cookies</div>
              <div>Terms of use</div>
              <div>privacy policy</div>
            </div>
          </div>
        </div>
        <div className="links">
          <div className="link_content1">
            <h1>Links</h1>
            <p>Home</p>
            <p>About</p>
            <p>Blogs</p>
            <p>Archived</p>
            <p>author</p>
            <p>Contact</p>
          </div>
          <div className="link_content2">
            <h1>Category</h1>
            <p>LifeStyle</p>
            <p>Technology</p>
            <p>travel</p>
            <p>Bussiness</p>
            <p>Economy</p>
            <p>Sports</p>
          </div>
        </div>
        <div className="newsletter">
          <h1>Weekly newsletter</h1>
          <p>get blogs and offers via email</p>
          <div className="get_email">
            <input className="email" placeholder="email"></input>
            <img height="48px" src="mail.svg"></img>
          </div>
          <div className="subscribe">Subscribe</div>
        </div>
      </div>
    </div>
  );
}
