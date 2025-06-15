import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-photo-pass-input',
  templateUrl: './photo-pass-input.component.html',
  styleUrls: ['./photo-pass-input.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class PhotoPassInputComponent {
  @Output() photoPassInputs = new EventEmitter();
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      inputs: this.fb.array([
        this.fb.group({ value: ['', Validators.required] }), // initial input field
      ]),
    });
  }

  get inputControls() {
    return this.myForm.get('inputs') as FormArray;
  }

  addInput() {
    this.inputControls.push(this.fb.group({ value: [''] }));
  }

  onSubmit() {
    this.photoPassInputs.emit(this.myForm.value.inputs);
    console.log(this.myForm.value.inputs);
  }
}
