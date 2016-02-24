$(document).ready(function() {
    getData();
});


function getData() {

    $.getJSON("js/columbia.json", function(data) {
        //Callback is a function that runs after something else executes. So after the data is loaded.
        loopThroughData(data);
    })

}

function loopThroughData(s) {
    
    for (i=0; i<s.length; i++) {
        var schoolName = s[i]["SCHOOL_NAME"];
        var year = s[i]["YEAR"];
        var gradPct = s[i]["GRADUATES_PCT"];
        
        //Checked to see Hickman's graduation rates. 
        
        var barWidth = gradPct * 5;
        
        //working with text: 
        //paragraph tags. 
        //h tags (h1, h2, etc.)
        //span
        //div
        
        if (schoolName === "COLUMBIA-HICKMAN HIGH") {
            $(".chart").append(
                "<div class='bar-item'>"+
                    "<span>"+year+": "+gradPct+"%</span>"+
                    "<div class='bar' style='width:"+barWidth+"px'></div>"+
                "</div>"
            );
        }
    }
}



