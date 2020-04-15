import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  @Input() control: FormControl = new FormControl();
  constructor() {}

  ngOnInit(): void {}

  getErrorMessage(name: string, value?: any) {
    const errors: any = {
      required: 'Ce champs est obligatoire',
      minlength: `Minimum length ${value.requiredLength}`,
      maxlength: `Maximum length ${value.requiredLength}`,
      pattern: 'Ce champs est invalid',
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
