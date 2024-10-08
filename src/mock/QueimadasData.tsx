// Definir a interface para a queimada
export interface Queimada {
  latitude: number;
  longitude: number;
  municipio: string;
  estado: string;
  diaSemChuva: number;
}

// Dados de queimadas
const QueimadasData: Queimada[] = [
  {
    latitude: -3.1019,
    longitude: -60.025,
    municipio: "Manaus",
    estado: "Amazonas",
    diaSemChuva: 12,
  },
  {
    latitude: -2.6283,
    longitude: -60.9431,
    municipio: "Parintins",
    estado: "Amazonas",
    diaSemChuva: 5,
  },
  {
    latitude: -3.3721,
    longitude: -64.7231,
    municipio: "Tefé",
    estado: "Amazonas",
    diaSemChuva: 9,
  },
  {
    latitude: -3.3614,
    longitude: -60.7292,
    municipio: "Itacoatiara",
    estado: "Amazonas",
    diaSemChuva: 7,
  },
  {
    latitude: -5.3859,
    longitude: -60.3736,
    municipio: "Humaitá",
    estado: "Amazonas",
    diaSemChuva: 15,
  },
  {
    latitude: -4.3155,
    longitude: -63.1926,
    municipio: "Coari",
    estado: "Amazonas",
    diaSemChuva: 8,
  },
  {
    latitude: -2.9059,
    longitude: -59.9976,
    municipio: "Presidente Figueiredo",
    estado: "Amazonas",
    diaSemChuva: 6,
  },
  {
    latitude: -7.5062,
    longitude: -63.0307,
    municipio: "Lábrea",
    estado: "Amazonas",
    diaSemChuva: 18,
  },
  {
    latitude: -3.4686,
    longitude: -62.5781,
    municipio: "Manacapuru",
    estado: "Amazonas",
    diaSemChuva: 11,
  },
  {
    latitude: -4.0899,
    longitude: -63.1412,
    municipio: "Codajás",
    estado: "Amazonas",
    diaSemChuva: 13,
  },
  {
    latitude: -8.7624,
    longitude: -67.6635,
    municipio: "Eirunepé",
    estado: "Amazonas",
    diaSemChuva: 10,
  },
  {
    latitude: -7.8484,
    longitude: -67.0703,
    municipio: "Envira",
    estado: "Amazonas",
    diaSemChuva: 14,
  },
];

export default QueimadasData;
