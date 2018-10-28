import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mentors from "./pages/Mentors";
import About from "./pages/About";
import Search from "./pages/Search/Search";
import SignIn from "./pages/SignIn/Sign-In";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title/Title";
// import Title from "./components/Title";
import MentorCard from "./components/MentorCard/MentorCard";

import Movies from "./movie/movie";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/mentors" component={Mentors} />
        <Route exact path="/search" component={Search} />
        <Route extact path="/signIn" component={SignIn} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
