import { Component, OnInit } from '@angular/core';
import { ConverterService } from 'src/app/service/converter.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(private converterServ: ConverterService) {
    converterServ.value.subscribe({
      next: v => this.value = v,
      error: err => console.log(err)
    })
  }



  value: number = 0

  ngOnInit(): void {
  }

  valueChange(){
    this.converterServ.value.next(this.value);
  }
}
