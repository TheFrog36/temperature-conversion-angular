import { Component, OnInit } from '@angular/core';
import { ConverterService } from 'src/app/service/converter.service';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.scss']
})
export class FahrenheitComponent implements OnInit {

  constructor( public converterServ: ConverterService) {  //Services MUST have public or private
    converterServ.toFahrenheit().subscribe({
      next: v => this.value = v,
      error: err => console.log(err)
    })
  }

  value: number = 0

  ngOnInit(): void {
  }

  valueChange(){
    // this.converterServ.nextFahrenheit(this.value);
  }

}
