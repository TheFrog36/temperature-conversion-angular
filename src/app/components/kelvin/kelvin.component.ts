import { Component, OnInit } from '@angular/core';
import { ConverterService } from 'src/app/service/converter.service';

@Component({
  selector: 'app-kelvin',
  templateUrl: './kelvin.component.html',
  styleUrls: ['./kelvin.component.scss']
})
export class KelvinComponent implements OnInit {

  constructor(private converterServ: ConverterService) {
    converterServ.toKelvin().subscribe({
      next: v => this.value = v,
      error: err => console.log(err)
    })
  }

  value: number = 0

  ngOnInit(): void {
  }

  valueChange(){
    this.converterServ.nextKelvin(this.value);
  }

}
