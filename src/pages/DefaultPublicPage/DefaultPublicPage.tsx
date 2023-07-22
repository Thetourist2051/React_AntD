import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "../../constants/RouteConstant";
import { motion } from "framer-motion";

const DefaultPublicPage = () => {
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [rotate, setRotate] = useState(120);
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
      <div >
        <motion.div
          className="box"
          style={{height:'100px', width:'100px', border:'1px solid black'}}
          animate={{ x, y, rotate }}
          transition={{ type: "spring" }}
        />
      </div>
      <div className="inputs">
        <Input value={x} set={setX}>
          x
        </Input>
        <Input value={y} set={setY}>
          y
        </Input>
        <Input value={rotate} set={setRotate} min={-180} max={180}>
          rotate
        </Input>
      </div>
    </div>
  );
};
interface InputProps {
  children: string;
  value: number;
  set: (newValue: number) => void;
  min?: number;
  max?: number;
}

export function Input({
  value,
  children,
  set,
  min = -200,
  max = 200
}: InputProps) {
  return (
    <label>
      <code>{children}</code>
      <input
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value))}
      />
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => set(parseFloat(e.target.value) || 0)}
      />
    </label>
  );
}

export default DefaultPublicPage;
