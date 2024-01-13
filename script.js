function showList(index) {
    // var data = [
    //     ["Нейромедитація 1", "Практика для швидкої стабілізації емоційного стану"],
    //     ["Нейромедитація 2", "Тест на обмеження", "Комплекс вправ на зняття спазмів"],
    //     ["Біоенергетична практика 1", "Біоенергетична практика 2"],
    //     ["Нейромедитація 3", "Практична робота: Вибори в щоденному житті через контакт з собою"],
    //     ["Біоенергетична практика 3", "Нейромедитація 4", "Біоенергетична практика 4"],
    //     ["Секретний подарунок"],
    // ];

     var desc = document.querySelectorAll(".program-body-blocks-block-description")[index]
    // var list = desc.querySelector("ul");

    // if (!list) {
    //     list = document.createElement("ul");
    //     data[index].forEach(function (item) {
    //         var li = document.createElement("li");
    //         li.innerText = item;
    //         list.appendChild(li);
    //     });
    //     desc.appendChild(list);
    // }

    desc.classList.toggle("active");
   // list.style.display = desc.classList.contains("active") ? "block" : "none";
}
