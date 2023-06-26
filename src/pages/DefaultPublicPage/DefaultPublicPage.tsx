import React from "react";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";

const DefaultPublicPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe magni
      asperiores architecto expedita provident inventore earum, aspernatur iste
      fugit quis excepturi exercitationem quaerat. Rem dolorem aliquam deserunt!
      Voluptatibus cumque ipsa laborum! Adipisci commodi aliquam cumque tempora
      saepe vitae quam labore velit, quaerat dolores beatae ducimus excepturi
      laudantium magnam illum doloribus similique ea quisquam. Omnis eos in
      vitae molestias similique corporis ab dolore nam reprehenderit dicta.
      Facere, reprehenderit earum assumenda similique deserunt nesciunt, fugit
      reiciendis error porro doloremque expedita aliquid quos excepturi
      perspiciatis nulla libero? Ad at fugiat tempora in earum, amet quibusdam
      ex recusandae sit architecto aliquid enim deleniti.
      <button onClick={()=>navigate(RouteConstants.Login)}>Login</button>
    </div>
  );
};

export default DefaultPublicPage;
