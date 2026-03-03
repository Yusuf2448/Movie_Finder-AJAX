$(document).ready(function () {

    $("#getMovie").click(function () {

        var movieName = $("#movie").val();

        if (movieName === "") {
            alert("Please enter a movie name");
            return;
        }

        var apiKey = "802a76c7";
        var url = "https://www.omdbapi.com/?s="
                  + movieName +
                  "&apikey=" + apiKey;

        $.ajax({
            url: url,
            method: "GET",
            success: function (data) {

                if (data.Response === "False") {
                    alert("Movie not found!");
                    return;
                }

                var movies = data.Search;   
                var output = "";

                for (var i = 0; i < movies.length; i++) {

                    output +=
                        "<div style='margin-bottom:20px'>" +
                        "<h2>" + movies[i].Title + "</h2>" +
                        "<h3><strong>Year:</strong> " + movies[i].Year + "</h3>" +
                        "<img src='" + movies[i].Poster + "' width='150'>" +
                        "</div>";
                }

                $("#movieResult").html(output);
                $("#movieResult").addClass("show");
            },
            error: function () {
                alert("Error fetching data!");
            }
        });

    });

});
