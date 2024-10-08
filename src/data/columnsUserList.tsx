import { EyeOutlined } from '@ant-design/icons';
import { Button, Image, TableProps } from 'antd';
import { IUser } from 'hooks/useUser';
import { Link } from 'react-router-dom';

export const columns: TableProps<IUser>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    align: 'center',
    width: 100,
    render: (text: string) => <span style={{ color: '#1890FF' }}> {text}</span>,
  },
  {
    title: 'Ảnh đại diện',
    dataIndex: 'avatar',
    align: 'center',
    render: (avatar: string) =>
      avatar ? (
        <Image
          src={avatar}
          alt='avatar'
          style={{
            width: 80,
            height: 80,
            objectFit: 'cover',
          }}
        />
      ) : null,
  },
  {
    title: 'Họ và tên',
    dataIndex: 'fullName',
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    minWidth: 250,
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'birthDate',
    align: 'center',
    width: 150,
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: 'Giới tính',
    dataIndex: 'gender',
    width: 150,
    render: (text: string) => <span>{text}</span>,
  },
  {
    title: 'Xem chi tiết',
    align: 'center',
    fixed: 'right',
    width: 150,
    render: (record: IUser) =>
      record && record.id ? (
        <Link to={`/users/${record.id}`}>
          <Button style={{ border: 'none', backgroundColor: 'transparent' }}>
            <EyeOutlined style={{ color: '#284698', fontSize: '20px' }} />
          </Button>
        </Link>
      ) : null,
  },
];
