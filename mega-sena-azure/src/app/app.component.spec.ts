import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MegaSenaService } from './service/mega-sena.service';

describe('AppComponent', () => {
  beforeEach(async () => {

    const megaSenaServiceStub = {
      callMegaSenaLocal:() =>({
          subscribe:(next?: (arg:any)=> void, error?:(arg:any)=>void) => ({})
      }),
    }
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[HttpClient,
        {provide:MegaSenaService, useValue:megaSenaServiceStub}]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mega-sena-azure'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('BEM VINDO AO GERADOR MEGASENA');
  });

});
