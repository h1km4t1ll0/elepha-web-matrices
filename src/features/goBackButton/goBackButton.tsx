import goBackIcon from '@/shared/assets/go-back.svg'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoBackButtonProps } from '@/features/goBackButton/types.js'

export const GoBackButton: FC<GoBackButtonProps> = ({ style }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div className='goBackButton' style={style}>
      <img src={goBackIcon} alt='Go back' width='25px' height='auto' onClick={handleClick} />
    </div>
  )
}