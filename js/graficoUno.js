

const PRIMERA_CONSULTA = "http://localhost:8080/api/home/readProductCategories"


const apenasCargaUno = async () => {

    var ctx = document.getElementById('myChart')
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Producto / Cantidad',
                backgroundColor: ['#477A6E', '#A49E2E', '#70C2C5', '#4C7AB6', '#EB8149', '#7930C8', '#90CAF9', '#21A80C'],
                borderColor: ['White'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

    fetch(PRIMERA_CONSULTA)
        .then(response => response.json())
        .then(datos => mostrar(datos))
        .catch(error => console.log(error))


    const mostrar = (articulos) => {
        articulos.forEach(element => {
            myChart.data['labels'].push(element.categoria)
            myChart.data['datasets'][0].data.push(element.cantidad)
            myChart.update()
        });

    }


}


fetch(PRIMERA_CONSULTA)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].categoria}</td><td>${data[i].cantidad}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}
















/* 
const consumirApi = async (api) => {
    const respuesta = await fetch(api)
    return respuesta.json()
} */









/*  const apiUno = await consumirApi(PRIMERA_CONSULTA)

 const dataApiUno = {}
 const dataDos ={}

 apiUno.forEach(x => {
     return dataApiUno[x.categoryName] = (dataApiUno[x.categoryName] || 0) + 1
 })

 apiUno.forEach(x => {
     return dataDos[x.unitsOnOrder] = (dataDos[x.unitsOnOrder] || 0) + 1
 })

 console.log(dataApiUno)
 console.log(dataDos)

 const ctx  = document.getElementById('myChart').getContext('2d')

 new Chart(ctx , {
     type: 'bar',
     data: {
         labels: [...Object.keys(dataApiUno)],
         datasets: [{
             label: '# de categorias',
             data: [...Object.values(dataDos)],
             backgroundColor: [
                 'rgba(255, 99, 132, 0.2)',
                 'rgba(54, 162, 235, 0.2)',
                 'rgba(255, 206, 86, 0.2)',
                 'rgba(75, 192, 192, 0.2)',
                 'rgba(153, 102, 255, 0.2)',
                 'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
                 'rgba(255, 99, 132, 1)',
                 'rgba(54, 162, 235, 1)',
                 'rgba(255, 206, 86, 1)',
                 'rgba(75, 192, 192, 1)',
                 'rgba(153, 102, 255, 1)',
                 'rgba(255, 159, 64, 1)'
             ],
             borderWidth: 2
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 })

         let body = ""
         for (var i = 0; i < apiUno.length; i++) {      
            body+=`<tr><td>${apiUno[i].categoryName}</td><td>${apiUno[i].unitsOnOrder}</td></tr>`
         }
         document.getElementById('data').innerHTML = body */