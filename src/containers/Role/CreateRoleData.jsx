import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
const CreateRoleData = () => {
  const { t } = useTranslation('common');
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        Footer: 'Middle age:',
        disableGlobalFilter: true,
        width:35
  
      },
      {
        Header: t('name'),
        accessor: 'name',
       
      },
      {
        Header: t('permission'),
        accessor: 'permission',
        show: false,
      },
      {
        Header: t('action'),
        accessor: 'action',
        disableGlobalFilter: true,
        isResizing: true,
        controller: "Action",
        buttons: [
          {
            title: 'update permission',
            color: 'warning'
          }
        ]
      },
    ],
    [],
  );
  const data = [
    {
      "id":1,"name":"スーパーユーザー","action":"",
      "permission":[
        {"module":"ZoomMeetingID","V":1, "C":1, "E":1, "D":1},
        {"module":"ZoomAccount","V":1, "C":1, "E":1, "D":1},
        {"module":"MeetingURL","V":1, "C":1, "E":1, "D":1},
        {"module":"参加人数の変更","V":1, "C":1, "E":1, "D":1},
        {"module":"ユーザーアカウント権限編集","V":1, "C":1, "E":1, "D":1},
        {"module":"ユーザーアカウント","V":1, "C":1, "E":1, "D":1},
        {"module":"部署管理","V":1, "C":1, "E":1, "D":1},
        {"module":"部署管理アカウント編集","V":1, "C":1, "E":1, "D":1},
      ]
    },
    {"id":2,"name":"管理者","action":"",
    "permission":[
      {"module":"ZoomMeetingID","V":0, "C":0, "E":0, "D":0},
      {"module":"ZoomAccount","V":1, "C":1, "E":1, "D":1},
      {"module":"MeetingURL","V":1, "C":1, "E":1, "D":1},
      {"module":"参加人数の変更","V":1, "C":1, "E":1, "D":1},
      {"module":"ユーザーアカウント権限編集","V":0, "C":0, "E":0, "D":0},
      {"module":"ユーザーアカウント","V":1, "C":1, "E":1, "D":1},
      {"module":"部署管理","V":1, "C":1, "E":1, "D":1},
      {"module":"部署管理アカウント編集","V":1, "C":1, "E":1, "D":1},
    ]},
    {"id":3,"name":"BPO用責任者","action":"",
    "permission":[
      {"module":"ZoomMeetingID","V":0, "C":0, "E":0, "D":0},
      {"module":"ZoomAccount","V":0, "C":0, "E":0, "D":0},
      {"module":"MeetingURL","V":1, "C":1, "E":1, "D":1},
      {"module":"参加人数の変更","V":1, "C":1, "E":1, "D":1},
      {"module":"ユーザーアカウント権限編集","V":0, "C":0, "E":0, "D":0},
      {"module":"ユーザーアカウント","V":1, "C":1, "E":1, "D":1},
      {"module":"部署管理","V":0, "C":0, "E":0, "D":0},
      {"module":"部署管理アカウント編集","V":1, "C":1, "E":1, "D":1},
    ]},
    {"id":4,"name":"人開用責任者","action":"",
    "permission":[
      {"module":"ZoomMeetingID","V":0, "C":0, "E":0, "D":0},
      {"module":"ZoomAccount","V":0, "C":0, "E":0, "D":0},
      {"module":"MeetingURL","V":1, "C":1, "E":1, "D":1},
      {"module":"参加人数の変更","V":1, "C":1, "E":1, "D":1},
      {"module":"ユーザーアカウント権限編集","V":0, "C":0, "E":0, "D":0},
      {"module":"ユーザーアカウント","V":1, "C":1, "E":1, "D":1},
      {"module":"部署管理","V":0, "C":0, "E":0, "D":0},
      {"module":"部署管理アカウント編集","V":1, "C":1, "E":1, "D":1},
    ]},
    {"id":5,"name":"BPO用","action":"",
    "permission":[
      {"module":"ZoomMeetingID","V":0, "C":0, "E":0, "D":0},
      {"module":"ZoomAccount","V":0, "C":0, "E":0, "D":0},
      {"module":"MeetingURL","V":1, "C":1, "E":1, "D":1},
      {"module":"参加人数の変更","V":1, "C":1, "E":1, "D":1},
      {"module":"ユーザーアカウント権限編集","V":0, "C":0, "E":0, "D":0},
      {"module":"ユーザーアカウント","V":0, "C":0, "E":0, "D":0},
      {"module":"部署管理","V":0, "C":0, "E":0, "D":0},
      {"module":"部署管理アカウント編集","V":0, "C":0, "E":0, "D":0},
    ]},
    {"id":6,"name":"人開用","action":"",
    "permission":[
      {"module":"ZoomMeetingID","V":0, "C":0, "E":0, "D":0},
      {"module":"ZoomAccount","V":0, "C":0, "E":0, "D":0},
      {"module":"MeetingURL","V":1, "C":1, "E":1, "D":1},
      {"module":"参加人数の変更","V":1, "C":1, "E":1, "D":1},
      {"module":"ユーザーアカウント権限編集","V":0, "C":0, "E":0, "D":0},
      {"module":"ユーザーアカウント","V":0, "C":0, "E":0, "D":0},
      {"module":"部署管理","V":0, "C":0, "E":0, "D":0},
      {"module":"部署管理アカウント編集","V":0, "C":0, "E":0, "D":0},
    ]},

  ];
  
  const createData = { tableHeaderData: columns, tableRowsData: data };
  return createData;
};

export default CreateRoleData;
