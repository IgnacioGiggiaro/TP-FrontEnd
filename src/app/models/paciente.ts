export class Paciente {
  _id?: number;
  dni: string;
  nombre: string;
  apellido: string;
  telefono: string;
  mail: string;
  direccion: string;
  fecha_nac: Date;
  password: string;

  constructor(dni: string, nombre: string, apellido: string, telefono: string, mail: string, direccion: string, fecha_nac: Date, password: string) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.mail = mail;
    this.direccion = direccion;
    this.fecha_nac = fecha_nac;
    this.password = password;

  }
}
