$(document).ready(function () {

    $("#getMovie").click(function () {

        var movieName = $("#movie").val();

        if (movieName === "") {
            alert("Please enter a movie name");
            return;
        }

        var apiKey = "802a76c7"; 
        var url = "https://www.omdbapi.com/?t="
                  + movieName +
                  "&apikey=" + apiKey;

        // AJAX Request
        $.ajax({
            url: url,
            method: "GET",
            success: function (data) {

                if (data.Response === "False") {
                    alert("Movie not found!");
                    return;
                }

                var title = data.Title;
                var year = data.Year;
                var rating = data.imdbRating;
                var poster = data.Poster;

                $("#movieResult").html(
                    "<h2>" + title + "</h2>" +
                    "<h3><strong>Year:</strong> " + year + "</h3>" +
                    "<h3><strong>IMDB Rating:</strong> " + rating + "</h3>" +
                    "<img src='" + poster + "' width='200'>"
                );

                $("#movieResult").addClass("show");
            },
            error: function () {
                alert("Error fetching data!");
            }
        });

    });

});

