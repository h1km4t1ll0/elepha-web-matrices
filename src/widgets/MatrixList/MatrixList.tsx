import { FC } from 'react'
import { MatrixListProps } from '@/widgets/MatrixList/types.js'
import { MatrixListItem } from '@/entities/MatrixListItem/MatrixListItem.js'
import { Row, Col, Card } from 'antd'

export const MatrixList: FC<MatrixListProps> = ({ matrices }) => {
  if (!matrices.length)
    return <>
      <Row gutter={16} style={{ maxWidth: '960px' }} align='middle' justify='center'>
        {new Array(3).fill(0).map((_, key) => (
          <Col style={{ paddingLeft: '10px', paddingRight: '10px' }} key={key}>
            <Card style={{ width: 300, marginTop: 16 }} loading={true} hoverable>
              <Card.Meta title={'loading title'} description={'loading description'} />
            </Card>
          </Col>
        ))}
      </Row>
    </>

  return <>
    <Row gutter={16} style={{ maxWidth: '960px', display: 'flex' }} align='stretch' justify='center'>
      {matrices.map(m => (
          <Col style={{ paddingLeft: '10px', paddingRight: '10px' }} key={m.name}>
            <MatrixListItem name={m.name} description={m.description} isLoading={!matrices.length} />
          </Col>
      ))}
    </Row>
  </>
}