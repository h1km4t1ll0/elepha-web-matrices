import React, { FC } from 'react'
import { MatrixProps } from '@/widgets/Matrix/types.js'
import { Card, Skeleton, Typography } from 'antd'
import { AudioPlayer } from '@/shared/audioPlayer/audioPlayer.js'
import { MatrixInfo } from '@/entities/MatrixInfo/matrixInfo.js'

export const Matrix: FC<MatrixProps> = ({ matrix }) => {
  if (!matrix)
    return <>
      <Card className='skeletonMatrixCard'>
        <Skeleton paragraph={{ rows: 4 }} title />
      </Card>
    </>

  return <>
    <Card style={{ maxWidth: '550px', margin: '0 20px' }}>
      <MatrixInfo matrix={matrix} />
      <AudioPlayer url={matrix.audioUrl} />
    </Card>
  </>
}