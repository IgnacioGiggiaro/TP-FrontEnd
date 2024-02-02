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

  token: string | null = null;
  master: string | null = null;
  constructor(public obraSocialService : ObraSocialService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null)
    {
      this.token= localStorage.getItem('token');
    }
    else{
      this.token = null;
    }
    if(localStorage.getItem('master')!=null)
    {
      this.master= localStorage.getItem('master');;
    }
    else{
      this.master = null;
    }
    this.getObrasSociales();
  }

  getObrasSociales() {
    this.obraSocialService.getOSs().subscribe(
      data=>{
        console.log(data);
        this.listOS= (data);
      }, error => {
        console.log(error)
      }
    )
  }

  deleteObraSocial(_id: any){
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
