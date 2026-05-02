const btn = document.querySelector(".login-btn");

btn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("https://your-project.vercel.app/api/users/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log(data);
    alert("Data saved to database");
  } catch (err) {
    console.error(err);
  }
});