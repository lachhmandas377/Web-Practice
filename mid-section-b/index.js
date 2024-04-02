var prev = document.getElementsByClassName("prev")
var next = document.getElementsByClassName("next")
prev.onclick = nextFucn

function nextFucn(){
    // var
    var imglist = document.getElementsByClassName("allImag")[1]
    
    var image = document.getElementsByClassName("bag")
    image.innerHTML = imglist.innerHTML
    // image.appendChild(image)

}

function prevFunc(){
    
}