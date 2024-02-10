const joke = new Joke
const jform = document.getElementById("Jform")
const numb= document.getElementById('numb')
jform.addEventListener('submit', fetchJoke)


function fetchJoke(e){
    e.preventDefault()
    if(numb.value === ""){
        alert("Enter a valid number of joke")
    }else{
    joke.get("https://api.chucknorris.io/jokes/random")
    .then((data) => {document.getElementById('output').innerText= (data.value)})
    .catch((err) => {document.getElementById('output').innerText= (err.message)})
    numb.value = ""
    }
    alertM()
    // console.log(123)
}

function alertM(){
    const div = document.createElement('div')
    div.className = "border" +" w-full "
    +"p-1" +" border-red-300 " +"bg-red-600" + ' text-white '+'italic'
    div.appendChild(document.createTextNode('Only 1 joke available for now'));
    const parent = document.querySelector(".container")
    const jform = document.getElementById("Jform")
    parent.insertBefore(div,jform)
    // console.log(div)
    setTimeout(()=>{
        div.remove()
    },3000)
}