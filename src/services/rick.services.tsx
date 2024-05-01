import { Personajes } from "@/interfaces/CharactersInterface";
import axios from "axios";
export async function getPersonajesApi(endpointUrl: any) {
  try {
    const response = await axios.get(endpointUrl);
    const result: Personajes = await response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
}
