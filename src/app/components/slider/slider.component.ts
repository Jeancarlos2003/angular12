import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MarerialModule } from '../../marerial/marerial.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MarerialModule, FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @Input() title: string = '';
  @Output() emisor = new EventEmitter<number>();
  value = 0;



  cambioSlider(valor: number){
    this.emisor.emit(valor);

}

}



