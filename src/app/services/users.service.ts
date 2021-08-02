import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public afs: AngularFirestore) { }

  save(usuario: User){
    const refUsuarios = this.afs.collection("usuarios");

    if(usuario.uid == null){
      usuario.uid = this.afs.createId();
      usuario.activo = true;
    }

    refUsuarios.doc(usuario.uid).set(Object.assign({}, usuario));
  }

  getUsers(): Observable<any[]>{
    return this.afs.collection("usuarios",
      ref => ref.where("activo", "==", true)
    ).valueChanges();
  }
}