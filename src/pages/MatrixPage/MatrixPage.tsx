import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '@/app/hooks/storeHooks.js'
import { getMatrixByName } from '@/app/store/matrix/matrix.js'
import { Space } from 'antd'
import { Matrix } from '@/widgets/Matrix/matrix.js'

export const MatrixPage: FC = () => {
  const { name } = useParams()
  const matrix = useAppSelector(getMatrixByName(name || ''))

  return <>
    <Space direction="vertical" align="center" style={{ width: '100%', marginTop: '100px' }}>
      <Matrix matrix={matrix} />
    </Space>
  </>
}