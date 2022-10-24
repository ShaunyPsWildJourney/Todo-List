import styled from 'styled-components';
import { gsap, Linear } from 'gsap';
import { useRef, useEffect } from 'react'; 


export default function Triangle2(props) {

  const {position, fieldX,size,} = props; 
  const tri2Ref= useRef(null)

  useEffect(() => {

    gsap.to(tri2Ref.current, { 
      duration: 40,
      repeat: -1,
      y: -1600,
      delay: "random(0, 40)",
      repeat: -1,
      ease: Linear
    })
  }, [])


  return (
  <Wrapper ref={tri2Ref} 
  style={{left: `${position[0]}%`, top: `${position[1]}%`}}>

    <Xrotation style={{transformOrigin: `${fieldX}px ${(fieldX/15)*13}px`,
                        width: `${fieldX}px`, height: `${(fieldX/15)*13}px`}}>
        <Yrotation style={{transformOrigin: `${fieldX}px ${(fieldX/15)*13}px`,
                        width: `${fieldX}px`, height: `${(fieldX/15)*13}px`}}>
            <Zrotation style={{transformOrigin: `${fieldX}px ${(fieldX/15)*13}px`,
                        width: `${fieldX}px`, height: `${(fieldX/15)*13}px`}}>

                <TriangleFace style={{borderLeft: `${size}px solid transparent` ,
                                borderRight: `${size}px solid transparent`,
                                borderBottom: `${(size /15)*26}px solid rgb(144, 171, 209)`,
                                transformOrigin: `${size}px 0px`,
                                }}>
                </TriangleFace>
                <TriangleFace style={{borderLeft: `${size}px solid transparent` ,
                                borderRight: `${size}px solid transparent`,
                                borderBottom: `${(size /15)*26}px solid rgb(244, 168, 106)`,
                                transformOrigin: `${size}px 0px`,
                                }}>
                </TriangleFace>
                <TriangleFace style={{borderLeft: `${size}px solid transparent` ,
                                borderRight: `${size}px solid transparent`,
                                borderBottom: `${(size /15)*26}px solid rgb(152, 208, 223)`,
                                transformOrigin: `${size}px 0px`,
                                }}>
                </TriangleFace>
                <TriangleFace style={{borderLeft: `${size}px solid transparent` ,
                                borderRight: `${size}px solid transparent`,
                                borderBottom: `${(size /15)*26}px solid rgb(242, 188, 141)`,
                                transform: `rotateX(90deg) translateY(-${size*1.16}px) translateZ(-${1.626*size}px)`,
                                }}>
                </TriangleFace>
              </Zrotation>
          </Yrotation>
      </Xrotation>
  </Wrapper>

  )
}


const Wrapper = styled.div`
  //the size doesnt matter 
  position: absolute;
  width:100px;
  height:100px;
`;
const Xrotation = styled.div`
  transform-style: preserve-3d;
  animation: Xray 30s infinite linear;
  @keyframes Xray {
  from { transform: rotateX(-165deg);
  } to { transform: rotateX(-525deg);
}}
`;
const Yrotation = styled.div`
  transform-style: preserve-3d;
  animation: YMCA 40s infinite linear;
  @keyframes YMCA {
  from { transform: rotateY(90deg);
  } to {transform: rotateY(450deg);
}}
`;
const Zrotation = styled.div`
  transform-style: preserve-3d;
  animation: GENZ 20s infinite linear;
  @keyframes GENZ {
  from { transform: rotateZ(90deg);
  }to { transform: rotateZ(450deg);
}}

  & div:nth-child(1) {
    transform: rotateY(0deg) rotateX(19.5deg);
    animation-delay:0.1s;
  }
  & div:nth-child(2) {
    transform: rotateY(120deg) rotateX(19.5deg);
    animation-delay:0.5s;
  }
  & div:nth-child(3) {
    transform: rotateY(240deg) rotateX(19.5deg);
    animation-delay:0.9s;
  }
  & div:nth-child(4) {
    transform-origin: 0 0px;
    animation-delay:1.4s;
  }
`;
const TriangleFace = styled.div`
  position:absolute;
  width: 0;
  height: 0;
  /* transform-origin: 100px 100px; */
  perspective-origin: 0% 0%;
  animation: changeColors 2s linear infinite;
  @keyframes changeColors {
  0% {border-bottom-color: rgb(144, 171, 209);
  } 33% {border-bottom-color: rgb(244, 168, 106);
  }66% {border-bottom-color: rgb(152, 208, 223);
  }100% {border-bottom-color: rgb(242, 188, 141);}
}
`;







