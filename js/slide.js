var cookienum = 1;
var prev = document.getElementsByClassName('prev_btn');
var next = document.getElementsByClassName('next_btn');

var clist = [];


function imgclick(img) {
    var wrap = document.getElementsByClassName('showwrap');
    cookienum = img;
    cookieset(cookienum);
    wrap[0].style.display = "block";
    wrap[0].style.transition = "display 1s";

    prev[0].style.display = "block";
    next[0].style.display = "block";
    if (cookienum == 1) {
        prev[0].style.display = "none";
    } else if (cookienum == 12) {
        next[0].style.display = "none";
    }
}

function closewrap() {
    var wrap = document.getElementsByClassName('showwrap');
    wrap[0].style.display = "none";
}

function nextpaint() {
    prev[0].style.display = "block";
    next[0].style.display = "block";
    cookienum++;
    if (cookienum >= 12) {
        next[0].style.display = "none";
    }

    cookieset(cookienum);
}


function prevpaint() {
    prev[0].style.display = "block";
    next[0].style.display = "block";
    cookienum--;
    if (cookienum <= 1) {
        prev[0].style.display = "none";
    }
    cookieset(cookienum);
}

function cookieset(cookienum) {

    var name = document.getElementById('showname');
    var cookie = document.getElementById('showcookie');
    var story = document.getElementById('showstory');
    var paint = document.getElementById('showpaint');
    var artist = document.getElementById('showartist');

    var nstr;
    var cstr;
    var sstr;
    var pstr;
    var astr;

    switch (cookienum) {
        case 1: {
            nstr = "괴도맛 쿠키";
            cstr = "images/cookie" + cookienum + ".png";
            sstr = "「친애하는 쿠키 여러분, 오늘밤 가장 아름답게 빛나는 보석을 훔치겠습니다.」괴도 블루의 예고장이 도착한다면 그 보석은 이미 사라진 거나 다름없다! 서늘한 동굴에서 오래오래 숙성시킨 만큼 그 맛과 유서가 깊은 블루치즈 가문이 몰락하고 긴 시간이 흘러 등장한 괴도맛 쿠키. 멋진 외모와 화려한 퍼포먼스로 모두의 관심을 한껏 받는 이 쿠키는 치명적인 매력으로 자신을 바라보는 이의 마음도 능수능란하게 훔친다.";
            pstr = "images/paint1.gif";
            paint.style.marginLeft = "-350px";
            astr = "painted by 이랑";
            break;
        }
        case 2: {
            nstr = "첵스초코맛 쿠키";
            cstr = "images/cookie" + cookienum + ".png";
            sstr = "「체크메이트!」 두 목소리가 하나되어 울리면 그 누구도 이 판에서 살아나갈 수 없다! 단단한 블랙앤화이트 초콜릿 덩어리를 체스 폰 모양으로 깎아서 반씩 나눠 얹었더니 세상에서 체스를 제일 좋아하는 쌍둥이 쿠키가 되었다. 두 손 꼭 붙잡고 다니다가 체스화이트 쿠키가 아무데서나 판을 벌리면 체스블랙 쿠키가 묵묵히 말을 꺼낸다. 둘이 번갈아가며 체스를 두는데, 정반대인 성격처럼 전술도 다른 체스초코 쿠키. 체스블랙 쿠키가 주의깊게 킹과 록을 움직이면 체스화이트 쿠키가 과감하게 폰을 퀸으로 바꾸는 환상적인 호흡을 자랑해 져본 적이 없다고. 요즘 체스만큼 재미있는 게임을 시작했다는데, 대체 어떤 게임일까?";
            pstr = "images/paint2.jpg";
            paint.style.marginLeft = "-350px";
            astr = "painted by 디뿌";
            break;
        }
        case 3: { //달빛술사
            nstr = "달빛술사맛 쿠키";
            cstr = "images/cookie" + cookienum + ".png";
            sstr = "밤하늘을 담은 머리카락을 날리며 꿈꾸듯 달리는 달빛술사 쿠키. 아주 오랜 옛날 마법사들의 도시에 있던 마법사들에 의해 만들어져 마법의 비밀을 전수받았다. 지금은 마법사들이 모두 사라지고 없지만, 꿈을 꾸고 있을 때 더욱 강해지는 마법 능력으로 홀로 마법사들의 흔적을 지키고 있다. 이따금씩 옛 기억이 떠올라 아련해질 때면 꿈속 자신만의 아름다운 세계에서 달친구에게 기대어 별빛 친구들과 그림을 그리며 애달픈 마음을 달래곤 한다.";
            pstr = "images/paint" + cookienum + ".gif";
            paint.style.marginLeft = "-350px";
            astr = "painted by 나날";
            break;
        }
        case 4: { //블랙베리
            nstr = "블랙베리맛 쿠키";
            cstr = "images/cookie" + cookienum + ".png";
            sstr = "매사에 무심할 것만 같은 시무룩한 표정에도 불구하고 그렇게 친절하고 성실할 수 없는 반전의 맛. 꽤 오랫동안 어느 대단한 가문을 위해 일해 왔다는 이 쿠키는, 집중해서 일할 때면 어딘가 묘한 기운이 감돌며 혼자서도 마치 여럿이서 해치운 것 같은 대단한 능력을 보여준다! 집안의 대소사를 관리하는 것만으로도 늘 바쁠텐데, 뭘 찾아야 한다며 끊임없이 가출하는 주인집의 문제 쿠키를 찾아 데려와야 하는 중요한 임무가 있기 때문에 밤낮으로 더 열심히 뛰어다니고 있다.";
            pstr = "images/paint" + cookienum + ".gif";
            paint.style.marginLeft = "-300px";
            astr = "painted by 뮈담";
            break;
        }
        case 5: { //석류
            nstr = "석류맛 쿠키";
            cstr = "images/cookie" + cookienum + ".png";
            sstr = "강력한 주술의 땅에서 자란 석류 한 알을 통째로 얹어 영험한 기운이 느껴지는 쿠키. 진하게 농축된 석류 시럽으로 맛을 더해 유난히도 새빨갛다. 신비로운 석류 나무를 모시던 어느 날, 어둠을 따르라는 운명을 계시받게 되는데… 혼란에 빠진 그 순간 약속한 듯 어둠의 무리가 몰아닥쳐 마을을 삼켜 버렸고, 자욱한 연기만이 피어나는 그곳에 단 하나의 그림자가 우뚝 서 있었다. 그제야 석류맛 쿠키는 자신이 섬겨야 할 상대가 누구인지 알게 되었다. 어떤 계시를 보았기에, 석류맛 쿠키는 그림자를 따라나선 걸까?";
            pstr = "images/paint" + cookienum + ".png";
            paint.style.marginLeft = "-350px";
            astr = "painted by 려도";
            break;
        }
        case 6: { //뱀파이어
            nstr = "뱀파이어맛 쿠키";
            cstr = "images/cookie" + cookienum + ".png";
            sstr = "다른 쿠키들을 만드느라 정신없이 시간을 보내던 마녀가, 질 좋은 포도를 제 때 사용하지 않고, 주스를 만들어 참나무 통에 담아 오랫동안 숙성해 놓았다가 쿠키에 넣었는데, 그렇게 탄생한 것이 뱀파이어맛 쿠키다. 쿠키 내에 이 포도주스가 10% 넘게 함유되어 있어, 깨어나는데 좀 시간이 걸렸다고 한다. 또한 이 쿠키는, 다른 쿠키들과는 달리 인생(쿠키생)을 느긋하게 즐기는 듯 보이고, 심지어 오븐 안에서도 뜨거운줄 모르고 여유를 부리다가 여동생인 연금술사맛 쿠키의 도움으로 탈출에 성공했다고 한다. 창백한 표정과 삐딱한 자세가 매력인 이 쿠키는 오늘도 '인생 뭐 있냐'며 잘 숙성된 포도주스 한잔을 권한다.";
            pstr = "images/paint" + cookienum + ".gif";
            paint.style.marginLeft = "-335px";
            astr = "painted by 코임";
            break;
        }
        case 7: { //슈크림
            nstr = "슈크림맛 쿠키";
            cstr = "images/cookie" + cookienum + ".png";
            sstr = "생크림을 가득 얹어 보기만 해도 달콤하고 기분 좋아지는 쿠키. 어딘가 모르게 어리숙해서 항상 마음을 놓을 수 없는 철부지이지만, 다듬어지지 않은 잠재력이 어마어마한 것 같다. 오래된 서적에서 대단한 마법사가 되는 법을 발견하고는 열심히 마법에 매진하고 있지만 아직 잘 되지 않는것 같다. 워낙 슈가 부드럽고 얇아서 멘탈이 부서지기 쉬운 타입. 과연 슈크림맛 쿠키는 멋진 마법사가 될 수 있을까?";
            pstr = "images/paint" + cookienum + ".png";
            paint.style.marginLeft = "-350px";
            astr = "painted by 알베";
            break;
        }
        case 8: { //양파맛
            nstr = "장미맛 쿠키";
            cstr = "images/cookie" + cookienum + ".png";
            sstr = "강렬한 탱고 음악과 숨막히는 장미향이 흐르면 그곳이 바로 장미맛 쿠키의 무대! 타고난 댄서인 이 쿠키는 장미꽃잎 드레스 자락이 돋보이는 정열적인 몸놀림으로 어디서나 초대가 끊이지 않는다. 영감이 느껴지는 쿠키의 허리를 끌어당겨 광장 한복판에서 갑자기 춤추기도 한다는데, 그럴 땐 당황하지 말고 스텝을 뒤따라 밟다 보면 모든 속박에서 벗어나는 황홀한 낙원을 맛볼 수 있다고. 농염한 눈빛과 마주치면 누구든 단숨에 빠져들지만 춤도 사랑도 한곳에 머무르지 않고 순간의 이끌림에 몸을 맡긴다는 쿠키. 장미는 자유롭게 피어서 더 아름다운 게 아닐까.";
            pstr = "images/paint" + cookienum + ".gif";
            paint.style.marginLeft = "-350px";
            astr = "painted by 야슬";
            break;
        }
        case 9: { //웨어울프
            nstr = "웨어울프맛 쿠키";
            cstr = "images/cookie" + cookienum + ".png";
            sstr = "이 쿠키가 만들어질 때 다량의 후추가 들어갔는데 이때 후추통에 묻어있던 늑대의 털 하나가 딸려 들어간 모양이다. 그 후로 마음이 불안하고 분노를 느낄 때면 늑대의 기운이 드러나 자신도 모르게 포악한 행동을 하게 된다. 오래 전, 지켜야 할 누군가가 위험해 처했을 때 변신한 적이 있는데, 이로 인해 머물던 마을에서 쫓겨나 숲속에서 홀로 떠돌이 생활을 하고 있다. 아픔을 겪어서인지 후추 맛에 울음이 밴, 조금 짜고 매운맛이다. 상처에 대해 묻거나 가까이 다가오는 이에게 '다치게 할 수 있다'며 밀어내는 웨어울프맛 쿠키. 사라지지 않는 눈 밑의 흉터처럼 그의 마음에도 지워지지 않는 상처가 남아있는 걸까.";
            pstr = "images/paint" + cookienum + ".gif";
            paint.style.marginLeft = "-350px";
            astr = "painted by 새옛";
            break;
        }
        case 10: { //솜사탕
            nstr = "솜사탕맛 쿠키";
            cstr = "images/cookie" + cookienum + ".png";
            sstr = "달콤한 설탕에 바람의 설렘을 녹여 만든 솜사탕맛 쿠키. 쿠키들 중 설탕 함량이 가장 높다고 알려져 있다. 자신조차 달달한 마음을 주체하지 못 해 늘 사랑에 빠져있다. 하루 종일 러브레터를 쓰느라 머리를 싸매고 있는데, 정작 버려지는 편지가 더 많다고 한다. 사랑을 이루기 위해 편지를 적는 게 아니라, 그 순간의 마음을 간직하고 싶어 한 자 한 자 종이에 적는다나. 쿠키들 사이에서는 솜사탕맛 쿠키의 편지를 받아보지 않은 쿠키 찾기가 힘들다는 농담이 있을 정도지만, 그 내용이 너무 사랑스러워서 모두 받기만을 기다린다고 한다.";
            pstr = "images/paint" + cookienum + ".gif";
            astr = "painted by 촘챠";
            break;
        }
        case 11: { //악마맛
            nstr = "악마맛 쿠키";
            cstr = "images/cookie" + cookienum + ".png";
            sstr = "매운맛이 날것 같지만 의외로 콜라맛이 나는 쿠키. 믿을만한 정보원이 흘린 레시피에 의하면, 천사맛 쿠키에 박쥐 액기스와 탄산을 첨가하여 타락시킨 것이라고 한다. 초음파의 효과인지 모르겠으나 남들은 볼수 없는 수많은 쿠키들의 원혼을 볼 수 있으며, 심지어 그것들을 흡수하여 엄청난 능력을 발휘한다.";
            pstr = "images/paint" + cookienum + ".gif";
            astr = "painted by 프리드좋아";
            break;
        }
        case 12: { //바다요정
            nstr = "바다요정맛 쿠키";
            cstr = "images/cookie" + cookienum + ".png";
            sstr = "바다를 벗어나면 얼어버리는 차가운 저주에 걸려있던 바다요정 쿠키. 운명을 거스르려다가 얼어붙어 버렸지만, 쿠키들이 따뜻한 마음을 모아준 덕에 돌아올 수 있었다. 지금은 냉기와 물의 힘으로 쿠키들의 든든한 지원군이 되는 바다요정 쿠키. 쉼 없이 흐르는 머리카락 너머의 눈빛은 아직도 서글프지만, 운명에 맞서려는 생각은 변함없이 강렬하다. 물거품이 되어 사라지지 않도록 손에서 절대 검을 놓는 일이 없기를...";
            pstr = "images/paint" + cookienum + ".gif";
            astr = "painted by 나날";
            break;
        }
        default: {
            nstr = "괴도맛 쿠키";
            cstr = "images/cookie1.png";
            sstr = "「친애하는 쿠키 여러분, 오늘밤 가장 아름답게 빛나는 보석을 훔치겠습니다.」괴도 블루의 예고장이 도착한다면 그 보석은 이미 사라진 거나 다름없다! 서늘한 동굴에서 오래오래 숙성시킨 만큼 그 맛과 유서가 깊은 블루치즈 가문이 몰락하고 긴 시간이 흘러 등장한 괴도맛 쿠키. 멋진 외모와 화려한 퍼포먼스로 모두의 관심을 한껏 받는 이 쿠키는 치명적인 매력으로 자신을 바라보는 이의 마음도 능수능란하게 훔친다.";
            pstr = "images/paint1.gif";
            astr = "painted by 이랑";
            break;
        }
    }

    name.innerText = nstr;
    cookie.setAttribute('src', cstr);
    story.innerText = sstr;
    paint.setAttribute('src', pstr);
    artist.innerText = astr;
}
