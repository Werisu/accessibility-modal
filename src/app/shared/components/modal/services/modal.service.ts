import { ModalComponent } from './../modal.component';
import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from "@angular/core";
import { ModalConfig } from "../interfaces/modal-config";
import { BodyInjectorService } from 'src/app/shared/services/body-injector';

@Injectable()
export class ModalService {

  private componentFactory!: ComponentFactory<ModalComponent>;

  constructor(componetFactoryResolver: ComponentFactoryResolver, private injector: Injector, private bodyInjector: BodyInjectorService) {
    this.componentFactory = componetFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef{
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    console.log(componentRef.instance);
    console.log('open called');
    this.bodyInjector.stackBeforeAppRoot(componentRef);
    return new ModalRef(componentRef);
  }

  private createComponentRef(): ComponentRef<ModalComponent>{
    return this.componentFactory.create(this.injector);
  }
}

export class ModalRef {

  constructor(private componentRef: ComponentRef<ModalComponent>) {

  }

  public close ():void {
    console.log('close called');
    this.componentRef.destroy();
  }
}
