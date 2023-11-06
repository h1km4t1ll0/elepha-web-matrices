import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBackButtonProps } from '@/features/goBackButton/types.js'
import GoBackIcon from '@/shared/assets/go-back.svg'

export const GoBackButton: FC<GoBackButtonProps> = ({ style }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div className='goBackButton' style={style}>
      <img src={GoBackIcon} alt='Go back' width='22px' height='auto' onClick={handleClick} />
    </div>
  )
}