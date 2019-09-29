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

async function load_json(jsonfile, title, fields, target) {
   const res = await fetch(jsonfile);
   let data = await res.json();
   console.table(data);
   let datah = `<h2>${title}</h2>`;                  
   target.innerHTML = datah + jsonToHTML(data, fields, false);
}