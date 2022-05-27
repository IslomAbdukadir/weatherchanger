video = document.querySelector("#video");
let aaa = prompt("what weather is?(sun or rain)");
if (aaa) {
    $(video).attr("src", aaa + ".mp4");
}