
const firebaseConfig = {
    apiKey: "AIzaSyDLqJQTDbArOQ6F2TN9FuY-HgNV9FDAmtg",
    authDomain: "project-e3b3a.firebaseapp.com",
    databaseURL: "https://project-e3b3a-default-rtdb.firebaseio.com",
    projectId: "project-e3b3a",
    storageBucket: "project-e3b3a.firebasestorage.app",
    messagingSenderId: "690254774265",
    appId: "1:690254774265:web:cf9b248e5d5825eba6c728",
    measurementId: "G-FLVDQF954Z"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Lấy tham chiếu tới các switch
const device1 = document.getElementById('device1');
const device2 = document.getElementById('device2');


// Đường dẫn trong Firebase để lưu trữ trạng thái các thiết bị
const deviceRef = (deviceId) => database.ref('devices/' + deviceId);
const batteryRef = (deviceId) => database.ref('batteries/' + deviceId);
const voltageRef = (deviceId) => database.ref('voltages/' + deviceId);



const switch1 = document.getElementById('device1');
switch1.addEventListener('change', function() {
    const value = switch1.checked ? 1 : 0;
    firebase.database().ref('RELAY/RL1').set(value);
    });
firebase.database().ref('RELAY/RL1').on('value', (snapshot) => {
    const state = snapshot.val();
    switch1.checked = state === 1; // Cập nhật trạng thái switch khi giá trị thay đổi
});
//sw2
const switch2 = document.getElementById('device2');
switch2.addEventListener('change', function() {
    const value = switch2.checked ? 2 : 3;
    firebase.database().ref('RELAY/RL2').set(value);
    });
firebase.database().ref('RELAY/RL2').on('value', (snapshot) => {
    const state = snapshot.val();
    switch2.checked = state === 1; // Cập nhật trạng thái switch khi giá trị thay đổi
});



firebase.database().ref('RELAY/RL1').on('value', (snapshot) => {
    const spin1 = snapshot.val();
    if(spin1 =="1") {
        firebase.database().ref('RELAY/RL1').set("1");
        switch1.checked = 1 === 1; 
    }
    else if(spin1 =="0")
    {
        firebase.database().ref('RELAY/RL1').set("0");
        switch1.checked = 0 === 1; 
    }
});
firebase.database().ref('RELAY/RL2').on('value', (snapshot) => {
    const spin1 = snapshot.val();
    if(spin1 =="2") {
        firebase.database().ref('RELAY/RL2').set("2");
        switch2.checked = 1 === 1; 
    }
    else if(spin1 =="3")
    {
        firebase.database().ref('RELAY/RL2').set("3");
        switch2.checked = 0 === 1; 
    }
});


firebase.database().ref('ND/TEMP').on('value', (snapshot) => {
    const state = snapshot.val();
    document.getElementById('voltage3').innerHTML = state + ' ℃';
});
firebase.database().ref('ND/HUM').on('value', (snapshot) => {
    const state = snapshot.val();
    document.getElementById('voltage4').innerHTML = state + ' %';
});
