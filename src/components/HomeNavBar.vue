<template>
  <nav class="navbar home-navbar">
    <!-- Left Section: Big Logo -->
    <div class="left-section">
      <img src="@/assets/pictures/long_avrame_logo.png" alt="Logo" class="big-logo" />
    </div>

    <!-- Right Section: "Log In" and Help Buttons -->
    <div class="right-section">
      <button class="nav-btn">Log In</button>
      <button class="icon-btn">
        <img src="@/assets/buttons/help_icon.png" alt="Help" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
/* General Navigation Bar Styling */
.home-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333; /* Dark background */
  color: white;
  padding: 0.8rem 2rem;
  height: 70px;
}

/* Left-Aligned Section Styling */
.left-section {
  display: flex;
  align-items: center;
}

.big-logo {
  height: 60px; /* Adjust height for a big logo */
  width: auto;
}

/* Right-Aligned Section Styling */
.right-section {
  display: flex;
  align-items: center;
  gap: 1rem; /* Spacing between buttons */
}

/* Button Styling */
.nav-btn {
  background: none;
  color: white;
  border: 1px solid white;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.nav-btn:hover {
  background-color: white;
  color: #333; /* Hover effect: invert colors */
}

.icon-btn {
  border: none;
  background: none;
  cursor: pointer;
}

.icon-btn img {
  height: 30px; /* Adjust icon size */
  width: auto;
  transition: transform 0.2s ease; /* Add slight hover effect */
}

.icon-btn img:hover {
  transform: scale(1.1); /* Slight zoom on hover */
}
</style>