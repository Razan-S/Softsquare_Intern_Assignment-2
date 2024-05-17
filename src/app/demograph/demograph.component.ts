import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iso3166Pipe } from '../iso3166.pipe';
import { ShowIfNotNullDirective } from '../show-if-not-null.directive';
import { ShowInformationDirective } from '../show-information.directive';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-demograph',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, Iso3166Pipe, ShowIfNotNullDirective, ShowInformationDirective],
  templateUrl: './demograph.component.html',
  styleUrls: ['./demograph.component.css']
})
export class DemographComponent {
  
  group: FormGroup = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(1)]),
      gender: new FormControl(null, Validators.required),
      birth: new FormControl(null, [Validators.required]),
      occupation: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      country: new FormControl(null, [Validators.required, Validators.minLength(2)]),      
  });


  isSubmitted: boolean = false;
  save() {
    this.isSubmitted = true;
  }
}