export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;

  constructor(id = 0, name ='', description = '', price = 0, imageUrl = 'https://a.allegroimg.com/s512/118958/554fe5ba43a2907687bb5748995f/New-Balance-buty-do-biegania-meskie-M1260GB7-44-5'){
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    this.imageUrl = imageUrl
  }
}
