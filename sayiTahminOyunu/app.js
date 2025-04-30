const tahmin = document.querySelector("#Tahmin");
const sayiUret = document.querySelector(".soruIsareti");
const kontrolEtButon = document.querySelector(".kontrolEtButton");
const tekrarBaslatButon = document.querySelector(".tekrarButton");
const skorOutput = document.querySelector(".skorOutput");
const enYuksekSkorOutput = document.querySelector(".enYuksekSkorOutput");
const form = document.querySelector(".form");

events();

let skor = 0;
let enYuksekSkor = localStorage.getItem("enYuksekSkor");
enYuksekSkorOutput.innerHTML = enYuksekSkor;
skorOutput.innerHTML = 0;


function events() {
     kontrolEtButon.addEventListener("click", karsilastir);

     form.addEventListener("submit", (e) => {
          e.preventDefault();
          karsilastir();
     });

     tekrarBaslatButon.addEventListener("click", tekrarBaslat);
}

function sayiUretFonksiyon() {
     let sayi = Math.ceil(Math.random() * 10);
     sayiUret.innerHTML = sayi;
     return sayi;
}


function basariliContainer() {

     let basarili = document.createElement("div");
     basarili.className = "basarili";
     let yazi = document.createElement("p");
     yazi.innerHTML = "TAHMİN BAŞARILI";
     yazi.className = "basariliP";
     basarili.appendChild(yazi);
     document.body.appendChild(basarili);
     setTimeout(() => {
          basarili.remove();
          tahmin.value = "";
          tekrarla();
     }, 1000);
}

function basarisizContainer() {
     let basarisiz = document.createElement("div");
     basarisiz.className = "basarsiz";

     let basarisizYazi = document.createElement("p");
     basarisizYazi.innerHTML = "TAHMİN YANLIŞ";
     basarisizYazi.className = "basarisizP";

     basarisiz.appendChild(basarisizYazi);
     document.body.appendChild(basarisiz);
     setTimeout(() => {
          basarisiz.remove();
          tahmin.value = "";
          skor = 0;
          skorOutput.innerHTML = skor;
          localStorage.setItem("skor", 0);
          tekrarla();
     }, 1000);
}

function karsilastir() {
     let tahminEdilenSayi = tahmin.value;

     if (isNaN(tahminEdilenSayi) || tahminEdilenSayi == "") {
          alert("Geçersiz Değer");
     }
     else {

          let uretilenSayi = sayiUretFonksiyon();

          if (uretilenSayi == tahminEdilenSayi) {
               basariliContainer();
               skor++;
               skorOutput.innerHTML = skor;
               localStorage.setItem("skor", skor);
               console.log(enYuksekSkor);
               if (skor > enYuksekSkor) {
                    rekor();
               }
          }
          else {

               basarisizContainer();

          }
     }
}

function tekrarla() {
     sayiUret.innerHTML = "?";
}

function tekrarBaslat() {
     document.location.reload();
}

function rekor() {
     localStorage.setItem("enYuksekSkor", skor);
     enYuksekSkorOutput.innerHTML = skor;
}

