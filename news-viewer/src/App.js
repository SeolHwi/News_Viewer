import React, { useCallback, useState } from 'react';
import axios from 'axios';
import Categories from './components/Categories';
import NewsList from './components/NewsList';

// 1) API를 사용해 가져올 데이터 확인
// const App = () => {
//     const [ apiKey, setApiKey ] = useState('4ffd8bf1e15d46039d25054a026c09bc');
//     // API를 넘겨받은 state 선언
//     const [data, setData] = useState(null);

//     const onClick = async() => {
//         // axios 라이브러리로 apic call
//         try {
//             const response = await axios.get(
//                  // 뉴스 데이터를 가져올 apiKey: https://newsapi.org/register
//                 `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`,
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
  // 기본 카테고리 state 선언
  const [category, setCategory] = useState('');
  // 콜백으로 사용 할 카테고리 함수
  const onSelect = useCallback(Category => setCategory(Category), []);

  return (
    <>
      {/* props로 카테고리 state와 함수를 넘겨줌 */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;