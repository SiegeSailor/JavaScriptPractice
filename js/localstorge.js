var SaveName = document.querySelector('.btnsub');
var CallName = document.querySelector('.btncall');
var NmaeBoard = document.querySelector('.showLS');

SaveName.addEventListener('click', save);
function save() {
    var ElementLI = document.createElement('li');
    var InName = document.querySelector('.inputname').value;
    ElementLI.textContent = InName;
    console.log(ElementLI);
    // 使用 outterHTML 原因有二，一是在這裡儲存的 li 為 DOM 物件，
    // 儲存會轉為 [object HTMLLIElement] 字串，而且本來 LocalStorage 就只能儲存 數字、字串、布林
    // 2 是因為外有 li 標籤，要使用 outterHTML 而非 innerHTML。
    localStorage.setItem('Name', ElementLI.outerHTML);
}
CallName.addEventListener('click', call);
function call() {
    var string = localStorage.getItem('Name');
    // 使用 innerHTML 而非 outter 的原因是因為只是要放入目標區，而不是改變整個目標區的 html
    // 不使用 appendchild 的原因是儲存的是字串而非 DOM 物件
    document.querySelector('.showLS').innerHTML = string;
}

// 由於 LocalStorage 進與出都只能是 string，因此
var phone = [
    {
        phone: 'aser',
    },
    {
        phone: ['asus', 'msi'],
    }
]
// 存入時應使用 JSON.stringify(); 來變為字串
var phoneString = JSON.stringify(phone);
localStorage.setItem('PHONE', phoneString);
var phoneGet = localStorage.getItem('PHONE');
// 取出時使用 JSON.parse(); 將字串變為該格式的物件，如集合等等。
var phoneParse = JSON.parse(phoneGet);
console.log(phoneParse[1].phone);



//
// 使用 dataset.自訂的 html data 名稱，可以取出目標的 date 值。若只有 dataset 則會列出所有。
//  
var data = document.querySelector('.data');
console.log('data 的第一個值是：' + data.dataset.fire);

data.addEventListener('click', checkdata);
function checkdata(event) {
    console.log('data 的第二個值是：' + event.target.dataset.water);
}



// 
// 以 dataset 呼出 array 資料，
// 當中還有運用 選擇父階層接著用 if 過不符合型態的資料、用 for 迴圈透過 innerHTML 將值傳入
// 
var boat = ['A', 'B', 'C', 'D', 'E'];
// 用 for 迴圈透過 innerHTML 將值載入目標 ul 中
var board = document.querySelector('.board');
var string = '';
function updateboard() {
    for (var i = 0; i < boat.length; i++) {
        string += '<li data-number="' + i + '">' + boat[i] + '</li>';
    }
    board.innerHTML = string;
}
updateboard();
// 以 dataset 呼出 array 資料
board.addEventListener('click', checkboard);
function checkboard(event) {
    // 選擇父階層接著用 if 過不符合型態的資料
    var select = event.target.nodeName;
    if (select !== "LI") {
        return;
    }
    var number = event.target.dataset.number;
    console.log(boat[number]);
}


// 
// array.splice(第幾筆開始刪除的資料,刪除資料的數目);
// 
var letter = ['F', 'G', 'H', 'I', 'J'];
// 用 for 迴圈透過 innerHTML 將值載入目標 ul 中
var boardsplice = document.querySelector('.boardsplice');
var string = '';
function updateboardsplice() {
    // 此 string 宣告與後段刪除有關
    // 當刪除到最後一個時，因為 length 長度將會變成 1，for 迴圈不會執行，因此不能刪除最後一個
    // 替代方法是一開始就先將值清空，若能刪除再由後面的 for 迴圈載入值
    // 同時，此清空值是必要的，因為若沒有清空、全域函數的 string 就會繼承上次的值，反而會再疊加上去
    string = '';
    for (var i = 0; i < letter.length; i++) {
        string += '<li data-number="' + i + '">' + letter[i] + '</li>';
    }
    boardsplice.innerHTML = string;
}
updateboardsplice();
// 點擊後，刪除目標在 js 內的 array
boardsplice.addEventListener('click', checkboardsplice);
// 以 dataset 呼出 array 資料
function checkboardsplice(event) {
    // 選擇父階層接著用 if 過不符合型態的資料
    var select = event.target.nodeName;
    if (select !== "LI") {
        return;
    }
    var number = event.target.dataset.number;
    console.log(number);
    letter.splice(number, 1);
    // 注意，因為上面是刪除 js 內的 array，而 html 上的 ul 內容是透過 js 渲染，所以必須再渲染一次。
    updateboardsplice();
}


// 
// 以 dataset 呼出 array 資料、array.splice();、LocalStorage 共同運用於 to-do-list
// 關鍵是，儲存到 localstorage 跟儲存到 array 其實是沒關係的，因為在下面的做法中，
// 都是分別在一個 function 中完成，故不用擔心先後順序對數值的影響。
// 
var todolistarray = [];
var todolist = document.querySelector('.todolist');
var todobtn = document.querySelector('.todobtn');
var todotext = document.querySelector('.todotext');
var tododata = JSON.parse(localStorage.getItem('TODO')) || [];

// 增加 todolist
todobtn.addEventListener('click', todoadd);
function todoadd(event) {
    // 使用 push 增加
    var string = todotext.value;
    tododata.push(string);
    // 渲染
    updatetodolist(tododata);
    // 儲存到 localstorage
    localStorage.setItem('TODO', JSON.stringify(tododata));
}
// 渲染 todolist 到指定 ul
function updatetodolist(item) {
    str = "";
    for (var i = 0; i < item.length; i++) {
        str = str + ('<li>' + '<a href="#"  data-number="' + i + '">刪除</a>' + ' ' + item[i] + '</li>');
    }
    todolist.innerHTML = str;
}
updatetodolist(tododata);

// 點擊後，刪除目標在 js 內的 array
todolist.addEventListener('click', checktodolist);
// 以 dataset 呼出 array 資料
function checktodolist(event) {
    event.preventDefault();
    // 選擇父階層接著用 if 過不符合型態的資料
    var select = event.target.tagName;
    if (select !== "A") {
        return;
    }
    var number = event.target.dataset.number;
    tododata.splice(number, 1);
    // 儲存到 localstorage
    localStorage.setItem('TODO', JSON.stringify(tododata));
    // 注意，因為上面是刪除 js 內的 array，而 html 上的 ul 內容是透過 js 渲染，所以必須再渲染一次。
    updatetodolist(tododata);
}

