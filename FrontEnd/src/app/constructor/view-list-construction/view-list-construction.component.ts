import {AfterViewInit, Component} from '@angular/core';
import {ConstructionControllerService} from "../../services/services/construction-controller.service";
import {Construction} from "../../services/models/construction";

@Component({
  selector: 'app-view-list-construction',
  templateUrl: './view-list-construction.component.html',
  styleUrls: ['./view-list-construction.component.css']
})
export class ViewListConstructionComponent implements AfterViewInit {
  constructor(private constructionService: ConstructionControllerService) {
  }

  constructionList: Array<Construction> = []

  public getConstructionList(): void {
    this.constructionService.getConstructions().subscribe({
      next: (res) => this.constructionList = res
    })
  }

  ngAfterViewInit() {
    this.getConstructionList()
  }
}
