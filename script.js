const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // 🔍 basic validation
  if (!email || !password) {
    alert("Please fill in all fields");
    return;
  }

  try {
    const res = await fetch("https://project-taupe-nine-54.vercel.app//api/users/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    // 🔥 handle bad responses (like 403, 404)
    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);

    alert("Login data sent successfully!");

  } catch (err) {
    console.error("ERROR:", err);
    alert("Failed: " + err.message);
  }
});