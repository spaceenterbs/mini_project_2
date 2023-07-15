import React from "react";
function Share(props) {
  const shareKakao = () => {
    window.Kakao.Share.createDefaultButton({
      container: "#kakaotalk-sharing-btn",
      objectType: "feed",
      content: {
        title: ":검은색_하트:",
        description: "당신에게 어울리는 귀염둥이를 가져가세요!",
        imageUrl:
          "https://postfiles.pstatic.net/MjAyMzA3MTRfNzQg/MDAxNjg5MzIxNTYwMDc0.2oDMBQU53aK8EPWV0aXYSDCCI4i06BWIRqu1wMAFpREg.Uymv34HmXTf6Jip7W2Ytv0E9XaoP6jEz-jhStD2-IWcg.JPEG.dozzzini/logo.jpg?type=w966",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com", //배포사이트로 변경
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
      ],
    });
  };
  return (
    <div style={{}} onClick={() => shareKakao()}>
      <a id="kakaotalk-sharing-btn" href="javascript:;">
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </a>
    </div>
  );
}
export default Share;
