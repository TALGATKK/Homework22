async function getProducts() {
    try {
        let responseProducts = await fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => createTable(data));
  } catch(error) {
    console.log("Произошла ошибка", error)
}}

getProducts()
  function createTable(data) {
    try {
      var table = "<table border=1>";
      table += `<tr>
                  <th>ID</th>
                  <th colspan="6">Данные</th>
                </tr>`;
      table += `<tr>
                  <th></th>
                  <th>Название</th>
                  <th>Изображение</th>
                  <th>Цена</th>
                  <th>Категория</th>
                  <th>Описание</th>
                  <th>Обновлено</th>
                </tr>`;
      var tr = "";
      for (let i = 0; i < data.length; i++) {
       
        tr += "<tr>";
        tr += `<td>${data[i].id}</td>`;
        tr += `<td>${data[i].title}</td>`;
        tr += `<td><image src="${data[i].images}" onError="this.src='https://i.pinimg.com/564x/9f/ab/e5/9fabe5f90ca53f9a86306203f517f9fd.jpg'" width="100" height="100"></td>`;
        tr += `<td>${data[i].price}</td>`;
        tr += `<td>${data[i].category.name}</td>`;
        tr += `<td class="overflow-hidden">${data[i].description}</td>`;
        tr += `<td>${data[i].updatedAt}</td>`;
        tr += "</tr>";
        
      }
         } catch (err) {
      document.getElementById("goods").innerHTML = err.message;
    } finally {
      document.getElementById("goods").value = "";
    }
    table += tr + "</table>";
    document.getElementById("goods").innerHTML = table;
    }
  
  