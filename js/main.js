var request = new XMLHttpRequest();

request.open('GET', 'https://iitd7euw75.execute-api.us-east-1.amazonaws.com/services/products/getProducts');

request.onreadystatechange = function() {
    if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
    }
};

request.send();



function traer() {

    var element = document.getElementById("etiqueta")

    alert(request.setRequestHeader.)
    element.innerHTML = `
                <div>
                    <p id="idProducto"></p>
                    <img id="imagen" src=" " alt="Logo">
                </div>
                
                <div>

                </div>
            
            `



}