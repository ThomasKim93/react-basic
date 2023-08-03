import logo from '../logo.svg';

function Image() {
  return (
    <>
        * src 폴더 안에 임미지 출력 <br/>
          <img src={logo} alt=""/> 
          
        * public폴더 안에 있는 이미지 출력 <br/>
          <img src="/logo512.png" alt=""/>
    </>
  )
}

export default Image