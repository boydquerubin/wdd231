const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)

const rawTimestamp = myInfo.get('timestamp');
const formattedDate = new Date(rawTimestamp).toLocaleString('en-US', {
  dateStyle: 'long',
  timeStyle: 'short'
});

document.querySelector('#results').innerHTML = `
  <p>We appreciate you reaching out!</p>
  <p>We will review the message and get back to you within 3 business days.</p>
  <p>Here are the details you provided, submitted on: ${formattedDate}</p>
  <p>Message from ${myInfo.get('firstName')} ${myInfo.get('lastName')}</p>
  <p>Email address: ${myInfo.get('email')}</p>
  <p>Phone number: ${myInfo.get('phone')}</p>
`;
