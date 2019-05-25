import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {ExamserviceService} from '../examservice.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-subcategorylist',
  templateUrl: './subcategorylist.component.html',
  styleUrls: ['./subcategorylist.component.css']
})
export class SubcategorylistComponent implements OnInit {

showsubject:any;
status:any
  constructor(private http:HttpClient,private service:ExamserviceService,private rt:Router) { }

  ngOnInit() {
  this.service.showsubject().subscribe(res=>{
  	this.showsubject=res;
  	console.log(this.showsubject);
  })
  }
 

  editsubject(data){
    console.log(data)
  this.service.editsubjectdata(data).subscribe(res=>{
  	
  })
  }

  deletesubject(data){
    console.log(data)

  //starting
  Swal.fire({
  title: 'Are you sure?',
  text: 'You will not be able to recover this imaginary file!',
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, keep it',
  }).then((result) => {
  if (result.value) {
    
    const url="http://localhost:3000/api/deletesubject"
    const httpoption={headers:new HttpHeaders ({'content-type' : 'application/json'}) };
    this.http.post(url,{id:data},httpoption).subscribe(res=>{
      this.status=res

      if (this.status.status==true) {
        // code...
       Swal.fire({title:'Success',text:'subject deleted successfully',type:"success"})
       this.rt.navigateByUrl('', {skipLocationChange: true}).then(()=>
        this.rt.navigate(['subcategorylist']));
      }


      else{
          Swal.fire({title:'Error',text:'Course deletion failed',type:"error"})
      }

    })

  }//valueifclosing  
  
 }

//ending
}
}
