# Separation_Hangul_Bot
메신저봇R | 한글을 자음과 모음으로 분리합니다.


[사용된 기능]

1. 한글 정규화 기능
-> .normalize ("NFD")  // 한글을 정규 자모음 체계로 분리합니다.
-> .normalize ("NFC")  // 한글을 정규 자모음 체계로 결합합니다.
-> 참고: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/normalize


[참고]
->분리과정 시 해당 문자열은 배열 형태로 저장됩니다.

큰글씨 봇입니다. 가로로도 가능한데 이건 초성만

가로 큰글씨도 여러개 가능(한줄에 3개)
