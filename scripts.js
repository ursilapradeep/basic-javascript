let displayCount=document.querySelector(".showValue");
let plus = document.querySelector(".plus_button");
let minus = document.querySelector(".minus_button");

let countClick = 0;

showCount();
plus.addEventListener("click",() =>
{
    countClick++;
    showCount();
})

minus.addEventListener("click",() => {
        countClick--;
        showCount();
    })
function showCount()
{
displayCount.innerHTML = countClick;
}