import { createRequire } from 'module';
// import {useState} from 'react'
const require = createRequire(import.meta.url);
const http = require('http');
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const port = 3000;
var express = require('express');
var app = express();

var arr =[];
var mainInfoList={
    id:0,
    image:'',
    price:'',
    title:''
  
}
// function setMainInfo(mainInfo){
//     mainInfoList={
//       id:mainInfo.rows.id,
//       image:mainInfo.rows.product_picture,
//       price:mainInfo.rows.price,
//       title:mainInfo.rows.TITLE
//     }
//     arr.push(mainInfoList)
//   }
// function getMainInfo(mainInfoList){
//   arr.push(mainInfoList);
//   return arr;
// }

async function run(){
  let connection;
  try {
    oracledb.getConnection( {
      user          : "System",
      password      : 'omsnyh2001',
      connectString : "localhost/xe",
    },  
      function(err, connection){
        if (err){ 
          console.error(err); return; 
        }
          connection.execute(
            "SELECT title,product_picture,price,id "
          + "FROM ShopOfClothes "
          + "where price = '7777' ",
            function(err, result){
              if (err) { 
                console.error(err); return; 
              }
          for(var i = 0;i<result.rows.length;i++){
              //  setMainInfo(result.rows[i]);
              //  console.log(mainInfoList[i])
              mainInfoList={
                id:i,
                image:result.rows[i].PRODUCT_PICTURE,
                price:result.rows[i].PRICE,
                title:result.rows[i].TITLE,
              }
              arr.push(mainInfoList);
              console.log(arr)
              console.log(mainInfoList)
          }
            });
            connection.execute(
          'BEGIN '
        +'clothes_with_price(7777); '
         +'END;',
         function(err, result){
          if (err) { 
            console.error(err); return; 
          }
          //  console.log(result.rows)
        });
  
      });
  } catch (err){
    console.error(err);
  } 

app.get('/', function(req, res) {
  res.send('hello')
  for(var j = 0; j<arr.length;j++){
        res.send(arr[j])
  }
});
app.get('/about', function (req, res) {
  res.send('about');
});
app.listen(port, function(err){
  if (err) console.log("Error in server setup")
  console.log("Server listening on Port", port);
})
}
run();