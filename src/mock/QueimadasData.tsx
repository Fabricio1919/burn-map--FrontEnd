export interface MunicipioAfetado {
  nome: string;
  quantidade: number;
}

export interface Queimada {
  latitude: number;
  longitude: number;
  estado: string;
  diaSemChuva: number;
  intensidade: string;
  periodo: string;
  quantidade: number;
  municipios: MunicipioAfetado[];
  coords: [number, number][];
}

const mapIntensity = (intensity: number): string => {
  if (intensity < 40) return "baixo";
  if (intensity < 70) return "médio";
  return "alto";
};

export const QueimadasData: Queimada[] = [
  {
    latitude: -8.7759,
    longitude: -70.535,
    estado: "Acre",
    diaSemChuva: 12,
    intensidade: mapIntensity(75), // "alto"
    periodo: "2024",
    quantidade: 150,
    municipios: [
      { nome: "Rio Branco", quantidade: 70 },
      { nome: "Cruzeiro do Sul", quantidade: 40 },
      { nome: "Senador Guiomard", quantidade: 20 },
      { nome: "Tarauacá", quantidade: 15 },
      { nome: "Feijó", quantidade: 5 },
    ],
    coords: [
      [-9.9744, -67.7322],
      [-9.2, -66.5],
      [-10, -67],
    ],
  },
  {
    latitude: -9.5636,
    longitude: -36.782,
    estado: "Alagoas",
    diaSemChuva: 5,
    intensidade: mapIntensity(50), // "médio"
    periodo: "2024",
    quantidade: 90,
    municipios: [
      { nome: "Maceió", quantidade: 40 },
      { nome: "Arapiraca", quantidade: 25 },
      { nome: "Palmeira dos Índios", quantidade: 10 },
      { nome: "Penedo", quantidade: 10 },
      { nome: "Rio Largo", quantidade: 5 },
    ],
    coords: [
      [-9.5717, -36.782],
      [-9.5, -37.0],
      [-9.3, -37.2],
    ],
  },
  {
    latitude: 0.0467,
    longitude: -51.073,
    estado: "Amapá",
    diaSemChuva: 9,
    intensidade: mapIntensity(60), // "médio"
    periodo: "2024",
    quantidade: 80,
    municipios: [
      { nome: "Macapá", quantidade: 30 },
      { nome: "Santana", quantidade: 25 },
      { nome: "Laranjal do Jari", quantidade: 15 },
      { nome: "Mazagão", quantidade: 5 },
      { nome: "Oiapoque", quantidade: 5 },
    ],
    coords: [
      [0.0467, -51.073],
      [0.5, -51.0],
      [0.0, -51.2],
    ],
  },
  {
    latitude: -3.4166,
    longitude: -65.856,
    estado: "Amazonas",
    diaSemChuva: 7,
    intensidade: mapIntensity(80), // "alto"
    periodo: "2024",
    quantidade: 200,
    municipios: [
      { nome: "Manaus", quantidade: 100 },
      { nome: "Itacoatiara", quantidade: 40 },
      { nome: "Tefé", quantidade: 30 },
      { nome: "Coari", quantidade: 20 },
      { nome: "Manacapuru", quantidade: 10 },
    ],
    coords: [
      [-3.1019, -60.025],
      [-3.5, -60.5],
      [-3.5, -59.0],
    ],
  },
  {
    latitude: -12.9714,
    longitude: -38.5014,
    estado: "Bahia",
    diaSemChuva: 15,
    intensidade: mapIntensity(70), // "alto"
    periodo: "2024",
    quantidade: 160,
    municipios: [
      { nome: "Salvador", quantidade: 70 },
      { nome: "Feira de Santana", quantidade: 40 },
      { nome: "Vitória da Conquista", quantidade: 25 },
      { nome: "Ilhéus", quantidade: 15 },
      { nome: "Itabuna", quantidade: 10 },
    ],
    coords: [
      [-12.9714, -38.5014],
      [-12.5, -38.8],
      [-12.5, -39.0],
    ],
  },
  {
    latitude: -3.7172,
    longitude: -38.5433,
    estado: "Ceará",
    diaSemChuva: 8,
    intensidade: mapIntensity(65), // "médio"
    periodo: "2024",
    quantidade: 120,
    municipios: [
      { nome: "Fortaleza", quantidade: 60 },
      { nome: "Caucaia", quantidade: 25 },
      { nome: "Maracanaú", quantidade: 15 },
      { nome: "Sobral", quantidade: 10 },
      { nome: "Crato", quantidade: 10 },
    ],
    coords: [
      [-3.7172, -38.5433],
      [-4.0, -38.5],
      [-3.5, -39.0],
    ],
  },
  {
    latitude: -15.7801,
    longitude: -47.9292,
    estado: "Distrito Federal",
    diaSemChuva: 10,
    intensidade: mapIntensity(55), // "médio"
    periodo: "2024",
    quantidade: 40,
    municipios: [
      { nome: "Brasília", quantidade: 30 },
      { nome: "Gama", quantidade: 5 },
      { nome: "Taguatinga", quantidade: 3 },
      { nome: "Ceilândia", quantidade: 1 },
      { nome: "Águas Claras", quantidade: 1 },
    ],
    coords: [
      [-15.7801, -47.9292],
      [-15.5, -47.0],
      [-15.7, -47.5],
    ],
  },
  {
    latitude: -20.3155,
    longitude: -40.3128,
    estado: "Espírito Santo",
    diaSemChuva: 3,
    intensidade: mapIntensity(50), // "médio"
    periodo: "2024",
    quantidade: 30,
    municipios: [
      { nome: "Vitória", quantidade: 10 },
      { nome: "Vila Velha", quantidade: 10 },
      { nome: "Serra", quantidade: 5 },
      { nome: "Cariacica", quantidade: 3 },
      { nome: "Colatina", quantidade: 2 },
    ],
    coords: [
      [-20.3155, -40.3128],
      [-20.0, -40.5],
      [-20.5, -40.0],
    ],
  },
  {
    latitude: -15.5982,
    longitude: -49.2643,
    estado: "Goiás",
    diaSemChuva: 4,
    intensidade: mapIntensity(30), // "baixo"
    periodo: "2024",
    quantidade: 70,
    municipios: [
      { nome: "Goiânia", quantidade: 30 },
      { nome: "Anápolis", quantidade: 15 },
      { nome: "Aparecida de Goiânia", quantidade: 10 },
      { nome: "Rio Verde", quantidade: 8 },
      { nome: "Catalão", quantidade: 7 },
    ],
    coords: [
      [-15.5982, -49.2643],
      [-15.5, -49.0],
      [-15.3, -49.5],
    ],
  },
  {
    latitude: -2.5511,
    longitude: -44.2982,
    estado: "Maranhão",
    diaSemChuva: 5,
    intensidade: mapIntensity(40), // "médio"
    periodo: "2024",
    quantidade: 100,
    municipios: [
      { nome: "São Luís", quantidade: 50 },
      { nome: "Imperatriz", quantidade: 25 },
      { nome: "Caxias", quantidade: 10 },
      { nome: "Bacabal", quantidade: 10 },
      { nome: "Codó", quantidade: 5 },
    ],
    coords: [
      [-2.5511, -44.2982],
      [-2.5, -44.5],
      [-2.6, -44.0],
    ],
  },
  {
    latitude: -12.2508,
    longitude: -55.0402,
    estado: "Mato Grosso",
    diaSemChuva: 6,
    intensidade: mapIntensity(65), // "médio"
    periodo: "2024",
    quantidade: 110,
    municipios: [
      { nome: "Cuiabá", quantidade: 50 },
      { nome: "Várzea Grande", quantidade: 30 },
      { nome: "Rondonópolis", quantidade: 15 },
      { nome: "Sinop", quantidade: 10 },
      { nome: "Tangará da Serra", quantidade: 5 },
    ],
    coords: [
      [-12.2508, -55.0402],
      [-12.0, -55.5],
      [-12.5, -54.5],
    ],
  },
  {
    latitude: -14.2350,
    longitude: -56.4694,
    estado: "Mato Grosso do Sul",
    diaSemChuva: 7,
    intensidade: mapIntensity(70), // "alto"
    periodo: "2024",
    quantidade: 140,
    municipios: [
      { nome: "Campo Grande", quantidade: 70 },
      { nome: "Dourados", quantidade: 30 },
      { nome: "Três Lagoas", quantidade: 20 },
      { nome: "Corumbá", quantidade: 10 },
      { nome: "Ponta Porã", quantidade: 10 },
    ],
    coords: [
      [-14.2350, -56.4694],
      [-14.0, -56.5],
      [-14.5, -56.0],
    ],
  },
  {
    latitude: -16.9926,
    longitude: -49.1021,
    estado: "Minas Gerais",
    diaSemChuva: 10,
    intensidade: mapIntensity(75), // "alto"
    periodo: "2024",
    quantidade: 200,
    municipios: [
      { nome: "Belo Horizonte", quantidade: 80 },
      { nome: "Uberlândia", quantidade: 50 },
      { nome: "Contagem", quantidade: 30 },
      { nome: "Juiz de Fora", quantidade: 20 },
      { nome: "Governador Valadares", quantidade: 10 },
    ],
    coords: [
      [-16.9926, -49.1021],
      [-16.5, -49.0],
      [-17.0, -49.5],
    ],
  },
  {
    latitude: -20.3155,
    longitude: -40.3128,
    estado: "Espírito Santo",
    diaSemChuva: 3,
    intensidade: mapIntensity(50), // "médio"
    periodo: "2024",
    quantidade: 30,
    municipios: [
      { nome: "Vitória", quantidade: 10 },
      { nome: "Vila Velha", quantidade: 10 },
      { nome: "Serra", quantidade: 5 },
      { nome: "Cariacica", quantidade: 3 },
      { nome: "Colatina", quantidade: 2 },
    ],
    coords: [
      [-20.3155, -40.3128],
      [-20.0, -40.5],
      [-20.5, -40.0],
    ],
  },
  {
    latitude: -3.5952,
    longitude: -38.7437,
    estado: "Ceará",
    diaSemChuva: 12,
    intensidade: mapIntensity(55), // "médio"
    periodo: "2024",
    quantidade: 90,
    municipios: [
      { nome: "Fortaleza", quantidade: 40 },
      { nome: "Caucaia", quantidade: 25 },
      { nome: "Maracanaú", quantidade: 15 },
      { nome: "Sobral", quantidade: 5 },
      { nome: "Crato", quantidade: 5 },
    ],
    coords: [
      [-3.5952, -38.7437],
      [-3.5, -39.0],
      [-3.7, -38.8],
    ],
  },
];

