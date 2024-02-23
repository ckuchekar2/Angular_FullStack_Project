import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { compileNgModule } from '@angular/compiler';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-data',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './post-data.component.html',
  styleUrl: './post-data.component.css'
})
export class PostDataComponent {

  postDataForm!: FormGroup;

  constructor(private pd : DataService, private fb:FormBuilder, private r:Router){};

  ngOnInit(){
    this.postDataForm = this.fb.group({
      name:[null, Validators.required],
      contact:[null, Validators.required],
      salary:[null, Validators.required] 
    })
  }

  add () {

    // console.log(this.postDataForm.value)
    this.pd.postData(this.postDataForm.value).subscribe((val)=>{
      console.log(val);
      this.r.navigate([''])
    })
  }
}
