import { Component, ViewChild, ElementRef, } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('carrerGoals', {static: false}) carrerGoals!: ElementRef<HTMLCanvasElement>;

  public isCompanyDescriptionVisible: boolean = false;

  public get isMobile(): boolean{
    return window.innerWidth <= 786;
  }

  constructor(private router: Router){

  }

  toggleCompanyDescription(): void {
    this.isCompanyDescriptionVisible = !this.isCompanyDescriptionVisible;
  }

  goToTest(){
    this.router.navigate(['/test'])
  }
}
