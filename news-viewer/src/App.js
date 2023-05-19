import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

// 1) API를 사용해 가져올 데이터 확인
// const App = () => {
//     // API를 넘겨받은 state 선언
//     const [data, setData] = useState(null);

//     const onClick = async() => {
//         // axios 라이브러리로 apic call
//         try {
//             const response = await axios.get(
//                  // 뉴스 데이터를 가져올 apiKey: https://newsapi.org/register
//                 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=4ffd8bf1e15d46039d25054a026c09bc',
//             );
//             // 응답 data state 저장
//             setData(response.data);
//         } catch (e) {
//             console.log(e)
//         }
//     };

//     return (
//         <div>
//             <div>
//                 <button onClick={() => onClick()}>불러오기</button>
//             </div>
//             {/* JSON 문자열 뿌릴 영역 */}
//             {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//         </div>
//     );
// };

// 2)
const App = () => {
  return <NewsList />;
}

export default App;