import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateDeckForm from "../Decks/CreateDeckForm";
import DeckList from "../Decks/DeckList";
import DeckRoutes from "../Layout/DeckRoutes";
import Header from "./Header";
import NotFound from "./NotFound";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path={"/"}>
            <DeckList />
          </Route>
          <Route path={"/decks/new"}>
            <CreateDeckForm />
          </Route>
          <Route path={"/decks/:deckId"}>
            <DeckRoutes />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
