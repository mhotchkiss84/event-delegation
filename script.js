// When the user clicks on any given link, they should see an h1 element with an appropriate heading and some lorem ipsum text. 
document.querySelector(`#home`).addEventListener("click", homeEvent => {
    document.querySelector(`#container`).innerHTML = `<section class="output">
    <h1>Home Page</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in pretium metus. Integer imperdiet orci magna, tincidunt efficitur nulla dapibus vitae. Nullam lorem diam, tincidunt nec felis quis, lobortis euismod tortor. Aenean vehicula erat rhoncus, convallis nisl sit amet, vestibulum ipsum. Maecenas vitae ex diam. Phasellus non dolor quis urna suscipit porta. Donec massa nulla, pharetra ut eleifend quis, aliquam at diam. Mauris ut diam at massa tempus pellentesque vel at augue. Quisque velit neque, fringilla in ipsum a, tristique ullamcorper velit.</p></section>`
})
document.querySelector(`#about`).addEventListener("click", aboutEvent => {
    document.querySelector(`#container`).innerHTML = `<section class="output"><h1>About me</h1><p>Nulla tellus mauris, accumsan id risus at, sodales consectetur orci. Vivamus eleifend, arcu a tincidunt pretium, dolor arcu aliquet justo, ut fringilla sem ligula a nisi. In in bibendum sem. Quisque sollicitudin volutpat metus, ultricies finibus ante rutrum lacinia. Sed a consectetur felis, ut tristique neque. Nam dictum metus pretium sollicitudin blandit. Ut sollicitudin auctor lobortis. Aenean eleifend dolor nec massa semper, eget sodales ex euismod. Donec a mattis leo.</p></section>`
})
document.querySelector(`#projects`).addEventListener("click", projectsEvent => {
    document.querySelector(`#container`).innerHTML = `<section class="output"><h1>About me</h1><p>Aliquam erat volutpat. Aliquam erat volutpat. Vivamus egestas sed dui sit amet porttitor. Donec eget augue nisi. Praesent euismod lacus tempus, lacinia nibh faucibus, commodo leo. Pellentesque non felis nunc. Ut vitae vehicula lorem. Suspendisse interdum, odio eget ullamcorper fermentum, ligula metus pellentesque arcu, vehicula mollis magna lectus et odio. Mauris pharetra scelerisque tortor iaculis convallis.</p></section>`
})

// In the "Contact Me" section, the user should see a form with two inputs: one for the user's name and one for their message. They should also see a button that says "Send".

function getFormInput(){
    document.querySelector(`#submit-form`).addEventListener("click", formEvent => {
    const userName = document.querySelector(`#form-name`).value
    const userMessage = document.querySelector(`#form-message`).value
    window.alert(`Your message has been sent`)
    return document.querySelector(`#container`).innerHTML += `<section class="output">
    <h3>Your mesage was sent!</h3>
    <p>Name: ${userName}</p>
    <p>Message: ${userMessage}</p>
    </section>`
    
})}
document.querySelector(`#contact`).addEventListener("click", contactEvent => {
    document.querySelector(`#container`).innerHTML = `
    <section class="output"> 
    <h1>Contact Me</h1>
    <form>
    <label for="form-name">Name</label>
    <input type="text" name="form-name" id="form-name">
    <label for="form-message">Your Message</label>
    <textarea name="form-message" id="form-message" cols="25" rows="10"></textarea>
    </form>
    <button id="submit-form">Submit</button>
    </section>`
    getFormInput()
})


// When the user clicks the "Send" button, the message inputs should clear and they should see a confirmation message below the form that says "Your message has been sent"