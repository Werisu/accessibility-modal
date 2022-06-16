import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalRef, ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('modal') public modalTemplateRef!: TemplateRef<any>;
  title = 'accessibility-2';
  public firstName = 'Wellysson';
  public modalRef!: ModalRef;

  constructor(private modalService: ModalService){}

  public show(content: TemplateRef<any>){
    this.modalRef = this.modalService.open({
      templateRef: content,
      title: 'User Details'
    })
  }
}
