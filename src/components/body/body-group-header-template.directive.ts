import {Directive, Inject, TemplateRef} from '@angular/core';

@Directive({
  selector: '[ngx-datatable-group-header-template]'
})
export class DatatableGroupHeaderTemplateDirective {
  constructor(@Inject(TemplateRef) public template: TemplateRef<any>) { }
}
