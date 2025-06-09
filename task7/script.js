const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

// Custom data arrays
const customNames = [
  "Aalok Sharma", "Ram Verma", "Shivam Yadav", "Raj Mehta", "Kumar Singh",
  "Upadhyay Joshi", "Pranav Das", "Neha Rathi", "Ravi Thakur", "Sneha Patel"
];

const customEmails = [
  "aalok@example.com", "ram@example.com", "shivam@example.com", "raj@example.com",
  "kumar@example.com", "upadhyay@example.com", "pranav@example.com",
  "neha@example.com", "ravi@example.com", "sneha@example.com"
];

function fetchUserData() {
  userContainer.innerHTML = '<p>Loading...</p>';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) throw new Error('Failed to fetch user data');
      return response.json();
    })
    .then(data => {
      userContainer.innerHTML = '';

      data.forEach((user, index) => {
        // Replace with custom name and email
        const newName = customNames[index] || user.name;
        const newEmail = customEmails[index] || user.email;

        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
          <h3>${newName}</h3>
          <p><strong>Email:</strong> ${newEmail}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(userCard);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

reloadBtn.addEventListener('click', fetchUserData);
fetchUserData();
