import React, { FC } from 'react'
import { MatrixProps } from '@/widgets/Matrix/types.js'
import { Card, Skeleton } from 'antd'
import { AudioPlayer } from '@/shared/audioPlayer/audioPlayer.js'
import { MatrixInfo } from '@/entities/MatrixInfo/matrixInfo.js'

export const Matrix: FC<MatrixProps> = ({ matrix }) => {
  if (!matrix)
    return <>
      <Card className='skeletonMatrixCard' style={{ maxWidth: '310px' }}>
        <Skeleton paragraph={{ rows: 3 }} title />
      </Card>
    </>

  return <>
    <Card className='matrixCard' style={{minWidth: '300px'}}>
      <MatrixInfo matrix={matrix} />
      <AudioPlayer url={matrix.audioUrl} />
    </Card>
  </>
}