db.cats.find()

db.cats.find({name:{$eq:"Whiskers"}}).sort({age:1})


db.cats.find({
    
name:"Whiskers",age:{
    $in:[12,34,45]
}
})

\\



db.cats.find({
  $and: [
    { name: "Whiskers" },
    { age: { $in: [12, 34, 45] } }
  ]
})