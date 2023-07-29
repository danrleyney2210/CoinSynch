import * as S from './styles'
import Lottie from 'react-lottie';
import load from '../../../assets/lottie/load.json'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: load,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export const Spiner = () => {
  return (
    <S.Wrapper>
      <Lottie options={defaultOptions}
        height={200}
        width={200}
      />
    </S.Wrapper>
  )
}


