function displayItemDetails() {
    axios.get("https://crudcrud.com/api/09dccb95b79b4de1a0ca2c22f5b207a8/apointdata")
    .then((response) => {
        let html = "";
        response.data.forEach(item => {
       
            html+= `
            <h2>Item Details:</h2>
            <p><strong>Name:</strong> ${item.name}</p>
            <p><strong>Description:</strong> ${item.description}</p>
            <p><strong>Price:</strong>${item.price}</p>
            <p><strong>Quantity:</strong> <span id="displayedQuantity">${item.quantity}</span></p>
            <button onclick="buyOne()">Buy One</button>
            <button onclick="buyTwo()">Buy Two</button>
            <button onclick="buyThree()">Buy Three</button>
     
        `
         });
      document.getElementById('itemDetails').innerHTML = html;
    })
    }
document.onload = displayItemDetails();

document.getElementById('addItemBtn').addEventListener('click', () => {
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemQuantity = document.getElementById('itemQuantity').value;

    const newItem = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        quantity: itemQuantity
    };

    axios.post("https://crudcrud.com/api/09dccb95b79b4de1a0ca2c22f5b207a8/apointdata", newItem)
    .then((response) => {
        console.log(response)
        displayItemDetails()
    })
    .catch((err)=> {
        console.log(err)
    })

});



function updateDisplayedQuantity(updatedQuantity) {
    const displayedQuantityElement = document.getElementById('displayedQuantity');
    displayedQuantityElement.textContent = updatedQuantity;
}


function buyOne() {
    const displayedQuantityElement = document.getElementById('displayedQuantity');
    const currentQuantity = parseInt(displayedQuantityElement.textContent);
    if (currentQuantity > 0) {
        const updatedQuantity = currentQuantity - 1;
        updateDisplayedQuantity(updatedQuantity);

        // (PUT) request
        const itemId = "itemId"; 
        
        axios.put(`https://crudcrud.com/api/09dccb95b79b4de1a0ca2c22f5b207a8/apointdata/${itemId}`, {
            quantity: updatedQuantity
        })
        .then(response => {
            console.log("Quantity updated successfully:", response.data);
        })
        .catch(error => {
            console.error("Error updating quantity:", error);
        });
    }
}

function buyTwo() {
    const displayedQuantityElement = document.getElementById('displayedQuantity');
    const currentQuantity = parseInt(displayedQuantityElement.textContent);
    if (currentQuantity >= 2) {
        const updatedQuantity = currentQuantity - 2;
        updateDisplayedQuantity(updatedQuantity);
    } else if (currentQuantity === 1) {
        updateDisplayedQuantity(0);

        // (PUT) request
        const itemId = "itemId";
        axios.put(`https://crudcrud.com/api/09dccb95b79b4de1a0ca2c22f5b207a8/apointdata/${itemId}`, {
            quantity: updatedQuantity
        })
        .then(response => {
            console.log("Quantity updated successfully:", response.data);
        })
        .catch(error => {
            console.error("Error updating quantity:", error);
        });
    }
}

function buyThree() {
    const displayedQuantityElement = document.getElementById('displayedQuantity');
    const currentQuantity = parseInt(displayedQuantityElement.textContent);
    if (currentQuantity >= 3) {
        const updatedQuantity = currentQuantity - 3;
        updateDisplayedQuantity(updatedQuantity);
    } else if (currentQuantity === 2 || currentQuantity === 1) {
        updateDisplayedQuantity(0);

    // (PUT) request
        const itemId = "itemId"; 
        axios.put(`https://crudcrud.com/api/09dccb95b79b4de1a0ca2c22f5b207a8/apointdata/${itemId}`, {
            quantity: updatedQuantity
        })
        .then(response => {
            console.log("Quantity updated successfully:", response.data);
        })
        .catch(error => {
            console.error("Error updating quantity:", error);
        });
    } else if (currentQuantity === 2 || currentQuantity === 1) {
        updateDisplayedQuantity(0);

        //(PUT) request
        const itemId = "itemId";
        axios.put(`https://crudcrud.com/api/09dccb95b79b4de1a0ca2c22f5b207a8/apointdata/${itemId}`, {
            quantity: 0
        })
        .then(response => {
            console.log("Quantity updated successfully:", response.data);
        })
        .catch(error => {
            console.error("Error updating quantity:", error);
        });
    }
}
    
