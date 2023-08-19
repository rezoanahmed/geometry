// triangle
const triangle = document.getElementById("area-triangle");
triangle.addEventListener("click", function(){
    var base = getValue("t-base");
    var height = getValue("t-height");
    var area = 0.5*base*height;
    console.log(area);  

    setValue("t-area", area);

    // adding value to area calculations
    areCalculations("Triangle", area);
    
})