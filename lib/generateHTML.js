const generateHTML = (employeeData) => {

    const genMan = (manager) => {
        // console.log(manager)
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Manager</h5>
          <h6 class="card-subtitle mb-2 text-muted">${manager.name}</h6>
          <p class="card-text">ID: ${manager.id}</p>
          <p class="card-text">E-Mail: ${manager.email}</p>
          <p class="card-text">Office Number: ${manager.officeNumber}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
        `
    }

    const genEng = (engineer) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Engineer</h5>
          <h6 class="card-subtitle mb-2 text-muted">${engineer.name}</h6>
          <p class="card-text">ID: ${engineer.id}</p>
          <p class="card-text">E-Mail: ${engineer.email}</p>
          <p class="card-text">GitHub: ${engineer.github}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
        `
    }

    const genInt = (intern) => {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Intern</h5>
          <h6 class="card-subtitle mb-2 text-muted">${intern.name}</h6>
          <p class="card-text">ID: ${intern.id}</p>
          <p class="card-text">E-Mail: ${intern.email}</p>
          <p class="card-text">School: ${intern.school}</p>
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
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


    const finalHTML = html.join('')
    
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
          <span class="navbar-brand mb-0 h1">Navbar</span>
        </div>
    </nav>


<div class="container">
${finalHTML}
</div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>
    `
}

export default generateHTML