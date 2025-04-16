async function getUser(){
    try {
        const response = await fetch('https://api.example.com/users/1');
        if (!response.ok){
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error",error.message);
    }
}

getUser();