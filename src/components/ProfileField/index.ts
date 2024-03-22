import { tmpl } from './profileField.tmpl';
import './profileField.sass';
import Block from '../../utils/Block';

type ProfileFieldProps = {
  fieldName: string;
  fieldValue: string;
};

export class ProfileField extends Block {
  constructor(props: ProfileFieldProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
