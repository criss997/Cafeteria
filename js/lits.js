var request = new XMLHttpRequest();

request.open('POST', 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/updateProduct');

request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function() {
    if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};

var body = {
    'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/251px-A_small_cup_of_coffee.jpg',
    'price': 305,
    'id': 'bb6a902d-bbcb-4c80-9db0-389fb759bf4c',
    'name': 'Café'
};

request.send(JSON.stringify(body));