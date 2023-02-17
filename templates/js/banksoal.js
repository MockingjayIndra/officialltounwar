var text = document.querySelector('#soal-text');
var image = document.querySelector('#soal-image');
var soal_select = document.querySelector('#soal-select');
var myEdit = document.querySelector('#edit-btn');
var myDetail = document.querySelector('#detail-btn');

var singleForm = document.querySelector('#single-form');
var bulkForm = document.querySelector('#bulk-form');
var inputType = document.querySelector('#input-type');

var aSelect = document.querySelector('#A-select');
var atext = document.querySelector('#ainput-text');
var afile = document.querySelector('#ainput-file');

var bSelect = document.querySelector('#B-select');
var btext = document.querySelector('#binput-text');
var bfile = document.querySelector('#binput-file');

var cSelect = document.querySelector('#C-select');
var ctext = document.querySelector('#cinput-text');
var cfile = document.querySelector('#cinput-file');

var dSelect = document.querySelector('#D-select');
var dtext = document.querySelector('#dinput-text');
var dfile = document.querySelector('#dinput-file');

var eSelect = document.querySelector('#E-select');
var etext = document.querySelector('#einput-text');
var efile = document.querySelector('#einput-file');

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

aSelect.addEventListener('change', () => {
    if(inputType.value == 'gambar'){
        btext.classList.toggle('hidden');
        bfile.classList.toggle('hidden');
    }
    else{
        afile.classList.toggle('hidden');
        atext.classList.toggle('hidden');
    }
})

bSelect.addEventListener('change', () => {
    if(inputType.value == 'gambar'){
        btext.classList.toggle('hidden');
        bfile.classList.toggle('hidden');
    }
    else{
        bfile.classList.toggle('hidden');
        btext.classList.toggle('hidden');
    }
})

cSelect.addEventListener('change', () => {
    if(inputType.value == 'gambar'){
        ctext.classList.toggle('hidden');
        cfile.classList.toggle('hidden');
    }
    else{
        cfile.classList.toggle('hidden');
        ctext.classList.toggle('hidden');
    }
})

dSelect.addEventListener('change', () => {
    if(inputType.value == 'gambar'){
        dtext.classList.toggle('hidden');
        dfile.classList.toggle('hidden');
    }
    else{
        dfile.classList.toggle('hidden');
        dtext.classList.toggle('hidden');
    }
})

eSelect.addEventListener('change', () => {
    if(inputType.value == 'gambar'){
        etext.classList.toggle('hidden');
        efile.classList.toggle('hidden');
    }
    else{
        efile.classList.toggle('hidden');
        etext.classList.toggle('hidden');
    }
})

inputType.addEventListener('change', () => {
    if(inputType.value == 'single'){
        bulkForm.classList.toggle('hidden');
        singleForm.classList.toggle('hidden');
    }
    else{
        singleForm.classList.toggle('hidden');
        bulkForm.classList.toggle('hidden');
    }
})

soal_select.addEventListener('change', () => {
    if(soal_select.value == 'image'){
        image.classList.toggle('hidden');
    }
    else{
        image.classList.toggle('hidden');
    }
})