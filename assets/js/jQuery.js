$(document).ready(function () {
  // DOM: Getting Card Element
  $("#btn1").click(function () {
    console.log("Text: " + $("#test").text());
  });
  $("#btn2").click(function () {
    console.log("HTML: " + $("#test").html());
  });

  const domCard = `
  <div class="card">
    <a href="./projects/1-four-card-feature-section/index.html">
        <img
        class="card-img-top w-100 d-block fit-cover"
        style="height: 200px"
        src="assets/img/four-card-section.webp"
        />
    </a>
    <div class="card-body p-4">
        <h4 class="card-title">Four card feature section</h4>
        <p class="card-text">
        A nice layout-based challenge for beginners. This will test
        anyone who is new to multi-column and responsive layouts.
        </p>
        <div class="d-flex">
        <button class="btn btn-primary" type="button">Button</button>
        </div>
    </div>
    </div>
  `;
});
