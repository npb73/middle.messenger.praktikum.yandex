import { IUser } from '../api/AuthApi';
import { IGetChat } from '../api/ChatsApi';
import { IMessage } from '../controllers/MessageController';
import Block from './Block';
import { EventBus } from './EventBus';
import { setter } from './setter';

export interface State {
  user?: IUser;
  chats?: IGetChat[];
  messages?: Record<number, IMessage[]>;
  selectedChatId?: number | undefined;
}

enum StorageEvent {
  UpdateState = 'update',
}

class Store extends EventBus {
  private state: State = {};

  getState() {
    return this.state;
  }

  set(path: string, value: unknown) {
    setter(this.state, path, value);

    this.emit(StorageEvent.UpdateState, this.state);
  }
}

export const store = new Store();

// eslint-disable-next-line
export function withStore(mapStateToProps: (state: State) => any) {
  return (Component: typeof Block) => {
    return class extends Component {
      // eslint-disable-next-line
      constructor(props: any) {
        super({ ...props, ...mapStateToProps(store.getState()) });

        store.on(StorageEvent.UpdateState, () => {
          const propsFromState = mapStateToProps(store.getState());
          this.setProps(propsFromState);
        });
      }
    };
  };
}
