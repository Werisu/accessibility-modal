import { ModalRef } from "./models/modal-ref";
import { Component, HostBinding, TemplateRef } from "@angular/core";
import { fade } from "../../animations/fade";
import { ModalConfig } from "./interfaces/modal-config";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade]
})
export class ModalComponent{
  @HostBinding('@fade') fade = true;
  public config!: ModalConfig;
  public modalRef!: ModalRef;
}
