cc = x => console.log(`%c### ${x}`, `color: #00d39e; font-size: 1.6vw;`);

const range = (m, n) => [...(function*(p, q) {
    while (p < q) yield p++;
})(m, n)];

const fac = (_ => (i = f = 1, _ => f *= i++))();

function jsonToHTML(jsondata, fields) {
   let datah = ``;
   jsondata.forEach(item => {
     datah += `
       <ul>
         ${(_ => {
           let lis = ``;
           for (let field of fields) {
             lis += `<li>${field.charAt(0).toUpperCase() + field.slice(1)}: ${item[field]}</li>`;
           };
           return lis;
         })()}
       </ul>
     `;
   });
   return datah;
}

function jsonToTable(jsondata) {
    let tb_markup = ``;
    // Get list of fields, based on first entry
    const fields = Object.keys(jsondata[0]);
    // Generate markup for table head
    const th_markup = `<tr>\n${fields.map(field => `    <th>${field}</th>`).join(`\n`)}\n</tr>`;
    // Generate markup for table body
    jsondata.forEach(item => {
        tb_markup += `<tr>\n${fields.map(field => `    <td>${item[field]}</td>`).join(`\n`)}\n</tr>\n`;
    });
    return [th_markup, tb_markup];
}

async function load_json(jsonfile, title, fields, target) {
   const res = await fetch(jsonfile);
   let data = await res.json();
   console.table(data);
   let datah = `<h2>${title}</h2>`;                  
   target.innerHTML = datah + jsonToHTML(data, fields, false);
}

function createMask() {
    return parseInt([...arguments].map(p => (+p).toString()).join(``), 2);
}

function getBooleansFromMask(n) {
    return n.toString(2).split(``).map(d => d == true);
}

function outline_elements() {
    els = [...(document.body.querySelectorAll(`body > *, body > * > *, body > * > * > *`))];
    els.forEach(elem => {Object.assign(elem.style, {border: `1px solid #f00`}); });
}
