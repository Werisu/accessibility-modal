import { OnInit } from '@angular/core';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fade } from './shared/animations/fade';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef!: TemplateRef<any>;
  title = 'accessibility-2';
  public firstName = 'Wellysson';
  public modalRef!: ModalRef;
  public info = false;
  public form!: FormGroup;

  constructor(private modalService: ModalService, private formBuild: FormBuilder){}

  public ngOnInit(): void {
    this.form = this.formBuild.group({
      firstName: ['Wellysson', Validators.required],
      surName: ['', Validators.required],
      age: ['', Validators.required],
      info: [false]
    })
  }

  public show(content: TemplateRef<any>){
    this.modalRef = this.modalService.open({
      templateRef: content,
      title: 'User Details'
    });
  }

  public submit(): void{
    if (this.form.invalid) {
      return
    }

    console.log(this.form.value);
    this.modalRef.close();
  }
}
