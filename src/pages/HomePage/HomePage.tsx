import { FC, useLayoutEffect, useState } from 'react'
import { notification, Space, Typography } from 'antd'
import { Matrix } from '@/shared/api/types.js'
import { getMatrices } from '@/shared/api/api.js'
import { MatrixList } from '@/widgets/MatrixList/MatrixList.js'
import { SessionStorageService } from '@/shared/services/sessionStorageService.js'

const HomePage: FC = () => {
  const [notificationApi, context] = notification.useNotification()
  const [matrices, setMatrices] = useState<Matrix[]>([])

  useLayoutEffect(() => {
    (async () => {
      const storageData = SessionStorageService.getMatrices()
      console.log(storageData)
      if (storageData) {
        setMatrices(storageData)
        return
      }

      const data = await getMatrices()
      if (data) {
        SessionStorageService.setMatrices(data)
        setMatrices(data)
      } else {
        notificationApi['error']({ message: 'Не удалось загрузить матрицы. Попробуйте позже' })
      }

    })()
  }, [notificationApi])

  return (
    <Space direction="vertical" align="center" style={{ width: '100%', marginTop: '100px' }}>
      {context}
      <Typography.Title>Elepha Health</Typography.Title>
      <Typography.Title level={2} style={{ marginTop: '-25px' }}>CureSound</Typography.Title>
      <MatrixList matrices={matrices} />
    </Space>
  )
}

export default HomePage
