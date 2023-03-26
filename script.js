let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}
function redirigir(url) {
    window.location.href = url;
}
<button id="myButton">Click me</button>

<script>
document.getElementById("myButton").addEventListener("click", function() {
  alert("Hello World!");
});
</script>


