# News_Viewer
뉴스 뷰어 만들기

https://sycdev.tistory.com/m/entry/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%95%A4%EB%93%9C-REACT-%EB%89%B4%EC%8A%A4-%EB%B7%B0%EC%96%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0-1


## 오류 및 해결 방법
REACT 뉴스 뷰어 만들기 [4]

- yarn-add styled-components → npm install styled-components
- [https://www.npmjs.com/package/styled-components?activeTab=versions](https://www.npmjs.com/package/styled-components?activeTab=versions)
    - 에러 내용
        
        ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8e085bff-4720-4484-9d21-7f6a47dbb278/Untitled.png)
        
    - 해결 방법
        - styled-components version6 이후 문제 발생
        - npm install styled-components@5.3.10 명령어 사용으로 6 버전 대신 5.3.10 버전 사용
    - 참고 사이트
        - [https://luminous24.tistory.com/269](https://luminous24.tistory.com/269)
