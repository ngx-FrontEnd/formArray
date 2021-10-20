import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      arr: this.fb.array([])
    })
    this.setField();
  }

  arrayValue = (): FormArray => {
    return this.form.get('arr') as FormArray;
  }

  setField = () => {
    return (this.form.get("arr") as FormArray).push(this.fb.group({
      name: [''],
      company: [''],
    }));

  }
  addNewCompany(): any {
    return (this.form.get("arr") as FormArray).push(this.fb.group({
      name: [''],
      company: [''],
    }))

  }

  deleteCompany(index: any) {
    let control = <FormArray>this.form.controls.arr;
    control.removeAt(index)
  }


}
