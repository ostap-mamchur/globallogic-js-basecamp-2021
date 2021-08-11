import data from "./db"
import { createGetId, getTimestamp, throwError, wait } from '../utisl';

const getId = createGetId(data.length);

const api = {
    // GET planets
    async getPlanets() {
        await wait(1000);
        console.log("GET /products", data);
        return data;
    },
    // GET planet
    async getPlanet(id) {
        await wait(1000);

        const planet = data.find(pl => pl.id === id);

        if (planet) {
            console.log(`GET /users/${planet.id}`, planet);
            return planet;
        } else {
            throwError(id);
        }
    },
    // POST /planets
    async createPlanet(planet) {
        await wait();

        const newPlanet = {
            ...planet,
            id: getId(),
            timestamp: getTimestamp(),
        };

        data.push(newPlanet);

        console.log('POST /planets', newPlanet);
        return newPlanet;
    },
    async editPlanet(planet) {
        await wait();
        const index = data.findIndex(pl => pl.id === planet.id);

        if (~index) {
            data[index] = {
                ...planet,
                timestamp: getTimestamp(),
            };

            console.log('PUT /planets', data[index]);
            return data[index];
        } else {
            throwError(planet.id);
        }
    },
    async deletePlanet(planet) {
        await wait();

        const index = data.findIndex(pl => pl.id === planet.id);

        if (~index) {
            console.log('DELETE /planets', planet);
            return data.splice(index, 1);
        } else {
            throwError(planet.id);
        }
    }
}

export default api;
