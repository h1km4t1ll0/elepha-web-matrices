import React, { FC, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import {Card, Space, Typography} from 'antd'
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

  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}>
      <Space direction="vertical" align="center" style={{
        height: '100%',
        width: '100%',
        marginTop: '100px',
        marginBottom: '20px'}}>
        <div style={{ position: 'relative', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '310px' }}>
              {/*<img src={Logo} alt='Elepha health' />*/}
              <Typography.Title level={1}>CureSound</Typography.Title>
            </div>
          </div>
          <Space direction="vertical" align="center" style={{verticalAlign: 'middle'}}>
            <Matrix matrix={matrix} />
            <Card className='matrixCard' style={{minWidth: '300px'}}>
              <Space direction="vertical" align="center" style={{textAlign: 'center'}}>
                <Typography.Text
                    style={{ fontSize: '23px'}}>
                  Раскройте потенциал ресурсного состояния
                </Typography.Text>
                <Typography.Link
                  style={
                    {
                      fontSize: '20px',
                      justifyContent: 'center',
                    }
                  }
                  href="https://www.elephahealth.com/">
                  Сервис wellness - услуг с выездом в отель или на дом
                </Typography.Link>
              </Space>
              </Card>
          </Space>
        </div>
      </Space>
  </div>)
}