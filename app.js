const listGuru = document.getElementById("listGuru");

let rowGuru = () => {
  return (listGuru.innerHTML = dataGuru
    .map((x) => {
      let { nama, role } = x;
      return `<div class="col-md-4">
        <p class="fw-bold">${nama}</p>
        <p class="fw-medium">${role}</p>
        <div class="d-flex justify-content-center align-items-center w-100 px-1 py-1">
            <p class="fw-normal mx-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellendus mollitia voluptate maxime, suscipit fugiat.</p>
            <img src="/assets/paud.1.jpg" width="250" height="250" class="rounded-circle" alt="...">
        </div>
    </div>`;
    })
    .join(""));
};

rowGuru();
