window.addEventListener("load", function ()
{
  let counter = 0;

  function buttonClicked()
  {
    counter++;

    let clickedCounterElement = document.getElementById("clickcounter");

    clickedCounterElement.innerHTML = "Clicked " + counter + " times."
  }

  let clickButtonElement = document.getElementById("clickbutton");

  clickButtonElement.addEventListener("click", buttonClicked);
});