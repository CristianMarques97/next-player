import axios from "axios";
import Environment from "../../constants/environment/Environment";

const spotifyApi = axios.create({
    url: Environment.spotifyApi
})

export default spotifyApi