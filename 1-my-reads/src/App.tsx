import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { StateProvider } from "./store/rootContext";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
function App() {
  // const { state } = useContext(BookContext);
  return (
    <div className="App">
      <Router>
        <StateProvider>
          <ChakraProvider>
            <Route exact path="/" component={Main} />
            <Route path="/search" component={Search} />
          </ChakraProvider>
        </StateProvider>
      </Router>
    </div>
  );
}

export default App;
