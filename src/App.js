import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import logo from "./logo.png";
import Portrait from "./Portrait.png";
import telegram from "./telegram-brands.svg";
import whatsapp from "./whatsapp.svg";
import envelope from "./envelope.svg";
import github from "./github-brands.svg";
import pointer from "./feather-pointed-solid.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavLink />
        </header>

        <div className="head-info">
          <div className="head-text-wraper">
            <div className="head-text">
              <p className="head-text1">Web App Developer (Front-End)</p>
              <p className="head-text2">
                What kind of web App do you need? I am here to satisfy your
                need!
              </p>
            </div>
          </div>

          <div className="name-and-photo">
            <h1 className="name">Mathias Bekele</h1>
            <img
              className="portrait"
              src={Portrait}
              alt="Portrait of Mathias Bekele"
            />
          </div>
          <div className="wrapper">
            <div className="link-to-projects">
              <p>
                Explore Some of My Featured Works Below or click "Projects" tab
                above
              </p>
            </div>
            <div className="another-div"></div>
          </div>
        </div>
      </div>
      <About />
      <Contacts />
    </div>
  );
}
class NavLink extends React.Component {
  render() {
    return (
      <ul className="NavLink">
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
    );
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e) {
    e.preventDefault();
    this.setState({
      display: "block",
    });
  }
  render() {
    return (
      <div className="about">
        <div className="first">
          <h2>Get to Know Me</h2>
          <button className="show-cert" onClick={this.clickHandler}>
            Explore My Credentials
          </button>
          <div className="certificates" style={{ display: this.state.display }}>
            <a href="https://freecodecamp.org/certification/fcc3c89f9c4-29bb-40e5-b05c-32fb1676224f/responsive-web-design">
              <p>Responsive Web Design</p>
            </a>
            <a href="https://freecodecamp.org/certification/fcc3c89f9c4-29bb-40e5-b05c-32fb1676224f/javascript-algorithms-and-data-structures-v8">
              <p>JavaScript Algorithms and Data Structures</p>
            </a>
          </div>
        </div>
        <p className="description">
          "I’m a web app developer committed to building fast, responsive, and
          scalable applications. With a strong foundation in front-end and
          back-end development, I turn ideas into functional, user-centered
          digital solutions. Passionate about innovation and continuous
          learning, I strive to create seamless web experiences that stand out."
        </p>
        <div className="skills">
          <h3>Core Skills</h3>
          <ul>
            <li>
              <img src={pointer} alt="->" />
              &nbsp;{" "}
              <span>HTML, CSS, JS and React framework for front-end</span>
            </li>
            <li>
              <img src={pointer} alt="->" />
              &nbsp;
              <span>
                Node.js, Django for back-end and SQL, MongoDB for database
              </span>
            </li>
            <li>
              <img src={pointer} alt="->" />
              &nbsp; <span>Git and GitHub version control</span>
            </li>
            <li>
              <img src={pointer} alt="->" />
              &nbsp; <span>RESTful APIs</span>
            </li>
            <li>
              <img src={pointer} alt="->" />
              &nbsp; <span>AWS, Netlify and Docker deployment and hosting</span>
            </li>
            <li>
              <img src={pointer} alt="->" />
              &nbsp; <span>Problem solving</span>
            </li>
            <li>
              <img src={pointer} alt="->" />
              &nbsp; <span>Team work and agile collaboration</span>
            </li>
            <li>
              <img src={pointer} alt="->" />
              &nbsp; <span>Basic web security principles</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class Contacts extends React.Component {
  render() {
    return (
      <div className="contact-wrap">
        <h1>Get in Touch</h1>
        <div className="lets-create">
          <div className="pointer"></div>
          <h2>Let’s Create Something Great</h2>
        </div>

        <div className="contact-methods">
          <div className="direct">
            <p>Direct Message</p>
            <form>
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Eg. email@example.com" />
              <input
                type="text"
                placeholder="Any contact link or number if you prefer"
              />
              <textarea placeholder="Your Message here"></textarea>
              <button>Send</button>
            </form>
          </div>
          <div>
            <ul className="contact-links">
              <li>
                <a href="https://freecodecamp.org">
                  <img src={envelope} alt="Whatsapp" />
                  &nbsp; &nbsp;mathiastadesse@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/mathias-tad">
                  <img src={github} alt="Whatsapp" />
                  &nbsp; &nbsp;github.com/mathias-tad
                </a>
              </li>
              <li>
                <a href="https://t.me/Math_BK">
                  <img src={telegram} alt="Whatsapp" />
                  &nbsp; &nbsp;t.me/Math_BK
                </a>
              </li>
              <li>
                <a href="tel:+251915583452">
                  <img src={whatsapp} alt="Whatsapp" />
                  &nbsp; &nbsp;+251-915-583452
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="copy">&copy; Mathias Bekele</p>
      </div>
    );
  }
}

export default App;
