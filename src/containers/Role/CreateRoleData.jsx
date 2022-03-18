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
        Header: t('modules'),
        accessor: 'modules',
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
      "modules":[
        {"id":1,"name":"ZoomMeetingID",
          "permissions":[
            {"action":"view","checked":1}, 
            {"action":"create","checked":1}, 
            {"action":"update","checked":1}, 
            {"action":"delete","checked":1}
          ]
        },
        {"id":2,"name":"ZoomAccount",
          "permissions":[
            {"action":"view","checked":1}, 
            {"action":"create","checked":1}, 
            {"action":"update","checked":1}, 
            {"action":"delete","checked":1}
          ]
        },
        {"id":3,"name":"MeetingURL",
          "permissions":[
            {"action":"view","checked":1}, 
            {"action":"create","checked":1}, 
            {"action":"update","checked":1}, 
            {"action":"delete","checked":1}
          ]
        },
        {"id":4,"name":"参加人数の変更",
          "permissions":[
            {"action":"view","checked":1}, 
            {"action":"create","checked":1}, 
            {"action":"update","checked":1}, 
            {"action":"delete","checked":1}
          ]
        },
        {"id":5,"name":"ユーザーアカウント権限編集",
          "permissions":[
            {"action":"view","checked":1}, 
            {"action":"create","checked":1}, 
            {"action":"update","checked":1}, 
            {"action":"delete","checked":1}
          ]
        },
        {"id":6,"name":"ユーザーアカウント",
        "permissions":[
          {"action":"view","checked":1}, 
          {"action":"create","checked":1}, 
          {"action":"update","checked":1}, 
          {"action":"delete","checked":1}
        ]},
        {"id":7,"name":"部署管理",
        "permissions":[ 
          {"action":"view","checked":1},
          {"action":"create","checked":1}, 
          {"action":"update","checked":1}, 
          {"action":"delete","checked":1}
        ]},
        {"id":8,"name":"部署管理アカウント編集","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      ]
    },
    {"id":2,"name":"管理者","action":"",
    "modules":[
      {"id":1,"name":"ZoomMeetingID","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":2,"name":"ZoomAccount","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":3,"name":"MeetingURL","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":4,"name":"参加人数の変更","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":5,"name":"ユーザーアカウント権限編集","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":6,"name":"ユーザーアカウント","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":7,"name":"部署管理","permissions":[{"action":"view","checked":1},{"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":8,"name":"部署管理アカウント編集","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
    ]},
    {"id":3,"name":"BPO用責任者","action":"",
    "modules":[
      {"id":1,"name":"ZoomMeetingID","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":1,"name":"ZoomAccount","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":3,"name":"MeetingURL","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":4,"name":"参加人数の変更","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":5,"name":"ユーザーアカウント権限編集","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":6,"name":"ユーザーアカウント","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":7,"name":"部署管理","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":8,"name":"部署管理アカウント編集","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
    ]},
    {"id":4,"name":"人開用責任者","action":"",
    "modules":[
      {"id":1,"name":"ZoomMeetingID","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":2,"name":"ZoomAccount","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":3,"name":"MeetingURL","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":4,"name":"参加人数の変更","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":5,"name":"ユーザーアカウント権限編集","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":6,"name":"ユーザーアカウント","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":7,"name":"部署管理","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":8,"name":"部署管理アカウント編集","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
    ]},
    {"id":5,"name":"BPO用","action":"",
    "modules":[
      {"id":1,"name":"ZoomMeetingID","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":2,"name":"ZoomAccount","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":3,"name":"MeetingURL","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":4,"name":"参加人数の変更","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":5,"name":"ユーザーアカウント権限編集","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":6,"name":"ユーザーアカウント","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":7,"name":"部署管理","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":8,"name":"部署管理アカウント編集","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
    ]},
    {"id":6,"name":"人開用","action":"",
    "modules":[
      {"id":1,"name":"ZoomMeetingID","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":2,"name":"ZoomAccount","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":3,"name":"MeetingURL","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":4,"name":"参加人数の変更","permissions":[{"action":"view","checked":1}, {"action":"create","checked":1}, {"action":"update","checked":1}, {"action":"delete","checked":1}]},
      {"id":5,"name":"ユーザーアカウント権限編集","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":6,"name":"ユーザーアカウント","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":7,"name":"部署管理","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
      {"id":8,"name":"部署管理アカウント編集","permissions":[{"action":"view","checked":0}, {"action":"create","checked":0}, {"action":"update","checked":0}, {"action":"delete","checked":0}]},,
    ]},

  ];
  
  const createData = { tableHeaderData: columns, tableRowsData: data };
  return createData;
};

export default CreateRoleData;
