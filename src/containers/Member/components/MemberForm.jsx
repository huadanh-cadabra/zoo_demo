import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';


const MemberForm = ({
}) => {
    const { t } = useTranslation('common');
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [departmentId, setDepartmentId] = useState(false);

    return (
        <div></div>
    );
};

MemberForm.propTypes = {
   
};

export default MemberForm;