// get the value from input function
function getValue(id){
    const input = document.getElementById(id);
    const inputString = input.value;
    const inputValue = parseInt(inputString);

    input.value = "";
    return inputValue;
}

function setValue(id, value){
    document.getElementById(id).innerText = value;
}

function areCalculations(title, area){
    let parent = document.getElementById("parent");
    let resultTitle = title;
    let resultArea = area;
    let result = `${resultTitle} = ${resultArea} cm<sup>2</sup>`;
    
    // let result = area;
    let li = document.createElement("li");
    li.innerHTML = result;

    parent.append(li);
    
}