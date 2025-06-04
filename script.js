const identities = [
    {
        name: "[ LCB 수감자 ] 이상",
        image: "images/Yi Sang/기본이상.png",
        grade: 1, // 인격의 등급 1이면 1성 2면 2성 3이면 3성 
        isWalpurgis: false // 발푸르 기스 인격인지 아닌지 판별
       
    },
    {
        name: "[ 남부 세븐 협회 6과 ] 이상",
        image: "images/Yi Sang/세븐이상.png",
        grade: 2,
        isWalpurgis: false
       
    },
    {
        name: "[ 남부 디에치 협회 ] 이상",
        image: "images/Yi Sang/디에치상.png",
        grade: 2,
        isWalpurgis: false
       
    },
    {
        name: "[ 어금니 사무소 해결사 ] 이상",
        image: "images/Yi Sang/어금니이상.png",
        grade: 2,
        isWalpurgis: false
        
    },
    {
        name: "[ 피쿼드호 일등 항해사 ] 이상",
        image: "images/Yi Sang/피쿼드상.png",
        grade: 2,
        isWalpurgis: false
        
    },
    {
        name: "[ LCE E.G.O::초롱 ] 이상",
        image: "images/Yi Sang/초롱이상.png",
        grade: 2,
        isWalpurgis: false
    },

    {
        name: "[ 검계 살수 ] 이상",
        image: "images/Yi Sang/검계살수 이상.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "나는 유려하면서도 비범하게 심장을 베는 법을 알고 있소." // 3성은 뽑기에서 뽑을 시 출현대사가 있어야함
    },
    {
        name: "[ 개화 E.G.O 동백 ] 이상",
        image: "images/Yi Sang/동백 이상.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "어서 오시게. 내 마음이… 마음에 드오?"
    },
    {
        name: "[ W사 3등급 정리요원 ] 이상",
        image: "images/Yi Sang/W상.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "출근 중에는 되도록 건드리지 않았으면 하오만… 무엇이오?"
        
    },
    {
        name: "[ 약지 점묘파 스튜던트 ] 이상",
        image: "images/Yi Sang/약상.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "그대께서 새로운 영감을 불러와주시겠는가. 그렇지 않다면…\n특별히 흥미가 생기진 않네만."
       
    },
    {
        name: "[ 로보토미 E.G.O::엄숙한 애도 ] 이상",
        image: "images/Yi Sang/엄숙한애도이상.png",
        grade: 3,
        isWalpurgis: true,
        spawnDialog: "죽음에 관한 그대의 의견은 잘 알았소. 잠시, 충동적인 마음은 접어두고\n좀 더 대화해보지 않겠는가."
        
    },
    {
        name: "[ 남부 리우 협회 3과 ] 이상",
        image: "images/Yi Sang/리우이상.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "여전히도, 참으로 북적스런 공간이 아닐 수 없구료… 하아,\n동료들은 어찌 나를 방 안에 내버려두질 않는 것인지."
    },
    {
        name: "[ LCB 수감자 ] 파우스트",
        image: "images/Faust/기본파우.png",
        grade: 1,
        isWalpurgis: false
    },
    {
        name: "[ W사 2등급 정리 요원 ] 파우스트",
        image: "images/Faust/w파우.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 살아남은 로보토미 직원 ] 파우스트",
        image: "images/Faust/살아남은파우.png",
        grade: 2,
        isWalpurgis: false
        
    },
    {
        name: "[ 남부 츠바이 협회 4과 ] 파우스트",
        image: "images/Faust/츠파우.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 워더링하이츠 버틀러 ] 파우스트",
        image: "images/Faust/버파우.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 쥐는 자 ] 파우스트",
        image: "images/Faust/쥐파우.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "함께하시겠나요…? 추악함을 정화하는 대업을."
    },
    {
        name: "[ 남부 세븐 협회 4과 ] 파우스트",
        image: "images/Faust/셰파우.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "어서 오세요. 주문은 이쪽에서 받겠습니다."
    },
    {
        name: "[ 로보토미 E.G.O::후회 ] 파우스트",
        image: "images/Faust/후파우.png",
        grade: 3,
        isWalpurgis:  true,
        spawnDialog: "T-01-54, 격리 환상체에 대한 작업을 시작합니다."
    },
    {
        name: "[ 검계 살수 ] 파우스트",
        image: "images/Faust/검파우.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "출정전야는 반드시 고요한 법이죠. 마침…달도 가득 차올랐군요."
    },
    {
        name: "[ 멀티크랙 사무소 대표 ] 파우스트",
        image: "images/Faust/멀파우.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "이 계획에는 다수의 결함이 존재합니다만, 파우스트가 이 허점투성이\n 계획을 완전무결하게 만들어드리죠."
    },
    {
        name: "[ LCE E.G.O::홍염살 ] 파우스트",
        image: "images/Faust/홍파우.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "개체의 전투 위협도 다소 높음, 하지만 특정 상황에서 자멸하는 특성을 반영하여\n... 홍염나방 최종 판정, WAW-5."
    },
    {
        name: "[ 흑수 - 묘 필두 ] 파우스트",
        image: "images/Faust/묘파우.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "그 대답으로 충분합니다, 주군."
    },
    {
        name: "[ LCB 수감자 ] 돈키호테",
        image: "images/DON QUIXOTE/기본돈키.png",
        grade: 1,
        isWalpurgis: false
        
    },
    {
        name: "[ 남부 시 협회 5과 부장 ] 돈키호테",
        image: "images/DON QUIXOTE/시돈키.png",
        grade: 2,
        isWalpurgis: false
 
    },
    {
        name: "[ N사 중간 망치 ] 돈키호테",
        image: "images/DON QUIXOTE/N돈.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 로보토미 E.G.O::초롱 ] 돈키호테",
        image: "images/DON QUIXOTE/초돈.png",
        grade: 2,
        isWalpurgis: true

    },
    {
        name: "[ 검계 살수 ] 돈키호테",
        image: "images/DON QUIXOTE/검돈.png",
        grade: 2,
        isWalpurgis: false

    },
    {
        name: "[ W사 3등급 정리 요원 ] 돈키호테",
        image: "images/DON QUIXOTE/w돈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "승객 여러분 안녕하시오!!! 내. 가. 도착하였네!!!"
    },
    {
        name: "[ 남부 섕크 협회 5과 부장 ] 돈키호테",
        image: "images/DON QUIXOTE/섕돈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "자아! 그대가 나와 결투할 자인가?"
 
    },
    {
        name: "[ 중지 작은 아우 ] 돈키호테",
        image: "images/DON QUIXOTE/중돈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "돈키호테요! 중지의 작은 아우이자, 작은 형님의 든든한 수하! 잘 부탁하네!"
  
    },
    {
        name: "[ T사 3등급 징수직 직원 ] 돈키호테",
        image: "images/DON QUIXOTE/T돈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "아~ 실례하겠네. 본인은 T사 3등급 직원으로 시간 징수를 맡고 있는 몸일세.\n왜 왔는지는, 알고 있겠지?"

    },
    {
        name: "[ 라만차랜드 실장 ] 돈키호테",
        image: "images/DON QUIXOTE/실돈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "가족의 관리는 차질이 없을 겁니다. ...당신이 내팽개친 것을 돌보는 것이 저의 몫이었을 테니."

    },
    {
        name: "[ 동부 섕크 협회 3과 ] 돈키호테",
        image: "images/DON QUIXOTE/동섕돈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "음식이 좀 슴슴한가 했더니~ 이런 난장판이라는 조미료를 준비해 둘 줄은 본인이 미처 몰랐군!"

    },
    {
        name: "[ LCB 수감자 ] 료슈",
        image: "images/Ryoshu/기본료슈.png",
        grade: 1,
        isWalpurgis: false

    },
    {
        name: "[ 남부 세븐 협회 6과 ] 료슈",
        image: "images/Ryoshu/세븐료슈.png",
        grade: 2,
        isWalpurgis: false

    },
    {
        name: "[ LCCB 대리 ] 료슈",
        image: "images/Ryoshu/LCCB료슈.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 남부 리우 협회 4과 ] 료슈",
        image: "images/Ryoshu/리우료슈.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 20구 유로지비 ] 료슈",
        image: "images/Ryoshu/유료슈.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 흑운회 와카슈 ] 료슈",
        image: "images/Ryoshu/흑슈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "거슬리는 게 있다면… 난 그림자조차 베어버려."
    },
    {
        name: "[ 료.고.파. 주방장 ] 료슈",
        image: "images/Ryoshu/료료슈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "왔나? 파이 하나 먹고 갈래?"
        
    },
    {
        name: "[ W사 3등급 정리 요원 ] 료슈",
        image: "images/Ryoshu/w료슈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "어이가 없군. 병.솔.이나 하고 있으라니."
    },
    {
        name: "[ 에드가 가문 치프 버틀러 ] 료슈",
        image: "images/Ryoshu/넬슈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "신.정. 그렇게 해서 버틀러라고 말할 수 있겠나? 나와, 내가 보여주지. 신속하고, 정확하게…"
    },
    {
        name: "[ 로보토미 E.G.O::적안 · 참회 ] 료슈",
        image: "images/Ryoshu/로료슈.png",
        grade: 3,
        isWalpurgis: true,
        spawnDialog: "이제야 좀 마주볼 만한 눈빛이 됐군. 그래, 난 네놈의 사냥감이 아니다."
    },
    {
        name: "[ 흑수 - 묘 ] 료슈",
        image: "images/Ryoshu/흑슈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "아직 정해진 시기가 되지 않았으니... 이 고. 담. 정도는 끝까지 태워도 되겠지."
    },
    {
        name: "[ LCB 수감자 ] 뫼르소",
        image: "images/MEURSAULT/기본뫼.png",
        grade: 1,
        isWalpurgis: false

    },
    {
        name: "[ 남부 리우 협회 6과 ] 뫼르소",
        image: "images/MEURSAULT/리우뫼.png",
        grade: 2,
        isWalpurgis: false

    },
    {
        name: "[ 장미스패너 공방 해결사 ] 뫼르소",
        image: "images/MEURSAULT/장미뫼.png",
        grade: 2,
        isWalpurgis: false

    },
    {
        name: "[ 중지 작은 아우 ] 뫼르소",
        image: "images/MEURSAULT/중뫼.png",
        grade: 2,
        isWalpurgis: false

    },
    {
        name: "[ 데드레빗츠 보스 ] 뫼르소",
        image: "images/MEURSAULT/데뫼.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ W사 2등급 정리 요원 ] 뫼르소",
        image: "images/MEURSAULT/w뫼.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "목적지를 말씀해주신다면, 안내해드리겠습니다."
    },
    {
        name: "[ N사 큰 망치 ] 뫼르소",
        image: "images/MEURSAULT/N뫼.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "쥐는 자의 망치는 이곳에 있나니."
    },
    {
        name: "[ R사 제 4무리 코뿔소팀 ] 뫼르소",
        image: "images/MEURSAULT/코뫼.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "준비되었습니다. 제가 앞장서도록 하죠."
    },
    {
        name: "[ 검계 우두머리 ] 뫼르소",
        image: "images/MEURSAULT/검뫼.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "착수하지 않는 겁니까. 음. 돌을 던질 수밖에 없는 형국이군요, 우리는."
    },
    {
        name: "[ 남부 디에치 협회 4과 부장 ] 뫼르소",
        image: "images/MEURSAULT/디뫼.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "음, 이번 야간자율학습은 누구도 빠지지 않았군. 휘발된 지식을 다시 채우는 것도 좋지만\n새로운 지식을 배우는 것도 잊지 말도록."
    },
    {
        name: "[ 서부 섕크 협회 3과 ] 뫼르소",
        image: "images/MEURSAULT/섕뫼.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "금일 인터뷰는 여기까지 받겠습니다. 자세한 것은 서부 섕크 협회 홍보부로."
    },
    {
        name: "[ LCB 수감자 ] 홍루",
        image: "images/Hong Lu/기본홍루.png",
        grade: 1,
        isWalpurgis: false
    },
    {
        name: "[ 흑운회 와카슈 ] 홍루",
        image: "images/Hong Lu/흑루.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 남부 리우 협회 5과 ] 홍루",
        image: "images/Hong Lu/리홍.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ W사 2등급 정리 요원 ] 홍루",
        image: "images/Hong Lu/W홍.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 갈고리 사무소 해결사 ] 홍루",
        image: "images/Hong Lu/갈루.png",
        grade: 2,
        isWalpurgis: true
    },
    {
        name: "[ 송곳니 사냥 사무소 해결사 ] 홍루",
        image: "images/Hong Lu/송루.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 콩콩이파 두목 ] 홍루",
        image: "images/Hong Lu/콩루.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "누구죠, 날 부른 사람이? 감당되겠어요?"
    },
    {
        name: "[ K사 3등급 적출직 직원 ] 홍루",
        image: "images/Hong Lu/K루.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "흠… 눈 앞의 사람들을 전부 적출해버리면 되는 거죠?"
    },
    {
        name: "[ 남부 디에치 협회 4과 ] 홍루",
        image: "images/Hong Lu/디루.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "으흠~ 이건 이렇게 쓰여있나 보네요~"
    },
    {
        name: "[ 20구 유로지비 ] 홍루",
        image: "images/Hong Lu/유로지비홍루.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "여기가 살인 사건 현장이군요? 음~ 이런 아마추어같은 마무리를 해두고 가다니\n어지간히 시간에 쫓겼나 봐요?"
    },
    {
        name: "[ 마침표 사무소 대표 ] 홍루",
        image: "images/Hong Lu/마침표홍루.png",
        grade: 3,
        isWalpurgis: true,
        spawnDialog: "자, 사격 중지. 앞쪽 시야가 확보되는 대로... 적들을 추격할게요."
    },
    {
        name: "[ R사 제 4무리 순록팀 ] 홍루",
        image: "images/Hong Lu/R홍루.png",
        grade: 3,
        isWalpurgis: true,
        spawnDialog: "하... 이번엔 순록이 가장 먼저 투입되는 건가? 토끼와 코뿔소에게 빨리 오지 않으면 뜯을 풀이 없을 거라고 전해주실래요?"
    },
    {
        name: "[ LCB 수감자 ] 히스클리프",
        image: "images/HEATHCLIFF/기본히스.png",
        grade: 1,
        isWalpurgis: false
    },
    {
        name: "[ 남부 시 협회 5과 ] 히스클리프",
        image: "images/HEATHCLIFF/시히스.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ N사 작은 망치 ] 히스클리프",
        image: "images/HEATHCLIFF/N히스.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 남부 세븐 협회 4과 ] 히스클리프",
        image: "images/HEATHCLIFF/세븐히스.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 멀티크랙 사무소 해결사 ] 히스클리프",
        image: "images/HEATHCLIFF/멀티히스.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ R사 제 4무리 토끼팀 ] 히스클리프",
        image: "images/HEATHCLIFF/R히스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "깡총깡총… 뛰면서… 토끼가 왔다. 다 쳐부수러!"
    },
    {
        name: "[ 로보토미 E.G.O 여우비 ] 히스클리프",
        image: "images/HEATHCLIFF/여히스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "…저리 가라. 괜히 와서 들쑤시지 마."
    },
    {
        name: "[ 피쿼드호 작살잡이 ] 히스클리프",
        image: "images/HEATHCLIFF/퀴히스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "밧줄, 꽉 잡아라. …가라앉기 싫으면."
    },
    {
        name: "[ 남부 외우피 협회 3과 ] 히스클리프",
        image: "images/HEATHCLIFF/외히스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "그럼, 지금부터 상호 입회 하의 계약 검토를 진행하겠다.\n헛짓거리는 하지 말자고, 우리."
    },
    {
        name: "[ 와일드헌트 ] 히스클리프",
        image: "images/HEATHCLIFF/와히스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "다시 돌아왔다. 캐서린과...그 찢어 발겨놓을 저택 놈들을 마주하러."
    },
    {
        name: "[ 마침표 사무소 해결사 ] 히스클리프",
        image: "images/HEATHCLIFF/탕히스.png",
        grade: 3,
        isWalpurgis: true,
        spawnDialog: "탄 일발 장전. 탄환은… 로직 아틀리에제 고속분쇄탄. 좋아, 저격 준비 끝."
    },
    {
        name: "[ 흑운회 와카슈 ] 히스클리프",
        image: "images/HEATHCLIFF/흑히스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "조직끼리 모여서 한다는 게 이딴 시시한 회의라니… 대체 결전은 언제 하는 건데?"
    },
    {
        name: "[ LCB 수감자 ] 이스마엘",
        image: "images/ISMAEL/기본이스.png",
        grade: 1,
        isWalpurgis: false
    },
    {
        name: "[ 남부 시 협회 5과 ] 이스마엘",
        image: "images/ISMAEL/시이스.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ LCCB 대리 ] 이스마엘",
        image: "images/ISMAEL/대리이스.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 로보토미 E.G.O 출렁임 ] 이스마엘",
        image: "images/ISMAEL/출렁임이스.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 에드가 가문 버틀러 ] 이스마엘",
        image: "images/ISMAEL/버이스.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ R사 제 4무리 순록팀 ] 이스마엘",
        image: "images/ISMAEL/순록이스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "후, 복잡한 건 생략하죠. 제가 뭘 하면 되나요?"
    },
    {
        name: "[ 남부 리우 협회 4과 ] 이스마엘",
        image: "images/ISMAEL/리우이스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "저를 부르셨나요? 앗 뜨… 네, 무슨 일이죠?"
    },
    {
        name: "[ 어금니 보트 센터 해결사 ] 이스마엘",
        image: "images/ISMAEL/어금니이스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "하, 가까이 오지 마세요. 아직 잡아야 하는 게들이 산더미니까. 그리고… 게 내장 묻을 수도 있어요."
    },
    {
        name: "[ 피쿼드호 선장 ] 이스마엘",
        image: "images/ISMAEL/선장이스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "승선을 환영한다, 신참. 튼튼한 몸뚱아리는 챙겨왔겠지!"
    },
    {
        name: "[ 서부 츠바이 협회 3과 ] 이스마엘",
        image: "images/ISMAEL/츠이스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "떠들지 말고 줄 똑바로 맞춰 서세요. 아침 조회부터 한소리 듣는 건 질색이라서요."
    },
    {
        name: "[ 흑운회 부조장 ] 이스마엘",
        image: "images/ISMAEL/흑이스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "용무가 있다면 조금 이따 오시지요. 칼날을 정돈하는 시간을 방해받고 싶진 않으니."
    },
    {
        name: "[ LCB 수감자 ] 로쟈",
        image: "images/Rodion/기본로쟈.png",
        grade: 1,
        isWalpurgis: false
    },
    {
        name: "[ LCCB 대리 ] 로쟈",
        image: "images/Rodion/대리로쟈.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ N사 중간 망치 ] 로쟈",
        image: "images/Rodion/N로쟈.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 남부 츠바이 협회 5과 ] 로쟈",
        image: "images/Rodion/츠로쟈.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ T사 2등급 징수직 직원 ] 로쟈",
        image: "images/Rodion/T로쟈.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 흑운회 와카슈 ] 로쟈",
        image: "images/Rodion/흑로쟈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "베러 왔어. 사람이든, 흐르는 물이든, 떠다니는 구름이든, 누군가의 마음이든."
    },
    {
        name: "[ 장미스패너 공방 대표 ] 로쟈",
        image: "images/Rodion/장미로쟈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "안녕, 안녕~ 장미스패너 공방 대표, 로쟈야~"
    },
    {
        name: "[ 남부 디에치 협회 4과 ] 로쟈",
        image: "images/Rodion/디로쟈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "쉿…! 이거 먹어. 티는 내지 마. 그리고 그냥 씹어. 감사는 됐어. 훗."
    },
    {
        name: "[ 남부 리우 협회 4과 부장 ] 로쟈",
        image: "images/Rodion/리우로쟈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "역시 세상에서 제일 즐거운 건 쇼핑할 때라니까~ 자! 또 뭐 먹으러 갈래?"
    },
    {
        name: "[ 북부 제뱌찌 협회 3과 ] 로쟈",
        image: "images/Rodion/제로쟈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "후…쉴 만큼 쉬었으니까, 다시 가볼까? 다들, 옷 단단히 여미고~"
    },
    {
        name: "[ 라만차랜드 공주 ] 로쟈",
        image: "images/Rodion/공주로쟈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "라만차랜드의 카니발에 오신 걸 환영합니다.\n…끝없는 퍼레이드를, 함께해주시겠나요?"
    },
        {
        name: "[ 흑수 - 사 ] 로쟈",
        image: "images/Rodion/흑수로쟈.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "시키는 임무도 다 했어... 충의를 다했는데... 어째서... 내가 아니야?"
    },
    {
        name: "[ LCB 수감자 ] 싱클레어",
        image: "images/SINCLAIR/기본싱클.png",
        grade: 1,
        isWalpurgis: false
    },
    {
        name: "[ 남부 츠바이 협회 6과 ] 싱클레어",
        image: "images/SINCLAIR/츠싱클.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 마리아치 보스 ] 싱클레어",
        image: "images/SINCLAIR/마리아치싱클.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 로보토미 E.G.O 홍적 ] 싱클레어",
        image: "images/SINCLAIR/홍적싱클.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 어금니 보트 센터 해결사 ] 싱클레어",
        image: "images/SINCLAIR/어금니싱클.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 서부 츠바이 협회 3과 ] 싱클레어",
        image: "images/SINCLAIR/서부츠바이싱클.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 검계 살수 ] 싱클레어",
        image: "images/SINCLAIR/검싱.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "제가… 무엇을 베면 되는 거죠?"
    },
    {
        name: "[ 쥐어들 자 ] 싱클레어",
        image: "images/SINCLAIR/쥐싱.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "전부, 불태울 거야… 역겨운 내 삶까지도."
    },
    {
        name: "[ 남부 섕크 협회 4과 부장 ] 싱클레어",
        image: "images/SINCLAIR/섕싱.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "어, 앗! 죄송해요! 너, 너무 과했나…?!"
    },
    {
        name: "[ 새벽 사무소 해결사 ] 싱클레어",
        image: "images/SINCLAIR/필싱.png",
        grade: 3,
        isWalpurgis: true,
        spawnDialog: "손이 가끔씩 떨릴 때가 있는데, 겁쟁이처럼 보이지 않았으면\n좋겠네요."
    },
    {
        name: "[ 북부 제뱌찌 협회 3과 ] 싱클레어",
        image: "images/SINCLAIR/제싱.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "이건 이거랑 묶어서 같이 배송하고… 경로 확인한 다음에...\n이, 이번 집화처리는 왜 이렇게 복잡한 거예요?"
    },
    {
        name: "[ LCB 수감자 ] 오티스",
        image: "images/OTIS/기본오티스.png",
        grade: 1,
        isWalpurgis: false
    },
    {
        name: "[ 검계 살수 ] 오티스",
        image: "images/OTIS/검티스.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ G사 부장 ] 오티스",
        image: "images/OTIS/G티스.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 남부 섕크 협회 4과 ] 오티스",
        image: "images/OTIS/섕티스.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 약지 점묘파 스튜던트 ] 오티스",
        image: "images/OTIS/약티스.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 남부 세븐 협회 6과 부장 ] 오티스",
        image: "images/OTIS/세티스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "음, 오티스다. 찾아온 이유라도 있나?"
    },
    {
        name: "[ 어금니 사무소 해결사 ] 오티스",
        image: "images/OTIS/어금니오티스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "아… 무슨 일이지? 머리 울리니까, 조금 천천히 말해줬으면 좋겠어."
    },
    {
        name: "[ 로보토미 E.G.O::마탄 ] 오티스",
        image: "images/OTIS/마탄오티스.png",
        grade: 3,
        isWalpurgis: true,
        spawnDialog: "내 앞에 서지 말도록. 악마가 깃든 탄환의 과녁 중 하나가\n되고 싶은 게 아니라면."
    },
    {
        name: "[ 워더링하이츠 치프 버틀러 ] 오티스",
        image: "images/OTIS/버틀러오티스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "신발의 흙은 제대로 터셨습니까? 부디 당부드리건대, 이 저택에서\n제 허락 없이 가구 하나 함부로 건드시지 않는 편이 좋을 겁니다."
    },
    {
        name: "[ W사 3등급 정리 요원 팀장 ] 오티스",
        image: "images/OTIS/W티스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "열차 정돈을 시작한다. 승객분들이 모두 제자리에\n착석할 수 있도록."
    },
    {
        name: "[ 라만차랜드 이발사 ] 오티스",
        image: "images/OTIS/혈티스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "잘 왔군. 이제 진짜 치장이란 게 무엇인지 직접 보여주도록 하지… \n기대하도록."
    },
    {
        name: "[ 흑수 - 묘 ] 오티스",
        image: "images/OTIS/흑티스.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "토끼에게 붙을 이름은 없다. 나는 그저, 아무것도 아닌\n그림자 속 짐승일 뿐이니."
    },
    {
        name: "[ LCB 수감자 ] 그레고르",
        image: "images/GreGor/기본그렉.png",
        grade: 1,
        isWalpurgis: false

    },
    {
        name: "[ 남부 리우 협회 6과 ] 그레고르",
        image: "images/GreGor/리우그렉.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 료.고.파. 조수 ] 그레고르",
        image: "images/GreGor/요그렉.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 장미스패너 공방 해결사 ] 그레고르",
        image: "images/GreGor/장미그렉.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ 흑운회 부조장 ] 그레고르",
        image: "images/GreGor/흑그렉.png",
        grade: 2,
        isWalpurgis: false
    },
    {
        name: "[ G사 일등대리 ] 그레고르",
        image: "images/GreGor/G그렉.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "신고합니다! 입사를 명 받은 그레고르라고 합니다.\n작전에 함께 투입되어서 영광입니다!"
    },
    {
        name: "[ 남부 츠바이 협회 4과 ] 그레고르",
        image: "images/GreGor/츠그렉.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "아! 아이구, 고객님… 혹시 라이터 한 번만 빌려줄 수 있으시나?"
    },
    {
        name: "[ 쌍갈고리 해적단 부선장 ] 그레고르",
        image: "images/GreGor/갈그렉.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "푸하… 그래, 내가 쌍갈고리 해적단 부선장, 그레고르다.\n사인이라도 해줘?"
    },
    {
        name: "[ 에드가 가문 승계자 ] 그레고르",
        image: "images/GreGor/퐁그렉.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "너도 그놈을 잡으러 온 건가? 아니면 그저… 이 몰락을 구경하려고 온 건가."
    },
    {
        name: "[ 라만차랜드 신부 ] 그레고르",
        image: "images/GreGor/신부그렉.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "내가 그들을 대신하여 용서하더라도… 어버이는\n날 용서치 않으시겠지."
    },
    {
        name: "[ 불주먹 사무소 생존자 ] 그레고르",
        image: "images/GreGor/불그렉.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "이건... 우리 불주먹 사무소의 복장이군."
    },
    {
        name: "[ 흑수 - 사 ] 그레고르",
        image: "images/GreGor/흑수그렉.png",
        grade: 3,
        isWalpurgis: false,
        spawnDialog: "이 정도면 사람 팔이구만 뭐. 난 또 이번에 시술받으면 팔 두 짝 다 뱀으로 변하나 싶었지."
    },
];

const EGO = [ // 추가 예정
    {   
        name: "[ 오감도 ] 이상",
        image: "images/ego/Yi Sang/오감도.png",
        grade: "Zayin", // Teth, He, waw
        isWalpurgis: false 
    },

    {
        name: "[ 소망석 ] 이상",
        image: "images/ego/Yi Sang/오감도.png",
        grade: "Zayin", // Teth, He, waw
        isWalpurgis: false 
    }

];

const identityGrades = [
    { grade: 1, probability: 84 },
    { grade: 2, probability: 13 },
    { grade: 3, probability: 3 },
];

let isWalpurgisMode = false;
let isSpecificMode = false;
let isGuaranteedMode = false;
let selectedIdentity = null;

// DOM 로딩 완료 후 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function() {
    // 수정된 ID들로 이벤트 리스너 등록
    const nInput = document.getElementById("nDrawInput");
    if (nInput) {
        nInput.addEventListener("input", function () {
            if (this.value < 1) alert("최소 1개 이상 뽑아야 합니다.");
            if (this.value > 100) alert("최대 100개까지 뽑을 수 있습니다.");
        });
    }

    // 가챠 타입 선택 버튼들
    document.getElementById("normalDraw").addEventListener("click", () => showDrawOptions(false));
    document.getElementById("walpurgisDraw").addEventListener("click", () => showDrawOptions(true));
    document.getElementById("specificDraw").addEventListener("click", setupSpecificDraw);
    document.getElementById("guaranteedDraw").addEventListener("click", () => {
        isGuaranteedMode = true;
        showDrawOptions(false);
    });

    // 특정 인격 확정 버튼
    document.getElementById("confirmSpecific").addEventListener("click", () => {
        selectedIdentity = document.getElementById("identitySelect").value;
        isSpecificMode = true;
        showDrawOptions(false);
    });

    // 뽑기 실행 버튼들
    document.getElementById("singleDraw").addEventListener("click", () => drawIdentity(1));
    document.getElementById("halfDraw").addEventListener("click", () => drawIdentity(5));
    document.getElementById("multiDraw").addEventListener("click", () => drawIdentity(10));
    document.getElementById("nDraw").addEventListener("click", () => {
        const nInput = document.getElementById("nDrawInput");
        drawIdentity(parseInt(nInput.value) || 1);
    });

    // 모두 열기 버튼
    document.getElementById("revealAll").addEventListener("click", revealAll);
});

function showDrawOptions(isWalpurgis) {
    isWalpurgisMode = isWalpurgis;
    document.getElementById("selectionPanel").style.display = "none";
    document.getElementById("drawOptions").style.display = "block";
    
    // 특정 선택 패널 숨기기
    document.getElementById("specificSelect").style.display = "none";
}

function setupSpecificDraw() {
    let select = document.getElementById("identitySelect");
    select.innerHTML = "";
    identities.forEach(id => {
        let option = document.createElement("option");
        option.value = id.name;
        option.textContent = id.name;
        select.appendChild(option);
    });
    document.getElementById("specificSelect").style.display = "block";
}

function getRandomIdentity() {
    let pool = identities.filter(id => isWalpurgisMode || !id.isWalpurgis);

    let adjustedGrades = identityGrades.map(grade => {
        if (isWalpurgisMode && (grade.grade === 3 || grade.grade === 2)) {
            return { grade: grade.grade, probability: grade.probability * 3 };
        }
        return grade;
    });

    let totalProbability = adjustedGrades.reduce((sum, g) => sum + g.probability, 0);
    let randomNum = Math.random() * totalProbability;
    let cumulativeProbability = 0;

    for (let grade of adjustedGrades) {
        cumulativeProbability += grade.probability;
        if (randomNum < cumulativeProbability) {
            let selectedPool = pool.filter(id => id.grade === grade.grade);
            if (isSpecificMode && selectedIdentity) {
                selectedPool = selectedPool.concat(new Array(1).fill(identities.find(id => id.name === selectedIdentity)));
            }
            return selectedPool[Math.floor(Math.random() * selectedPool.length)];
        }
    }
}

function drawIdentity(times) {
    let results = [];
    for (let i = 0; i < times; i++) {
        let identity = getRandomIdentity();
        results.push(identity);
    }
    
    if (isGuaranteedMode && !results.some(id => id.grade === 3)) {
        let threeStars = identities.filter(id => id.grade === 3);
        results[Math.floor(Math.random() * results.length)] =
            threeStars[Math.floor(Math.random() * threeStars.length)];
    }
    
    displayResults(results);
}

function displayResults(results) {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "";
    let identityCount = {};
    
    results.forEach(identity => {
        identityCount[identity.name] = (identityCount[identity.name] || 0) + 1;
    });

    results.forEach((identity, index) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("identity-wrapper");
        wrapper.setAttribute("data-index", index);

        const img = document.createElement("img");
        img.src = identity.image;
        img.alt = identity.name;
        img.classList.add("identity-img");

        // 등급별 테두리 스타일링
        if (identity.grade === 2) {
            img.style.border = "3px solid #900C3F";
            img.style.boxShadow = "0 0 10px rgba(144, 12, 63, 0.5)";
        } else if (identity.grade === 3) {
            img.style.border = "3px solid #ffe904";
            img.style.boxShadow = "0 0 15px rgba(255, 233, 4, 0.8)";
        }
        
        if (identity.isWalpurgis) {
            img.style.border = "3px solid #36a439";
            img.style.boxShadow = "0 0 15px rgba(54, 164, 57, 0.8)";
        }

        const cover = document.createElement("div");
        cover.classList.add("cover");
        
        // 커버 색상 설정
        if (identity.isWalpurgis) {
            cover.style.background = "linear-gradient(135deg, #36a439, #2d8a30)";
        } else if (identity.grade === 3) {
            cover.style.background = "linear-gradient(135deg, #ffe904, #d4c104)";
        } else if (identity.grade === 2) {
            cover.style.background = "linear-gradient(135deg, #900C3F, #6d0930)";
        } else {
            cover.style.background = "linear-gradient(135deg, #777, #555)";
        }

        // 개별 클릭 이벤트
        cover.addEventListener("click", function(e) {
            e.stopPropagation();
            handleSingleReveal(wrapper, identity);
        });

        // 중복 배지 처리
        if (identityCount[identity.name] > 1) {
            const duplicateBadge = document.createElement("div");
            duplicateBadge.classList.add("duplicate-badge");
            duplicateBadge.textContent = "중복";
            duplicateBadge.style.display = "none";
            wrapper.appendChild(duplicateBadge);
        }

        wrapper.appendChild(img);
        wrapper.appendChild(cover);
        resultContainer.appendChild(wrapper);
    });
    
    document.getElementById("revealAll").style.display = "block";
}

function handleSingleReveal(wrapper, originalIdentity) {
    const cover = wrapper.querySelector(".cover");
    let finalIdentity = originalIdentity;
    
    // 변동 확률 체크 (3성이 아닌 경우에만)
    if (originalIdentity.grade !== 3 && Math.random() < 0.05) {
        // 변동 발생!
        let threeStars;
        if (isWalpurgisMode) {
            threeStars = identities.filter(id => id.grade === 3);
        } else {
            threeStars = identities.filter(id => id.grade === 3 && !id.isWalpurgis);
        }
        finalIdentity = threeStars[Math.floor(Math.random() * threeStars.length)];
        
        // UI 즉시 업데이트
        updateIdentityDisplay(wrapper, finalIdentity);
        
        // 변동 이펙트
        showVariationEffect(() => {
            executeThreeStarAnimation(finalIdentity, () => {
                removeCover(cover);
            });
        });
    } else if (originalIdentity.grade === 3) {
        // 원래 3성인 경우
        executeThreeStarAnimation(finalIdentity, () => {
            removeCover(cover);
        });
    } else {
        // 일반적인 경우 (변동 없음)
        removeCover(cover);
    }
}

function updateIdentityDisplay(wrapper, identity) {
    const img = wrapper.querySelector("img");
    const cover = wrapper.querySelector(".cover");
    
    img.src = identity.image;
    img.alt = identity.name;
    
    // 테두리 업데이트
    if (identity.isWalpurgis) {
        img.style.border = "3px solid #36a439";
        img.style.boxShadow = "0 0 15px rgba(54, 164, 57, 0.8)";
        cover.style.background = "linear-gradient(135deg, #36a439, #2d8a30)";
    } else if (identity.grade === 3) {
        img.style.border = "3px solid #ffe904";
        img.style.boxShadow = "0 0 15px rgba(255, 233, 4, 0.8)";
        cover.style.background = "linear-gradient(135deg, #ffe904, #d4c104)";
    }
}

function showVariationEffect(callback) {
    // 변동 이펙트 - 화면 플래시
    const flash = document.getElementById("screenFlash");
    flash.style.background = "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,233,4,0.7) 50%, transparent 100%)";
    flash.style.opacity = "1";
    flash.style.transform = "scale(1.2)";
    
    // 변동 사운드 효과 (텍스트로 표시)
    showFloatingText("변동!", "variation-text");
    
    setTimeout(() => {
        flash.style.opacity = "0";
        flash.style.transform = "scale(1)";
        if (callback) callback();
    }, 800);
}

function executeThreeStarAnimation(identity, callback) {
    // 전체 화면 진동 효과
    document.body.classList.add("shake-animation");
    
    // 화면 플래시 효과
    const flash = document.getElementById("screenFlash");
    flash.style.background = "radial-gradient(circle, rgba(255,233,4,1) 0%, rgba(255,233,4,0.3) 70%, transparent 100%)";
    flash.style.opacity = "1";
    
    setTimeout(() => {
        flash.style.opacity = "0";
        document.body.classList.remove("shake-animation");
    }, 1000);
    
    // 심볼 애니메이션
    const symbolName = getSymbolName(identity.name);
    if (symbolName) {
        showSymbolAnimation(symbolName, () => {
            showThreeStarDisplay(identity, callback);
        });
    } else {
        showThreeStarDisplay(identity, callback);
    }
    
    // 출현 대사 표시
    if (identity.spawnDialog) {
        showSpawnDialog(identity.spawnDialog);
    }
}

function showSymbolAnimation(symbolName, callback) {
    const overlay = document.createElement("div");
    overlay.classList.add("symbol-overlay");
    
    const symbol = document.createElement("img");
    symbol.src = `images/${symbolName}심볼.png`;
    symbol.classList.add("symbol-animation");
    symbol.onerror = () => {
        // 심볼 이미지가 없는 경우 텍스트로 대체
        symbol.remove();
        const textSymbol = document.createElement("div");
        textSymbol.textContent = symbolName;
        textSymbol.classList.add("symbol-text");
        overlay.appendChild(textSymbol);
    };
    
    overlay.appendChild(symbol);
    document.body.appendChild(overlay);
    
    // 심볼 애니메이션 효과
    setTimeout(() => {
        symbol.style.opacity = "1";
        symbol.style.transform = "scale(1.2) rotate(360deg)";
    }, 100);
    
    setTimeout(() => {
        overlay.remove();
        if (callback) callback();
    }, 1500);
}

function showThreeStarDisplay(identity, callback) {
    const overlay = document.createElement("div");
    overlay.classList.add("three-star-overlay");
    
    const identityImg = document.createElement("img");
    identityImg.src = identity.image;
    identityImg.classList.add("three-star-display");
    
    const nameBox = createIdentityNameBox(identity);
    
    overlay.appendChild(identityImg);
    overlay.appendChild(nameBox);
    document.body.appendChild(overlay);
    
    // 등장 애니메이션
    setTimeout(() => {
        identityImg.style.opacity = "1";
        identityImg.style.transform = "scale(1) translateY(0)";
        nameBox.style.opacity = "1";
        nameBox.style.transform = "translateY(0)";
    }, 100);
    
    // 반짝임 효과
    setTimeout(() => {
        identityImg.classList.add("sparkle-effect");
    }, 500);
    
    // 클릭으로 닫기
    overlay.addEventListener("click", () => {
        overlay.remove();
        if (callback) callback();
    });
    
    // 자동으로 닫기
    setTimeout(() => {
        if (overlay.parentNode) {
            overlay.remove();
        }
        if (callback) callback();
    }, 3000);
}

function showSpawnDialog(dialog) {
    const dialogBox = document.createElement("div");
    dialogBox.classList.add("spawn-dialog");
    dialogBox.innerHTML = `
        <div class="dialog-content">
            <p>"${dialog}"</p>
        </div>
    `;
    
    document.body.appendChild(dialogBox);
    
    setTimeout(() => {
        dialogBox.style.opacity = "1";
        dialogBox.style.transform = "translateY(0)";
    }, 100);
    
    setTimeout(() => {
        dialogBox.style.opacity = "0";
        dialogBox.style.transform = "translateY(-20px)";
        setTimeout(() => dialogBox.remove(), 500);
    }, 2500);
}

function showFloatingText(text, className) {
    const floatingText = document.createElement("div");
    floatingText.textContent = text;
    floatingText.classList.add("floating-text", className);
    
    document.body.appendChild(floatingText);
    
    setTimeout(() => {
        floatingText.style.opacity = "1";
        floatingText.style.transform = "translateY(-50px) scale(1.2)";
    }, 100);
    
    setTimeout(() => {
        floatingText.style.opacity = "0";
        setTimeout(() => floatingText.remove(), 500);
    }, 1500);
}

function removeCover(cover) {
    cover.style.opacity = "0";
    cover.style.transform = "scale(0.8)";
    setTimeout(() => {
        if (cover.parentNode) {
            cover.remove();
        }
    }, 300);
}

function getSymbolName(identityName) {
    const inmateNames = ["이상", "로쟈", "그레고르", "파우스트", "싱클레어", "돈키호테", "료슈", "뫼르소", "홍루", "오티스", "이스마엘", "히스클리프"];
    return inmateNames.find(name => identityName.includes(name));
}

function createIdentityNameBox(identity) {
    const nameBox = document.createElement("div");
    nameBox.classList.add("identity-name-box");
    
    const rankImg = document.createElement("img");
    rankImg.src = "images/등급이미지.png";
    rankImg.classList.add("identity-rank-img");
    rankImg.onerror = () => {
        // 등급 이미지가 없는 경우 텍스트로 대체
        rankImg.style.display = "none";
        const rankText = document.createElement("div");
        rankText.textContent = "★★★";
        rankText.style.color = "#ffe904";
        rankText.style.fontSize = "20px";
        nameBox.appendChild(rankText);
    };
    
    const textContainer = document.createElement("div");
    textContainer.classList.add("identity-text");
    
    const { title, inmate } = splitIdentityName(identity.name);
    
    const nameText = document.createElement("div");
    nameText.textContent = title;
    nameText.classList.add("identity-title");
    
    const inmateText = document.createElement("div");
    inmateText.textContent = inmate;
    inmateText.classList.add("inmate-name");
    
    const inmateColor = getInmateColor(inmate);
    inmateText.style.backgroundColor = inmateColor;
    
    textContainer.appendChild(nameText);
    textContainer.appendChild(inmateText);
    nameBox.appendChild(rankImg);
    nameBox.appendChild(textContainer);
    
    return nameBox;
}

function splitIdentityName(fullName) {
    const inmateNames = ["이상", "로쟈", "그레고르", "파우스트", "싱클레어", "돈키호테", "료슈", "뫼르소", "홍루", "오티스", "이스마엘", "히스클리프"];
    let inmate = inmateNames.find(name => fullName.includes(name)) || "알 수 없음";
    let title = fullName.replace(inmate, "").replace(/\[|\]/g, "").replace(/\s+/g, " ").trim();
    return { title, inmate };
}

function getInmateColor(inmate) {
    const inmateColors = {
        "히스클리프": "#4e3076",
        "오티스": "#8b9c15",
        "싱클레어": "#325339",
        "료슈": "#cf0000",
        "뫼르소": "#293b95",
        "홍루": "#5bffde",
        "돈키호테": "#ffef23",
        "파우스트": "#ffb1b4",
        "이스마엘": "#ff9500",
        "그레고르": "#69350b",
        "로쟈": "#820000",
        "이상": "#d4e1e8"
    };
    return inmateColors[inmate] || "#FFFFFF";
}

function revealAll() {
    const covers = document.querySelectorAll(".cover");
    let threeStarItems = [];
    let otherItems = [];
    
    covers.forEach(cover => {
        const wrapper = cover.closest(".identity-wrapper");
        const identityName = wrapper.querySelector("img").alt;
        const identity = identities.find(id => id.name === identityName);
        
        if (identity) {
            if (identity.grade === 3) {
                threeStarItems.push({ wrapper, identity, cover });
            } else {
                otherItems.push({ wrapper, identity, cover });
            }
        }
    });
    
    processOtherItems(otherItems, 0, () => {
        processThreeStarItems(threeStarItems, 0);
    });
}

function processOtherItems(items, index, callback) {
    if (index >= items.length) {
        if (callback) callback();
        return;
    }
    
    const { wrapper, identity, cover } = items[index];
    
    // 변동 확률 체크
    if (Math.random() < 0.05) {
        let threeStars;
        if (isWalpurgisMode) {
            threeStars = identities.filter(id => id.grade === 3);
        } else {
            threeStars = identities.filter(id => id.grade === 3 && !id.isWalpurgis);
        }
        const randomThreeStar = threeStars[Math.floor(Math.random() * threeStars.length)];
        
        updateIdentityDisplay(wrapper, randomThreeStar);
        
        // 변동 이펙트 로직
        showVariationEffect(() => {
            executeThreeStarAnimation(randomThreeStar, () => {
                removeCover(cover);
                setTimeout(() => {
                    processOtherItems(items, index + 1, callback);
                }, 500);
            });
        });
    } else {
        removeCover(cover);
        processOtherItems(items, index + 1, callback);
    }
}

function processThreeStarItems(items, index) {
    if (index >= items.length) {
        return;
    }
    
    const { wrapper, identity, cover } = items[index];
    
    // 3성 애니메이션 실행
    executeThreeStarAnimation(identity, () => {
        removeCover(cover);
        setTimeout(() => {
            processThreeStarItems(items, index + 1);
        }, 500);
    });
}
