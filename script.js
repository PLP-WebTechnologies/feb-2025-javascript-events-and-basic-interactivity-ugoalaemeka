// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button Clicked!");
  });
  
  document.getElementById("hoverArea").addEventListener("mouseover", () => {
    document.getElementById("hoverArea").style.backgroundColor = "#ffe4b5";
  });
  
  document.getElementById("hoverArea").addEventListener("mouseout", () => {
    document.getElementById("hoverArea").style.backgroundColor = "#ddd";
  });
  
  document.getElementById("keyInput").addEventListener("keypress", (e) => {
    document.getElementById("keypressResult").textContent = `You pressed: ${e.key}`;
  });
  
  // Interactive: Change Color
  document.getElementById("changeColorBtn").addEventListener("click", function () {
    this.style.backgroundColor = "#e91e63";
    this.textContent = "Color Changed!";
  });
  
  // Interactive: Image Gallery
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3"
  ];
  let currentImage = 0;
  
  function showImage() {
    document.getElementById("galleryImage").src = images[currentImage];
  }
  
  function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage();
  }
  
  function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage();
  }
  
  // Tabs
  function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    document.getElementById(tabId).style.display = 'block';
  }
  
  // Form Validation
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    let message = "";
  
    if (!name || !email || !password) {
      message = "All fields are required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      message = "Invalid email format.";
    } else if (password.length < 8) {
      message = "Password must be at least 8 characters.";
    } else {
      message = "Form submitted successfully!";
    }
  
    document.getElementById("formFeedback").textContent = message;
  });
  
  // Bonus: Double-click action
  document.getElementById("main-heading")?.addEventListener("dblclick", () => {
    alert("You discovered the secret double-click! 🎉");
  });
  