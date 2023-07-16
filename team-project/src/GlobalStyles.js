import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import BackImage from '../src/frontend/zzinresultimage/background.jpeg';
const GlobalStyles = createGlobalStyle`
${reset}
	// 아래에 전역 스타일을 추가
	a {
        text-decoration : none;
        color : inherit;
  }
  * {
    box-sizing : border-box;
    padding : 0;
    margin : 0;
  }
	body {
	        font-family : apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell , 'Helvetica Neue', sans-serif;
	        font-size : 15px;
	        
	      background-image: ${BackImage};
       
	        overflow-x : hidden;
	}
`;
export default GlobalStyles;
