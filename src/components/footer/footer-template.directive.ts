import {Directive, Inject, TemplateRef} from '@angular/core';

@Directive({ selector: '[ngx-datatable-footer-template]' })
export class DataTableFooterTemplateDirective {
  constructor(@Inject(TemplateRef) public template: TemplateRef<any>) { }
}
