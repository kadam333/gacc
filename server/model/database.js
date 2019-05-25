var mysql=require('mysql');

//create connection

var conn=mysql.createConnection( 
{
host:'localhost',
user:'root',
password:'',
database:'gaccexam'
});

conn.connect();

//query

var database=new function(data,callback){
    //categorycount
	this.count=function(callback){
	conn.query('select (COUNT(course_id)+1) as CIID from course',function(err,data){
		callback(err,data);
	})
  }

    //examcode
    this.ecount=function(callback){
    conn.query('select CONCAT("EXAMCODE",(COUNT(exam_code)+1)) as EID from exam_details',function(err,data){
        callback(err,data);
    })
    }

    // insertcourse
	this.insertCourse=function(data,callback){
		var sql="insert into course SET?"
		var formdata={
				course_id:data.cid,
				course_name:data.cname
		}
		conn.query(sql,formdata,function(err,data){
			if(err){
				console.log(err)
			}
			callback(err,data)
		})
	}

    // showcourse
    this.showcourse=function(callback){
    	conn.query('select * from course',function(err,data){
    		callback(err,data);
    	})
    }

    // editcourse
    this.editCourse=function(data,callback){
    	var sql="select * from course where course_id="+data.id
    	conn.query(sql,function(err,data){
    		callback(err,data);
    	})
    }
    //editsubject
    this.editsubject=function(data,callback){
        console.log(data)
        var sql='select * from subject where subject_id='+data.id
        conn.query(sql,function(err,data){
            callback(err,data);
        })
    }

    //updatecourse
    this.updateCourse=function(data,callback){
    	console.log(data)
    	var sql="update course SET? where course_id="+data.cid
    	var formdata={
    		course_name:data.cname
    	}
    	conn.query(sql,formdata,function(err,data){
    		callback(err,data);
    	})
    }

    //updatesubject
    this.updatesubject=function(data,callback){
        console.log(data)
        var sql="update subject SET? where subject_id="+data.sid
        
        var formdata={
            course_name:data.cname,
            subject_name:data.sname
        }
        conn.query(sql,formdata,function(err,data){
            callback(err,data);
        })
    }

    //updateexam
    this.updateexam=function(data,callback){
        console.log(data)

        var sql="update exam_details SET? where exam_code='"+data.examcode+"'"

        var formdata={
            exam_date:data.date,
            total_questions:data.totalquestion,
            total_min:data.timeduration,
            exam_name:data.examname,
            passing_marks:data.passingmarks
        }
        conn.query(sql,formdata,function(err,data){
            callback(err,data);
        })
    }

    //deletecoure
      this.deleteCourse=function(data,callback){
    	console.log(data)
    	var sql="delete from course where course_id="+data.id
    	conn.query(sql,function(err,data){
    		callback(err,data);
    	})
    }

    //deletsubject
    this.deletesubject=function(data,callback){
        console.log(data)
        var sql="delete from subject where subject_id="+data.id
        conn.query(sql,function(err,data){
            callback(err,data);
        })
    }

    //subjectidcount
    this.subjectcount=function(callback){
        conn.query('select (COUNT(subject_id)+1) as SID from subject',function(err,data){
            callback(err,data);
        })
    }

    //insertsubject
    this.insertsubject=function(data,callback){
        console.log(data)
        var sql="insert into subject SET?"
        var formdata={
            course_name:data.coursename,
            subject_id:data.subcid,
            subject_name:data.subcname
        }
        conn.query(sql,formdata,function(err,data){
            callback(err,data)
        })
    }

    //show subject
    this.showsubject=function(callback){
        conn.query('select * from subject',function(err,data){
            callback(err,data);
        })
    }

     //insertexam
    this.insertexam=function(data,callback){
        // console.log(data)
        var sql="insert into exam_details SET?"

        var formdata={
            course:data.course,
            subject:data.subject,
            exam_code:data.examcode,
            exam_date:data.date,
            total_questions:data.totalquestion,
            total_min:data.timeduration,
            exam_name:data.examname,
            passing_marks:data.passingmarks
        }
        
         console.log(formdata)
        conn.query(sql,formdata,function(err,data){
            if(err){
                console.log(err)
            }
            callback(err,data)
        })
    }


    //insert question
    this.insertquestion=function(data,callback){
        var sql="insert into questions SET?"

        var formdata={
            course_name:data.coursename,
            subject_name:data.subjectname,
            exam_code:data.examcode,
            exam_date:data.date,
            total_questions:data.totalquestion,
            exam_name:data.examname,
            question:data.mainquestion,
            option_a:data.optionA,
            option_b:data.optionB,
            option_c:data.optionC,
            option_d:data.optionD,
            answer:data.answer
        }
        console.log(formdata)
        conn.query(sql,formdata,function(err,data){
            if(err){
                console.log(err)
            }
            callback(err,data)
        })
    }
    
    // searchsubject
    this.searchsubject=function(data,callback){
        console.log(data)
    var sql="select * from subject WHERE course_name='"+data.id+"'" 
       console.log(sql)
    conn.query(sql,function(err,data){
        callback(err,data);
    })  
    }

    //allexamdetails
    this.showexam=function(callback){
       conn.query("select * from exam_details",function(err,data){
           callback(err,data)
       })
    }

    //editexam
    this.editexam=function(data,callback){
        console.log(data)
        var sql="select * from exam_details where exam_code='"+data.id+"'"
        console.log(data)
        conn.query(sql,function(err,data){
            callback(err,data);
        })
    }

    //deleteexam
    this.deleteexam=function(data,callback){

        var sql="delete from exam_details where exam_code='"+data.id+"' "

        conn.query(sql,function(err,data){
            callback(err,data);
        })
    }


    // setexamdata for question
    this.setexamdata=function(data,callback){
        var sql="select * from exam_details where exam_code='"+data.id+"'" 

        conn.query(sql,function(err,data){
            callback(err,data);
        })
    }

}

module.exports=database;