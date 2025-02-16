import { Component } from '@angular/core';

@Component({
  selector: 'app-part-selector',
  imports: [],
  templateUrl: './part-selector.component.html',
  styleUrl: './part-selector.component.css',
})
export class PartSelectorComponent {
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
