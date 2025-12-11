const fs=require("fs")
fs.writeFile("index.txt","Hello, World!",(err)=>{
    if(err) throw err;
    console.log("File written successfully");
})

fs.appendFile("sample.txt","\nAppended text.",(err)=>{
    if(err) throw err;
    console.log("File appended successfully");
})

fs.unlink("index.txt",(err)=>{
    if(err) throw err;
    console.log("file deleted successfully");
})

fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log("File content:",data);
})