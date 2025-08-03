let lostItems = [];
let foundItems = [];

function reportLostItem() {
  const name = document.getElementById("lostItemName").value;
  const reporter = document.getElementById("lostReporter").value;
  const category = document.getElementById("lostCategory").value;
  const desc = document.getElementById("lostDesc").value;

  if (name && reporter && category && desc) {
    lostItems.push({ name, reporter, category, desc });
    displayLostItems(lostItems);
    alert("Lost item reported!");
  } else {
    alert("All fields are required!");
  }
}

function reportFoundItem() {
  const name = document.getElementById("foundItemName").value;
  const reporter = document.getElementById("foundReporter").value;
  const category = document.getElementById("foundCategory").value;
  const desc = document.getElementById("foundDesc").value;

  if (name && reporter && category && desc) {
    foundItems.push({ name, reporter, category, desc });
    displayFoundItems(foundItems);
    alert("Found item reported!");
  } else {
    alert("All fields are required!");
  }
}

function displayLostItems(arr) {
  const container = document.getElementById("lostList");
  container.innerHTML = "";
  arr.forEach(item => {
    const card = `<div class="card"><strong>${item.name}</strong><br>
      Reported by: ${item.reporter}<br>
      Category: ${item.category}<br>
      <em>${item.desc}</em></div>`;
    container.innerHTML += card;
  });
}

function displayFoundItems(arr) {
  const container = document.getElementById("foundList");
  container.innerHTML = "";
  arr.forEach(item => {
    const card = `<div class="card"><strong>${item.name}</strong><br>
      Reported by: ${item.reporter}<br>
      Category: ${item.category}<br>
      <em>${item.desc}</em></div>`;
    container.innerHTML += card;
  });
}

function filterLostItems() {
  const filter = document.getElementById("lostFilter").value;
  if (filter === "") displayLostItems(lostItems);
  else {
    const result = lostItems.filter(i => i.category === filter);
    displayLostItems(result);
  }
}

function filterFoundItems() {
  const filter = document.getElementById("foundFilter").value;
  if (filter === "") displayFoundItems(foundItems);
  else {
    const result = foundItems.filter(i => i.category === filter);
    displayFoundItems(result);
  }
}

function validateContactForm() {
  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const msg = document.getElementById("contactMsg").value;
  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;

  if (!name || !email || !msg) {
    alert("Please fill out all fields.");
    return false;
  }
  if (!emailPattern.test(email)) {
    alert("Invalid email format.");
    return false;
  }

  alert("Message sent!");
  return false;
}

function validateSignupForm() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const city = document.getElementById("city").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;

  const nameRegex = /^[a-zA-Z]{3,15}$/;
  const cityRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  if (!nameRegex.test(username)) {
    alert("Username must be 3–15 letters.");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return false;
  }

  if (!cityRegex.test(city)) {
    alert("City must contain only letters.");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return false;
  }

  if (password !== confirm) {
    alert("Passwords do not match.");
    return false;
  }

  alert("Sign Up Successful!");
  return false;
}
