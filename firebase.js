const firebaseConfig = {
    apiKey: "AIzaSyA_w87pWu3w83HSqlfZaiWRd_HHKNkXb9w",
    authDomain: "iot-terdistribusi.firebaseapp.com",
    databaseURL: "https://iot-terdistribusi-default-rtdb.firebaseio.com",
    projectId: "iot-terdistribusi",
    storageBucket: "iot-terdistribusi.appspot.com",
    messagingSenderId: "325819777787",
    appId: "1:325819777787:web:1fbba5939f03295b95265e",
    measurementId: "G-77S5QTGYT6"
  };

  // Initialize Firebas
  firebase.initializeApp(firebaseConfig);	// Initialize Firebase
 
$(document).ready(function(){
	var database = firebase.database();
	var Lampu;

	database.ref().on("value", function(snap){
		Lampu = snap.val().Lampu;
		if(Lampu == 1){
			document.getElementById("a").checked = true;  

		} else{
			document.getElementById("a").checked = false;
		}
	});

	$("#a").click(function(){
		var firebaseRef = firebase.database().ref().child("Lampu");

		if(Lampu == 1){
			firebaseRef.set(0);
			Lampu = 0;
		} else {
			firebaseRef.set(1);
			Lampu = 1;
		}
	})
});

$(document).ready(function(){
	var database = firebase.database();
	var Televisi;

	database.ref().on("value", function(snap){
		Televisi = snap.val().Televisi;
		if(Televisi == 1){
			document.getElementById("b").checked = true;  

		} else{
			document.getElementById("b").checked = false;
		}
	});

	$("#b").click(function(){
		var firebaseRef = firebase.database().ref().child("Televisi");

		if(Televisi == 1){
			firebaseRef.set(0);
			Televisi = 0;
		} else {
			firebaseRef.set(1);
			Televisi = 1;
		}
	})
});

$(document).ready(function(){
	var database = firebase.database();
	var ac;

	database.ref().on("value", function(snap){
		ac = snap.val().ac;
		if(ac == 1){
			document.getElementById("c").checked = true;  

		} else{
			document.getElementById("c").checked = false;
		}
	});

	$("#c").click(function(){
		var firebaseRef = firebase.database().ref().child("ac");

		if(ac == 1){
			firebaseRef.set(0);
			ac = 0;
		} else {
			firebaseRef.set(1);
			ac = 1;
		}
	})
});

$(document).ready(function(){
	var database = firebase.database();
	var Kulkas;

	database.ref().on("value", function(snap){
		Kulkas = snap.val().Kulkas;
		if(Kulkas == 1){
			document.getElementById("d").checked = true;  

		} else{
			document.getElementById("d").checked = false;
		}
	});

	$("#d").click(function(){
		var firebaseRef = firebase.database().ref().child("Kulkas");

		if(Kulkas == 1){
			firebaseRef.set(0);
			Kulkas = 0;
		} else {
			firebaseRef.set(1);
			Kulkas = 1;
		}
	})
});
 
var database = firebase.database();
var dataRef1 = database.ref('teganganvac');
var dataRef2 = database.ref('arusvac');
var dataRef3 = database.ref('dayavac');
var dataRef4 = database.ref('powerfactorac');
var dataRef5 = database.ref('energiac');
var dataRef6 = database.ref('frekuensiac');
var dataRef7 = database.ref('kwhmeter');

dataRef7.on('value', function(getdata1){
    var kwh = getdata1.val();
	
document.getElementById("kwh").innerHTML= "Rp" + kwh.toFixed(2); 


})


dataRef5.on('value', function(getdata1){
    var energi = getdata1.val().toFixed(2);

document.getElementById("metering").innerHTML= energi + "kWh"; 

})



dataRef1.on('value', function(getdata1){
    var teganganvac = getdata1.val().toFixed(2);
document.getElementById("t").innerHTML= teganganvac +"Volt"; 

})
dataRef2.on('value', function(getdata1){
    var arus = getdata1.val();
document.getElementById("arus").innerHTML= arus +" A"; 

})
dataRef6.on('value', function(getdata1){
    var frekuensi = getdata1.val();
document.getElementById("frekuensi").innerHTML= frekuensi +" Hz"; 

})
dataRef4.on('value', function(getdata1){
    var fdaya = getdata1.val();
document.getElementById("powerfactor").innerHTML= fdaya +""; 

})
dataRef3.on('value', function(getdata1){
    var daya = getdata1.val();
document.getElementById("daya").innerHTML= daya +"Watt"; 

})

// const child = document.getElementById("#teg")






