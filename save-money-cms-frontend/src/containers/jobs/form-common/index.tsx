import React, { useState } from 'react'
import { Form, Input } from 'antd'
import { IOptionSelect } from 'src/types/shared'
import Select from 'src/components/elements/select'
import { IJob } from 'src/types/jobs'
interface IProps {
  id: string,
  isUpdate?: boolean,
  initValue?: IJob,
  onSuccess: () => void,
  onFail: () => void
}

const PermissionForm: React.FC<IProps> = ({ onSuccess, onFail, id, isUpdate, initValue }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
    form.resetFields();
    onSuccess()
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    onFail()
  };
  const listName: IOptionSelect[] = [
    {
      key: '1',
      value: 'maybe_you_like',
      name: 'maybe_you_like'

    },
    {
      key: '2',
      value: 'tikinow',
      name: 'tikinow'
    },
    {
      key: '3',
      value: 'seller_widget',
      name: 'seller_widget'
    },
    {
      key: '4',
      value: 'deal_hot',
      name: 'deal_hot'
    }
  ]
  const listStatus: IOptionSelect[] = [
    {
      key: '1',
      value: 'Active',
      name: 'Active'
    },
    {
      key: '2',
      value: 'InActive',
      name: 'InActive',
    }
  ]
  const [status] = useState(listStatus)
  const [name] = useState(listName)
  return (
    <Form
      form={form}
      initialValues={initValue}
      id={id}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name job!',
          },
        ]}
      >
        <Select
          defaultValue={isUpdate ? initValue.name : null}
          placeholder="Select name"
          list={name}
        />     
      </Form.Item>
      <Form.Item
        label="Status"
        name="status"
        rules={[
          {
            required: true,
            message: 'Please input your status!',
          },
        ]}
      >
        <Select
          defaultValue={isUpdate ? initValue.status : null}
          placeholder="Select status"
          list={status}
        />
      </Form.Item>

    </Form>

  )
}
export default PermissionForm