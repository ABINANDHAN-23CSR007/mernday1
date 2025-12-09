const exp =require('express');
console.log(exp);
const port =5000;
const app = exp();
app.use(exp.json())
let users=[{
    "id":100,
    "name":"arul",
    "gmail":"arul@gmail.com"
},{
    "id":101,
    "name":"suriya",
    "gmail":"suriya@gmail.com"
},{
    "id":102,
    "name":"kumar",
    "gmail":"kumar@gmail.com"
}]
// api to get all user
app.get('/users',(req,res)=>{
    res.status(200).json(users);
})
//get user by id
app.get('/users/:id',(req,res)=>{
    const url_id=Number(req.params.id);
    const filtered_user = users.find((user)=>user.id==url_id)
    if(!filtered_user){
        res.status(404).json({message:"User not found"});
    }
    // else{
    // res.status(500).json({message:"check the user id  not present", url_id});
    // }
    res.status(200).json({name :filtered_user.name, gmail:filtered_user.gmail});
});

//api to insert new user
app.post('/adduser',(req,res)=>{
    const newUser={
        id:req.body.id,
        name:req.body.name,
        gmail:req.body.gmail    
    }
    users.push(newUser);
    res.status(201).json({message:"New user added successfully"});
})
// delete user by id
app.delete('/deleteuser/:id',(req,res)=>{
    const delete_id = Number(req.params.id);
    const find_user = users.find((user)=>user.id==delete_id)
    users = users.filter((user)=>user.id!=delete_id);
    if(!find_user){
        res.status(500).json({message:"User not found"});
    }
    res.status(200).json(users)
})
app.listen(port,()=>{
    console.log(`Server is running on port : http://localhost:${port}`);
});