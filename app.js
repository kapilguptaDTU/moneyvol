var express = require('express');
var app = express();
const path=require('path');


const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({
    extended:true
}));
const fetch = require("node-fetch");

app.set('views',path.join(__dirname,'/views'));
app.use(express.static(__dirname + "/public"));
app.set('view engine','ejs');

const reader = require('xlsx')


function niftydata(){
  const file = reader.readFile('./main_data.csv')
    
  let data = []
    
  const sheets = file.SheetNames
    // console.log(sheets)

 
     const temp = reader.utils.sheet_to_json(
          file.Sheets[file.SheetNames[0]])
     temp.forEach((res) => {
        data.push(res)
     })
  
    return data;
  }

  function niftydata_SHEET3(){
    const file = reader.readFile('./main_data.csv')
      
    let data = []
      
    const sheets = file.SheetNames
      // console.log(sheets)
  
   
       const temp = reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[2]])
       temp.forEach((res) => {
          data.push(res)
       })
    
      return data;
    }

  function niftydata_strangle(){
    const file = reader.readFile('./main_data.csv')
      
    let data = []
      
    const sheets = file.SheetNames
      console.log(sheets)

   
       const temp = reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[1]])
       temp.forEach((res) => {
          data.push(res)
       })
    
      return data;
    }

  function bankniftydata(){
    const file = reader.readFile('./main_data.csv')
    
    let data = []
      
    const sheets = file.SheetNames
      console.log(sheets)

   
       const temp = reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[10]])
       temp.forEach((res) => {
          data.push(res)
       })
    
      return data;
    // Printing data
    // console.log(data[0])
    }


    app.get('/niftyvol',async function (req, res) {

      var data_nifty=await niftydata_SHEET3()
      console.log("getting nifty vol")
      res.render('nifty_vol',{data_nifty:data_nifty});
    });

    app.get('/niftyvomma',async function (req, res) {

      var data_nifty=await niftydata_SHEET3()
      console.log("getting nifty vomma")
      res.render('nifty_vomma',{data_nifty:data_nifty});
    });
        

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

app.get('/', function (req, res) {
  console.log("getting main page home")
  res.render('HOME_PAGE');
});


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



  
app.listen(process.env.PORT,process.env.IP);


// app.listen(3000, () => {
//     console.log('Express server started at port 3000');

// });