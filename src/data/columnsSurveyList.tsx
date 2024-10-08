import { EyeOutlined } from '@ant-design/icons';
import { Button, TableProps } from 'antd';
import { ISurvey } from 'hooks/useSurvey';
import { Link } from 'react-router-dom';

export const columns: TableProps<ISurvey>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    align: 'center',
    width: 100,
    render: (text: string) => <span style={{ color: '#1890FF' }}> {text}</span>,
  },
  {
    title: 'Tên khảo sát',
    dataIndex: 'surveyName',
    align: 'left',
    render: (text: string) => <span> {text}</span>,
  },
  {
    title: 'Điểm thưởng',
    dataIndex: 'averageScore',
    align: 'center',
    render: (text: string) => <span> {text}</span>,
  },
  {
    title: 'Ngày bắt đầu',
    dataIndex: 'startDate',
    align: 'center',
    render: (text: string) => <span> {text}</span>,
  },
  {
    title: 'Ngày kết thúc',
    dataIndex: 'endDate',
    align: 'center',
    render: (text: string) => <span> {text}</span>,
  },
  {
    title: 'Tổng nội dung khảo sát',
    dataIndex: 'totalContent',
    align: 'center',
    render: (text: string) => <span> {text}</span>,
  },
  {
    title: 'Xem chi tiết',
    align: 'center',
    fixed: 'right',
    width: 150,
    render: (record: ISurvey) =>
      record && record.id ? (
        <Link to={`/surveys/${record.id}`}>
          <Button style={{ border: 'none', backgroundColor: 'transparent' }}>
            <EyeOutlined style={{ color: '#284698', fontSize: '20px' }} />
          </Button>
        </Link>
      ) : null,
  },
];
