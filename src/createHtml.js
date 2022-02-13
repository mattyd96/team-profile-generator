//--------------------------------- Html file Creation -------------------------------//

//create head section
const createHead = () => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
    crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- stylesheet -->
    <link rel="stylesheet" href="./style.css">
    <!-- Title -->
    <title>My Team</title>
</head>
    `;
};

//create start of body section
const createBodyStart = () => {
    return `
<body>
    <!-- Heading -->
    <header>
        <h1>My Team</h1>
    </header>
    <!-- Main -->
    <main>
        <!-- employee card holder -->
        <section class="employees">
    `;
};

//create end of body section
const createBodyEnd = () => {
    return `
        </section>
    </main>
</body>
</html>
    `;
}

//create card -> will go between start and end of body
const createCard = employee => {
    const position = employee.constructor.name; //get object prototype name

    //font awesome icon strings for different employee children
    const icons = {
        Manager: 'fa-mug-hot',
        Engineer: 'fa-glasses',
        Intern: 'fa-graduation-cap',
    }

    //get different last element for Manager, Engineer, or Intern
    let uniqueElement;

    switch (position) {
        case 'Manager':
            uniqueElement = `<p class="office"><span>Office:</span><span>${employee.officeNumber}</span></p>`;
            break;
        case 'Engineer':
            uniqueElement = `<p class="github">Github:<a href="https://github.com/${employee.github}" target="blank">${employee.github}</a></p>`;
            break;
        default:
            uniqueElement = `<p class="school"><span>School:</span><span>${employee.school}</p></span>`;
            break;
    }
    
    //return card element
    return`
            <!-- employee card -->
            <article class="card employee">
                <section class="employee-head ${position.toLowerCase()}">
                    <h2 class="name">${employee.name}</h2>
                    <span class="position">
                        <i class="fa-solid ${icons[position]}"></i>
                        <span>${position}</span>
                    </span>
                </section>
                <section class="employee-body">
                    <p class="id"><span>ID:</span> <span>${employee.id}</span></p>
                    <p>Email:<a href="mailto:${employee.email}">${employee.email}</a></p>
                    ${uniqueElement}
                </section>
            </article>
    `;

};

//main create function -> takes an array of Employee children
const createHtml = employees => {
    const head = createHead(); //head section
    const bodyStart = createBodyStart(); //start of body section

    //create cards from employees array
    const cards = employees.map(employee => {
        return createCard(employee);
    });

    const bodyEnd = createBodyEnd(); //end of body

    //return html file
    return head + bodyStart + cards.join('') + bodyEnd;
};

module.exports = createHtml;