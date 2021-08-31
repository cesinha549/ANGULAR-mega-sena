import { Component, OnInit } from '@angular/core';
import { MegaSenaService } from './service/mega-sena.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'BEM VINDO AO GERADOR MEGASENA';
  gameResult: Array<number> = new Array<number>();
  constructor(private service: MegaSenaService) { }
  ngOnInit(): void {
    //this.callMegaSena();
  }

  public callMegaSena() {
    this.service.callMegaSenaLocal().subscribe((res)=>{
      this.gameResult = res;
      console.log(res)
    })
  }

}
