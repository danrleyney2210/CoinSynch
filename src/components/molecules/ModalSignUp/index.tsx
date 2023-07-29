import { ReactSVG } from 'react-svg'
import { Checkbox } from '../../atomos/Checkbox'
import { Button } from '../../atomos/button'
import { Input } from '../../atomos/input'
import * as S from './styles'
import { AiOutlineMail } from 'react-icons/ai'
import { BiLock } from 'react-icons/bi'
import User from "../../../assets/icons/user.svg";


export const ModalSignUp = () => {
  return (
    <S.Wrapper>
      <S.TitleModal>
        Sign up to{" "}
        <b>
          Coin<strong>Synch</strong>
        </b>
      </S.TitleModal>

      <S.FormSign action="">
        <Input name="name" placeholder="Name" type="text" icon={<ReactSVG src={User} />} />
        <Input name="email" placeholder="Email" type="email" icon={<AiOutlineMail />} />
        <Input name="password" isPassword placeholder="Password" type="password" icon={<BiLock />} />
        <Input name="confirmPassword" isPassword placeholder="Confirm password" type="password" icon={<BiLock />} />

        <Checkbox />
        <Button text="Sign up" size="medium" />

        <p>
          Already have and account? <b>Sign up to</b> <span>Coin</span>
          <strong>Synch</strong>
        </p>
      </S.FormSign>
    </S.Wrapper>
  )
}


