const input = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");


btn.addEventListener("click", function (el) {
    el.preventDefault();
    if (NotNull(input)) {
        let li = document.createElement("li");
        let icon = document.createElement("i");
        icon.classList.add("bi", "bi-trash3", "float-end");
        li.innerText = input.value;
        li.classList.add("list-group-item")
        li.append(icon);
        icon.onclick = function () {
            this.parentElement.remove();
        }
        li.addEventListener("click", function () {
            for (let i = 0; i < this.parentElement.children.length; i++) {
                this.parentElement.children[i].classList.remove("active");
            }
            this.classList.add("active");
        })
        ul.append(li);

    }
})
document.querySelector("body").onkeydown = function (el) {
    if (el.key == "Delete") {
        let del = document.querySelector(".active");
        del.remove();
    }
}


function NotNull(el) {
    if (el.value.trim() == "") {
        el.nextElementSibling.classList.remove("d-none");
        return false;
    }
    else {
        el.nextElementSibling.classList.add("d-none");
        return true;
    }
}



