export class Carta {
  constructor(
    public id: string,
    public oracle_id: string,
    public name: string,
    public uri: string,
    public cmc: number,
    public type_line: string,
    public rarity: string,
    public colors: string[],
    public color_identity: string[],
    public image_uris?: { small: string; normal: string; large: string; png: string; art_crop: string; border_crop: string },
    public mana_cost?: string,
    public oracle_text?: string,
    public price?: number,
    public precio?: number,
    public keywords?: string[],
    public power?: string,
    public toughness?: string,
    public lang?: string
  ) {}

  static fromJson(json: any): Carta {
    return new Carta(
      json.id,
      json.oracle_id,
      json.name,
      json.uri,
      json.image_uris,
      json.mana_cost,
      json.cmc,
      json.type_line,
      json.rarity,
      json.oracle_text,
      json.colors,
      json.color_identity,
      json.price || 0,
      json.precio || 0,
      json.keywords,
      json.power,
      json.toughness,
      json.lang
    );
  }
}
