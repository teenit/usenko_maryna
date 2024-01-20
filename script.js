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
function showModal(){
    var modal = document.getElementById("modal__form")
    modal.classList.toggle("modal__active")
}
function openmenu(){
    var modal = document.getElementById("mobileMenu")
    modal.classList.toggle("active")
}
// function setFormData(){
//     var obj = {
//         name:"",
//         phone:""
//     }
//     obj.name = document.getElementById("name").value
//     obj.phone = document.getElementById("phone").value
//     console.log(obj);
    
// }
