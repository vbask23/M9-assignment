async function fetchEmployees() {
    const response = await fetch('/data/employees.json'); 
    const data = await response.json()
    // console.log(data, typeof(data))
    return data
    // let employeesB = []
    // for(let employee of data) {
    //     employeesB = data

    // }

    // return employeesB
   
}
export{fetchEmployees}

// try {
//     const response = await fetch('/data/employees.json'); 
//     const employees = await response.json();
//     return employees
        
   
// } catch (error) {
//     console.error(error);
// }

// }
// export{fetchEmployees}

// async function fetchDataFromApi() {
//     const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
//     const json = await res.json();
//     console.log(json.joke);
//   }
  
//   async function init() {
//     await fetchDataFromApi();
//     console.log('Finished fetching data');
//   }
  
//   init();