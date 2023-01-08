const generateHTML = (employeeData) => {

    const genMan = (manager) => {
        return `
        <div class="col-sm-6">
        <div class="card m-2" style="width: auto;">
        <div class="card-body">
          <h5 class="card-title">&#128188; Manager</h5>
          <h6 class="card-subtitle mb-2 text-muted">${manager.name}</h6>
          <p class="card-text">ID: ${manager.id}</p>
          <a href="mailto:${manager.email}" class="card-link">E-Mail</a>
          <p class="card-text">Office Number: ${manager.officeNumber}</p>
        </div>
      </div>
      </div>
        `
    }

    const genEng = (engineer) => {
        return `
        <div class="col-sm-6">
        <div class="card m-2" style="width: auto;">
        <div class="card-body">
          <h5 class="card-title">&#128187; Engineer</h5>
          <h6 class="card-subtitle mb-2 text-muted">${engineer.name}</h6>
          <p class="card-text">ID: ${engineer.id}</p>
          <a href="mailto:${engineer.email}" class="card-link">E-Mail</a>
          <br>
          <a href="${engineer.github}" class="card-link" target="_blank">Engineer GitHub</a>
        </div>
      </div>
      </div>
        `
    }

    const genInt = (intern) => {
        return `
        <div class="col-sm-6">
        <div class="card m-2" style="width: auto;">
        <div class="card-body">
          <h5 class="card-title">&#127891; Intern</h5>
          <h6 class="card-subtitle mb-2 text-muted">${intern.name}</h6>
          <p class="card-text">ID: ${intern.id}</p>
          <a href="mailto:${intern.email}" class="card-link">E-Mail</a>
          <p class="card-text">School: ${intern.school}</p>
        </div>
      </div>
      </div>
        `
    }



    const html = []

    html.push(employeeData
        .filter(employees => employees.getRole() === 'Manager')
        .map(manager => genMan(manager))
    );

    html.push(employeeData
        .filter(employees => employees.getRole() === 'Engineer')
        .map(engineer => genEng(engineer))
    );

    html.push(employeeData
        .filter(employee => employee.getRole() === 'Intern')
        .map(intern => genInt(intern))
    );


    const flatHTML = html.flat(1)
    const finalHTML = flatHTML.join('')
    
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Team Model</title>
</head>
<body>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Team Profile</span>
        </div>
    </nav>


<div class="container">
<div class="row">
${finalHTML}
</div>
</div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>
    `
}

export default generateHTML