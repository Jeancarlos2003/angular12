import { Component } from '@angular/core';
import { MarerialModule } from '../../marerial/marerial.module';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MarerialModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  value = 'clear me';

  lista = [

    {
    
    nombre: 'Juan',
    
    id: 1
    
    },
    
    {
    
    nombre: 'Pedro',
    
    id: 2
    
    },
    
    {
    
    nombre: 'Maria',
    
    id: 3
    
    },
    
    {
    
    nombre: 'Jose',
    
    id: 4
    
    },
    
    {
    
    nombre: 'Luis',
    
    id: 5
    
    },
    
    {
    
    nombre: 'Ana',
    
    id: 6
    
    }
    
    ]

}
