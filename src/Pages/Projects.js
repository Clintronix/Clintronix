import '../App.css';
import pCloudy from '../images/partlycloudy.png'
import cloudy from '../images/cloudy.png'
 

function Projects() {
  
   
  return (
    <div>
       {/* first row info box */}
   <div id="content-boxes">
     <div class="info-box small">
       {/* first info box in row*/}
        <h2>Weather Widget</h2>
        <p>Type in the state for weather</p>
        <form onSubmit={ handleSumbit() } id="frm1">
          <input id="state" type="text" name="state" value="Oregon"></input>
          <button type="submit">Submit</button>
        </form>
        <h5 id="curState"></h5> 
        <p id="data"></p>
        <p id="conditionImg"></p>
        </div>

        {/* second info box in row*/}
        <div class="info-box medium">
          <h3>This is info box</h3>  
          <p>With some information</p>
        </div>

        {/* third info box in row*/}
        <div class="info-box large">
          <h3>This is info box</h3>  
          <p>With some information</p>
        </div>
   </div>
   {/* Second row info boxes */}
   <div id="content-boxes">
     {/* first info box in row */}
     <div class="info-box large">
        <h3>This is info box</h3>  
        <p>With some information</p>
      </div>
      {/* second info box in row */}
      <div class="info-box medium">
        <h3>This is info box</h3>  
        <p>With some information</p>
      </div>
      {/* third info box in row */}
      <div class="info-box small">
        <h3>This is info box</h3>  
        <p>With some information</p>
      </div>
   </div>
   
 </div>
  );
}


let state = "Oregon";
//document.getElementById("curState").innerHTML = "Oregon";  

//rapid API 
fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=" + state + "%2Cusa&lat=0&lon=0&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=JSON", {
  "method": "GET",
  "headers": {
    "x-rapidapi-key": "279fc0325emsh97175ec6d2a845bp18e374jsn89e3c863f4c7",
    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
  }
})
.then(response => {
  response.json().then(function(data) {
    handleData(data);
    return data;
  });
})
.catch(err => {
  console.error(err);
});

let weatherData = new Object();
function handleData(data) {
  console.log(data);
    weatherData = {
    temperature: (data.main.temp - 273.15) * 9/5 + 32,
    wind: data.wind.speed,
    condition: data.weather[0].main,
    humidity: data.main.humidity,
    conditionImg: function() {
      
    }
    
  }
  displayData(weatherData);
  imgCondition(weatherData.condition);
  
}

function displayData(weatherData) {
  //document.getElementById("conditionImg").innerHTML = '<img src= { Sunny } ></img>'
 
   document.getElementById("data").innerHTML = 
   "Temperature: " + (weatherData.temperature).toFixed(2)
   + "<br>Wind: " + weatherData.wind
   + "<br>Condition: " + weatherData.condition
   + "<br> Humidity: " + weatherData.humidity;
 }

let imgCondition = function(condition) {
  let imgCon = ((condition) === "Clouds") ? cloudy : pCloudy;
  console.log(imgCon)
}


console.log(imgCondition)

let img = new Object();
img = {
  pCloudy: pCloudy,
  cloudy: cloudy,
  
}

function handleSumbit() {
  console.log("this works")
}


  


export default Projects;
