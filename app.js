const inputText = document.querySelector("input");
const containerImage = document.getElementById("elementos");

inputText.addEventListener("keypress", (event) => {

    let key = event.which || event.keyCode; 
    
    if (key === 13) {  
        let gif = inputText.value;
        
        inputText.value = "";
        
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=n8ENoKk6dAEmpuZwgjdfJRPpyWXCQ9st&q=gif&limit=25&offset=0&rating=G&lang=en${gif}n8ENoKk6dAEmpuZwgjdfJRPpyWXCQ9st`)
            .then(response => response.json())
            .then(data => {                
                renderInfo(data);
            })
    }
})
const renderInfo = data => {
    let a = `${data.avatar_url}`;
    let output = '';
    for(let b of a){
        output= containerImage.innerHTML = `<img src="${data.avatar_url}">`;
    }
    document.getElementById("elementos").innerHTML = output;
}