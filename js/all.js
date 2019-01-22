// alert("Hello");
// 使用取得ID的方法、運用 textContent 改變標籤內容裡的字。
document.getElementById('title1').textContent = 'Modified Title';
var breadprice = 50;
var monsternumber = 100;
document.getElementById('monsternumber').textContent = ' ' + monsternumber + ' ';
document.getElementById('breadprice').textContent = ' ' + breadprice + ' ';
var monstername = "蛋蛋怪";
// 取得 ClassName 的方法涉及到 DOM，須加上[]陣列指定順序。
// 因為是取得，[]內指的是順序，但若是宣告變數，如 var apple=[5,7,9]，這當中指的就是值。
document.getElementsByClassName('monstername')[0].textContent = ' ' + monstername + ' ';
document.getElementsByClassName('monstername')[1].textContent = ' ' + monstername + ' ';
document.getElementsByClassName('monstername')[2].textContent = ' ' + monstername + ' ';
document.getElementsByClassName('monstername')[3].textContent = ' ' + monstername + ' ';
var monsterpetphrase = monstername + "問好";
document.getElementById('monstergreeting-1').textContent = ' ' + monsterpetphrase + ' ';
document.getElementById('monstergreeting-2').textContent = ' ' + monstername + ' ';
var uniquemonstername = '巨石強森';
var money = 5;
var balance = breadprice - money;
document.getElementById('uniquemonstername').textContent = ' ' + uniquemonstername + ' ';
document.getElementById('money').textContent = ' ' + money + ' ';
document.getElementById('balance').textContent = ' ' + balance + ' ';
document.getElementById('10timesbalance').textContent = ' ' + ((10 * breadprice) - money) + " ";


// function 就像 mixin，mixin 是透過 @mixin() 設定、@include() 叫出，
// 而 function 是透過 function 設定、function name() 叫出，
// 兩者都可以在括號內設定區域變數。mixin 不一定要有括號，但function 後面一定要加括號。
function monstergrowl() {
    console.log('怪物叫！');
}
monstergrowl();
function count(cup, extra) {
    var total = cup * 5;
    console.log('你想購買 ' + cup + ' 杯水，而一杯水是 5 塊，所以你要付 ' + total + ' 元。');
    // 雖是數字，但若是兩個變數做計算，只有在括號內有效，沒有括號會變成單純顯示兩個數字。
    console.log('而你買很多，給你特價 ' + extra + ' 元，盛惠 ' + (total + extra) + ' 元。');
}


// 區域變數在執行完後會"銷毀"掉，因此，只要在區域內"宣告"的變數的值都不會出現在全域，
// 但若是在全域宣告、在區域內載入值，則會變成在區域內把值載入全域變數，此時由於變數本就是全域，在區域外
// 仍會顯示值。
var wholeareaparameter;
function testarea(one, two) {
    wholeareaparameter = one + two;
}
testarea(2, 2);
console.log(wholeareaparameter);


// hoisting 觀念，在 javascript 中只要是 function，載入時就會自動提升到最上位置，因此會出現即使呼叫
// 的式子在該 function 上仍可呼叫成功的例子。
hoisttest();
function hoisttest() {
    console.log('hello');
}


// 在如 .onclick 這樣的事件後，function() 不用命名，會在事件觸發後立刻執行。
// 但若沒有藉由事件觸發，或在物件內以另一種形式命名，則一定得命名。
document.getElementById('calculationheadandhorn').onclick = function () {
    // value 或 type 是取得標籤內相應的值，此點可參考 html form，value 是指欄位內的內容，
    // type 指欄位的類型。
    var hornnumber = document.getElementById('hornnumber').value;
    var headnumber = document.getElementById('headnumber').value;
    // 使用 typeof 查詢目標的類型，看是為 string 或 number 或其他，以辨別為何不能正常計算或載入。
    console.log(typeof (hornnumber));
    // 在取出值的式子前加上 parseInt(式子)，將值改為 number，跟 c# 一樣。
    // 即使輸入的值是數字，也必須經由這樣轉為 number，因為但凡輸入欄位、都是 text 型態。
    var tentimeshornnumber = parseInt(hornnumber) * 10;
    var fiftytimesheadnumber = parseInt(headnumber) * 50;
    document.getElementById('calculationresult').textContent = ' ' + (tentimeshornnumber + fiftytimesheadnumber) + ' ';
}


function returntest(number1) {
    var number2 = 50;
    var total = number1 + number2;
    // 加上 return，可以將區域變數回傳到全域中，避免區域變數在函式執行後即"銷毀"的情形。
    // 如下繼續，雖然 tom 在全域中宣告，但 tom 載入的函式的值來自於區域變數的 total，
    // 若沒有 return 回傳，tom 中等於沒有值。
    return total;
}
// 雖然有 return 回傳，但並不代表可以直接取用該變數 ( 如 total )，必須以=該function(); 的方式來取得。
var tom = returntest(50);
console.log(tom);


// return 也可以回傳到另一個函式、而這另一個函式再傳到一個區域→全域的變數，
// 如下，順序是：
// 0 呼叫函式 →
// 1 該函式運作*0.8 →
// 2 將*0.8的變數回傳到另一個函式 →
// 3 將已經*0.8的變數再*1.1，接著回傳到那個之前已經*0.8的變數 →
// 1 因為該變數為第一個被呼叫的函式所有，再加上 function 的 hoisting 特性，因此在"跑過一次"後，
// 最終的值回到一開始被呼叫的函式。但實質上，最終值並沒有"回傳"到一開始的函式，只是方便理解ㄋ →
// 0 回到呼叫式上、帶入數字。

// 1 號
function count(price) {
    // 2 號
    return addtex(price * 0.8);
}
// 3 號
function addtex(price) {
    return price * 1.1;
}
// 0 號
console.log(count(50));
// return 也可以當作 break 用，特別是接在 if 內的時候。

// 在變數後加上 =[] 即為陣列，是為了同類型、同內容但值不同的變數產生的，避免 farm1, farm2...的情形，
// 同時，陣列可以利用 for 迴圈來方便計算。
// 因為是宣告變數，如 var apple=[5,7,9]，這當中指的就是值，但若是取得，[]內指的是順序。
var farm = [5, 7, 9];
console.log(farm[0]);
// 透過 .push 可以對現有陣列加上值，但只能往後加、不能指定順序。
var field = [];
field.push(10);
field.push(20);
field.push(30);
console.log(field);
// 透過 .length 指的是陣列內的總數，可像一般數字值一般加減。
console.log(field.length);
// 透過指定陣列內某個順序來改變值，就如變數宣告後直接用=來改變值一樣，只是需要用[]來指定順序。
var banana = [];
banana[0] = 1;
banana[3] = 5;
console.log(banana);


// 物件，一個可以容納不同類型的 variable 和 array 與 function的大集合體，
// 寫法類似 CSS，並適用放入物的規則。
// 注意在物件裡面不用=而用:，不用;而用,。而注意在一開始的物件名稱後一律是接=。
var workplace = {
    computer: "MSI",
    keyboard: 15,
    clerk: ["賈先生", "餅小姐"],
    salary: [2000, 2000],
    capital: 0,
    // 物件內也可放入 function，並且不用另外命名，因為在物件內已經用另一種形式命名了。
    gotocode: function () {
        console.log('報告' + workplace.clerk[0] + '物件內的 function 已正確執行！');
    }
};
// 函式有兩種執行方式，第一種是沒有接括號、回傳這種函式，
// 第二種是加括號、如一般 function 一樣執行。
// 陣列也是一樣，有加括號數字代表指定當中的一個值，沒有括號代表整個陣列。
console.log(workplace.gotocode);
workplace.gotocode();

// 透過 objectname.variablename or arrayname 的方式指定值，表示該變數或陣列從屬在此物件下方。
// 物件內的變數與陣列皆自動加上此前綴，並不會自動宣告無前綴的目標。
// 變數和陣列可以直接用指的方式新增或改變。
workplace.capital = 5000;
workplace.seat = "超豪華座椅";
workplace.clerk[2] = "已孩子";
workplace.clerk[0] = '賈先生‧改';
console.log(workplace);
console.log('電腦：' + workplace.computer);
console.log('工作人員：' + workplace.clerk);
console.log('資金：' + workplace.capital);
console.log('椅子：' + workplace.seat);
console.log('新工作人員：' + workplace.clerk[2]);
// 套用陣列規則。
console.log('第一個工作人員：' + workplace.clerk[0]);
// 一樣可以額外宣告變數、進行計算或載入值。
var salarytotal = workplace.salary[0] + workplace.salary[1];
console.log('薪水總合：' + salarytotal);
console.log('資金：' + workplace.capital);
workplace.computers = "MSIs";
console.log(workplace.computers);

// 
// 物件內增加函式問題
// 

// 第一種方式
// 跟所有內容寫在一起
// 有載入其他物件內的內容
// 成功
var office = {
    computer: "ASUS",
    capital: 5000,
    gotocode1: function () {
        console.log(office.computer + ' 說：' + '第一種方式成功！');
    }
}
office.gotocode1();

// 第二種方式
// 在外新增，用直接指的方式
// 有載入其他物件內的內容
// 成功
office.gotocode2 = function () {
    console.log(office.computer + ' 說：' + '第二種方式成功！');
}
office.gotocode2();

// 第三種方式
// 在外新增，用宣告的方式
// 沒有載入其他物件內的內容
// 成功
office = {
    gotocode3: function () {
        console.log('第三種方式成功！');
    }
}
office.gotocode3();

// 第四種方式
// 在外新增，用宣告的方式
// 有載入其他物件內的內容
// 失敗，無法載入其他物件的內容
office = {
    gotocode4: function () {
        console.log(office.computer + ' 說：' + '第四種方式失敗！');
    }
}
office.gotocode4();


//   
// 物件加陣列
// 

// 直接將物件套入陣列值的位置即可，一樣用{}包住。
var bookshelfsexample = [{}, {}];
var bookshelfs = [
    {
        taiwanesenovel: ["殺手", "都市恐怖病"],
        fantasy: ["迷霧之子", "時光之輪", "諸神之城"],
    },
    {
        taiwanesenovel: ["蟬堡"],
        fantasy: ["巡者系列", "颶光典籍"],
    }
]
// 呼叫時，一樣以.呈現父子關係，並且所屬陣列也有所影響。
console.log(bookshelfs[0].taiwanesenovel[1]);
console.log(bookshelfs[1].fantasy[0]);


// 
// 等於運算子
// 
document.getElementById('birthdaybutton').onclick = function () {
    var customerbirthday = document.getElementById('birthday').value;
    var todaymonth = 12;
    var birthdaycheck;
    if (customerbirthday == todaymonth) {
        birthdaycheck = "是的，我出生在12月，她媽的給我獎品！";
    } else {
        birthdaycheck = "好可惜，我不是。我出生在 " + customerbirthday + '月，幹！';
    }
    document.getElementById('birthdaycheckresponse').textContent = birthdaycheck;
}

document.getElementById('peoplenumberverify').onclick = function () {
    var customernumber = parseInt(document.getElementById('peoplenumber').value);
    var reservationpeoplenumber = 5;
    var peoplenumbercheck = customernumber !== reservationpeoplenumber;
    document.getElementById('peoplenumbercheckresponse').textContent = peoplenumbercheck;
}


// 
// 嚴謹等於運算子
// 
// 在一般情況下，即使沒有一樣的型態，仍然可以做等於運算，因為javascript會做一定的轉換。
1 == 1;
1 == "1";
true == 1;
false == 0;
// 但如果用 ===，那麼一定要同樣型態才能做等於運算。
1 === 1;
true === true;


// 
// 邏輯運算子
// 

1 < 10;
10 <= 100;
var one = 1;
var two = 2;
one <= 2 && two == 2;
one == 1 || two >= 1;


// 
// 邏輯運算子
// 
document.getElementById('andcheck').onclick = function () {
    var standard = 1000;
    var expense = parseInt(document.getElementById('expense').value);
    var vip = document.getElementById('vip').value;
    if (standard <= expense && vip == "有") {
        document.getElementById('andresponse').textContent = '好讚喔，我要去玩波蘭妹啦！';
    } else {
        document.getElementById('andresponse').textContent = '不爽！我要殺你全家！';
    }
}
document.getElementById('orcheck').onclick = function () {
    var standard = 1000;
    var expense = parseInt(document.getElementById('expense').value);
    var vip = document.getElementById('vip').value;
    if (standard <= expense || vip == "有") {
        document.getElementById('orresponse').textContent = '好讚喔，我要去玩波蘭妹啦！';
    } else {
        document.getElementById('orresponse').textContent = '不爽！我還是要殺你全家！';
    }
}


// 
// if 與 else if 與 else
// 
document.getElementById('fulldegreebutton').onclick = function () {
    var fulldegree = parseInt(document.getElementById('fulldegree').value);
    function givefood(food) {
        document.getElementById('fulldegreechoice').textContent = food;
        document.getElementById('fulldegreeannounce').textContent = fulldegree;
    }
    if (fulldegree == 0) {
        givefood('滿漢全席');
    } else if (fulldegree <= 3 && fulldegree > 0) {
        givefood('山珍海味');
    } else if (fulldegree >= 4 && fulldegree < 6) {
        givefood('瓊漿玉釀');
    } else if (fulldegree >= 6 && fulldegree <= 9) {
        givefood('八方雲集');
    } else {
        givefood('屎尿全餐');
    }
}


// 
// switch
// 
// 與 if 的不同之處在於，if 會全部審視，而 switch 只會在找到條件符合的值後審視並執行該條件，效能較佳。
document.getElementById('alertbutton').onclick = function () {
    var alertdegree = document.getElementById('alertdegree').value;
    function alertwarning(degree) {
        document.getElementById('alertwarning').textContent = '各位注意，現在是 ' + degree + ' 級的 ' + alertdegree + '！';
        console.log(alertdegree, degree);
    }
    switch (alertdegree) {
        case 'red':
            alertwarning(10);
            break;
        case 'blue':
            alertwarning(8);
            break;
        case 'yellow':
            alertwarning(5);
            break;
        case 'orange':
            alertwarning(3);
            break;
        default:
            alertwarning(0);
            break;
    }
}

// 
// for 迴圈，重複執行。初始條件(區域函數宣告)；終止條件(符合條件即繼續)；更新方式。
// 
for (var i = 1; i <= 9; i++) {
    for (var y = 1; y <= 9; y++) {
        console.log(i + '*' + y + '=' + (i * y));
    }
}
// for 與 array
var forhonor = [
    {
        viking: ['John', 'Ken', 'Wen'],
        knight: 50,
        japan: 1200,
        owner: 'ABC',
    },
    {
        viking: ['lee', 'see', 'qi'],
        knight: 2000,
        japan: 50,
        owner: 'DEF',
    },
    {
        viking: ['A', 'B', 'C'],
        knight: 3000,
        japan: 20,
        owner: 'GHI',
    }
]
for (var i = 0; i < (forhonor.length); i++) {
    console.log('共有 ' + (forhonor.length + ' 集團'));
    for (var y = 0; y < (forhonor[i].viking.length); y++) {
        console.log('第 ' + (i + 1) + '個集團的 Viking 的第 ' + (y + 1) + ' 個戰士為' + forhonor[i].viking[y])
    }
    var japannumber = 0;
    console.log('第 ' + (i + 1) + '個集團的 knight 有 ' + forhonor[i].knight + ' 個戰士');
    for (var x = 0; x < forhonor.length; x++) {
        japannumber = forhonor[x].japan + japannumber;
    }
    console.log('共有 ' + forhonor.length + ' 個集團，他們的 japan 戰士加起來有 ' + japannumber + ' 個。');
}
// for 與 if
for (var i = 0; i < forhonor.length; i++) {
    if (forhonor[i].knight >= 1000) {
        console.log('第 ' + (i + 1) + ' 個' + '集團有 ' + forhonor[i].knight + ' 個 knight' + '，超過 1000耶，該打仗啦！');
    }
}
var knightnumber = 0;
// for 用 += 加總
for (var i = 0; i < forhonor.length; i++) {
    knightnumber += forhonor[i].knight;
    // 或者可寫為 knightnumber=forhonor[i].knight+knightnumber;
}
console.log('全部集團的 knight 加起來有 ' + knightnumber + ' 個！');
// for 與 break
for (var i = 0; i < forhonor.length; i++) {
    if (forhonor[i].knight > 1000) {
        console.log('我要來找第一個 knight 超過 1000 的集團，而該集團是 ' + forhonor[i].owner + ' 所有的。');
        forhonor[i].knight -= 500;
        // 或者可寫為 forhonor[i].knight=forhonor[i].knight-500;
        console.log('所以我要砍他們 500 人！現在第 ' + (i + 1) + ' 集團的 knight 剩下 ' + forhonor[i].knight + ' 人啦！')
        break;
    }
}


// jSON，一種資料交換格式，編寫方式跟 JavaScript 的物件變數陣列一樣。
// 網路上可搜尋"政府開放資料"，政府通常有提供各式格式的資料，方便載入，
// 而網路上開放資料的格式通常很亂，安裝 JASONView 的 Chrom 插件可以幫助瀏覽。
// https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=zh-TW
// 經 JASONView 處理過的資料不要直接複製，要檢視原始碼或切換到無痕來看才準。
// 此下方範例的來源：https://data.kcg.gov.tw/dataset/projectscope/resource/6ce973d8-f202-4aac-bea3-6a21734e7669
var consturctionarea =
    [
        {
            "流水碼": "1",
            "標案名稱": "107年度楠梓區隆昌兒童遊戲場景觀改善工程",
            "執行機關": "高雄市政府工務局養護工程處公園工程科",
            "開工日期": "2018/10/8",
            "預定完工日期": "2019/1/30",
            "決標金額_千": "4580",
            "工程位置": [
                "22.7107653015083 120.293435908656,22.7110055108194 120.29318357279,22.7110186500137 120.293183505333,22.7111013410318 120.293242320803,22.7113038110537 120.293370050245,22.711319448047 120.293395725704,22.7113243023856 120.29341114838,22.7113243763432 120.293427890192,22.7113232151194 120.29343690968,22.7111046579126 120.293721324363,22.7110939141255 120.293723958941,22.7110819612659 120.293722735397,22.7110676300606 120.293722808917,22.7110544761182 120.2937215818,22.7107651203419 120.293435783046,22.7107653015083 120.293435908656,22.7107653015083 120.293435908656"
            ]
        },
        {
            "流水碼": "2",
            "標案名稱": "愛河沿線週邊水環境計畫-愛河沿線周邊景觀再造工程(第1標)",
            "執行機關": "高雄市政府工務局養護工程處",
            "開工日期": "2018/1/11",
            "預定完工日期": "2018/12/31",
            "決標金額_千": "44520",
            "工程位置": [
                "22.6207882220927 120.290912917317,22.6207531288094 120.289461520223,22.6220996971809 120.289228114932,22.6244007171691 120.288701526106,22.6266620004852 120.287835378045,22.6281059836401 120.286942530161,22.6298939845155 120.286037594089,22.6302621763299 120.287163062617,22.6281544370859 120.288167438415,22.6272063386785 120.288815781458,22.6258999683775 120.289491696571,22.6243451398706 120.290179166089,22.622149656689 120.290797843644,22.6207882220927 120.290912917317,22.6207882220927 120.290912917317"
            ]
        },
        {
            "流水碼": "3",
            "標案名稱": "鳳山區八仙公園公廁改造工程",
            "執行機關": "高雄市政府工務局養護工程處",
            "開工日期": "2018/8/31",
            "預定完工日期": "2018/12/31",
            "決標金額_千": "3850",
            "工程位置": [
                "22.6158570304356 120.356272991721,22.6158002332253 120.356409660344,22.6156182743378 120.356317855666,22.6156678701939 120.356173497331,22.6158546463574 120.356273002816,22.6158570304356 120.356272991721,22.6158570304356 120.356272991721"
            ]
        },
        {
            "流水碼": "4",
            "標案名稱": "107年度楠梓區7號公園(莒光段一小段6地號等)開闢工程",
            "執行機關": "高雄市政府工務局養護工程處",
            "開工日期": "2018/3/31",
            "預定完工日期": "2018/12/31",
            "決標金額_千": "7980",
            "工程位置": [
                "22.7119974641123 120.299550922929,22.7120504134322 120.299638219621,22.711687013722 120.300680531194,22.7114313790453 120.301232970093,22.7109714697359 120.302064586848,22.710579699456 120.302082030152,22.7108897828228 120.301961988002,22.7114875517177 120.30096484823,22.7116894928985 120.300155133063,22.7114250494496 120.299785617712,22.711477380833 120.299733849736,22.7118310017235 120.299732051019,22.7119927005575 120.299556096393,22.7119927231067 120.299561245505,22.7119974641123 120.299550922929,22.7119974641123 120.299550922929"
            ]
        },
        {
            "流水碼": "5",
            "標案名稱": "高雄愛河之心設施改善工程",
            "執行機關": "高雄市政府工務局養護工程處",
            "開工日期": "2018/4/16",
            "預定完工日期": "2018/12/31",
            "決標金額_千": "17880",
            "工程位置": [
                "22.652350206805 120.301443064918,22.6523598058931 120.301453310356,22.6524271164304 120.301545645068,22.6524569994702 120.301823519739,22.6522868525981 120.302256864238,22.6523545122167 120.302431578759,22.6523936343555 120.302637329346,22.6524137821063 120.302874057889,22.6525286481103 120.302914673454,22.6527289469564 120.302820986708,22.6530062889353 120.302860772202,22.653027994077 120.303457902658,22.6523780185351 120.30344059368,22.6520721839368 120.303442136577,22.6519954545119 120.303380740334,22.651820155387 120.302629922098,22.6516066269026 120.301879308866,22.652350206805 120.301443064918,22.652350206805 120.301443064918",
                "22.6528260502024 120.3053742262,22.6520512888477 120.305233959512,22.6521440895357 120.304595060742,22.6521324794838 120.304121449731,22.6520836171169 120.303874562496,22.6521694980872 120.303843237803,22.653010898818 120.303921377031,22.652888347626 120.304313285387,22.6526597336567 120.304489494179,22.6524779704004 120.304449223993,22.652402403053 120.30465554326,22.6526800573899 120.304767418212,22.6528628476983 120.305044524579,22.6528260055459 120.305363922652,22.6528260502024 120.3053742262,22.6528260502024 120.3053742262"
            ]
        },
        {
            "流水碼": "6",
            "標案名稱": "衛武營都會公園內共融遊戲場改善工程",
            "執行機關": "高雄市政府工務局養護工程處",
            "開工日期": "2018/6/11",
            "預定完工日期": "2018/12/31",
            "決標金額_千": "15000",
            "工程位置": [
                "22.6182953001549 120.340070501777,22.6182573277798 120.340132451539,22.6182381253863 120.340111950392,22.618186532781 120.341512290134,22.6172313917356 120.341660956714,22.6171101916488 120.340076156434,22.6182953001549 120.340070501777,22.6182953001549 120.340070501777"
            ]
        },
        {
            "流水碼": "7",
            "標案名稱": "漁港高架道路匝道橋下景觀(含排水設施)既有設施改善工程",
            "執行機關": "高雄市政府工務局養護工程處公園工程科",
            "開工日期": "2018/7/26",
            "預定完工日期": "2018/12/31",
            "決標金額_千": "12435.285",
            "工程位置": [
                "22.5767010350024 120.315563566982,22.5767105455233 120.315553231618,22.5763834499395 120.315050561315,22.5760178539681 120.314486324592,22.5757477916634 120.313911329628,22.5756021018293 120.313366605117,22.5755518045344 120.312780226428,22.5756550893523 120.31234746905,22.5758258442238 120.312048172908,22.576158935077 120.311717185376,22.5765882220152 120.311529804205,22.5771136173423 120.311465444175,22.5778788691459 120.311616017818,22.5785683642238 120.31193163431,22.5790568461645 120.312176212129,22.5794014831647 120.312308301731,22.5797074091723 120.312327360688,22.5799843017533 120.312264235281,22.5802608949314 120.312129071068,22.5804516481729 120.312035496923,22.5805570022626 120.312086436659,22.5805954488949 120.312137698898,22.5806148309363 120.312199354206,22.5767010350024 120.315563566982,22.5767010350024 120.315563566982"
            ]
        },
        {
            "流水碼": "8",
            "標案名稱": "107年度大寮區和發產業園區聯外道路植栽工程",
            "執行機關": "高雄市政府工務局養護工程處園藝工程科",
            "開工日期": "2018/11/12",
            "預定完工日期": "2018/12/31",
            "決標金額_千": "3912.493",
            "工程位置": [
                "22.6073529174708 120.423783977996,22.6073338733428 120.423804648665,22.6072959049108 120.423876861944,22.6051679685586 120.424832763039,22.6011527460235 120.427227271473,22.5953621941776 120.427621782456,22.5953617538964 120.427498266141,22.601095033633 120.427124577483,22.6051199288199 120.424760908632,22.6073529174708 120.423783977996,22.6073529174708 120.423783977996"
            ]
        },
        {
            "流水碼": "9",
            "標案名稱": "苓雅區海邊路(苓安路-五福路)人行環境改善工程",
            "執行機關": "高雄市政府工務局養護工程處道路工程科",
            "開工日期": "2018/8/20",
            "預定完工日期": "2018/12/31",
            "決標金額_千": "10100",
            "工程位置": [
                "22.6205350496028 120.290989097209,22.6205350496028 120.290989097209,22.6205449222482 120.291061107358,22.6203155027872 120.291051991881,22.6194344920736 120.292827206754,22.6194637082411 120.292950594727,22.6205558199955 120.293531827914,22.6205380620134 120.293840764497,22.6193500190358 120.293177667457,22.619235694707 120.29326060339,22.6173942196733 120.293970051353,22.6171166031918 120.293868525661,22.6169912291513 120.293611804031,22.6139158543743 120.291928928853,22.6139346539738 120.291856775294,22.615323776731 120.292601157103,22.6170195383643 120.293529299408,22.617135267704 120.293765487525,22.6172980159452 120.293826424233,22.6192159423516 120.293116584136,22.6202770038683 120.290990420217,22.6205350496028 120.290989097209,22.6205350496028 120.290989097209"
            ]
        },
        {
            "流水碼": "10",
            "標案名稱": "107年度左營區05-兒-08(富民兒童遊戲場)景觀改善工程",
            "執行機關": "高雄市政府工務局養護工程處",
            "開工日期": "2018/6/11",
            "預定完工日期": "2018/11/5",
            "決標金額_千": "3840",
            "工程位置": [
                "22.6680032299768 120.305006740208,22.6679232205681 120.305290357713,22.667516772144 120.30523061401,22.6675424700175 120.305096599118,22.6675529404674 120.30503089296,22.6675502960825 120.304972979083,22.667540663681 120.304955006245,22.6680044219956 120.305006734204,22.6680032299768 120.305006740208,22.6680032299768 120.305006740208"
            ]
        },
        {
            "流水碼": "11",
            "標案名稱": "106年度高雄市小港區第89期重劃區少康營區公園開闢工程",
            "執行機關": "高雄市政府工務局養護工程處",
            "開工日期": "2017/10/11",
            "預定完工日期": "2018/7/31",
            "決標金額_千": "142999",
            "工程位置": [
                "22.5727058181196 120.366613924508,22.5725505182876 120.370875285411,22.5722637138185 120.370856001074,22.5723470081436 120.367727033869,22.5690970612132 120.367638948127,22.5689369012769 120.37066528264,22.5681147949016 120.370627843543,22.5676157941841 120.370115563118,22.5677171405662 120.366719047992,22.5680977325772 120.366285084643,22.5725143415589 120.366532474722,22.5727058181196 120.366613924508,22.5727058181196 120.366613924508"
            ]
        },
        {
            "流水碼": "12",
            "標案名稱": "107年度小港區環保公園及港南兒童遊戲場景觀改善工程",
            "執行機關": "高雄市政府工務局養護工程處",
            "開工日期": "2018/10/16",
            "預定完工日期": "",
            "決標金額_千": "6250",
            "工程位置": [
                "22.56724027886 120.33909465867,22.5673857838758 120.339325516989,22.5669750706874 120.339681223362,22.5668248471577 120.339464545545,22.56724027886 120.33909465867,22.56724027886 120.33909465867,22.56724027886 120.33909465867",
                "22.5636353764759 120.337985003677,22.5636401324956 120.337979837244,22.5636401113146 120.337974693616,22.5637218380974 120.338092648195,22.5630405991778 120.338610435713,22.5629589151021 120.338502768592,22.5636353764759 120.337985003677,22.5636353764759 120.337985003677"
            ]
        }
    ];
console.log(consturctionarea.length);


// 
// 寫短程式碼，方便維護與應用。
// 
var el = document.getElementById('yahooshort');
el.textContent = "yahoo";
var elvalue = el.value;


// 
// 延伸應用 DOM 的語法：querySelector，能夠像 jquery 一樣輸入 Class 或 ID 或 TAG 來選擇。
// 
var yahoofirst = document.querySelector('.yahoo');
// querySelectorAll，因為 querySelector 跟 getElement 一樣，只會抓取第一筆資料，
// 因此得使用此語法抓全部。但，抓進來會變為陣列，因此若要對全部同樣資料做動作，需借助 for 配合 變數.length。
var yahooall = document.querySelectorAll('.yahoo');
// for 取得全部見以下 setAttribute

// 
// setAttribute('','');，能新增或改變 attritube，與 jQuery 的 attr 很像。
// 
var yahooall = document.querySelectorAll('.yahoo');
for (var i = 0; i < yahooall.length; i++) {
    yahooall[i].setAttribute('href', 'http://www.yahoo.com.tw');
    yahooall[i].setAttribute('id', 'yahooidtest');
    yahooall[i].setAttribute('class', 'yahooclasstest');
}


// 
// 各式撈出指定值的方法，指定目標和取出方法可以混用。
// 
// value 是取得標籤內相應的值，此點可參考 html form，value 是指欄位內的內容，
var getexampleinputbyidvalue = document.getElementById('get-example-input-id').value;
console.log(getexampleinputbyidvalue);
var getexampleinputattrvalue = document.getElementById('get-example-input-id').getAttribute('value');
console.log(getexampleinputattrvalue);
var getexampleinputqueryvalue = document.querySelector('#get-example-input-id').value;
console.log(getexampleinputqueryvalue);
var getexampleinputqueryattrvalue = document.querySelector('#get-example-input-id').getAttribute('value');
console.log(getexampleinputqueryattrvalue);
// type 指欄位的類型。
var getexampleinputbyidtype = document.getElementById('get-example-input-id').type;
console.log(getexampleinputbyidtype);
// textContent 指文字內容。
var getexampletextquerytextcontent = document.querySelector('#get-example-text-id').textContent;
console.log(getexampletextquerytextcontent);
// innerHTML 能取得該 tag 內的所有文字與 html 標籤內容。
var getexampletextqueryinnerhtml = document.querySelector('#get-example-text-id').innerHTML;
console.log(getexampletextqueryinnerhtml);
// getAttribute 能取得各式值。
var getexampletextquerygetid = document.querySelector('#get-example-text-id').getAttribute('id');
console.log(getexampletextquerygetid);
var getexampletextquerygetclass = document.querySelector('#get-example-text-id').getAttribute('class');
console.log(getexampletextquerygetclass);


// 
// innerHTML，先清空指定目標裡面的值，再放入 html tag 和內容。
// 如果是最上層，裡面原本要有值，才可以抓到。
//
var innerhtmltest = document.querySelector('#innerhtmltest');
// 注意，因為同樣框號視為一個，因此在外括號為''的情況下，內括號應為""。
var innerhtmltestcontent = '<h4 class="innerhtmltestclass">新的內容</h4>';
innerhtmltest.innerHTML = innerhtmltestcontent + innerhtmltestcontent;
// 增加可讀性，應適當設變數，或者是載入原有變數。
var innerhtmltest2 = document.querySelector('#innerhtmltest2');
var link = 'http://www.yahoo.com.tw';
var name = 'asd';
innerhtmltest2.innerHTML = '<p><ul><li><a href="' + link + '">' + name + '</a></li></ul></p>';
// innerHTML 是放入 html tag 和內容，換言之，也可以放入<script></script>之類的東西，
// 用在輸入欄位一類時，會有資安疑慮，例如在文字欄位植入惡意 js 等等。
// 因此，不要把 innerHTML 用在使用者可以輸入內容的地方。
// 這種攻擊稱為 XSS, Cross-site scripting。

// 利用 for 迴圈使用 innerHTML 將內容印出：
var pens = [
    {
        blue: ["A", "B", "C"],
    },
    {
        blue: ["C", "D", "F"],
    },
    {
        blue: ["G", "H", "I"],
    }
]
var innerhtmlforadding = document.querySelector('.innerhtmlforadding');
var penslength = pens.length;
// 因為 innerHTML 的特性，會先清空原本的值，所以要先宣告一個字串變數，在 for 迴圈內將值全部加在該變數，
// 最後再一次用 innerHTML 放入。
var string = '';
for (var i = 0; i < penslength; i++) {
    var content = '<li>' + pens[i].blue + '</li>';
    string = content + string;
    innerhtmlforadding.innerHTML = string;
}
// 另有 outterHTML，與 innerHTML 不同的是，innerHTML 是改變選定 HTML 標籤裡面的 HTML，
// 而 outterHTML 則是連選定的 HTML 標籤也包含。


// 
// createlement 與 appendchild
// 
// 先使用 createlement 創造 html tag
var createlement = document.createElement('li');
// 再使用 .textContent 改變此元素的文字內容
createlement.textContent = "我用 createlement 創造的元素。";
// 再使用 setAttribute 改變屬性
createlement.setAttribute('class', 'createlementtest');
// 最後，使用 appendchild 將此元素掛在指定的節點後( DOM 概念)，與 innerHTML 不同的是，
// 此方法不會清除原本內容，並且會將新內容增加在後面。
document.querySelector('.createlementtest').appendChild(createlement);

// 利用 createlement 與 for 迴圈將內容印出：
var createlementtest = document.querySelector('.createlementtest');
for (var i = 0; i < pens.length; i++) {
    var string = document.createElement('li');
    string.textContent = pens[i].blue;
    createlementtest.appendChild(string);
}


// 
// 事件：event 獲取資訊
// 
// 在事件的 function 中增加一變數，此變數將用來做當下事件相關資訊、如 x y 軸、true 等等的獲取，
// 可以拿來做進一步運用。
document.querySelector('.btn').onclick = function (event) {
    // .target 可以獲得現在點的元素對象，如 ul li a 等等。
    console.log(event.target);
}


// 
// 監聽：新式 JaveScript 寫法。
// 
var btntest = document.querySelector('.btn');
//      監聽             事件(不需加on) 函式   true 與 false
btntest.addEventListener('click', function (event) { console.log(event); }, false);


// 傳統 click 與 新式 addEventListener(click) 的差異
// 傳統方式，當有多個同樣目標的函式時，最後面的會覆蓋前面的，也就是只執行最後一個。
var ElementOn = document.querySelector('.btn-on');
ElementOn.onclick = function () {
    console.log('第一個 onclick');
}
ElementOn.onclick = function () {
    console.log('第二個 onclick');
}
// 但若使用 addEventListener，同樣目標的函式會全部執行。
var ElementAdd = document.querySelector('.btn-add');
ElementAdd.addEventListener('click', function () {
    console.log('第一個 add-click');
}, false);
ElementAdd.addEventListener('click', function () {
    console.log('第二個 add-click');
}, false);


// 
// true 與 false
// 
// false - event bubbling 為預設，當元素重疊且都有事件時，是由內執行到外
// true - event capturing 相反，當重疊時，是由最外層開始執行
var elOutter = document.querySelector('.outter');
elOutter.addEventListener('click', function () {
    alert('outter');
}, true);
var elInner = document.querySelector('.inner');
elInner.addEventListener('click', function () {
    alert('inner');
}, true);
// stoppropagation();，當重疊時，只執行點選的，不再往外或內層搜尋執行
elOutter.addEventListener('click', function (event) {
    event.stopPropagation();
    alert('outter');
}, false);
elInner.addEventListener('click', function (event) {
    event.stopPropagation();
    alert('inner');
}, false);


// 
// preventDefault();，取消元素預設行為，如連結或送出按鈕。
// 
var preventDefault = document.querySelector('#preventDefault');
preventDefault.addEventListener('click', function (event) {
    event.preventDefault();
}, false);


// 
// addEventListener.change，當下拉式選單選擇到值時的事件。
// 
var arealist = [{
    owner: '小明',
    place: 'red',
}, {
    owner: '小花',
    place: 'blue',
}, {
    owner: '小白',
    place: 'yellow',
}, {
    owner: '小光',
    place: 'green',
}, {
    owner: '小智',
    place: 'red',
}];
var area = document.querySelector('#area');
var list = document.querySelector('#list');
function updatelist(event) {
    // .target 選擇該目標，value 再取得該目標內的值
    var selector = event.target.value;
    var string = "";
    for (var i = 0; i < arealist.length; i++) {
        if (selector == arealist[i].place) {
            string = string + '<li>' + arealist[i].owner + '</li>';
            list.innerHTML = string;
        }
    }
}
area.addEventListener('change', updatelist, false);


// 
// blur，離開焦點時觸發。focus 為在焦點時觸發。
// 
var blurtesttext = document.querySelector('#blurtesttext');
var blurtestsub = document.querySelector('#blurtestsub');

function checkcontent(event) {
    if (event.target.value == '') {
        alert('不可留白！');
    }
}

blurtesttext.addEventListener('blur', checkcontent, false);


// 
// mousemove 事件，以及 css 的 animation:fontbulger。
// 
var el = document.querySelectorAll('.box');

var Len = el.length;

for (var i = 0; i < Len; i++) {
    el[i].addEventListener('mousemove', function (e) {
        alert('你輸了！');
    });
}


// 
// client、page 與 screen 取出的值的差異
// 
var frame = document.querySelectorAll('.frame');
frame[1].addEventListener('mousemove', checkdifference, false);
function checkdifference(event) {
    // client 是當下視窗
    console.log('clientX - ' + event.clientX);
    console.log('clientY - ' + event.clientY);
    // page 是整個網頁
    console.log('pageX - ' + event.pageX);
    console.log('pageY - ' + event.pageY);
    // screen 是整個螢幕
    console.log('screenX - ' + event.screenX);
    console.log('screenY - ' + event.screenY);
}


// 
// 由父元素來監聽子元素內容，增進效率、不必一個元素就做一次工。
// 
// 注意，function 內的 .target 等東西，是針對"做出動作的目標"，因此必須使用第一個函數，而不是其他變數。
frame[2].addEventListener('click', ops, false);
function ops(event) {
    if (event.target.nodeName !== 'LI') {
        return;
    }
    console.log(event.target.textContent);
}
document.querySelector('#print').onclick = function () {
    window.print();
}
document.querySelector('#location').onclick = function () {
    console.log(window.location);
}
document.querySelector('#open').onclick = function () {
    window.open('http://www.google.com.tw');
}
console.log('現在顯示內容的高度'+window.innerHeight);
console.log('整個瀏覽器的高度'+window.outterHeight);


//
// AJAX
//
// 產生要求
var xhr = new XMLHttpRequest();
// 常見相關屬性：readystate
// 0 - 已建立要求，但未呼叫 open(); 使用。
// 1 - open() 方法已被呼叫。
// 2 - send() 方法已被呼叫，而且可取得 header 與狀態。
// 3 - 回應資料下載中，此時 responseText 會擁有部分資料。
// 4 - 完成下載操作。

// onreadystatechange - 每次 readystate 改變，都會觸發此函數

// 常見相關屬性：status
// 200 - ok
// 404 - 未找到頁面

// 格式、要讀取的資料、同步或非同步
// 格式：get ( 讀取資料 )、post ( 傳送資料到伺服器 )
// 同步或非同步： true，非同步，不會等資料傳回來、就讓程式繼續往下跑，等到回傳才自動回傳
xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true);

// 傳送要求，因為這邊不是 post、沒有要傳送資料過去，所以用 null 空值
xhr.send(null);

// 無值，因為非同步的關係、這一行執行的時候資料還沒載入
console.log(xhr.responseText);

// 確認資料回傳後才執行
xhr.onload = function(){
    console.log(xhr.responseText);

    // 處理 JSON 格式，使用 JSON.parse(); 將字串變為該格式的物件，如集合等等。
    var string = JSON.parse(xhr.responseText);
    document.querySelector('.showjson').textContent = string[0].name;
}

// 加上 if - status 確認資料是否有抓到
xhr.onload = function(){
    if (xhr.status == 200) {
        var string = JSON.parse(xhr.responseText);
        document.querySelector('.showjson').textContent = string[0].name;
    } else {
        console.log("資料錯誤！");
    }
}


//
// CORS: Cross-Origin Resource Sharing
//
// 開啟與否：是否可以跨網域撈取資料