import axios from "axios";
import { AMQ } from "./types";

class QueimadasService {
  static async getAll(): Promise<AMQ[]> {
    return await this.fetchQueimadasData();
  }

  static getById(_id: string) {
    throw new Error("Method not implemented.");
  }

  static async fetchQueimadasData(): Promise<AMQ[]> {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/firedata/api/queimadas/"
      );
      // Aqui, estamos assumindo que a resposta tem a propriedade 'dados' com o array que você precisa
      return response.data.dados; // Retorna o array de dados
    } catch (error) {
      console.error("Erro ao buscar dados das queimadas:", error);
      return []; // Retorna um array vazio caso ocorra algum erro
    }
  }
}

export default QueimadasService;
