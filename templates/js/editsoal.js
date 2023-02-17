var text = document.querySelector('#soal-text');
var image = document.querySelector('#soal-image');
var soal_select = document.querySelector('#soal-select');

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

text.classList.toggle('hidden');

soal_select.addEventListener('change', () => {
    if(soal_select.value == 'image'){
        image.classList.toggle('hidden');
    }
    else{
        image.classList.toggle('hidden');
    }
})