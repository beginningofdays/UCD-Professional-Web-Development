document.getElementById('fetchDataBtn').addEventListener('click', () => {    // "." chains a method
    fetchData()                                                  // () => defines the code to execute 
      .then(data => {  // () => defines the code to execute 
        document.getElementById('dataContainer').textContent = data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
  
  function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate fetching data from an API (replace with actual API call)
      setTimeout(() => {
        const data = 'Fetched data';
        resolve(data);
      }, 1000);
    });
  }