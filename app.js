const express=require('express');
const app= new express();
const port=process.env.PORT || 8000;

const nav=[{link:'/home',name:'Home'},{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/addbooks',name:'Add Books'},
{link:'/addauthors',name:"Add Authors"},{link:'/signup',name:'Sign Up'},{link:'/login',name:'Login'}]

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');



const booksRouter=require('./src/routes/booksRoutes')(nav);
app.use('/books',booksRouter);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
app.use('/authors',authorsRouter);


app.get('/',(req,res)=>{
res.render('index',{title:'Library',nav})
});
app.get('/home',(req,res)=>{
    res.redirect('/')
})
app.get('/addBooks',(req,res)=>{
   res.render('addbooks',{title:'Add Books',nav})
});



 app.post('/addbooks', function(req, res){
res.redirect('/books');
 });


app.get('/login',(req,res)=>{
    res.render('login',{title:'Login',nav})
})
app.post('/login',(rq,res)=>{
    res.redirect('/')
})
app.get('/signup',(req,res)=>{
    res.render('signup',{title:'Signup',nav})
})
app.post('/signup',(req,res)=>{
   
    res.redirect('/login')

})
 app.get('/addauthors',(req,res)=>{
    res.render('addauthors',{title:'Add Authors',nav})
    }); 
  app.post('/addauthors',(req,res)=>{
      res.redirect('/authors');
  })  


app.listen(port,()=>{console.log('Server Ready at:'+port)}); 