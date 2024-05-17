import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iso3166Pipe } from '../iso3166.pipe';
import { ScaleOnHoverDirective } from '../scale-on-hover.directive';
import { ShowIfNotNullDirective } from '../show-if-not-null.directive';

@Component({
  selector: 'app-demograph',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, Iso3166Pipe, ScaleOnHoverDirective, ShowIfNotNullDirective],
  templateUrl: './demograph.component.html',
  styleUrls: ['./demograph.component.css']
})
export class DemographComponent {

  group: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    gender: new FormControl(null, Validators.required),
    birth: new FormControl(null, [Validators.required]),
    occupation: new FormControl(null, Validators.required),
    country: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  });
}