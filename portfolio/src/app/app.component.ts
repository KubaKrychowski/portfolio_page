import { Component, ViewChild, ElementRef, } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  @ViewChild('carrerGoals', {static: false}) carrerGoals!: ElementRef<HTMLCanvasElement>;

  public ctx!: CanvasRenderingContext2D | null;

  isCompanyDescriptionVisible: boolean = false;

  constructor(private router: Router){

  }

  ngAfterViewInit(): void {
    this.ctx = this.carrerGoals.nativeElement.getContext('2d');
    if(this.ctx){
      this.ctx.beginPath();
      this.ctx.lineTo(100,10);
      this.ctx.stroke();
    } else {
      console.log('ctx is not defined');
    }

  }

  toggleCompanyDescription(): void {
    this.isCompanyDescriptionVisible = !this.isCompanyDescriptionVisible;
  }

  goToTest(){
    this.router.navigate(['/test'])
  }
}
