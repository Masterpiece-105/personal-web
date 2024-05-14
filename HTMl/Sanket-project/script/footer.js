document.getElementById("footer-containt").innerHTML = `

<div class="footer-main">
<div class="footer-col">
  <div class="footer-img">
    <img src="./Images/practive-tech.png" alt="Images" />
  </div>
  <div class="footer-col icons">
    <!-- <a href="#" class="heading-info-tag">Products</a> -->
    <ul class="footer-icons">
      <li>
        <a href="https://www.linkedin.com/in/shubham-yadav-1138631b4/">
          <img src="./Images/Linkedin Icon.svg" alt="Linkedin" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/Shubham48741135">
          <img src="./Images/Twitter Icon.svg" alt="Twitter" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Masterpiece-105">
          <img src="./Images/GitHub Icon.svg" alt="Github" />
        </a>
      </li>
    </ul>
  </div>
</div>
<div class="footer-col">
  <a href="#" class="heading-info-tag">Technical Support Team</a>
  <ul>
    <li><a href="about.html">About Us</a></li>
    <li><a href="#">Technology Partners</a></li>
    <li><a href="#" onclick="togglePopupContact()">Technical Support</a></li>
    <li><a href="#">Privacy policy</a></li>
  </ul>
</div>
<div class="footer-col">
  <a href="#" class="heading-info-tag"
  >Website Developer Support Team</a
  >
  <ul>
    <li><a href="#" onclick="togglePopupContact()">Services</a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <!-- <li><a href="#"></a></li> -->
  </ul>
</div>
</div>
<div class="footer-legal">
<div class="copy-right-resrver">
  <p para>© 2024 Pro-Active-Technicalized Inc. All rights reserved.</p>
</div>
<div class="footer-terms">
  <a href="#">Privacy policy</a>
  <span class="divider"> | </span>
  <a href="#">Terms of use</a>
</div>
</div>

<div id="popupOverlayContact" class="overlay-container">
        <div class="popup-box">
        <h2 style="color: #00635d">Contact Us</h2>
        <form class="form-container">
        <label class="form-label" for="name">Email Us: </label>
        <div class="email">
        <a href="mailto:sy907219@gmail.com?subject = Feedback&body = Message"">sy907219@gmail</a>
        </div>
        <label class="form-label" for="name">Contact Us: </label>
        <div class="contact">
        <a href="tel:8451852436">+91-<span>8451852436</span></a>
        </div>
        </form>
        <button class="btn-close-popup" onclick="togglePopupContact()">Close</button>
        </div>
</div>  


`;
