let dropArea = document.querySelector(".drop-area");
let filesArea = document.querySelector(".files-area");
let file;
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


dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
  dropArea.classList.remove("active");
  file = e.dataTransfer.files[0];
  let fileType = file.type;
  console.log(fileType);
  console.log(file);
  filesArea.innerHTML += `
    <div class="d-flex file-box mb-2 py-2 justify-content-between align-items-center">
    <div class="d-flex align-items-center">
        <svg id="icon_pdf" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
            viewBox="0 0 50 50">
            <rect id="Rectangle_228" data-name="Rectangle 228" width="50" height="50" fill="none" />
            <g id="Group_357" data-name="Group 357" transform="translate(6.613)">
                <path id="Path_214" data-name="Path 214"
                    d="M243.038,310.521H221.26a7.547,7.547,0,0,1-7.547-7.546v-34.5a7.547,7.547,0,0,1,7.547-7.547h18.916l10.409,10.455v31.595A7.547,7.547,0,0,1,243.038,310.521Z"
                    transform="translate(-213.713 -260.925)" fill="#ee3e2c" />
                <path id="Path_215" data-name="Path 215"
                    d="M274.973,271.383h-8.267a2.124,2.124,0,0,1-2.124-2.12l-.017-8.338"
                    transform="translate(-238.101 -260.925)" fill="#fff" opacity="0.5" />
                <path id="Path_216" data-name="Path 216"
                    d="M236.5,289.249c-.3-1.076-1.028-1.614-1.646-1.535A2.377,2.377,0,0,0,233,288.948c-.886,1.994.966,7.866,1.251,8.847-1.8,5.444-7.976,16.206-11,16.934-.064-.712.316-2.77,4.3-5.334a5.891,5.891,0,0,0,.554-.665c-3.371,1.646-7.739,4.289-5.112,6.267a2.5,2.5,0,0,0,.618.3c2.01.744,4.827-1.693,7.66-7.216a51.382,51.382,0,0,1,9.195-2.342c3.893,2.643,6.5,3.181,8.277,2.5a2.7,2.7,0,0,0,1.488-1.614c-1.44,1.772-4.811.538-7.5-1.155,2.484-.269,5.048-.427,6.156-.079,1.408.443,1.361,1.139,1.345,1.234a1.877,1.877,0,0,0-.032-1.488c-1.187-1.931-6.632-.807-8.61-.6a15.683,15.683,0,0,1-6.141-7.66c.807-3.118,1.678-5.38,1.044-7.628m-1.345,6.536c-.522-1.852-1.25-5.966-.079-7.3,2.295,1.313.871,4.431.079,7.3m4.289,9.179a39.022,39.022,0,0,0-7.976,2.484,62.108,62.108,0,0,0,3.308-8.862,20.467,20.467,0,0,0,4.669,6.378"
                    transform="translate(-217.781 -273.769)" fill="#fff" />
            </g>
        </svg>
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
