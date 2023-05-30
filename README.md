# News_Viewer
뉴스 뷰어 만들기

https://sycdev.tistory.com/m/entry/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%95%A4%EB%93%9C-REACT-%EB%89%B4%EC%8A%A4-%EB%B7%B0%EC%96%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0-1


## 오류 및 해결 방법
### REACT 뉴스 뷰어 만들기 [4]

- yarn-add styled-components → npm install styled-components
- [https://www.npmjs.com/package/styled-components?activeTab=versions](https://www.npmjs.com/package/styled-components?activeTab=versions)
    - 에러 내용
        
        ![04 에러](Error_img/04_Error.png)
        
    - 해결 방법
        - styled-components version6 이후 문제 발생
        - npm install styled-components@5.3.10 명령어 사용으로 6 버전 대신 5.3.10 버전 사용
    - 참고 사이트
        - [https://luminous24.tistory.com/269](https://luminous24.tistory.com/269)- 
- NewsList.js
    - line 12 오타
        - wdith: 100% → width: 100%


### React 뉴스 뷰어 만들기 [5]
- 한국 뉴스 데이터를 받아올 시
아래 사진과 같이 사진과 같이 뉴스 사진과 요약 내용이 출력되지 않고 제목만 출력
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a23b36c-5e86-4cc8-a822-0607e8a81558/Untitled.png)
    
- 미국 뉴스 데이터를 받아올 시
img 태그의 src 부분에 urlToImage와 "[https://picsum.photos/200](https://picsum.photos/200)" 모두 각각 정상 작동
- 원인
    - 뉴스 사진: NewsItem.js
    
    
    위 사진의 문제가 발생한 NewsItem
    
    ![05 에러 01](Error_img/05_Error_01.png)
    
    수정 후의 NewsItem
    
    ![05 에러 02](Error_img/05_Error_02.png)
    
- 뉴스 요약본
    - 한국 뉴스 데이터를 받아올 때 요약 내용(description)의 데이터 반환 값이 null
