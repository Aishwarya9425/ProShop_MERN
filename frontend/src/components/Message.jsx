import { Alert } from 'react-bootstrap';

//variant - danger, success etc
//children - custom text
const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
