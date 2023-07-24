import * as S from './styles'
import { GrFormClose } from 'react-icons/gr'
import { IModalProps } from './types';

export const Modal = ({ isOpen, onClose, children }: IModalProps) => {

  return (
    <S.Wrapper>
      {
        isOpen && (
          <S.ContainerModal>
            <S.ContentModal>
              <GrFormClose size={16} onClick={() => onClose()} />
              {children}
            </S.ContentModal>
          </S.ContainerModal>
        )
      }

    </S.Wrapper>
  )
}

