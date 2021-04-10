import React, { useEffect, useState } from 'react'

import Text from 'src/components/elements/text'
import RemoveJob from './remove'
import DividerComponent from 'src/components/elements/divider'
import FilterForm from './filter'
import CreateJob from './create'
import RetryJob from './retry'
import moment from 'moment'
import { Table, Tag } from 'antd'
import { IJob } from 'src/types/jobs'
import { ContentWrapper, HeaderWrapper } from 'src/components/wrapper'
import { TimeColumn } from 'src/components/table-manager/columns'

const time: string = moment().format('YYYY-MM-DD HH:mm:ss');
const data: IJob[] = [
    {
        key: '1',
        revisionId: '20210303',
        modelVersion: 'v1',
        name: 'maybe_you_like',
        status: 'Running',
        createdBy: 'tuan.nguyen15',
        createdTime: time,
        blockDef: 'BLOCK_DEF_MAYBE_YOU_LIKE'

    },
    {
        key: '2',
        name: 'tikinow',
        modelVersion: 'v1',

        revisionId: '20210303',
        status: 'Pending',
        createdBy: 'tuan.nguyen15',
        createdTime: time,
        blockDef: 'BLOCK_DEF_TIKINOW'
    },
    {
        key: '3',
        name: 'seller_widget',
        revisionId: '20210303',
        modelVersion: 'v1',

        status: 'Failed',
        createdBy: 'tuan.nguyen15',
        createdTime: time,
        blockDef: 'BLOCK_DEF_SELLER_WIDGET'
    },
    {
        key: '4',
        name: 'deal_hot',
        modelVersion: 'v1',
        status: 'Success',
        revisionId: '20210303',
        createdBy: 'tuan.nguyen15',
        createdTime: time,
        blockDef: 'BLOCK_DEF_DEAL_HOT'
    }
];
const columns: any[] = [
    {
        title: 'Block Def',
        dataIndex: 'blockDef',
        key: 'blockDef',
        render: name => {
            return <Text color="#3498db" isUpper={false} fontWeight={700} content={name} />
        }
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: name => {
            return <Text color="black" isUpper={false} fontWeight={700} content={name} />
        }
    },
    {
        title: 'RevisionId',
        dataIndex: 'revisionId',
        key: 'revisionId',
        render: revisionId => {
            return <Text color="black" isUpper={false} fontWeight={600} content={revisionId} />
        },
        align: 'center'
    },
    {
        title: 'Model Version',
        dataIndex: 'modelVersion',
        key: 'modelVersion',
        render: modelVersion => {
            return <Text color="black" isUpper={false} fontWeight={600} content={modelVersion} />
        },
        align: 'center'

    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: status => {
            if (status === "Running") {
                return <Tag   color="#3498db">{status}</Tag>
            } else if(status === "Pending") {
                return <Tag  color="#95a5a6">{status}</Tag>
            }else if(status === "Failed"){
                return <Tag  color="#e74c3c">{status}</Tag>
            }else {
                return <Tag color="#2ecc71">{status}</Tag>
            }
        },
    },
    {
        title: 'Created By',
        dataIndex: 'createdBy',
        key: 'createdBy',
        render: name => {
            return <Text isUpper={false} fontWeight={600} content={name} />
        }
    },
    {
        title: 'Created Time',
        dataIndex: 'createdTime',
        key: 'createdTime',
        render: TimeColumn
    },
    {
        title: '',
        dataIndex: 'key',
        key: 'key',
        render: key => {
            return (
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <RetryJob  />
                </div>
            )
        },
        align: 'left'
    }

];
const UserContainer: React.FC = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(data)
    });
    return (
        <ContentWrapper>
            <HeaderWrapper>
                <h1>List Job</h1>
                <CreateJob />
            </HeaderWrapper>
            <FilterForm />
            <Table id='key' columns={columns} dataSource={users} />
        </ContentWrapper>
    )
}
export default UserContainer