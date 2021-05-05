//reference name input field
const nameInput = document.querySelector('#name')

//reference to submit button
const submitButton = document.querySelector('#submit')

//reference to section to write greet text
const greeting = document.querySelector('.greeting')

//reference to counter
const counter = document.querySelector('.counter')


//function to display greeting 
const displayGreeting = () => {
    //reference to checked button
    const checkedRadioBtn = document.querySelector("input[name='language']:checked")
    if(checkedRadioBtn){
        var language = checkedRadioBtn.value
    }

    let greetText = ''

    if(language == 'IsiZulu'){
        greetText = 'Sawubona '
    }

    if(language == 'IsiXhosa') {
        greetText = 'Molo '
    }

    if(language == 'English') {
        greetText = 'Hello '
    }
    
    if(nameInput.value != '') {
        greeting.innerHTML = greetText + nameInput.value
        greeting.style.color = '#eee'
    }else {
        greeting.innerHTML = "Please input name"
        greeting.style.color = 'red'
    }

}

//get value of counter from local storage
if(Number(localStorage.getItem('greetCount'))) {
    counter.innerHTML = Number(localStorage.getItem('greetCount'))
}

//initialize counter on local storage to zero
if(Number(localStorage.getItem('greetCount') == NaN)) {
    localStorage.setItem('greetCount', 0)
}

//initialize names to an empty array
if(localStorage.getItem('names') == null) {
    localStorage.setItem('names', [])
}

//function to increase counter 
const increaseCounter = () => {
    let count = Number(localStorage.getItem('greetCount')) || 0
    count++
    localStorage.setItem('greetCount', count)
    counter.innerHTML = localStorage.getItem('greetCount')
}

//make instance of factory function to check if name has already been greeted
const checkName = NamesGreeted()

//display greeting and increase counter when button is clicked
submitButton.addEventListener('click', () => {
    let names = [].concat(localStorage.getItem('names').split(','))
    checkName.setNamesGreeted(names)
    checkName.setName(nameInput.value)
    if(checkName.getName() != '' && !names.includes(checkName.getName())) {
        localStorage.setItem('names', checkName.userExists())
        increaseCounter()
    }

    displayGreeting()

    nameInput.value = ''
})