import { tmpl } from './profileField.tmpl';
import './profileField.scss';
import Block from '../../utils/Block';

type ProfileFieldProps = {
  fieldName: string;
  fieldValue: string;
};

export class ProfileField extends Block {
  constructor(props: ProfileFieldProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
