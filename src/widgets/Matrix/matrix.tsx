import React, { FC } from 'react'
import { MatrixProps } from '@/widgets/Matrix/types.js'
import { Card, Skeleton } from 'antd'
import { AudioPlayer } from '@/shared/audioPlayer/audioPlayer.js'
import { MatrixInfo } from '@/entities/MatrixInfo/matrixInfo.js'
import { Typography } from 'antd'

export const Matrix: FC<MatrixProps> = ({ matrix }) => {
  if (!matrix)
    return <>
      <Card className='skeletonMatrixCard' style={{ maxWidth: '310px' }}>
        <Skeleton paragraph={{ rows: 3 }} title />
      </Card>
    </>

  return <>
    <Card className='matrixCard'>
      <MatrixInfo matrix={matrix} />
      <AudioPlayer url={matrix.audioUrl} />
    </Card>
    <Typography.Link
      style={
        {
          marginTop: '20px',
          fontSize: '20px'
        }
      }
      href="https://www.elephahealth.com/"
      target="_blank">
      Раскройте Ваш потенциал ресурсного состояния
    </Typography.Link>
  </>
}