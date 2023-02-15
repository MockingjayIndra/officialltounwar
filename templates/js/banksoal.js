var text = document.querySelector('#soal-text');
var image = document.querySelector('#soal-image');
var soal_select = document.querySelector('#soal-select');
var myEdit = document.querySelector('#edit-btn')
var myDetail = document.querySelector('#detail-btn');

myEdit.addEventListener('click', edit);
myDetail.addEventListener('click', revealDetail);

function edit(){
    window.location.href = './editSoal.html';
}

function revealDetail(){
    Swal.fire({
        html: `
        <h1 class="text-justify">Soal 1 Protozoa:</h1><br>
        <p class="text-justify">Berikut ini yang bukan merupakan basa nitrogen pada rantai DNA adalah?</p><br>
        <p class="text-justify">A. Timin</p>
        <p class="text-justify">B. Adenin</p>
        <p class="text-justify">C. Guanin</p>
        <p class="text-justify">D. Cytosin</p>
        <p class="text-justify">E. Urasil</p><br>
        <p class="text-justify">Jawaban : E</p>
        `
    })
}

text.classList.toggle('hidden');

soal_select.addEventListener('change', () => {
    if(soal_select.value == 'image'){
        image.classList.toggle('hidden');
    }
    else{
        image.classList.toggle('hidden');
    }
})