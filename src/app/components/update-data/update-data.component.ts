import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-update-data',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './update-data.component.html',
  styleUrl: './update-data.component.css'
})
export class UpdateDataComponent {
  postDataForm!: FormGroup;
  id:number = this.rt.snapshot.params['id'];
  constructor(private fb:FormBuilder, private rt: ActivatedRoute, private ser:DataService, private r:Router){}

  ngOnInit(){
    this.postDataForm = this.fb.group({
      name:[null, Validators.required],
      contact:[null, Validators.required],
      salary:[null, Validators.required] 
    });
    this.getById();
  }

  getById() {
    this.ser.getById(this.id).subscribe((val)=>{
      console.log(val)
      this.postDataForm.patchValue(val);
    })
  }

  updateData(){
    this.ser.updateData(this.id, this.postDataForm.value).subscribe((val)=>{
      console.log(val);
      this.r.navigate(['']);
    })
  }

}
