export class ObraSocial {
  _id?: String;
  nombre: string;
  imgURL: string;

  constructor(nombre: string, imgURL: string, _id?: string) {
    this._id = _id;
    this.nombre = nombre;
    this.imgURL = imgURL;
  }
}
