var express=require('express');
var router=express.Router();
var database=require('../model/database');
var bodyparser=require('body-parser');
router.use(bodyparser.json());




router.get('/',function(req,res,next){
	res.send('root call')
})

//category-count 
router.get('/count',function(req,res){
	database.count(function(err,result){
     res.json(result);
	});
});

//examcodecount
router.get('/codecount',function(req,res){
	database.ecount(function(err,result){
    res.json(result);
	});
});

//categoryinsert

router.post('/categorydata', function(req,res){
	var user=req.body;
	database.insertCourse(user,function(err,data){
		if(err){
          return res.json({status:false})
		}
		return res.json({status:true})
	})
})

//showcourse

router.get('/showcourse',function(req,res){
	database.showcourse(function(err,result){
     res.json(result);
	});
})

//editcourse

router.post('/editcoursedata', function(req,res){
	var user=req.body;
	database.editCourse(user,function(err,data){
		if(err){
          return res.json({status:false})
		}
		return res.json(data)
	})
})

//updatecourse 
router.post('/updatecoursedata', function(req,res){
	var user=req.body;
	database.updateCourse(user,function(err,data){
		if(err){
          return res.json({status:false})
		}
		return res.json({status:true})
	})
})

//deletecourse
router.post('/deletecourse', function(req,res){
	var user=req.body;
	database.deleteCourse(user,function(err,data){
		if(err){
          return res.json({status:false})
		}
		return res.json({status:true})
	})
})


//delete exam
router.post('/deleteexam',function(req,res){
	var user=req.body;
	database.deleteexam(user,function(err,data){
		if (err) {
			return res.json({status:false})
		}
		return res.json({status:true})
	})
})


//subjectidcount
router.get('/subjectcount',function(req,res){
	database.subjectcount(function(err,result){
		res.json(result);
	});
});

//insertsubject
router.post('/insertsubject',function(req,res){
	var user=req.body;
	console.log(user);
	database.insertsubject(user,function(err,data){
		if (err) {
			return res.json({status:false})
		}
		return res.json({status:true})
	})
})

//showsubject
router.get('/showsubject',function(req,res){
	database.showsubject(function(err,result){
    res.json(result);
	});
})

//editsubject
router.post('/editsubjectdata', function(req,res){
	var user=req.body;
	database.editsubject(user,function(err,data){
		if(err){
          return res.json({status:false})
		}
		return res.json(data)
	})
})

//updatesubject
router.post('/updatesubject',function(req,res){
	var user=req.body;
	database.updatesubject(user,function(err,result){
		if(err){
			return res.json({status:false})
		}
		return res.json({status:true})
	})
})

//deletesubject
router.post('/deletesubject',function(req,res){
	var user=req.body;
	console.log(user)
	database.deletesubject(user,function(err,result){
		if (err) {
			return res.json({status:false})
		}
		else
			return res.json({status:true})
	})
})

//insertsetexam
router.post('/insertsetexam',function(req,res){
	var user=req.body;
	// console.log(user)
	database.insertexam(user,function(err,result){
		if(err){
			return res.json({status:false})
		}
		else
			return res.json({status:true})
	})
})

//showexam
router.get('/showexamdetails',function(req,res){
	database.showexam(function(err,result){
		res.json(result);
	});	
})

//searchsubject==>setexam
router.post('/searchsubject',function(req,res){
	var user=req.body;

	database.searchsubject(user,function(err,result){
		if (err) {
			return res.json({status:false})
		}
		else
			return res.json(result)
	})
})

//editexam==>showexam
router.post('/editexam',function(req,res){
	var user=req.body;

	database.editexam(user,function(err,result){
		if (err) {
			return res.json({status:false})
		}
		else
			return res.json(result)
	})
})

// updateexam==>
router.post('/updateexam',function(req,res){
	var user=req.body;

	database.updateexam(user,function(err,result){
		if(err){
			return res.json({status:false})
		}
		else
			return res.json({status:true})
	})
})

// getexamdata

router.post('/setexamdata',function(req,res){
	var user=req.body;

	database.setexamdata(user,function(err,result){
		if (err) {
			return res.json({status:false})
		}
		else
			return res.json(result)
	})
})


//insert question 

router.post('/insertquestion',function(req,res){
	var user=req.body;

	database.insertquestion(user,function(err,result){
		if (err) {
			return res.json({status:false})
		}
		else
			return res.json({status:true})
	})
})
module.exports=router;