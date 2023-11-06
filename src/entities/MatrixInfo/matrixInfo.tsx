import React, { FC } from 'react'
import { Typography } from 'antd'
import { MatrixInfoProps } from '@/entities/MatrixInfo/types.js'

export const MatrixInfo: FC<MatrixInfoProps> = ({ matrix }) => {

  return <>
    <Typography.Title>{matrix.title}</Typography.Title>
    <Typography.Title level={2} style={{ marginTop: '-20px '}}>{matrix.description}</Typography.Title>
    <Typography.Paragraph style={{ fontSize: '1.5rem' }}>{matrix.recommendations}</Typography.Paragraph>
  </>
}