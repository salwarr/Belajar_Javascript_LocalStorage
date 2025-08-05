let dataGuru = JSON.parse(localStorage.getItem("dataGuru")) || [] ;
function simpanLocalStorage(){
    localStorage.setItem("dataGuru", JSON.stringify(dataGuru));
}


function tambahGuru(){
    const nama = document.getElementById("inputNama").value;
    const mapel = document.getElementById("inputPelajaran").value;

    if(nama ==="" || mapel ===""){
        Swal.fire ({
            title: "Konfirmasi",
            text :"ASilahkan isi data yang dibutuhkan",
            icon :"warning",
        });
        return;
    }

    const guruTerbaru = {nama,mapel,status :"Aktif" };
     dataGuru.push(guruTerbaru);
    simpanLocalStorage();
    tampilkanData();

    //input kosong 

    document.getElementById("inputNama").value = "";
    document.getElementById("inputPelajaran").value = "";

}

tampilkanData();

function tampilkanData(){
    const tabel = document.getElementById("tabelGuru");
    tabel.innerHTML= "";

    dataGuru.forEach ((guru,index)=>{
        const row = `
        <tr>
        <td>${index+1}</td>
           <td>${guru.nama}</td>
              <td>${guru.mapel}</td>
                 <td>${guru.status}</td>
                    <td>
                    <button onclick ="editGuru(${index})" class=" btn btn-primary">Edit </button>
                    <button onclick ="hapusGuru(${index})"  class=" btn btn-danger">hapus </button>
                    </td>
      </tr>
    `;
    tabel.insertAdjacentHTML("beforeend", row);
    });
}

function hapusGuru(index){
if(confirm("yakin akan mengahapus ini?")){
  dataGuru.splice(index, 1);
  simpanLocalStorage();
  tampilkanData();
}
} 

function editGuru(index){
  const guru = dataGuru[index];
  const guruBaru =prompt("Edit Nama:",guru.nama);
  const mapelBaru = prompt ("Edit Kelas:",guru.mapel);

   if (namaBaru !== null && kelasBaru !== null) {
    dataGuru[index].nama = guruBaru;
    dataGuru[index].mapel = mapelBaru;
    simpanLocalStorage();
    tampilkanData();
  }
}

tampilkanData();

        
        
           
    
 