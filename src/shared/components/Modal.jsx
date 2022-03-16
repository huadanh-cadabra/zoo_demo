import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Modal } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const ModalComponent = ({
  color, title, message, isOpen, closeModal,colored, header,form,isFooter
}) => {

  let Icon;
  const { t } = useTranslation('common');
  switch (color) {
    case 'primary':
      Icon = <span className="lnr lnr-pushpin modal__title-icon" />;
      break;
    case 'success':
      Icon = <span className="lnr lnr-thumbs-up modal__title-icon" />;
      break;
    case 'warning':
      Icon = <span className="lnr lnr-flag modal__title-icon" />;
      break;
    case 'danger':
      Icon = <span className="lnr lnr-cross-circle modal__title-icon" />;
      break;
    default:
      break;
  }

  return (
    <div>
    
      <Modal
        isOpen={isOpen}
        toggle={closeModal}
        className={`theme-light ltr-support modal-lg login-modal-form modal--${color}`}
      >
        <div className="modal__header">
          <button
            className="lnr lnr-cross modal__close-btn"
            aria-label="modal__close-btn"
            type="button"
            onClick={closeModal}
          />
          {header ? '' : Icon}
          <h4 className="text-modal  modal__title">{t(title)}</h4>
        </div>
        <div className="modal__body">

          {form?form:message}
        </div>
        {isFooter && (
          <ButtonToolbar className="modal__footer">
          <Button className="modal_cancel" onClick={closeModal}>{t('cancel')}</Button>{' '}
          <Button className="modal_ok" outline={colored} color='primary' onClick={closeModal}>{t('submit')}</Button>
        </ButtonToolbar>
        )}
        
      </Modal>
    </div>
  );
};

ModalComponent.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  color: PropTypes.string.isRequired,
  colored: PropTypes.bool,
  header: PropTypes.bool,
  isOpen: PropTypes.bool,
  isFooter: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  btn: PropTypes.string.isRequired,
};

ModalComponent.defaultProps = {
  title: '',
  message: '',
  colored: false,
  header: false,
  isFooter:true,
  color:'',
  btn:''

};

export default ModalComponent;