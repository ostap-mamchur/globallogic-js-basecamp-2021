import {Link, useRouteMatch} from "react-router-dom";
import {useEffect} from "react";
import api from "../../../api/planetApi";
import {MODE} from "../../../constants";
import {getDate} from "../../Users/UserForm/converter";
import {ID, ISWATER, NAME, TEMPERATURE, TIMESTAMP} from "../constans";
import Actions from './Actions';
import "./styles.css"

function PlanetsTable({planets, setPlanets}) {
    const {url} = useRouteMatch();
    useEffect(() => {
        api.getPlanets().then(setPlanets);
    }, [setPlanets]);
    return (
        <div className="ProductsTable">
            <Link to={`${url}/planet/${MODE.CREATE}`}>Create product</Link>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Temperature</th>
                    <th>IsWater</th>
                    <th>Last Updated At</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {planets.map(planet => (
                    <tr key={planet[ID]}>
                        <td>{planet[ID]}</td>
                        <td>{planet[NAME]}</td>
                        <td>{planet[TEMPERATURE]}</td>
                        <td>{Number(planet[ISWATER])}</td>
                        <td>{getDate(planet[TIMESTAMP])}</td>
                        <td>
                            <Actions id={planet[ID]}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlanetsTable;
