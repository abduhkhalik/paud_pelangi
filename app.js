const listGuru = document.getElementById("listGuru");


let rowGuru = () => {
  return (listGuru.innerHTML = dataGuru
    .map((x) => {
      let { nama, role, desk, img } = x;
      return `<div class="col-md-4">
      <div class="my-4 border-4 border-top">
        <p class="fw-bold">${nama}</p>
        <p class="fw-medium">${role}</p>
        <div class="d-flex justify-content-center align-items-center w-100 px-1 py-1">
            <p class="fw-normal object-fit-cover mx-3">${desk}</p>
            <img src="${img}" width="250" height="250" class="rounded-circle" alt="...">
        </div>
    </div>
    </div>`;
    }).join(""));
};

rowGuru();