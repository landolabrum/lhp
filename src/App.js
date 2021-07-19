import React from "react";
import "./App.css"
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

export default function App() {
  return (
    <HashRouter >
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route path="*" component={NoMatch}/>
        </Switch>
    </HashRouter>
  );
}

// export default function App(props) {
//   return (
//     <Container>
//       <Gradient />
//       <ViewOne items={data} />
//     </Container>
//   );
// }
