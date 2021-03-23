import axios from "axios";

// home level create state or hooks to get data... THE PAGE LEVEL
export default {
    getRandomPeople() {
        return axios.get("https://randomuser.me/api/?results=50")
    }
}