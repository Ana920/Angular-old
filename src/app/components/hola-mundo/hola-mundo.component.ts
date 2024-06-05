import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {
  titulo: string = 'Hola Mundo desde el componente HolaMundoComponent';
  color: string = 'blue';
  //opcionalmente se le puede añadir public, pero, por defecto, lo hace así
  public alumnos: String[] = ['Juan', 'Pedro', 'Maria', 'Jose', 'Pepe'];
}
