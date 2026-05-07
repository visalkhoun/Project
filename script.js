console.log("script loaded");

const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  console.log("button clicked");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(email, password);

  try {
    const res = await fetch("https://project-taupe-nine-54.vercel.app/api/users/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    console.log("response status:", res.status);

    const data = await res.json();

    console.log(data);

    alert("success");

  } catch (err) {
    console.error(err);
  }
});