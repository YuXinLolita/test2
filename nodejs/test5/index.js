//mongodb 连接 node.js
//这个是旧方法
// const MongoClient = require('mongodb').MongoClient
// const url = "mongodb://127.0.0.1:27017"
// const dbName = 'comment1'

// MongoClient.connect(url,{useUnifiedTopology:true,
//     useNewUrlParser:true
// },(err,client) => {
//     if(err){
//         console.error('mongodb连接出错',err)
//         return
//     }
//     console.log('mongodb 连接成功')
//     const db = client.db(dbName)
//     client.close()
// })

const {MongoClient, Collection} = require('mongodb')
// const url = 'mongodb://localhost:27017'
const url = 'mongodb://127.0.0.1:27017';    //错误原因const uri = "mongodb://127.0.0.1:27017";
//const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url)
const dbName = 'comment1'

async  function main() {
    await client.connect()
    console.log('Connented sussessfully to server')
    const db = client.db(dbName)
    const userscollection = db.collection('users')
    const newInsertResult = await userscollection.insertMany([{
        name:'yuxin',
        age:'15',
        sex:'femile',
        city:'tokyo'
    }])
    console.log('Inserted users =>',newInsertResult)

    const findResult = await userscollection.find({}).toArray()
    console.log('Found users =>',findResult )

    const filtResult = await userscollection.find({age:16}).toArray()
    console.log('found users filtered by {age:16} =>',filtResult)

    const updateREsult  =await userscollection.updateOne({name:'李四'},{$set:{age:19}})
    console.log('update documents =>',updateREsult)

    const deleteResult = await userscollection.deleteOne({name:'yuxin'},)
    console.log('delete documents =>',deleteResult)

    const indexREsult = await userscollection.createIndex({age:1})
    console.log('index name =>',indexREsult)

    const sortResult = await userscollection.find().sort({_id:-1}).toArray()
    console.log('sort documents => ', sortResult)
    // userscollection
    // userscollection.find({name:'张三'}).toArray((err,result) => {
    //     if(err){
    //         console.error('查询数据出错',err)
    //         return
    //     }
    //     console.log('查询结果',result)
    // })
    return 'done.'
}

main() 
.then(console.log)
.catch(console.error)
.finally(() => {client.close()})
// const insertResult = await collection.insertMany([{
//     name:'杜甫',
//     age:89,
//     city:'南京',
//     communt:'好雨知时节，随风潜入夜',
// }])


// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'myProject';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());