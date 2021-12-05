import React from "react";
import "./App.css";
import LaunchList from "./Components/LaunchList/LaunchList";
import Details from "./Components/Details/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.spacex.land/graphql/",
  }),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<LaunchList />} />
          <Route path=":mission" element={<Details />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
