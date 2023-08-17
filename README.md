# myMongoDB

This is my mongo db + express + node api application

<!-- test the api here  -->

1. baseurl = "https://mongo-oxygene1.vercel.app/"
2. get all product: /api/product
3. get all product by id: /api/product/:id
4. delete product: /api/product/:id
5. post product: /api/product
6. put/patch: /api/product

<!-- post body -->

{
"name": "string",
"quantity": number,
"price": number,
"image": "string",
}

<!-- put/patch body -->

put/ patch any of these values
{
"\_id":"ObjectId", //optional if not provided it will be generated automatically
"name" : string ,
"quantity" :number,
"price" :number,
"image" :"string"
}

<!-- sample response -->

{
"\_id": "64dbe98c632bdef11e8a6e36",
"name": "yay you rock",
"quantity": 49,
"price": 3300,
"image": "https://randomwordgenerator.com/img/picture-generator/5fe1d3414256b10ff3d8992cc12c30771037dbf8525478487c2f79d5924e_640.jpg",
"createdAt": "2023-08-15T21:09:32.322Z",
"updatedAt": "2023-08-15T22:47:48.802Z",
"\_\_v": 0
}


to build you backend applications, reach me here:: https://abdulganiyu.vercel.app or send me a mail abdulganiyutechng@gmail.com