import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";


// class App extends React.Component {
//     render() {
//       console.log('Made by Luigi Benvenuti - http://www.luigibenvenuti.com/');
//       return(
//         <BrowserRouter>
//           <Switch>
//             <Route path={'/movie/:id'} component={Movie} />
//             <Route path={'/'} component={Search} />
//           </Switch>
//         </BrowserRouter>
//       );
//     }
//   }


ReactDOM.render(<App />, document.getElementById("root"));
