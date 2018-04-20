import {Directive, Inject, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngx-datatable-row-detail-template]'
})
export class DatatableRowDetailTemplateDirective {
  constructor(@Inject(TemplateRef) public template: TemplateRef<any>) { }
}
