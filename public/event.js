const kegiatan = [
    {
      judul: "Berenang",
      img: "/kegiatan/WhatsApp Image 2023-02-16 at 13.16.16(1).jpeg",
      desk: "Salah Satu Kegitan Rutin Paud Pelangi",
    },
    {
      judul: "Berenang",
      img: "/kegiatan/WhatsApp Image 2023-02-16 at 13.16.16(1).jpeg",
      desk: "Salah Satu Kegitan Rutin Paud Pelangi",
    },
  ]

  const listEvent = document.getElementById("listEvent");

  let rowEvent = () => {
    return (listEvent.innerHTML = kegiatan.map((x) => {
      let { judul, img, desk } = x;
      return ` 
      <div class="col-md-4 mt-4 justify-content-center">
        <div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="...">
              <div class="card-body">
                <p class="card-text">${desk}</p>
              </div>
        </div>
      </div>`;
    }).join(""));
  };
  
  rowEvent();