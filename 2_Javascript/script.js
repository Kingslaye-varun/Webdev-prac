function greet() {
    const name = document.getElementById('name').value;
    if (name) {
        document.getElementById('greeting').innerText = `Hello, ${name}!`;
    } else {
        document.getElementById('greeting').innerText = 'Please Enter Your Name!';
    }
}