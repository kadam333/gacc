import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Router,ActivatedRoute} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ExamserviceService {
data:any
subjectdata:any
subjectsearch:any
editexamdata:any 
getexamdata:any
  constructor(private http:HttpClient,private rt:Router) { }

  

  // /category insert
  categoryinsert(data){
    const url="http://localhost:3000/api/categorydata"
    
    const httpoption={headers:new HttpHeaders ({'content-type':'application/json'}) };
   return this.http.post(url,data,httpoption)
 }

  // insertsubject
  insertsubject(data){
    const url="http://localhost:3000/api/insertsubject"
    const httpoption={headers:new HttpHeaders({'content-type':'application/json'})};
    return this.http.post(url,data,httpoption)
  }

  //insertexam
  insertsetexam(data){
  const url="http://localhost:3000/api/insertsetexam"

  const httpoption={headers:new HttpHeaders ({'content-type' : 'application/json' }) };

  return this.http.post(url,data,httpoption)
  }

  //insertquestion
  insertquestion(data){
    const url="http://localhost:3000/api/insertquestion"

    const httpoption={headers:new HttpHeaders ({'content-type' : 'application/json'}) };

    return this.http.post(url,data,httpoption) 
  }


   // show course
  showcourse(){
  	const url="http://localhost:3000/api/showcourse"

  	return this.http.get(url)
  }
   
   //show subject
   showsubject(){
     const url="http://localhost:3000/api/showsubject"
      return this.http.get(url);
   }

   //edit course
  editCourseData(value){
    const url="http://localhost:3000/api/editcoursedata"

    const httpoption={headers:new HttpHeaders ({'content-type':'application/json'}) };
     return this.http.post(url,{id:value},httpoption).map(res=>{

     this.data=res
     	this.data=JSON.stringify(res)
    	localStorage.setItem('data',this.data)
      this.rt.navigate(['/editcourse'])
     return this.data
    
   })
  }
  
  //edit_subject
  editsubjectdata(value){
    const url="http://localhost:3000/api/editsubjectdata"

    const httpoption={headers:new HttpHeaders({'content-type':'application/json'}) };
    return this.http.post(url,{id:value},httpoption).map(res=>{
      this.subjectdata=res;
      this.subjectdata=JSON.stringify(res)
      localStorage.setItem('data',this.subjectdata)
      this.rt.navigate(['/editsubject'])
      return this.subjectdata
    })
  }

  

  
  //searchsubject
  seachsubject(data){
  const url="http://localhost:3000/api/searchsubject"

  const httpoption={headers:new HttpHeaders({'content-type' : 'application/json'}) };

  return this.http.post(url,{id:data},httpoption).map(res=>{
    this.subjectsearch=res
    return this.subjectsearch
  })
  }


  //showexamdetails
  showexam(){
    const url="http://localhost:3000/api/showexamdetails"

    return this.http.get(url)
  }

  //editexam
  editexam(data){
  const url="http://localhost:3000/api/editexam"

  const httpoption={headers:new HttpHeaders ({'content-type' : 'application/json' }) };

  return this.http.post(url,{id:data},httpoption).map(res=>{
    this.editexamdata=res
    this.rt.navigate(['/editexam'])
    return this.editexamdata
  })
  }

  //getexamdata
  getexam(data){
    const url="http://localhost:3000/api/setexamdata"

    const httpoption={headers:new HttpHeaders ({'content-type' : 'application/json' }) };

    return this.http.post(url,{id:data},httpoption).map(res=>{
      this.getexamdata=res
      this.rt.navigate(['/setquestions'])
      return this.getexamdata
    })
  }
}
 