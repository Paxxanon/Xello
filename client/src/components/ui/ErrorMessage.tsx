import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../store/hooks.ts';
import { selectError, setError } from '../../store/errorSlice.ts';


function Example() {
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();
  const show = true;
  const handleClose = () => {
    dispatch(setError(""));
  }

  return (
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>An error has occured!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal>
    
  );
}

export default Example;