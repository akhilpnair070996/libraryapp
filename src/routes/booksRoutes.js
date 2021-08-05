const express=require('express');
const booksRouter=  express.Router();
var books=[{title:"Tom and Jerry",author:"Joseph Barbera",genre:"cartoon",img:"Tom-and-Jerry.jpg"},
{title:"Harry Potter",author:"J K Rowling",genre:"Fantacy",img:"HarryPotter.jpg"},
{title:"Paathumayude Aadu",author:"Basheer",genre:"Drama",img:"Basheer.jpg"}
]
function router(nav){

//console.log(bookss);
//books.push(arr[0]);
booksRouter.get('/',(req,res)=>{
    // var books=bookss;
    // if(arr[0]!=null){
    //    books= books.push(arr[0]);
    //    // console.log(bookss);
    // }
    
 
    // console.log(books);
    res.render('books',{title:'Library',nav,books})

    });
 
    booksRouter.get('/:i',(req,res)=>{
        const i= req.params.i;
        res.render('book',{title:'Library',nav,books:books[i]})
        });
        return booksRouter;
}

    module.exports=router;