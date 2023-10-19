const rectangle = document.querySelector("#rectangle")




rectangle.addEventListener("click", (e) => {
    
    const span = document.createElement("span")
    span.classList.add(`client${e.clientX}${e.clientY}`)
    rectangle.appendChild(span)
    const generatedCircle = document.querySelector(`.client${e.clientX}${e.clientY}`);
    generatedCircle.style.top = `${e.clientY}px`;
    generatedCircle.style.left =`${e.clientX}px`;
     console.log(Math.random()*100);
})