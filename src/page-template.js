// create the about section
const generateManagers = managers => {
    // return variable that holds all html of cards
    let cards = [];

    // if no managers added return empty string
    if(managers.length === 0) {
        return "";
    }

    // loop through all the managers and make cards
    for (let x = 0; x < managers.length; x++) {
        cards.push(`
            <div class="card">
                <div class="card-header bg-primary">
                    <h4 class="card-title text-white">${managers[x].name}</h4>
                    <h5 class="card-subtitle text-white"><i class="fas fa-mug-hot"></i> Manager</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${managers[x].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${managers[x].email}">${managers[x].email}</a></li>
                        <li class="list-group-item">Office Number: ${managers[x].officeNumber}</li>
                    </ul>
                </div>
            </div>
        `);
    }
    // return all added cards
    return cards;
};

const generateEngineers = engineers => {
    // return variable that holds all html of cards
    let cards = [];

    // if no engineers added return empty string
    if (engineers.length === 0) {
        return "";
    }

    // loop through all the engineers and make cards
    for (let x = 0; x < engineers.length; x++) {
        cards.push(`
            <div class="card">
                <div class="card-header bg-primary">
                    <h4 class="card-title text-white">${engineers[x].name}</h4>
                    <h5 class="card-subtitle text-white"><i class="fas fa-glasses"></i> Engineer</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineers[x].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineers[x].email}">${engineers[x].email}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${engineers[x].github}" target="_blank">${engineers[x].github}</a></li>
                    </ul>
                </div>
            </div>
        `);
    }
    // return all added cards
    return cards;
};

const generateInterns = interns => {
    // return variable that holds all html of cards
    let cards = [];

    // if no interns added return empty string
    if (interns.length === 0) {
        return "";
    }

    // loop through all the interns and make cards
    for (let x = 0; x < interns.length; x++) {
        cards.push(`
            <div class="card">
                <div class="card-header bg-primary">
                    <h4 class="card-title text-white">${interns[x].name}</h4>
                    <h5 class="card-subtitle text-white"><i class="fas fa-user-graduate"></i> Intern</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${interns[x].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${interns[x].email}">${interns[x].email}</a></li>
                        <li class="list-group-item">School: ${interns[x].school}</li>
                    </ul>
                </div>
            </div>
        `);
    }
    // return all added cards
    return cards;
};


// return html with vars in place
module.exports = (managers, engineers, interns) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Team Profile</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet">
                <link rel="stylesheet" href="style.css">
            </head>

            <body>
                <header>
                    <nav class="navbar navbar-light bg-danger">
                        <div class="container">
                            <span class="navbar-brand mb-0 h1 text-white">My Team</span>
                        </div>
                    </nav>
                </header>
                <main class="container my-5">
                    <div class="cards-holder">
                        ${generateManagers(managers)}
                        ${generateEngineers(engineers)}
                        ${generateInterns(interns)}
                    </div>
                </main>
                <footer class="container text-center py-3">
                    <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Michael Arvelo</h3>
                </footer>
            </body>
        </html>
    `;
};