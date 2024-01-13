function showList(index) {
     var desc = document.querySelectorAll(".program-body-blocks-block-description")[index]
     desc.classList.toggle("active");
}
document.getElementById("sendForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    fetch("send-message.php", {
        method: "POST",
        body: JSON.stringify({ name: name, phone: phone }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error("Fail:", error));
});