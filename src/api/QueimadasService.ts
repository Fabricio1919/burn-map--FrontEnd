import axios from 'axios';
import { Queimada } from './types';

class QueimadasService {
  static async getAll(): Promise<Queimada[]> { 
    return await this.fetchQueimadasData(); 
  }

  static getById(_id: string) {
    throw new Error("Method not implemented.");
  }

  static async fetchQueimadasData(): Promise<Queimada[]> { 
    try {
      const response = await axios.get('http://127.0.0.1:8000/firedata/api/queimadas/');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados das queimadas:', error);
      return []; 
    }
  }
}

export default QueimadasService;
