export class Turno {
  _id?:number;
  dia:string;
  paciente:string  ;
  obraSocial:string ;
  professional:string ;
  practica:string ;
  hsDesde:string ;
  hsHasta: string;


  constructor(dia:string, paciente:string,obraSocial:string ,professional:string ,practica:string,hsDesde:string,hsHasta: string ) {
    this.dia=dia;
    this.paciente=paciente;
    this.obraSocial=obraSocial;
    this.professional=professional;
    this.practica=practica;
    this.hsDesde=hsHasta;
    this.hsHasta=hsHasta;


  }
}
