const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zonaresidencial",
    ubicacion: "123 Luxury Lane,Prestige Suburb, CA 45678",
    habitaciones: 4,
    bano: 4,
    costo: "5.000",
    smoke: false,
    pets: false,
  },
];

const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    bano: 2,
    costo: "2.000",
    smoke: false,
    pets: true,
  },
];

const ventas = document.querySelector("#venta");
const alquiler = document.querySelector("#alquiler");

for (let venta2 of propiedades_venta) {
  ventas.innerHTML += `
<div class="col-md-4 mb-4" >
    <div class="card" >
        <img src="${venta2.src}"
        class="card-img-top"
        alt="Imagen del departamento"/>
            <div class="card-body">
                <h5 class="card-title">${venta2.nombre}</h5>
                <p class="card-text">${venta2.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"> ${venta2.ubicacion} </i>
                </p>
                <p><i class="fas fa-bed"></i> ${venta2.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${venta2.bano} Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${venta2.costo}</p>
                <p class="text-danger">
                <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
            </div>
    </div>
</div>`;
}

for (let alquiler2 of propiedades_alquiler) {
  alquiler.innerHTML += `
<div class="col-md-4 mb-4" >
    <div class="card" >
        <img src="${alquiler2.src}"
            class="card-img-top"
            alt="Imagen del departamento"/>
                <div class="card-body">
                    <h5 class="card-title">${alquiler2.nombre}</h5>
                    <p class="card-text">${alquiler2.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"> ${alquiler2.ubicacion} </i></p>
                    <p><i class="fas fa-bed"></i> ${alquiler2.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${alquiler2.bano} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${alquiler2.costo}</p>
                    <p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar </p>
                    <p class="text-danger">
                    <i class="fa-solid fa-ban"></i> No se permiten mascotas </p>
                </div>
        </div>
</div>`;
}

{
  /* <p class="text-danger">
<i class="fas fa-smoking-ban"></i> No se permite fumar
</p>
<p class="text-danger">
<i class="fa-solid fa-ban"></i> No se permiten mascotas
</p>
<p class="text-success">
<i class="fas fa-smoking"></i> Permitido fumar </p>
<p class="text-success">
<i class="fas fa-paw"></i> Mascotas permitidas
</p> */
}
