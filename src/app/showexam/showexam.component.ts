import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ExamserviceService} from '../examservice.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-showexam',
  templateUrl: './showexam.component.html',
  styleUrls: ['./showexam.component.css']
})
export class ShowexamComponent implements OnInit {
examdata:any
status:any
  constructor(private http:HttpClient,private service:ExamserviceService,private rt:Router) { }

  ngOnInit() {
  	this.service.showexam().subscribe(res=>{
  		this.examdata=res
  		console.log(this.examdata)
  	})
  }
  

  //editexam
  editexam(data){
  	console.log(data)

  	this.service.editexam(data).subscribe(res=>{

  	})
  }
  
  //getexamcode
  getexamcode(data){
  this.service.getexam(data).subscribe(res=>{

  })
  }

  //delete
  deleteexam(value){
  	Swal.fire({
  title: 'Are you sure?',
  text: 'You want to delete course',
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, keep it'
}).then((result) => {
  if (result.value) {

   const url="http://localhost:3000/api/deleteexam"
    const httpoption={headers:new HttpHeaders ({'content-type':'application/json'}) };
    this.http.post(url,{id:value},httpoption).subscribe(res=>{
    this.status=res

      if(this.status.status == true){
          Swal.fire({title:'Success',text:'Exam deleted successfully',type:"success"})
       this.rt.navigateByUrl('', {skipLocationChange: true}).then(()=>
        this.rt.navigate(['showsetexam'])); 
      }

      else{
          Swal.fire({title:'Error',text:'Exam deletion failed',type:"error"})
      }
    })

  }

}
  }
 
}
