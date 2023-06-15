import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent {

  title="";

  userData!:Observable<any>;

  id:string|null;

  showButton=false;
  showButtonUp=false;

constructor(private firestore: Firestore,
  private _employe:EmployeService,
            private router:Router,
            private aRoute:ActivatedRoute
  ){

this.id=this.aRoute.snapshot.paramMap.get('id');


if(this.id!=null){this.showButtonUp=true;this.title="Update Employe";}
else{this.showButton=true;this.title="Create Employe";}

}


addData(userData:any){

    this._employe._addFire(userData).then(()=>{console.log('Data Guardado');})
    .catch(e=>console.log(e));

}

editData(userData:any){

  if(userData===null){console.log('Los Campos Son Obligatorios'); return;}
  else
  {
    this.upEmploye(this.id,userData);
  }
}

async upEmploye(id:any,userData:any){
    
  this._employe._upFire(id,userData).then(()=>{this.router.navigate(['/list-employe']);
  console.log('Dato Actualizado');})
  .catch(e=>console.log(e));

}

}
