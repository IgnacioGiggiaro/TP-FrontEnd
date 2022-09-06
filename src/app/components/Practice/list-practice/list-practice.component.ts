import { Component, OnInit } from '@angular/core';
import {Practice} from "../../../models/practice";
import {PracticeService} from "../../../services/practice.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list-practice',
  templateUrl: './list-practice.component.html',
  styleUrls: ['./list-practice.component.css']
})
export class ListPracticeComponent implements OnInit {
  listPractice: Practice[] = [];
  constructor(private _practiceService: PracticeService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPractice();
  }

  obtenerPractice(){
    this._practiceService.getPractices().subscribe(data=>{
      this.listPractice = (data);
      console.log(this.listPractice);
    }, error => {
      console.log(error);
    })
  }
  eliminarPractice(id: any) {
    this._practiceService.deletePractice(id).subscribe(data => {
      this.toastr.error('El paciente fue eliminado con exito' ,'Paciente Eliminado');
      this.obtenerPractice();
    }, error => {
      console.log(error);
    })
  }
}
