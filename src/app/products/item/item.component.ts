import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() src!: string;
  @Input() name!: string;
  @Input() price!: string;
  @Input() currency!: string;
  @Input() country_code!: string;
}
