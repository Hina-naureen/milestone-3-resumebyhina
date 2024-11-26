// Get form and resume preview elements
var form = document.getElementById("resume-form");
var resumeContent = document.getElementById("resume-content");
var resumePreview = document.getElementById("resume-preview");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get the user input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var work = document.getElementById("work").value;
    var skills = document.getElementById("skills").value;
    // Dynamically generate the resume preview
    var resumeHTML = "\n    <div class=\"glowing-box\">\n      <h3>".concat(name, "</h3>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n    </div>\n    <div class=\"glowing-box\">\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n    </div>\n    <div class=\"glowing-box\">\n      <h3>Work Experience</h3>\n      <p>").concat(work, "</p>\n    </div>\n    <div class=\"glowing-box\">\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    </div>\n  ");
    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumePreview.style.display = "block"; // Show the preview
});
