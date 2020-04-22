import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
type Position = 'top' | 'bottom';
@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  @Input() messagePosition: Position = 'top';
  constructor() {}

  ngOnInit(): void {}

  getErrorMessage(name: string, value?: any) {
    const errors: any = {
      required: 'Ce champs est obligatoire',
      minlength: `Minimum length ${value.requiredLength}`,
      maxlength: `Maximum length ${value.requiredLength}`,
      pattern: 'Ce champs est invalid',
      mustMatch: 'les mots de pass ne correspondent pas.Veuillez réessayer',
    };
    return errors[name];
  }
  get errorMessage() {
    for (const key in this.control.errors) {
      if (this.control.errors.hasOwnProperty(key)) {
        return this.getErrorMessage(
          key,
          this.control.errors?.[key] || undefined
        );
      }
    }
  }
}
