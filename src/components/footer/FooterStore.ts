import {useStrict, observable, action, computed} from 'mobx';

export const FOOTER_STORE = 'FOOTER_STORE';

useStrict(true);
export default class FooterStore {
    @observable private _showText: boolean = true;

    @computed
    get showText() {
        return this._showText;
    }

    @action
    setShowText(showText: boolean) {
        this._showText = showText;
    }
}