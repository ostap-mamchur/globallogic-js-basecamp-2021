import {Route, Switch, useRouteMatch} from "react-router-dom";
import {useState} from "react";
import PlanetsTable from "./PlanetsTable";
import { MODE } from '../../constants';
import PlanetForm from './PlanetForm';
import NotFound from '../NotFound';

function Planets() {
    const { path } = useRouteMatch();
    const [planets, setPlanets] = useState([]);

    return (
        <div className="products">
            <Switch>
                <Route exact path={path}>
                    <PlanetsTable planets={planets} setPlanets={setPlanets}/>
                </Route>
              <Route exact path={`${path}/planet/:mode(${MODE.VIEW}|${MODE.CREATE}|${MODE.EDIT}|${MODE.CLONE})/:id?`}>
                <PlanetForm planets={planets} setPlanets={setPlanets} />
              </Route>
              <Route>
                <NotFound/>
              </Route>
            </Switch>
        </div>
    )
}

export default Planets;