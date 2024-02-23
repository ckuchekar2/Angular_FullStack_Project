import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-all-data',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './get-all-data.component.html',
  styleUrl: './get-all-data.component.css'
})
export class GetAllDataComponent {

  allData: any = [CommonModule,RouterLink, RouterModule,Router];

  constructor(private ser:DataService, private route: Router){};

  ngOnInit(){
    this.getAllData();
    // this.delete(id);
    // this.navPostData();
  }

  getAllData(){
    this.ser.getAllData().subscribe((val)=>{
      console.log(val);
      this.allData = val;
    })
  }

  // navPostData () {
  //   this.route.navigate(['postData'])
  // }

  delete(id: number) {
    this.ser.delete(id).subscribe((val)=>{
      console.log(val);
      this.getAllData();
    })
  }

}
