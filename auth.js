// auth.js

// Simulate login function
function login(event) {
    event.preventDefault();
    // Get username and password (you can improve with actual authentication logic)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check credentials (just for demo; replace with real checks later)
    if (username && password) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "index.html"; // Redirect to main page on success
    } else {
      alert("Please enter valid credentials");
    }
  }
  function loginUser(event) {
    event.preventDefault();
    localStorage.setItem("loggedIn", "true"); // simulate login
    window.location.href = "index.html";
  }
  
  function signupUser(event) {
    event.preventDefault();
    localStorage.setItem("loggedIn", "true"); // simulate signup
    window.location.href = "index.html";
  }
  
  
  // Simulate signup function
  function signup(event) {
    event.preventDefault();
    // Collect username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Simulate saving the user to a database (in reality, you'd store in a DB)
    if (username && password) {
      alert("Sign up successful! Now, please log in.");
      window.location.href = "login.html"; // Redirect to login page after sign up
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  // auth.js


  const checkboxes = document.querySelectorAll('input[type="checkbox"][name="service"]');

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const selected = Array.from(checkboxes).filter(c => c.checked);
      if (selected.length > 2) {
        cb.checked = false;
        alert("You can only select up to 2 services.");
      }
    });
  });

  function bookService(event) {
    event.preventDefault();
    const selectedServices = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);
    
    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
    } else {
      alert("Services booked: " + selectedServices.join(", "));
      // Submit or save data here
    }
  }




  // Logout function
  function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
  }