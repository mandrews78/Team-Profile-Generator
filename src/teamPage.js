//Create Manager card
const generateManager = manager => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary text-white">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID:  ${manager.id}</p>
                <p email="id">Email:  ${manager.email}</p>
                <p class="id">Office Number:  ${manager.officeNumber}</p>
            </div>
        </div>
    </div>`
}

//Create Engineer card
const generateEngineer = engineer => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary text-white">
                <h3>${engineer.name}<h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID:  ${engineer.id}</p>
                <p email="id">Email:  ${engineer.email}</p>
                <p class="github">Github:  ${engineer.github}</p>
            </div>
        </div>  
    </div>`
}

//Create Intern card
const generateIntern = intern => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header bg-primary text-white">
                <h3>${intern.name}<h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID:  ${intern.id}</p>
                <p email="id">Email:  ${intern.email}</p>
                <p class="school">School:  ${intern.school}</p>
            </div>  
        </div>  
    </div>`
};

// Push array to page
generateTeamPage = (data) => {
    //arrays for cards
    teamCardsArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamCardsArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamCardsArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            teamCardsArray.push(internCard);
        }
    }
    const teamCards = teamCardsArray.join('');

    const generateTeam = createTeamPage(teamCards);
    return generateTeam;
}

//generate HTML page
const createTeamPage = teamCards => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <title>Team Profile</title>
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                    <span class="navbar-brand mb-0 bg-danger text-white py-5 h1 w-100 text-center" id="navbar-text"><h1>X-Men Team Profile</h1></span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${teamCards}
                </div>
            </div>
        </main>
            
    </body>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
  </html>`

}
module.exports = generateTeamPage;