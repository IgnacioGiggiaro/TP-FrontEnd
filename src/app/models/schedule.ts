export class Schedule {
  _id?: String;
  dia: string;
  hsDesde: number;
  hsHasta: number;
  state: boolean;

  constructor(dia: string, hsDesde: number, hsHasta: number, state: boolean) {
    this.dia = dia;
    this.hsDesde = hsDesde;
    this.hsHasta = hsHasta;
    this.state = state;
  }
}
