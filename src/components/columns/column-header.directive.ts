import {Directive, Inject, TemplateRef} from '@angular/core';

@Directive({ selector: '[ngx-datatable-header-template]' })
export class DataTableColumnHeaderDirective {
  constructor(@Inject(TemplateRef) public template: TemplateRef<any>) { }
}
