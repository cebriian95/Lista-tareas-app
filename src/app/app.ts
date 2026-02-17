import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Tareas } from './services/tareas';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  listaTareas: string[] = [];
  nuevaTarea: string = '';

  private _tareas = inject(Tareas);

  ngOnInit() {
    this.listaTareas = this._tareas.getTareas();
  }

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this._tareas.agregarTarea(this.nuevaTarea);
      this.listaTareas = this._tareas.getTareas();
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(index: number) {
    this._tareas.eliminarTarea(index);
    this.listaTareas = this._tareas.getTareas();
  }





}
