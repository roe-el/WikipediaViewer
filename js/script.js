$(document).ready(function() {

    $(".go").click(function getResults() {
    	$(".searchResults").empty();
        var searchTerm = $(".searchText").val();
        console.log(searchTerm);
        var link = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchTerm + "&srlimit=10&srqiprofile=classic&srprop=snippet&srenablerewrites=1";
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
                        snippet = snippet.split('.');
                        $(".searchResults").append("<div class='well active set'><a  href='" 
                         + url 
                         + title
                         + "' target='_blank'><div class='heading'>" 
                         + title 
                         + "</div><div class='snippet'>" 
                         + snippet[0] 
                         + "...</div></a></div>").fadeIn();
                    })

                })
            }
        });
    });
$(".searchText").keydown(function(event){
	if(event.keyCode==13){
		$(".go").trigger('click');
	}
});
$(".random").click(function (){
	window.open("http://en.wikipedia.org/wiki/Special:Random","_blank");
});
});
