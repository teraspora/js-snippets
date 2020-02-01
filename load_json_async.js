// Code to load json data from a file asynchronously

const contacts_file = `contacts_file.json`;
start();

// Main entry point
async function start() {
    contacts = await load_contacts(contacts_file);
    let id = 0;
    contacts.forEach(contact => {
        contact[`id`] = id++;
    })
    // Insert code to display contacts or whatever here;
}

async function load_contacts(jsonfile) {
    const res = await fetch(jsonfile);
    const data = await res.json();
    return data;
}

// Another example of getting a data file:
document.onreadystatechange = _ => {
    if (document.readyState == 'complete') {
        const request = async _ => {
            const response = await fetch('users.json');
            const json = await response.json();
            const result = document.createElement(`p`);
            result.appendChild(document.createTextNode(`${json["user"]["name"]}, ${json["user"]["height"]}, ${json["user"]["email"]}`));
            document.body.appendChild(result);
        };
        request();
    }
}