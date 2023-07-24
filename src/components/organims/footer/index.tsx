import { Button } from '../../atomos/button'
import { Input } from '../../atomos/input'
import * as S from './styles'
import Logo from '../../../assets/svg/logo.svg'

export const Footer = () => {
  return (
    <S.Wrapper>
      <div className='wrapper-footer'>
        <div className='container'>
          <S.ContentMain>
            <h4>Lorem ipsum</h4>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
            </p>
          </S.ContentMain>

          <S.ContentInput>
            <Input type='text' label='Email' placeholder='Email' />
            <Button text='Subscribe' size='large' />
          </S.ContentInput>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="content-footer">
          <span>Copyright © 2022 -  All rights reserved</span>
          <img src={Logo} />
        </div>
      </div>
    </S.Wrapper>
  )
}

