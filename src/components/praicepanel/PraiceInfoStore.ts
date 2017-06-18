import {useStrict, observable, action, computed} from 'mobx';
import {getPraiceInfo} from "./api/PraiceInfoMockApi";
import ApiStatus from '../../infrastructure/api/apiStatus';

export const PRAICE_INFO_STORE = 'PRAICE_INFO_STORE';

useStrict(true);

export default class PraiceInfoStore {
    @observable private _info: IInfo;
    @observable private _apiStatus: ApiStatus;
    @observable private _error: any;

    constructor() {
        if (!this._info && this._apiStatus !== ApiStatus.Request) {
            this._setApiStatus(ApiStatus.Request);
            getPraiceInfo().then(info => {
                this._setApiStatus(ApiStatus.Success);
                this._setInfo(info);
            }, error => {
                this._setApiStatus(ApiStatus.Error);
                this._setError(error);
            });
        }
    }

    @action
    private _setInfo(info: IInfo) {
        // Sort categories by order index and their traits by order index
        info.categories
            .sort((a, b) => a.orderIndex - b.orderIndex)
            .sort((a, b) => a.traits[0].orderIndex - b.traits[0].orderIndex);

        this._info = info;
    }
    @action
    private _setApiStatus(status: ApiStatus) {
        this._apiStatus = status;
    }

    @action
    private _setError(error: any) {
        this._error = error;
    }

    @computed
    get info(): IInfo {
        return this._info;
    }

    @action
    getCategoryIdForIndex(index: number): string {
        if (this._info && index >= 0 && index < this._info.categories.length) {
            return this._info.categories[index].id;
        } else {
            return '';
        }
    }

    @computed
    get apiStatus() {
        return this._apiStatus;
    }

    @computed
    get error() {
        return this._error;
    }
}

export interface IInfo {
    categories: ICategory[];
    relations: IRelation[];
}
export interface ICategory {
    id: string;
    name: string;
    description: string;
    orderIndex: number;
    traits: ITrait[];
}
export interface ITrait {
    id: string;
    name: string;
    description: string;
    orderIndex: number;
}
export interface IRelation {
    id: number;
    name: string;
}