import { Directive, ElementRef, HostListener, inject, input, Input } from '@angular/core';

@Directive({
  selector: '[appMydirective]',
})
export class Mydirective {

  ele = inject(ElementRef);

  constructor(){
   console.log(this.ele.nativeElement);
    //this.ele.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input('appMydirective')
  color: string | undefined;

  // @Input({ alias: 'myname', required: true })
  // name: string | undefined;
  myname = input.required<string>();

  @HostListener('mouseover')
  onMouseOver() {
    this.ele.nativeElement.style.color = this.color;
  }

  @HostListener('mouseout')
  onmyMouseOut() {
    this.ele.nativeElement.style.color = 'black';
  }

  @HostListener('click')
  OnClick() {
    alert('Clicked:' + this.myname())
  }

}
