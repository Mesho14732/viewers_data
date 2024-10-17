// JavaScript to collect form data when button is clicked
let button = document
  .getElementById("submitBtn")
  .addEventListener("click", () => {
    // Collect form data using getElementById
    const name = document.getElementById("name").value;
    const club = document.getElementById("club").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    // Display the collected data collected in browswer
    const submissionOutput = document.getElementById("output");
    submissionOutput.innerHTML = `
                <h3>Submitted Customer's Biodata:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Club:</strong> ${club}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Age:</strong> ${age}</p>
                <h3>Welcome Message:</h3>
                <p>Mr. ${name}, you are welcome to our prestigeous viewing center, we are commited to serving you better.Please do have fun and enjoy watching ${club} your favourite club
            `;

    // Optionally log the data to the console
    console.log({
      name: name,
      club: club,
      email: email,
      age: age,
    });
    console.log(
      `Mr. ${name}, you are welcome to our prestigeous viewing center, we are commited to serving you better.Please do have fun and enjoy watching ${club} your favourite club`
    );
  });
