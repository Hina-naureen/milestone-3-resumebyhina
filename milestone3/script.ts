// Get references to input fields and buttons
const generateButton = document.getElementById("generate-btn") as HTMLButtonElement;
const previewDiv = document.getElementById("resume-preview") as HTMLDivElement;

// Add event listener for the generate button
generateButton?.addEventListener("click", () => {
  // Get input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement).value;
  const work = (document.getElementById("work") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Generate resume content
  const result = `
    <h1>${name}</h1>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Education:</strong> ${education}</p>
    <p><strong>Work Experience:</strong> ${work}</p>
    <p><strong>Skills:</strong> ${skills}</p>
  `;

  // Insert content into the preview div
  if (previewDiv) {
    previewDiv.innerHTML = result;
    previewDiv.style.overflowY = "auto"; // Ensure scrolling
    previewDiv.style.maxHeight = "400px"; // Limit height
    previewDiv.style.border = "2px solid #ccc"; // Optional styling
    previewDiv.style.padding = "10px";
  }
});