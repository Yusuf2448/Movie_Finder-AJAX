$(document).ready(function () {

    $("#getMovie").click(function () {

        var movieName = $("#movie").val();

        if (movieName === "") {
            alert("Please enter a movie name");
            return;
        }

        var apiKey = "802a76c7";
        var searchUrl = "https://www.omdbapi.com/?s="
                        + movieName +
                        "&apikey=" + apiKey;

        $.ajax({
            url: searchUrl,
            method: "GET",
            success: function (data) {

                if (data.Response === "False") {
                    alert("Movie not found!");
                    return;
                }

                var movies = data.Search;
                $("#movieResult").html("");  

                for (var i = 0; i < movies.length; i++) {

                    var detailsUrl = "https://www.omdbapi.com/?i="
                                     + movies[i].imdbID +
                                     "&apikey=" + apiKey;

                    
                    $.ajax({
                        url: detailsUrl,
                        method: "GET",
                        success: function (movieData) {

                            var output =
                                "<div style='margin-bottom:20px'>" +
                                "<h2>" + movieData.Title + "</h2>" +
                                "<h3><strong>Year:</strong> " + movieData.Year + "</h3>" +
                                "<h3><strong>IMDb Rating:</strong> " + movieData.imdbRating + "</h3>" +
                                "<img src='" + movieData.Poster + "' width='150'>" +
                                "</div>";

                            $("#movieResult").append(output);
                            $("#movieResult").addClass("show");
                        }
                    });
                }
            },
            error: function () {
                alert("Error fetching data!");
            }
        });

    });

});
