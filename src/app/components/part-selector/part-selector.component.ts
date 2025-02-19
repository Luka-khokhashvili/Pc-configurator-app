import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-part-selector',
  imports: [],
  templateUrl: './part-selector.component.html',
  styleUrl: './part-selector.component.css',
})
export class PartSelectorComponent {
  @Input() partName!: string;

  Cpu1 = 'archive/dataset/cpu:id=1';

  description = {
    type: 'cpu',
    producer: 'AMD',
    model: 'Ryzen',
    gen: '5',
    version: '5600x',
    cores: 8,
    threads: 16,
    ghz: 4,
    price: 300,
  };
}
