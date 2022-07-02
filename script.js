function payment() { 
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer sk_test_b3d75c5d1bf95062c05aa8fd8d93840bd4f90cbf") 
  myHeaders.append("Content-Type", "application/json")
  var amountTyped = document.getElementById("amount").value
  var emailTyped = document.getElementById("email").value
  var payload = JSON.stringify({
  "amount": amountTyped,
  "email": emailTyped
  })
  var otherData = {
    method:"Post",
    headers: myHeaders,
    body: payload
  }
  fetch("https://api.paystack.co/transaction/initialize", otherData)
  .then(response => response.json())
  .then(result => console.log(result))//window.location.href = result.data.authorization_url
  //)
}

function verifyPayment() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer sk_test_b3d75c5d1bf95062c05aa8fd8d93840bd4f90cbf") 
  myHeaders.append("Content-Type", "application/json")
 
  var otherData = {
    method:"Get",
    headers: myHeaders
  }
  fetch("https://api.paystack.co/transaction/verify/fghjmcctxj", otherData)
  .then(response => response.json())
  .then(result=> console.log(result))
}

function transactionList() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer sk_test_b3d75c5d1bf95062c05aa8fd8d93840bd4f90cbf") 
  myHeaders.append("Content-Type", "application/json")

  var otherData = {
    method: "Get",
    headers: myHeaders
  }

  fetch("https://api.paystack.co/transaction", otherData)
  .then(response => response.json())
  .then(result=> console.log(result))
}

function fetchTransaction() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer sk_test_b3d75c5d1bf95062c05aa8fd8d93840bd4f90cbf") 
  myHeaders.append("Content-Type", "application/json")

  var otherData = {
    method: "Get",
    headers: myHeaders
  }
  var searchBoxTransaction = document.getElementById("searchTransaction").innerHTML
  fetch('https://api.paystack.co/transaction/'+searchBoxTransaction, otherData)
  .then(response => response.json())
  .then(result=> console.log(result))
    document.getElementById("status").innerHTML = "Status: " + result.data.status
    document.getElementById("channel").innerHTML = "Channel: " + result.data.channel
    document.getElementById("customerDetails").innerHTML = "Customer's email: " + result.data.customer[3]
    document.getElementById("currency").innerHTML = "Currency: " + result.data.currency
}

function transactionTotal() {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer sk_test_b3d75c5d1bf95062c05aa8fd8d93840bd4f90cbf")
  myHeaders.append("content-Type", "application/json")

  var otherData = {
    method: "Get",
    headers: myHeaders
  }
  
  fetch("https://api.paystack.co/transaction/totals", otherData)
  .then(response => response.json())
  .then(result => { console.log(result)
    document.getElementById("totalTransaction").innerHTML = "Transaction total is " + result.data.total_transactions
    document.getElementById("totalVolume").innerHTML = "Total Volume is " + result.data.total_volume
    document.getElementById("pendingTransfers").innerHTML = "Pending transfer is " + result.data.pending_transfers
  })
}
