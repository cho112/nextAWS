# next기본설정
npm init -y
package.json생성

npm install react react-dom next
next 실행기 
코드를 불러와서 쓴다


"scripts":{
    "dev":"next dev -p 3001",
    "build":"next bulid",
    "start":"next start",
}

next dev
next start

이게 기본세팅

**pages**폴더생성


index.jsx생성

App.jsx
index.jsx reactdom.render



.next 폴더에 

.babelrc 파일생성후
{
    "presets": ["next/babel"],
    "plueins": ["styled/componets"]
}


## pages 디렉토리안에
_App.jsx

## _app.jsx
페이지에 관련된 컴포넌트 상위내용

## _document.jsx
전체 페이지에 HTML 레이아웃(세팅이 진짜 많이들어감)
여기 코드가 진짜 복잡해요
어떻게하냐 복붙하세영
도큐먼트 -> 앱 -> 어바웃 

About index 신경쓰자

http://localhost:3001/board/list
pages/board/list.jsx


##  동적 라우팅
http://localhost:3001/board/view/1

app.get('/board/view/:id')

csr ssr의 차이점

## Server Side Render


## css..

Ant Design <대륙의 실수>

npm install antd
npm install antd @ant-design/icons
