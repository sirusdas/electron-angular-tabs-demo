import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-tab1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit, OnDestroy{
  constructor(){
    console.log('... tab1 called');
  }
  ngOnInit(){

  }
  ngOnDestroy() {
  }
  onSubmit(event: any) {}
}
