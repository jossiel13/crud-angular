import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent {

  userData!:Observable<any>;

  constructor(private _employe:EmployeService){

    this.getData();

  }


getData(){

  //this._employe._getFire({idField:'id'}).subscribe(data=>{console.log(data)});

  this.userData=this._employe._getFire({idField:'id'});

}

deleteData(id:any){

  this._employe._deleteFire(id).then(() => console.log('Dato Borrado'));

}

}
