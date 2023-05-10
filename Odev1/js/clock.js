let inputName = prompt("İsim Bilgisi Giriniz:") // isim girilecek bölüm
let userName = document.querySelector("#myName") // girilen isim bilgisinin geleceği id
userName.innerHTML = inputName // myName id'li alana isim bilgisi girildi

function time(){ // gün ve saat bilgisi için oluşturulan fonksiyon

	// saat bilgisini alalım:
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
	// gün bilgisi alalım:
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    let dayName = days[date.getDay()];
	
	// saat, dakika ve saniye bilgisini 2 haneli olarak gösterelim:
	hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
	
	// myClock id'li alana saat ve gün bilgisini ekleyelim:
	let dateTime=document.querySelector("#myClock");
    dateTime.innerHTML=`${hours}:${minutes}:${seconds} ${dayName}`;

}
// oluşturduğumuz fonksiyonu çağıralım:
setInterval(time)