import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ObraSocialService} from "../../../services/obra-social.service"
import {ObraSocial} from "../../../models/obraSocial";

@Component({
  selector: 'app-list-os',
  templateUrl: './list-os.component.html',
  styleUrls: ['./list-os.component.css']
})
export class ListOSComponent implements OnInit {
  listOS: ObraSocial[]=[];
  constructor(public obraSocialService : ObraSocialService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getObrasSociales();
  }

  getObrasSociales() {
    this.obraSocialService.getOSs().subscribe(
      data=>{
        this.listOS= (data);
      }, error => {
        console.log(error)
      }
    )
  }

  deleteObraSocial(_id: String){
    this.obraSocialService.deleteOS(_id).subscribe(
      data=>{
        this.toastr.error('The OS has been successfully removed', 'OS deleted!' )
        this.getObrasSociales();
      }, error => {
        console.log(error)
      }
    )
  }
}
