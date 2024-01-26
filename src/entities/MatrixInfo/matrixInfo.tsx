import React, { FC } from 'react'
import { Typography } from 'antd'
import { MatrixInfoProps } from '@/entities/MatrixInfo/types.js'

export const MatrixInfo: FC<MatrixInfoProps> = ({ matrix }) => {

  return <>
    <Typography.Title>{matrix.title}</Typography.Title>
  </>
}