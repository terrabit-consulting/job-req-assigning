// script.js
document.getElementById("jobForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const jsonData = Object.fromEntries(data.entries());

  // Replace with your Power Automate HTTP trigger URL
  const powerAutomateUrl = "https://prod-xx.westeurope.logic.azure.com:443/workflows/your-flow-url";

  try {
    const response = await fetch(powerAutomateUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData),
    });

    if (response.ok) {
      alert("Job request submitted successfully!");
      form.reset();
    } else {
      alert("Failed to submit. Please try again.");
    }
  } catch (error) {
    alert("Error connecting to server.");
    console.error(error);
  }
});
