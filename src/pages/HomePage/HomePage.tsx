import { FC } from 'react'
import { Space, Typography } from 'antd'
import { Matrix } from '@/shared/api/types.js'
import { MatrixList } from '@/widgets/MatrixList/MatrixList.js'
import { getMatrices } from '@/app/store/matrix/matrix.js'
import { useAppSelector } from '@/app/hooks/storeHooks.js'
import Logo from '@/shared/assets/logo.png'

const HomePage: FC = () => {
  const matrices: Array<Matrix> | null = useAppSelector(getMatrices())

  return (
    <Space direction="vertical" align="center" style={{ width: '100%', marginTop: '100px' }}>
      <img src={Logo} alt='Elepha health' />
      <Typography.Title level={2}>CureSound</Typography.Title>
      <MatrixList matrices={matrices} />
    </Space>
  )
}

export default HomePage
