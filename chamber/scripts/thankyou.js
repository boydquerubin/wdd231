const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)

// console.log(myInfo.get('firstName'));
// console.log(myInfo.get('lastName'));
// console.log(myInfo.get('organizationalTitle'));
// console.log(myInfo.get('email'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('businessName'));
// console.log(myInfo.get('membership'));
// console.log(myInfo.get('description'));
// console.log(myInfo.get('timestamp'));

document.querySelector('#results').innerHTML = `
<p>We appreciate your interest in joining our Chamber of Commerce!</p>
<p>We will review the application and get back to you within 3 business days.</p>
<p>Here are the details you provided, submitted on: ${myInfo.get('timestamp')}</p>
<p>Application for ${myInfo.get('firstName')} ${myInfo.get('lastName')}, ${myInfo.get('organizationalTitle')}</p>
<p>Email address: ${myInfo.get('email')}</p>
<p>Phone number: ${myInfo.get('phone')}</p>
<p>Business Name: ${myInfo.get('businessName')}</p>
`