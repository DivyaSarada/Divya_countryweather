let container = document.createElement("div");
container.setAttribute("class", "container");
//container.setAttribute("style","background-color:gray");
document.body.append(container);
let row = document.createElement("div");
row.setAttribute("class", "row");
//row.setAttribute("style", "background-image:red");
container.append(row);
let data = fetch("https://restcountries.eu/rest/v2/all");
data
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    for (let j = 0; j< data.length; j++) {
        let col1 = document.createElement("div");
        col1.setAttribute("class", "col-sm-12 col-lg-4 ");
        col1.setAttribute("style","border:0;")
        col1.setAttribute("style", "background-image:white);");

        let card1 = document.createElement("div");
        card1.setAttribute("class","card");
        card1.setAttribute("style", "width:18 rem;margin-bottom:20px;margin-right:20px;");
        let image1 = document.createElement("img");
        image1.setAttribute("class","card-img-top");
        image1.setAttribute("src",""+ data[j].flag+"");
        image1.setAttribute("style","height:150px;")
        let head1 = document.createElement("h1");
        head1.setAttribute("class", "card-header text-center");
        head1.setAttribute(
          "style",
          "background-color:black;color:white;text-align:center;font-size:20px"
        );
        head1.innerHTML = data[j].name;
        let pop=document.createElement("h5");
        pop.setAttribute("class","card-body");
        pop.setAttribute("style","text-align:center;background-image:linear-gradient(to left,#ffffff,#4dffff)");
        pop.innerHTML="Population : "+data[j].population;
        let reg1 = document.createElement("h5");
        reg1.setAttribute("class", "card-body");
        reg1.setAttribute("style", "text-align:center;background-image:linear-gradient(to left,#ffffff,#4dffff)");
        reg1.innerHTML = "Region : " + data[j].region;
        let capital = document.createElement("h5");
        capital.setAttribute("class", "card-body");
        capital.setAttribute("style", "text-align:center;background-image:linear-gradient(to left,#ffffff,#4dffff)");
        capital.innerHTML = "Capital : " + data[j].capital;
        let btn1 = document.createElement("button");
        btn1.setAttribute("class", "btn btn-warning");
        btn1.innerHTML = "Click for Weather";
        btn1.addEventListener("click", function () {
           let wdata=fetch("http://api.openweathermap.org/data/2.5/weather?q=" +
           data[j].name +
           "&appid=c7457b931c2f802ff6ceb57e71c1594a"
       )
               
          wdata
            .then(function(res) {
              return res.json();
            })
            .then(function(res) {
              alert( "Weather Details"+
              "\nlongitude: " +
               res.coord.lon +
               "\nlatitude: " +
               res.coord.lat +
               "\nWeather description: "+
               res.weather[0].description +
               "\nTemperature: "+
               (res.main.temp) +
               "\nSunRise: "+
               res.sys.sunrise +
               "\nSunSet: "+
               res.sys.sunset +
               "\nWindSpeed: "+
               res.wind.speed +
               "\nTimeZone: "+
               res.timezone)
            })
            .catch(function (err) {
              console.log(err);
            });
        });
        card1.append(head1, image1, capital, reg1,pop, btn1);
        col1.append(card1);
        row.append(col1);
      }
  })
  .catch(function (err) {
    console.log(err);
  });

