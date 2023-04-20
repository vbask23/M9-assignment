async function fetchEmployees() {
    try {
        const response = await fetch('/data/employees.json'); 
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
    }
}
export{fetchEmployees}
