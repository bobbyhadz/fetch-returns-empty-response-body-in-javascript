// EXAMPLE 1 - Make sure `mode` is not set to `no-cors` when making the request

async function getUser() {
  try {
    const response = await fetch('https://randomuser.me/api/', {
      // 👇️ remove this
      // mode: 'no-cors', // 👈️
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

getUser().then(data => {
  console.log(data);
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Make sure to call the `.json()` method on the response

// async function getUser() {
//   try {
//     // 1) await the fetch() request to get the response
//     const response = await fetch('https://randomuser.me/api/', {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     // 2) await the .json() call to get the data
//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }

// // 3) use the .then() syntax to await the Promise
// // that the async function returns
// getUser().then(data => {
//   console.log(data);
// });

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using .then() instead of async/await

// function getUser() {
//   // 1) return the Promise
//   return fetch('https://randomuser.me/api/', {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//     },
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Error! status: ${response.status}`);
//       }

//       // 2) return the call to .json()
//       return response.json();
//     })
//     .catch(error => {
//       console.log('error: ', error);
//     });
// }

// // 3) call .then() on the Promise to resolve it
// getUser().then(data => {
//   console.log(data);
// });
