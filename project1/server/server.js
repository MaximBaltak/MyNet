let fs =require('fs'),
express =require('express'),
ongoClient=require('mongodb').MongoClient;
const multer=require('multer');
let app=express()
const mongoClient=new ongoClient('mongodb+srv://maxim:admin@cluster0.sb8ke.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true });


let storageConfig=multer.diskStorage({
    destination: (req,file,cd)=>{
        cd(null,`${__dirname}/newsFile`)
    },
    filename: (req,file,cd)=>{
        cd(null, file.originalname)
    },
    
    
})

mongoClient.connect((err,client)=>{
    if(err){
        console.log('mongoDB Atlas no conected!')
    }else{
        console.log('mongoDB Atlas conected!')
    }
    const db=client.db('test');
    const news=db.collection('news')


    
    app.get('/news',(req,res)=>{
        news.find().toArray((err,result)=>{

           
                res.send(result)
            
               
            
        
        });
        app.post('/news',multer({storage: storageConfig}).single('file'),(req,res)=>{
            if(req){

                let img=fs.readFileSync(req.file.path)
                let encoded_img=img.toString('base64');
                let image=new Buffer(encoded_img,'base64');

                let date =req.body.date,
                    title=req.body.title,
                    text=req.body.text;
        
               news.insertOne({date:date,img:image,title:title,text:text},(err,result)=>{
                    if(err){
                        console.log('Ошибка')
                    }else{
                        console.log(result)
                        res.send(200)
                    }
                   
               })
            }
        })
         
        
    })
    app.listen(5000,()=>{
        console.log('server start, port 5000')
    })
}) 