
// Current City Weather Function

function cityWeather(cityName) {
    var apiKey = "61787e817d55d5dd372b8e735878418e";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;



    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        $("#weatherIcon").empty();

        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var currentDate = moment().format("dddd, MM-DD-YYYY");



        var Fahrtemp = Math.round(Math.floor(response.main.temp - 273.15)) * 1.80 + 32 + " ℉";
        var currentWeather = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");


        // Code to transfer content to HTML
        $("#cityName").text(response.name);
        $("#displayCurrentDate").text(currentDate);
        $("#weatherIcon").append(currentWeather);
        $("#temperature").text("Temperature: " + Fahrtemp);
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");





        // UV Index
        var queryURLUVIndex = "http://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
        $("#uvIndex").empty();
        $.ajax({
            url: queryURLUVIndex,
            method: 'GET'
        }).then(function (response) {


            var displayUVIndex = response.value;

            if (displayUVIndex <= 2) {
                $("#uvIndex").css("background-color", "green");
            } else if (displayUVIndex > 2 && displayUVIndex <= 5) {
                $("#uvIndex").css("background-color", "yellow");
            } else if (displayUVIndex > 5 && displayUVIndex <= 7) {
                $("#uvIndex").css("background-color", "orange");
            } else if (displayUVIndex > 7 && displayUVIndex <= 10) {
                $("#uvIndex").css("background-color", "red");
            } else if (displayUVIndex >= 11) {
                $("#uvIndex").css("background-color", "purple");
            }

            $("#uvIndex").append("UV Index: ", displayUVIndex);




        })

    })


};








