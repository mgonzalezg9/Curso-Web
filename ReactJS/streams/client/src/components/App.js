import React from "react";
import { MemoryRouter as Router, Link, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page One <Link to="/pagetwo">Navigate to page two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two <Link to="/">Navigate to page one</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </Router>
    </div>
  );
};

export default App;
