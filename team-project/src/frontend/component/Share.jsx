import React from 'react';
function Share(props) {
    const shareKakao = () => {
        window.Kakao.Share.createDefaultButton({
            container: '#kakaotalk-sharing-btn',
            objectType: 'feed',
            content: {
                title: ':검은색_하트:',
                description: '당신에게 어울리는 귀염둥이를 가져가세요!',
                imageUrl:
                    'https://postfiles.pstatic.net/MjAyMzA3MTRfNzQg/MDAxNjg5MzIxNTYwMDc0.2oDMBQU53aK8EPWV0aXYSDCCI4i06BWIRqu1wMAFpREg.Uymv34HmXTf6Jip7W2Ytv0E9XaoP6jEz-jhStD2-IWcg.JPEG.dozzzini/logo.jpg?type=w966',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com', //배포사이트로 변경
                },
            },
            buttons: [
                {
                    title: '웹으로 이동',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
                    },
                },
            ],
        });
    };
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 30px 10px 30px',
                fontSize: '25px',
                fontWeight: '600',
                margin: '0 auto',
                fontFamily: 'UhBeemysen',
                color: '#fffaf0',
                borderRadius: '10px',
            }}
            onClick={() => shareKakao()}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '20px',
                }}
            >
                SNS 공유하기
            </div>
            <a id="kakaotalk-sharing-btn" href="javascript:;">
                <img
                    style={{ width: '30px', height: '30px' }}
                    src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
                    alt="카카오톡 공유 보내기 버튼"
                />
            </a>
        </div>
    );
}
export default Share;

// width: 500px;
// height: 700px;

// font-weight: 600;
// text-align: center;
// justify-content: center;
// font-family: 'UhBeemysen';
// padding: 30px 30px 20px 30px;
// background-color: #f5e9d5;
// border-radius: 10px;
// margin: 0 auto 50px auto;
// @media screen and (max-width: 768px) {
//     width: 400px;
// }
// word-break: keep-all;
