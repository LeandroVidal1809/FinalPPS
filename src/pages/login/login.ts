import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  list: AngularFireList<any>; 
  password:string;
  username:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,
    private _auth:AngularFireAuth) {
      this.list= af.list('/MascotasFinal');
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

 /**
 * @apiDefine login
 * @apiParam {string} Usuario/Email para ingresar.
 * @apiParam {string} Clave que Corresponda al usuario/Email ingresado.
 * @apiSuccess {String} Nombre del usuario.
 * @apiSuccess {String} Tipo de usuario.
 */
  async login(username:string,password:string)
  {
          
        await this._auth.auth.signInWithEmailAndPassword(this.username,this.password)
                        .then(result => { 
                          var Observable = this.list.snapshotChanges(['child_added'])
                          .subscribe(actions => {
                            this.navCtrl.setRoot(HomePage)
                          }
                        )})
                        .catch(error =>{alert("Error al ingresar!")})     
                       }
  }