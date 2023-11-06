import { FC } from 'react'
import { MatrixListProps } from '@/widgets/MatrixList/types.js'
import { MatrixListItem } from '@/entities/MatrixListItem/MatrixListItem.js'
import { Row, Col, Card } from 'antd'

export const MatrixList: FC<MatrixListProps> = ({ matrices }) => {
  if (!matrices)
    return <>
      <Row style={{ maxWidth: '960px' }} align='stretch' justify='center'>
        {new Array(3).fill(0).map((_, key) => (
          <Col style={{ margin: '16px 8px 0px' }} key={key}>
            <Card style={{ width: 300, height: '100%' }} loading={true} hoverable>
              <Card.Meta title={'loading title'} description={'loading description'} />
            </Card>
          </Col>
        ))}
      </Row>
    </>

  return <>
    <Row style={{ maxWidth: '960px', display: 'flex' }} align='stretch' justify='center'>
      {matrices.map(m => (
          <Col style={{ margin: '16px 8px 0px' }} key={m.name}>
            <MatrixListItem name={m.name} title={m.title} description={m.description} isLoading={!matrices.length} />
          </Col>
      ))}
    </Row>
  </>
}