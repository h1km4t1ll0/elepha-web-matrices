import { FC } from 'react'
import { Space, Typography } from 'antd'
import { Matrix } from '@/shared/api/types.js'
import { MatrixList } from '@/widgets/MatrixList/MatrixList.js'
import { getMatrices } from '@/app/store/matrix/matrix.js'
import { useAppSelector } from '@/app/hooks/storeHooks.js'

const HomePage: FC = () => {
  const matrices: Array<Matrix> | null = useAppSelector(getMatrices())

  return (
    <Space direction="vertical" align="center" style={{ width: '100%', marginTop: '100px' }}>
      <Typography.Title>Elepha Health</Typography.Title>
      <Typography.Title level={2} style={{ marginTop: '-25px' }}>CureSound</Typography.Title>
      <MatrixList matrices={matrices} />
    </Space>
  )
}

export default HomePage
