let dropArea = document.querySelector(".drop-area");
let filesArea = document.querySelector(".files-area");
let file;
let fileInput = document.querySelector(".file-input");

dropArea.addEventListener("click", (e) => {
  dropArea.querySelector("input").click();
});
dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("active");
});
dropArea.addEventListener("dragleave", (e) => {
  dropArea.classList.remove("active");
});

fileInput.addEventListener("input", (e) => {
  e.preventDefault();
  file = e.srcElement.files[0];
  console.log(file);
  filesArea.innerHTML += `
    <div class="d-flex file-box mb-2 py-2 justify-content-between align-items-center">
    <div class="d-flex align-items-center">
        ${
          file.type.includes("pdf")
            ? `<img src="assets/img/pdf.png" width="50px" alt=""/>`
            : file.type.includes("image")
            ? `<img src="assets/img/img.png" width="50px" alt=""/>`
            : file.name.includes("ppt")
            ? `<img src="assets/img/ppt.png" width="50px" alt=""/>`
            : file.name.includes("docx")
            ? `<img src="assets/img/docx.png" width="50px" alt=""/>`
            : file.name.includes("xls")
            ? `<img src="assets/img/xls.png" width="50px" alt=""/>`
            : `<img src="assets/img/img.png" width="50px" alt=""/>`
        }
        <p class="file-name mb-0 fs-14 mx-3">
            ${file.name}
        </p>

    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
        <g id="icon_comp" transform="translate(0 -2)">
            <circle id="Ellipse_132" data-name="Ellipse 132" cx="8" cy="8" r="8"
                transform="translate(0 2)" fill="#16bc84" />
            <path id="Path_142571" data-name="Path 142571"
                d="M6.58-1.729,1.966,2.828,1.592,3.2h.984L.7,1.253a.7.7,0,0,0-.984,0,.709.709,0,0,0,0,.985l1.875,1.95a.707.707,0,0,0,.984,0C3.452,3.311,6.314.506,7.19-.371l.374-.375a.7.7,0,0,0,0-.984.708.708,0,0,0-.984,0"
                transform="translate(4.482 8.928)" fill="#fff" />
        </g>
    </svg>
</div>`;
});
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.classList.remove("active");
  file = e.dataTransfer.files[0];
  let fileType = file.type;
  filesArea.innerHTML += `
  <div class="d-flex file-box mb-2 py-2 justify-content-between align-items-center">
  <div class="d-flex align-items-center">
      ${
        file.type.includes("pdf")
          ? `<img src="assets/img/pdf.png" width="50px" alt=""/>`
          : file.type.includes("image")
          ? `<img src="assets/img/img.png" width="50px" alt=""/>`
          : file.name.includes("ppt")
          ? `<img src="assets/img/ppt.png" width="50px" alt=""/>`
          : file.name.includes("docx")
          ? `<img src="assets/img/docx.png" width="50px" alt=""/>`
          : file.name.includes("xls")
          ? `<img src="assets/img/xls.png" width="50px" alt=""/>`
          : `<img src="assets/img/img.png" width="50px" alt=""/>`
      }
      <p class="file-name mb-0 fs-14 mx-3">
          ${file.name}
      </p>

  </div>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <g id="icon_comp" transform="translate(0 -2)">
          <circle id="Ellipse_132" data-name="Ellipse 132" cx="8" cy="8" r="8"
              transform="translate(0 2)" fill="#16bc84" />
          <path id="Path_142571" data-name="Path 142571"
              d="M6.58-1.729,1.966,2.828,1.592,3.2h.984L.7,1.253a.7.7,0,0,0-.984,0,.709.709,0,0,0,0,.985l1.875,1.95a.707.707,0,0,0,.984,0C3.452,3.311,6.314.506,7.19-.371l.374-.375a.7.7,0,0,0,0-.984.708.708,0,0,0-.984,0"
              transform="translate(4.482 8.928)" fill="#fff" />
      </g>
  </svg>
</div>`;
});
