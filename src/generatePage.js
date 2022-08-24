//Create Manager card

const generateManager = function (manager) {
    return
    `<div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card header">
                <h3>${manager}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>

            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p email="id">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="id">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `
}

//Create Engineer card

const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}<h3>
                <h4>Engineer</h4><i class="material-icons">l`
}

//Create Intern card
