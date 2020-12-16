import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PokemonBrowser from "./components/PokemonBrowser";
import { getPokemon } from './store/pokemon'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={["/", "/pokemon", "/pokemon/:pokemonId"]}
          exact
        >
          <PokemonBrowser />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
