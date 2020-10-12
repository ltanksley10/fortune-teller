document.getElementById('btnSearch').addEventListener('click', show);

function show() {
    document.getElementById('displayMessage').style.display = 'block';
}

function GetValue() {
    let myFortune = ['Very soon all of your dreams will come true!', 'You will meet your soulmate.', 'Your smile will make a difference to someone today.',
    'Adventure awaits you.', 'Success is on its way to you.', 'Give and you shall receive.', 'Your troubles will soon disappear.', 'You will receive good news very soon.',
    'Your questions will soon be answered.', 'Practice and all is coming.', 'Change is on the horizon.', '"You can\'t know. You can only believe. Or not." -C.S. Lewis', 
    '"Stop trying to calm the storm. Calm yourself, the storm will pass." -The Evolvista', '"When you are content to be simply yourself and don\'t compare or compete, everyone will respect you." -Lao Tzu',
    '"Choose love over judgement and watch your life improve immediately." -Dove Cameron'];
    
    let message = myFortune[Math.floor(Math.random() * myFortune.length)];
    document.getElementById("message").textContent=message;
}






