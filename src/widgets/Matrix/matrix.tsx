import React, { FC } from 'react'
import { MatrixProps } from '@/widgets/Matrix/types.js'
import { Card, Skeleton, Typography } from 'antd'
import { AudioPlayer } from '@/shared/audioPlayer/audioPlayer.js'
import { GoBackButton } from '@/features/goBackButton/goBackButton.js'

export const Matrix: FC<MatrixProps> = ({ matrix }) => {
  if (!matrix)
    return <Skeleton active></Skeleton>

  return <>
    <Card>
      <Typography.Title>{matrix.title}</Typography.Title>
      <Typography.Title level={2} style={{ marginTop: '-20px '}}>{matrix.description}</Typography.Title>
      <Typography.Paragraph style={{ fontSize: '1.5rem' }}>{matrix.recommendations}</Typography.Paragraph>
      <AudioPlayer url={matrix.audioUrl} />
      <GoBackButton style={{ position: 'absolute', top: 30, right: 10 }} />
    </Card>
  </>
}