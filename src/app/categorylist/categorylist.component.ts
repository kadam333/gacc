import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ExamserviceService} from '../examservice.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {

coursedata:any;
status:any
  constructor(private http:HttpClient,private service:ExamserviceService,private rt:Router) { }

  ngOnInit() {
  	this.service.showcourse().subscribe(res=>{
     this.coursedata=res;
     console.log(this.coursedata)
  	})
  }

editCourse(data){
this.service.editCourseData(data).subscribe(res=>{ 

})
}


Deletecourse(value){ 

Swal.fire({
  title: 'Are you sure?',
  text: 'You want to delete course',
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, keep it'
}).then((result) => {
  if (result.value) {

   const url="http://localhost:3000/api/deletecourse"
    const httpoption={headers:new HttpHeaders ({'content-type':'application/json'}) };
    this.http.post(url,{id:value},httpoption).subscribe(res=>{
    this.status=res

      if(this.status.status == true){
          Swal.fire({title:'Success',text:'Course deleted successfully',type:"success"})
       this.rt.navigateByUrl('', {skipLocationChange: true}).then(()=>
        this.rt.navigate(['categorylist'])); 
      }

      else{
          Swal.fire({title:'Error',text:'Course deletion failed',type:"error"})
      }
    })

  }

}
}



}


