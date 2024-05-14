document.getElementById("nav-header").innerHTML = `
<div class="logo">
<a href="/index.html">
  <img src="./Images/practive-tech.png" alt="Images" />
</a>
</div>
<div class="left-container">
<nav class="nav-menu">
  <ul class="menu">
    <li><a href="/why-us.html" class="link">Why pro-active</a></li>
    <li><a href="https://masterpiece-105.github.io/personal-web/" class="link">Services</a></li>
    <li><a href="/about.html" class="link">About Us</a></li>
    <li>
      <a href="#" class="link-button" onclick="togglePopup()"
        >Get in touch</a
      >
    </li>
  </ul>
</nav>
<div class="btn" onclick="togglePopup()">
  <a href="#">Get in touch</a>
</div>
<div class="btn-container">
  <div class="login-page">
    <a href="#"><img src="./Images/account_icon.svg" alt="Images" /></a>
  </div>
</div>
<button onclick="openMenu()">
  <img src="./Images/menu.png" alt="imges" />
</button>
</div>

<div id="popupOverlay" class="overlay-container">
<div class="popup-box">
  <h2 style="color: #00635d">Contact Us</h2>
  <form class="form-container">
    <label class="form-label" for="name"> First Name: </label>
    <input
      class="form-input"
      type="text"
      placeholder="First Name"
      id="name"
      name="name"
      required
    />
    <label class="form-label" for="name"> Last Name: </label>
    <input
      class="form-input"
      type="text"
      placeholder="Last Name"
      id="name"
      name="name"
      required
    />
    <label class="form-label" for="name"> Phone: </label>
    <input
      class="form-input"
      type="tel"
      placeholder="Phone"
      id="name"
      name="name"
      required
    />
    <label class="form-label" for="email">Email:</label>
    <input
      class="form-input"
      type="email"
      placeholder="Enter Your Email"
      id="email"
      name="email"
      required
    />

    <button class="btn-submit" type="submit">Submit</button>
  </form>
  <button class="btn-close-popup" onclick="togglePopup()">Close</button>
</div>
</div>  

`;
