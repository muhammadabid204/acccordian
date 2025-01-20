

const accordians = document.querySelectorAll("acccordian");

accordians.forEach(accordian => {
    const icon = accordian.querySelector(" .icon");
    const content = accordian.querySelector(".content");

    accordian.addEventListener("click");

    icon.classList.toggle("active");
    content.classList.toggle("active")
})




