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

