function getUserCountry() {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const countryCode = data.country;
      fetch(`https://restcountries.com/v3/alpha/${countryCode}`)
        .then(response => response.json())
        .then(countryData => {
          const countryName = countryData[0].name.common;
          const countryElement = document.getElementById('country');
          countryElement.textContent = 'Country: ' + countryName;
        })
        .catch(error => {
          console.error('Error fetching country name:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching user country:', error);
    });
}
