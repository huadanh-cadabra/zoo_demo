import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
const CreateMemberData = () => {
  const { t } = useTranslation('common');
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        Footer: 'Middle age:',
        disableGlobalFilter: true,
        width: 65,
      },
      {
        Header: t('first_name'),
        accessor: 'first_name',
      },
      {
        Header: t('last_name'),
        accessor: 'last_name',
        disableGlobalFilter: true,
      },
      {
        Header: t('email'),
        accessor: 'email',
        disableGlobalFilter: true,
      },
      {
        Header: t('username'),
        accessor: 'username',
        disableGlobalFilter: true,
      },
      {
        Header: t('action'),
        accessor: 'action',
        disableGlobalFilter: true,
        isResizing: true,
        controller: "Action",
        buttons: [
          {
            title: 'active',
            color: 'secondary'
          },
          {
            title: 'update',
            color: 'warning'
          },
          {
            title: 'delete',
            color: 'danger'
          }
        ]
      },
    ],
    [],
  );

  const getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();

  const data = [];
  const rows = () => {
    for (let i = 1; i < 36; i += 1) {
      data.push({
        id: i,
        first_name: ['ユーザ 名', 'ユーザ 名', 'ユーザ 名'][Math.floor((Math.random() * 3))],
        last_name: ['ユーザ 名 1', 'ユーザ 名 2', 'ユーザ 名 3'][Math.floor((Math.random() * 3))],
        email: [`user${i}1@race.jp`, `user${i}2@race.jp`, `user${i}3@race.jp`][Math.floor((Math.random() * 3))],
        username: ['1GX1xsd4Vg1CdcpaDag', '1sadsd4Vg1CdcpaDag', '1FhgfCdsewCdcpaDag'][Math.floor((Math.random() * 3))],
        action:''
      });
    }
  };

  rows();
  const createData = { tableHeaderData: columns, tableRowsData: data };
  return createData;
};

export default CreateMemberData;
