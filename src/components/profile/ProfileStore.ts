import {useStrict, observable, action, computed} from 'mobx';
import {getProfile} from "./api/ProfileMockApi";
import ApiStatus from '../../infrastructure/api/apiStatus';

useStrict(true);
export interface IProfile {
    id: string;
    firstName: string;
    lastName: string;
    image: string;
}

export default class ProfileStore {
    @observable private _profile: IProfile;
    @observable private _apiStatus: ApiStatus;
    @observable private _error: any;

    constructor(id: string) {
        this._setApiStatus(ApiStatus.Request);
        getProfile(id).then(profile => {
            this._setProfile(profile);
            this._setApiStatus(ApiStatus.Success);
        }, error => {
            this._setError(error);
            this._setApiStatus(ApiStatus.Error);
        });
    }

    @action
    private _setProfile(profile: IProfile) {
        this._profile = profile;
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
    get profile() {
        return this._profile;
    }

    @computed
    get error() {
        return this._error;
    }

    @computed
    get apiStatus() {
        return this._apiStatus;
    }
}