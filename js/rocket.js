var body = document.body;

function gorocket(event){
    var keycode = event.keyCode;
    console.log(keycode);
    switch(keycode){
        case 37:
        document.querySelector('.rocket-1').style.bottom = '2000px';
        break;
        case 38:
        document.querySelector('.rocket-2').style.bottom = '2000px';
        break;
        case 39:
        document.querySelector('.rocket-3').style.bottom = '2000px';
        break;
    }
}

body.addEventListener('keydown',gorocket,false);