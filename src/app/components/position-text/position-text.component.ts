import { Component, Input } from '@angular/core';
import { GameService } from '../../service/game.service';

@Component({
  selector: 'app-position-text',
  templateUrl: './position-text.component.html',
  styleUrl: './position-text.component.css'
})
export class PositionTextComponent {
  @Input() val=2;
}
