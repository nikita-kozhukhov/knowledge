import { Modal } from 'antd';
import { FeedbackFormValues } from '../utils';

type FeedbackModalProps = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: FeedbackFormValues | null;
};

export default function FeedbackModal({
  modalOpen,
  setModalOpen,
  data,
}: FeedbackModalProps) {
  return (
    <Modal
      open={modalOpen}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      okText="Ок"
      cancelButtonProps={{ style: { display: 'none' } }}
    >
      {data ? (
        <p>
          Уважаем{data.name.endsWith('а') ? 'ая' : 'ый'}{' '}
          <strong>{data.name}</strong>,
          <br />
          ваша заявка принята.
          <br />
          Ответ по заявке будет выслан на почту <strong>{data.email}</strong>.
        </p>
      ) : (
        <p>Возникла непредвиденная ошибка. Попробуйте позже.</p>
      )}
    </Modal>
  );
}
