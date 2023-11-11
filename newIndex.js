function displayItemDetails() {
    axios.get("https://crudcrud.com/api/7de038da4d2f414fb029526b76c858e5/apointdata")
    .then((response) => {
        let html = "";
        response.data.forEach(item => {
       
            html+= `
            <h2>Item Details:</h2>
            <p><strong>Name:</strong> ${item.name}</p>
            <p><strong>Description:</strong> ${item.description}</p>
            <p><strong>Price:</strong>${item.price}</p>
            <p><strong>Quantity:</strong> <span id="displayedQuantity">${item.quantity}</span></p>
            <button id="BuyOne" onclick="updateQuantity1('${item._id}')">Buy One</button>
            <button id="BuyTwo" onclick="updateQuantity2('${item._id}')">Buy Two</button>
            <button id="BuyThree"onclick="updateQuantity3('${item._id}')">Buy Three</button>
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
    const itemQuantity =document.getElementById('itemQuantity').value;

    const newItem = {
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        quantity:+itemQuantity
    };

    axios.post("https://crudcrud.com/api/7de038da4d2f414fb029526b76c858e5/apointdata", newItem)
    .then((response) => {
        console.log(response)
        displayItemDetails()
    })
    .catch((err)=> {
        console.log(err)
    })

});

function updateQuantity1(id){
    axios.get(`https://crudcrud.com/api/7de038da4d2f414fb029526b76c858e5/apointdata/${id}`)
    .then((response)=>{
        if(response.data.quantity>0){
            axios.put(`https://crudcrud.com/api/7de038da4d2f414fb029526b76c858e5/apointdata/${id}`,{
                name: response.data.name,
                description: response.data.description,
                price: response.data.price,
                quantity:+response.data.quantity-1
            })
            .then(()=>{
                displayItemDetails()
            })
         } 
         else{
             alert('item out of stock')
         }
    })
    .catch(err=>console.log(err))
}

function updateQuantity2(id){
    axios.get(`https://crudcrud.com/api/7de038da4d2f414fb029526b76c858e5/apointdata/${id}`)
    .then((response)=>{
        if(response.data.quantity>0){
            axios.put(`https://crudcrud.com/api/7de038da4d2f414fb029526b76c858e5/apointdata/${id}`,{
                name: response.data.name,
                description: response.data.description,
                price: response.data.price,
                quantity:+response.data.quantity-2
            })
            .then(()=>{
                displayItemDetails()
            })
         } 
         else{
             alert('item out of stock')
         }
    })
    .catch(err=>console.log(err))
}


function updateQuantity3(id){
    axios.get(`https://crudcrud.com/api/7de038da4d2f414fb029526b76c858e5/apointdata/${id}`)
    .then((response)=>{
        if(response.data.quantity>0){
            axios.put(`https://crudcrud.com/api/7de038da4d2f414fb029526b76c858e5/apointdata/${id}`,{
                name: response.data.name,
                description: response.data.description,
                price: response.data.price,
                quantity:+response.data.quantity-3
            })
            .then(()=>{
                displayItemDetails()
            })
         } 
         else{
             alert('item out of stock')
         }
    })
    .catch(err=>console.log(err))
}

    
