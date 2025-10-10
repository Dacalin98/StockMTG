export class Carta {
  id?: string;
  oracle_id?: string;
  name?: string;
  uri?: string;
  cmc?: number;
  type_line?: string;
  rarity?: string;
  colors?: string[];
  color_identity?: string[];
  image_uris?: {
    small: string;
    normal: string;
    large: string;
    png: string;
    art_crop: string;
    border_crop: string;
  };
  mana_cost?: string;
  oracle_text?: string;
  price?: number;
  keywords?: string[];
  power?: string;
  toughness?: string;
  lang?: string;
  card_faces?: Array<{
    name: string;
    image_uris: {
      small: string;
      normal: string;
      large: string;
      png: string;
      art_crop: string;
      border_crop: string;
    };
  }>;

  constructor(data: Partial<Carta>) {
    this.id = data.id;
    this.oracle_id = data.oracle_id;
    this.name = data.name;
    this.uri = data.uri;
    this.cmc = data.cmc;
    this.type_line = data.type_line;
    this.rarity = data.rarity;
    this.colors = data.colors;
    this.color_identity = data.color_identity;
    this.image_uris = data.image_uris;
    this.mana_cost = data.mana_cost;
    this.oracle_text = data.oracle_text;
    this.price = data.price;
    this.keywords = data.keywords;
    this.power = data.power;
    this.toughness = data.toughness;
    this.lang = data.lang;
    this.card_faces = data.card_faces;
  }

  static fromJson(json: any): Carta {
    return new Carta(json);
  }
}
