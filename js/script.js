$(document).ready(function() {

    $(".go").click(function getResults() {
    	$(".searchResults").empty();
        var searchTerm = $(".searchText").val();
        console.log(searchTerm);
        var link = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchTerm + "&srlimit=12&srqiprofile=classic&srprop=snippet&srenablerewrites=1";
        console.log(link);
        $.ajax({
            url: link,
            dataType: "jsonp",
            success(response) {
                console.log(response);
                $(response).each(function(i, val) {
                    $.each(val.query.search, function(key, result) {
                        var url = "https://en.wikipedia.org/wiki/";
                        var title = result.title;
                        var snippet = result.snippet;
                        $(".searchResults").append("<li><a  href='" 
                         + url 
                         + title
                         + "' target='_blank'><div class='heading'>" 
                         + title 
                         + "</div><div class='snippet'" 
                         + snippet 
                         + "...</div></a></li>").fadeIn();
                    })

                })
            }
        });
    });
});
