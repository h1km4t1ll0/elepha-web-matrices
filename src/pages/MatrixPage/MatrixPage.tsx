import React, { FC, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { Space, Typography } from 'antd'
import { Matrix as MatrixType } from '@/shared/api/types.js'
import { Matrix } from '@/widgets/Matrix/matrix.js'
import MatrixApi from '@/shared/api/api.js'
// import Logo from '@/shared/assets/logo.png'

export const MatrixPage: FC = () => {
  const { name } = useParams()
  const [matrix, setMatrix] = useState<MatrixType | null>(null)

  useEffect(() => {
    (async () => {
      const matrices = await MatrixApi.getMatrices()
      const m = matrices.find(m => m.name === name)
      if (m)
        setMatrix(m)
    })()
  }, [name])

  if (!name || !['rest', 'balance', 'activation'].includes(name))
    return <Navigate to='/matrix/rest' />

  return <>
    <Space direction="vertical" align="center" style={{ width: '100%', marginTop: '100px', marginBottom: '20px' }}>
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '310px' }}>
            {/*<img src={Logo} alt='Elepha health' />*/}
            <Typography.Title level={1}>CureSound</Typography.Title>
          </div>
        </div>
        <Matrix matrix={matrix} />
      </div>
    </Space>
  </>
}