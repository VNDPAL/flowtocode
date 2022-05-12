import { Component, ViewChild } from '@angular/core';
import { DxDiagramComponent } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(DxDiagramComponent, { static: false }) diagram:
    | DxDiagramComponent
    | undefined;

  title = 'flowtocode';
  diagm: any;

  convert() {
    this.diagm = this.diagram?.instance.export();
    console.log(this.diagm);
  }

  restore() {
    this.diagram?.instance.import(this.diagm);
  }

  click(val:any){
    console.log(val);
    alert(val.item.text);
  }
}
