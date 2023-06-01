import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './service/task.service';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
    IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {

  title = 'angular-http-client';
  tasks: any;
  toastCtrl: any;

    constructor(
     private TaskService: TaskService
    ){}

    getAllTasks() {
      this.TaskService.getAllTasks()
      .subscribe(tasks => {
        console.log(tasks);
      });
    }

    getTask() {
      this.TaskService.getTasks('1')
      .subscribe(todo => {
        console.log(todo);
      });
    }

//     deleteTask(id: string, index: number){
//       this.TaskService.deleteTask(id)
//       .subscribe(() => {
//         this.tasks.splice(index, 1);
//         this.presentToast('Wasd');
//       })
//     }
//   presentToast(arg0: string) {
//     throw new Error('Method not implemented.');
//   }

//   async presentToast(message: string){
//     const toast = await this.toastCtrl.create({
//       message,
//       duration:3000
//     });
//     await toast.present();
//   }
 }
