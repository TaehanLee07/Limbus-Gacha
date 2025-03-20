const identities = [
    {
        name: "[ LCB 수감자 ] 이상",
        image: "images/Yi Sang/기본이상.png",
        grade: 1, // 인격의 등급 1이면 1성 2면 2성 3이면 3성 
        isWalpurgis: false
       
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
        isWalpurgis: false
    },
    {
        name: "[ 개화 E.G.O 동백 ] 이상",
        image: "images/Yi Sang/동백 이상.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ W사 3등급 정리요원 ] 이상",
        image: "images/Yi Sang/W상.png",
        grade: 3,
        isWalpurgis: false
        
    },
    {
        name: "[ 약지 점묘파 스튜던트 ] 이상",
        image: "images/Yi Sang/약상.png",
        grade: 3,
        isWalpurgis: false
       
    },
    {
        name: "[ 로보토미 E.G.O::엄숙한 애도 ] 이상",
        image: "images/Yi Sang/엄숙한애도이상.png",
        grade: 3,
        isWalpurgis: true
        
    },
    {
        name: "[ 남부 리우 협회 3과 ] 이상",
        image: "images/Yi Sang/리우이상.png",
        grade: 3,
        isWalpurgis: false
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
        isWalpurgis: false
    },
    {
        name: "[ 남부 세븐 협회 4과 ] 파우스트",
        image: "images/Faust/셰파우.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 로보토미 E.G.O::후회 ] 파우스트",
        image: "images/Faust/후파우.png",
        grade: 3,
        isWalpurgis:  true,
    },
    {
        name: "[ 검계 살수 ] 파우스트",
        image: "images/Faust/검파우.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 멀티크랙 사무소 대표 ] 파우스트",
        image: "images/Faust/멀파우.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ LCE E.G.O::홍염살 ] 파우스트",
        image: "images/Faust/홍파우.png",
        grade: 3,
        isWalpurgis: false
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
        isWalpurgis: false
    },
    {
        name: "[ 남부 섕크 협회 5과 부장 ] 돈키호테",
        image: "images/DON QUIXOTE/섕돈.png",
        grade: 3,
        isWalpurgis: false
 
    },
    {
        name: "[ 중지 작은 아우 ] 돈키호테",
        image: "images/DON QUIXOTE/중돈.png",
        grade: 3,
        isWalpurgis: false
  
    },
    {
        name: "[ T사 3등급 징수직 직원 ] 돈키호테",
        image: "images/DON QUIXOTE/T돈.png",
        grade: 3,
        isWalpurgis: false

    },
    {
        name: "[ 라만차랜드 실장 ] 돈키호테",
        image: "images/DON QUIXOTE/실돈.png",
        grade: 3,
        isWalpurgis: false

    },
    {
        name: "[ 동부 섕크 협회 3과 ] 돈키호테",
        image: "images/DON QUIXOTE/동섕돈.png",
        grade: 3,
        isWalpurgis: false

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
        isWalpurgis: false
    },
    {
        name: "[ 료.고.파. 주방장 ] 료슈",
        image: "images/Ryoshu/료료슈.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ W사 3등급 정리 요원 ] 료슈",
        image: "images/Ryoshu/w료슈.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 에드가 가문 치프 버틀러 ] 료슈",
        image: "images/Ryoshu/넬슈.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 로보토미 E.G.O::적안 · 참회 ] 료슈",
        image: "images/Ryoshu/로료슈.png",
        grade: 3,
        isWalpurgis: true
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
        isWalpurgis: false
    },
    {
        name: "[ N사 큰 망치 ] 뫼르소",
        image: "images/MEURSAULT/N뫼.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ R사 제 4무리 코뿔소팀 ] 뫼르소",
        image: "images/MEURSAULT/코뫼.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 검계 우두머리 ] 뫼르소",
        image: "images/MEURSAULT/검뫼.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 남부 디에치 협회 4과 부장 ] 뫼르소",
        image: "images/MEURSAULT/디뫼.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 서부 섕크 협회 3과 ] 뫼르소",
        image: "images/MEURSAULT/섕뫼.png",
        grade: 3,
        isWalpurgis: false
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
        isWalpurgis: false
    },
    {
        name: "[ K사 3등급 적출직 직원 ] 홍루",
        image: "images/Hong Lu/K루.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 남부 디에치 협회 4과 ] 홍루",
        image: "images/Hong Lu/디루.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 20구 유로지비 ] 홍루",
        image: "images/Hong Lu/유로지비홍루.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 마침표 사무소 대표 ] 홍루",
        image: "images/Hong Lu/마침표홍루.png",
        grade: 3,
        isWalpurgis: true
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
        isWalpurgis: false
    },
    {
        name: "[ 로보토미 E.G.O 여우비 ] 히스클리프",
        image: "images/HEATHCLIFF/여히스.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 피쿼드호 작살잡이 ] 히스클리프",
        image: "images/HEATHCLIFF/퀴히스.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 남부 외우피 협회 3과 ] 히스클리프",
        image: "images/HEATHCLIFF/외히스.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 와일드헌트 ] 히스클리프",
        image: "images/HEATHCLIFF/와히스.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 마침표 사무소 해결사 ] 히스클리프",
        image: "images/HEATHCLIFF/탕히스.png",
        grade: 3,
        isWalpurgis: true
    },
    {
        name: "[ 흑운회 와카슈 ] 히스클리프",
        image: "images/HEATHCLIFF/흑히스.png",
        grade: 3,
        isWalpurgis: false
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
        isWalpurgis: false
    },
    {
        name: "[ 남부 리우 협회 4과 ] 이스마엘",
        image: "images/ISMAEL/리우이스.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 어금니 보트 센터 해결사 ] 이스마엘",
        image: "images/ISMAEL/어금니이스.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 피쿼드호 선장 ] 이스마엘",
        image: "images/ISMAEL/선장이스.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 서부 츠바이 협회 3과 ] 이스마엘",
        image: "images/ISMAEL/츠이스.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 흑운회 부조장 ] 이스마엘",
        image: "images/ISMAEL/흑이스.png",
        grade: 3,
        isWalpurgis: false
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
        isWalpurgis: false
    },
    {
        name: "[ 장미스패너 공방 대표 ] 로쟈",
        image: "images/Rodion/장미로쟈.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 남부 디에치 협회 4과 ] 로쟈",
        image: "images/Rodion/디로쟈.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 남부 리우 협회 4과 부장 ] 로쟈",
        image: "images/Rodion/리우로쟈.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 북부 제뱌찌 협회 3과 ] 로쟈",
        image: "images/Rodion/제로쟈.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 라만차랜드 공주 ] 로쟈",
        image: "images/Rodion/공주로쟈.png",
        grade: 3,
        isWalpurgis: false
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
        isWalpurgis: false
    },
    {
        name: "[ 쥐어들 자 ] 싱클레어",
        image: "images/SINCLAIR/쥐싱.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 남부 섕크 협회 4과 부장 ] 싱클레어",
        image: "images/SINCLAIR/섕싱.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 새벽 사무소 해결사 ] 싱클레어",
        image: "images/SINCLAIR/필싱.png",
        grade: 3,
        isWalpurgis: true
    },
    {
        name: "[ 북부 제뱌찌 협회 3과 ] 싱클레어",
        image: "images/SINCLAIR/제싱.png",
        grade: 3,
        isWalpurgis: false
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
        isWalpurgis: false
    },
    {
        name: "[ 어금니 사무소 해결사 ] 오티스",
        image: "images/OTIS/어금니오티스.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 로보토미 E.G.O::마탄 ] 오티스",
        image: "images/OTIS/마탄오티스.png",
        grade: 3,
        isWalpurgis: true
    },
    {
        name: "[ 워더링하이츠 치프 버틀러 ] 오티스",
        image: "images/OTIS/버틀러오티스.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ W사 3등급 정리 요원 팀장 ] 오티스",
        image: "images/OTIS/W티스.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 라만차랜드 이발사 ] 오티스",
        image: "images/OTIS/혈티스.png",
        grade: 3,
        isWalpurgis: false
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
        isWalpurgis: false
    },
    {
        name: "[ 남부 츠바이 협회 4과 ] 그레고르",
        image: "images/GreGor/츠그렉.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 쌍갈고리 해적단 부선장 ] 그레고르",
        image: "images/GreGor/갈그렉.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 에드가 가문 승계자 ] 그레고르",
        image: "images/GreGor/퐁그렉.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 라만차랜드 신부 ] 그레고르",
        image: "images/GreGor/신부그렉.png",
        grade: 3,
        isWalpurgis: false
    },
    {
        name: "[ 불주먹 사무소 생존자 ] 그레고르",
        image: "images/GreGor/불그렉.png",
        grade: 3,
        isWalpurgis: false
    },
];

const identityGrades = [
    { grade: 1, probability: 84 },
    { grade: 2, probability: 13 },
    { grade: 3, probability: 3 }
];

let isWalpurgisMode = false;
let isSpecificMode = false;
let isGuaranteedMode = false;
let selectedIdentity = null;

document.getElementById("normalDraw").addEventListener("click", () => showDrawOptions(false));
document.getElementById("walpurgisDraw").addEventListener("click", () => showDrawOptions(true));
document.getElementById("specificDraw").addEventListener("click", setupSpecificDraw);
document.getElementById("guaranteedDraw").addEventListener("click", () => {
    isGuaranteedMode = true;
    showDrawOptions(false);
});
document.getElementById("confirmSpecific").addEventListener("click", () => {
    selectedIdentity = document.getElementById("identitySelect").value;
    isSpecificMode = true;
    showDrawOptions(false);
});
document.getElementById("singleDraw").addEventListener("click", () => drawIdentity(1));
document.getElementById("halfDraw").addEventListener("click", () => drawIdentity(5));
document.getElementById("multiDraw").addEventListener("click", () => drawIdentity(10));
document.getElementById("revealAll").addEventListener("click", revealAll);

function showDrawOptions(isWalpurgis) {
    isWalpurgisMode = isWalpurgis;
    document.querySelector(".selection").style.display = "none";
    document.querySelector(".draw-options").style.display = "block";
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
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
    let identityCount = {};
    results.forEach(identity => {
        identityCount[identity.name] = (identityCount[identity.name] || 0) + 1;
    });

    results.forEach(identity => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("identity-wrapper");

        const img = document.createElement("img");
        img.src = identity.image;
        img.alt = identity.name;
        img.classList.add("identity-img");

        if (identity.grade === 2) {
            img.style.border = "5px solid #900C3F";
            img.style.boxShadow = "0 0 10px #900C3F";
        } else if (identity.grade === 3) {
            img.style.border = "5px solid #ffe904";
            img.style.boxShadow = "0 0 15px #ffe904, 0 0 25px #ffe904";
        }
        if (identity.isWalpurgis) {
            img.style.border = "5px solid #36a439";
            img.style.boxShadow = "0 0 15px #36a439, 0 0 25px #36a439";
        }

        const cover = document.createElement("div");
        cover.classList.add("cover");
        // 커버 색상은 기본적으로 해당 등급에 맞게 지정
        if (identity.grade === 1) cover.style.backgroundColor = "gray";
        if (identity.grade === 2) cover.style.backgroundColor = "#900C3F";
        if (identity.grade === 3) cover.style.backgroundColor = "#ffe904";
        if (identity.isWalpurgis) cover.style.backgroundColor = "#36a439";

        // 개별 클릭 시: 1성/2성은 5% 확률로 변동 발생 (즉시 UI 업데이트)
        cover.addEventListener("click", function () {
            if (identity.grade === 3) {
                // 원래 3성이면 그대로 연출 실행
                showThreeStarAnimation(identity, () => {
                    cover.style.opacity = 0;
                    setTimeout(() => cover.remove(), 500);
                });
            } else {
                if (Math.random() < 0.05) {
                    // 변동 발생 시, 일반 뽑기 모드에서는 발푸르기스 인격 제외
                    let threeStars;
                    if (isWalpurgisMode) {
                        threeStars = identities.filter(id => id.grade === 3);
                    } else {
                        threeStars = identities.filter(id => id.grade === 3 && !id.isWalpurgis);
                    }
                    const randomThreeStar = threeStars[Math.floor(Math.random() * threeStars.length)];
                    // UI 즉시 업데이트: 이미지, alt, 테두리 등 3성 결과로 교체
                    const wrapper = cover.closest(".identity-wrapper");
                    const img = wrapper.querySelector("img");
                    img.src = randomThreeStar.image;
                    img.alt = randomThreeStar.name;
                    img.style.border = "5px solid #ffe904";
                    img.style.boxShadow = "0 0 15px #ffe904, 0 0 25px #ffe904";
                    // 변동이 일어난 자리는 커버 색도 3성 연출 전 색(#ffe904)으로 변경
                    cover.style.backgroundColor = "#ffe904";
                    // 3성 연출 실행
                    showThreeStarAnimation(randomThreeStar, () => {
                        cover.style.opacity = 0;
                        setTimeout(() => cover.remove(), 500);
                    });
                } else {
                    cover.style.opacity = 0;
                    setTimeout(() => cover.remove(), 500);
                }
            }
        });

        // 중복된 인격이 여러 번 나오면, 중복 배지는 따로 처리 (여기서는 숨김 처리)
        if (identityCount[identity.name] > 1) {
            const duplicateBadge = document.createElement("img");
            duplicateBadge.src = "images/duplicate.png";
            duplicateBadge.classList.add("duplicate-badge");
            duplicateBadge.style.display = "none";
            wrapper.appendChild(duplicateBadge);
        }
        wrapper.appendChild(img);
        wrapper.appendChild(cover);
        resultContainer.appendChild(wrapper);
    });
    document.getElementById("revealAll").style.display = "block";
}

/* --- 3성 연출 관련 함수 --- */
function showThreeStarAnimation(identity, callback) {
    const overlay = document.createElement("div");
    overlay.classList.add("three-star-overlay");

    const symbolName = getSymbolName(identity.name);
    if (symbolName) {
        const symbol = document.createElement("img");
        symbol.src = `images/${symbolName}심볼.png`;
        symbol.classList.add("three-star-symbol");
        overlay.appendChild(symbol);
        setTimeout(() => {
            symbol.style.opacity = 1;
            symbol.style.transform = "scale(1.2)";
            setTimeout(() => {
                overlay.removeChild(symbol);
                showIdentityImage(identity, overlay, callback);
            }, 1500);
        }, 500);
    } else {
        showIdentityImage(identity, overlay, callback);
    }
    document.body.appendChild(overlay);
    document.body.classList.add("shake");
    setTimeout(() => {
        document.body.classList.remove("shake");
    }, 1000);
}

function showIdentityImage(identity, overlay, callback) {
    const identityImg = document.createElement("img");
    identityImg.src = identity.image;
    identityImg.classList.add("three-star-display");
    overlay.appendChild(identityImg);

    const nameBox = createIdentityNameBox(identity);
    overlay.appendChild(nameBox);

    identityImg.onload = () => {
        const rect = identityImg.getBoundingClientRect();
        nameBox.style.left = `${rect.left + rect.width - nameBox.offsetWidth - 10}px`;
        nameBox.style.top = `${rect.top + rect.height - nameBox.offsetHeight - 10}px`;
    };

    setTimeout(() => {
        identityImg.classList.add("flash-effect");
    }, 300);

    document.body.appendChild(overlay);
    // 2초 후 연출 종료 후 callback 호출
    setTimeout(() => {
        if (overlay.parentNode) {
            overlay.remove();
        }
        if (callback) callback();
    }, 2000);
}

function getSymbolName(identityName) {
    const inmateNames = ["이상", "로쟈", "그레고르", "파우스트", "싱클레어", "돈키호테", "료슈", "뫼르소", "홍루", "오티스", "이스마엘", "히스클리프"];
    return inmateNames.find(name => identityName.includes(name));
}

function splitIdentityName(fullName) {
    const inmateNames = ["이상", "로쟈", "그레고르", "파우스트", "싱클레어", "돈키호테", "료슈", "뫼르소", "홍루", "오티스", "이스마엘", "히스클리프"];
    let inmate = inmateNames.find(name => fullName.includes(name)) || "알 수 없음";
    let title = fullName.replace(inmate, "").trim();
    return { title, inmate };
}

function createIdentityNameBox(identity) {
    const nameBox = document.createElement("div");
    nameBox.classList.add("identity-name-box");

    const rankImg = document.createElement("img");
    rankImg.src = "images/등급이미지.png";
    rankImg.classList.add("identity-rank-img");

    const textContainer = document.createElement("div");
    textContainer.classList.add("identity-text");

    const nameText = document.createElement("div");
    const nameParts = identity.name.split(" ");
    const inmateName = nameParts.pop();
    const title = nameParts.join(" ");
    nameText.textContent = title;

    const inmateText = document.createElement("div");
    inmateText.textContent = inmateName;
    inmateText.classList.add("inmate-name");

    const { title: fullTitle, inmate } = splitIdentityName(identity.name);
    const inmateColor = getInmateColor(inmate);
    inmateText.style.setProperty("background-color", inmateColor, "important");

    textContainer.appendChild(nameText);
    textContainer.appendChild(inmateText);
    nameBox.appendChild(rankImg);
    nameBox.appendChild(textContainer);

    return nameBox;
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
    let threeStarItems = [];
    let otherItems = [];

    document.querySelectorAll(".cover").forEach(cover => {
        const wrapper = cover.closest(".identity-wrapper");
        const identityName = wrapper.querySelector("img").alt;
        const identity = identities.find(id => id.name === identityName);
        if (identity) {
            if (identity.grade === 3) {
                threeStarItems.push({ cover, identity });
            } else {
                otherItems.push({ cover, identity });
            }
        }
    });

    // 3성 아이템은 재귀적으로 차례대로 연출 (중복된 경우에도 각 자리는 한 번씩 처리)
    function processThreeStars(index) {
        if (index >= threeStarItems.length) {
            processOthers(0);
            return;
        }
        const { cover, identity } = threeStarItems[index];
        showThreeStarAnimation(identity, () => {
            cover.style.opacity = 0;
            setTimeout(() => cover.remove(), 500);
            processThreeStars(index + 1);
        });
    }

    // 1성/2성 아이템은 5% 확률로 변동 → UI 업데이트 후 3성 연출, 아니면 그냥 커버 제거
    function processOthers(index) {
        if (index >= otherItems.length) {
            document.querySelectorAll(".cover").forEach(cover => {
                cover.style.opacity = 0;
                setTimeout(() => cover.remove(), 500);
            });
            return;
        }
        const { cover, identity } = otherItems[index];
        if (Math.random() < 0.05) {
            let threeStars;
            if (isWalpurgisMode) {
                threeStars = identities.filter(id => id.grade === 3);
            } else {
                threeStars = identities.filter(id => id.grade === 3 && !id.isWalpurgis);
            }
            const randomThreeStar = threeStars[Math.floor(Math.random() * threeStars.length)];
            // 즉시 UI 업데이트: 해당 자리 이미지를 변동된 3성 인격으로 교체하고, 커버 색상을 3성 연출 전 색으로 변경
            const wrapper = cover.closest(".identity-wrapper");
            const img = wrapper.querySelector("img");
            img.src = randomThreeStar.image;
            img.alt = randomThreeStar.name;
            img.style.border = "5px solid #ffe904";
            img.style.boxShadow = "0 0 15px #ffe904, 0 0 25px #ffe904";
            cover.style.backgroundColor = "#ffe904";
            showThreeStarAnimation(randomThreeStar, () => {
                cover.style.opacity = 0;
                setTimeout(() => cover.remove(), 500);
                processOthers(index + 1);
            });
        } else {
            cover.style.opacity = 0;
            setTimeout(() => cover.remove(), 500);
            processOthers(index + 1);
        }
    }

    processThreeStars(0);
}
