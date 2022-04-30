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
  convert() {
    var a = this.diagram?.instance.export();
    console.log(a);
  }
}
