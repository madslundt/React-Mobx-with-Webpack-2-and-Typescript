import {useStrict, observable, action, computed} from 'mobx';

useStrict(true);
export default class CounterStore {
    @observable private _number: number = 0;

    constructor(number?: number) {
        this._number = number || this._number;
    }

    @action
    increment() {
        this._number++;
    }

    @action
    decrement() {
        this._number--;
    }

    @computed
    get number() {
        return this._number;
    }
}