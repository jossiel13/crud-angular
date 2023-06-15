import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { $Employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private firestore:Firestore) { }

_getFire(id:any):Observable<any>{

return collectionData(collection(this.firestore,'users'),id);

}

_addFire(userData:any):Promise<any>{

  const data:$Employe=
    { 
      name:userData.value.name,
      lastName:userData.value.lastName,
      salary:userData.value.salary,
      dateCreate:new Date(),
      dateUpdate:new Date()
      }

return addDoc(collection(this.firestore,'users'),data);
                                                
  
}

_upFire(id:string,userData:any):Promise<any>{

  const data: $Employe = {
    name: userData.value.name,
    lastName: userData.value.lastName,
    salary: userData.value.salary,
    dateUpdate: new Date()
  }


  const docInstance = doc(this.firestore, 'users', id);

  const updateData = {
    name:data.name,
    lastName:data.lastName,
    salary:data.salary
  }

return updateDoc(docInstance,updateData);

}

_deleteFire(id:any){

return deleteDoc(doc(this.firestore,'users',id));

}

}
