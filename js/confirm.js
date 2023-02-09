var myForm = document.querySelector("form");
myForm.addEventListener("submit", confirm)

function confirm(event){
  event.preventDefault();
  Swal.fire({
      title: 'Anda Yakin?',
      text: "Anda tidak akan bisa mengulang proses ini lagi",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Lanjutkan!'
    }).then((result) => {
      if (result.isConfirmed) {
        myForm.submit()
      }
    })
}