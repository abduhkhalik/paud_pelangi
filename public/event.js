const kegiatan = [
    {
      judul: "Berenang",
      img: "/kegiatan/WhatsApp Image 2023-02-16 at 13.16.16(1).jpeg",
      desk: "Salah Satu Kegitan Rutin Paud Pelangi",
    },
    {
      judul: "Berenang",
      img: "/kegiatan/WhatsApp Image 2023-02-16 at 13.16.16.jpeg",
      desk: "Salah Satu Kegitan Rutin Paud Pelangi",
    },
    {
      judul: "Berenang",
      img: "/kegiatan/WhatsApp Image 2023-02-16 at 13.16.24.jpeg",
      desk: "Salah Satu Kegitan Rutin Paud Pelangi",
    },
    {
      judul: "Berenang",
      img: "/kegiatan/WhatsApp Image 2023-02-16 at 13.16.39.jpeg",
      desk: "Salah Satu Kegitan Rutin Paud Pelangi",
    },
    {
      judul: "Berenang",
      img: "/kegiatan/WhatsApp Image 2023-02-16 at 13.16.40(1).jpeg",
      desk: "Salah Satu Kegitan Rutin Paud Pelangi",
    },
    {
      judul: "Berenang",
      img: "/kegiatan/WhatsApp Image 2023-02-16 at 13.16.40.jpeg",
      desk: "Salah Satu Kegitan Rutin Paud Pelangi",
    },
  ]

  const listEvent = document.getElementById("listEvent");

  let rowEvent = () => {
    return (listEvent.innerHTML = kegiatan.map((x) => {
      let { judul, img, desk } = x;
      return ` 
      <div class="col-md-4 mt-4 justify-content-center align-items-center">
        <div class="card bg" style="width: 18rem;">
            <img src="${img}" class="card-img-top" width="350" height="250" alt="...">
              <div class="card-body">
                <h5 class="text-center fw-bold">${judul}</h5>
                <p class="card-text">${desk}</p>
              </div>
        </div>
      </div>`;
    }).join(""));
  };
  
  rowEvent();