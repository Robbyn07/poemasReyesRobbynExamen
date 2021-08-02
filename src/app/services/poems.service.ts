import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Poem } from '../domain/poem';

@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  constructor(public afs: AngularFirestore) { }

  save(poema: Poem){
    const refPoemas = this.afs.collection("poemas");

    if(poema.uid == null){
      poema.uid = this.afs.createId();
      poema.activo = true;
      poema.fecha = new Date().toISOString();
    }

    refPoemas.doc(poema.uid).set(Object.assign({}, poema));
  }

  getPoemas(): Observable<any[]>{
    return this.afs.collection("poemas",
      ref => ref.where("activo", "==", true)
    ).valueChanges();
  }
}
