
import { PersonalInfo, Address } from './personalInfo';

export class ContributeInfoItem {
    id: string;
    amount: number;
    account: string;
    transferDate: Date;
    imgIDUrl: string;
    imgSlipUrl: string;

    constructor() {
        this.id = "";
        this.amount = "";
        this.account = "";
        this.transferDate = "";
        this.imgIDUrl = "";
        this.imgSlipUrl = "";
    }
};

export class ContributeStatus {
};

export class ContributeInfo {
    personalInfo: PersonalInfo;
    onlyParticipate: boolean;                       // ลงขันส่วนร่วมอย่างเดียว
    investContribute: ContributeInfoItem;
    participateContribute: ContributeInfoItem;
    useAddrDelivery: boolean;
    addrDelivery: Address;
    //status: ContributeStatus;

    constructor() {
        this.personalInfo = new PersonalInfo();
        this.onlyParticipate = false;
        this.investContribute = new ContributeInfoItem();
        this.participateContribute = new ContributeInfoItem();
        this.useAddrDelivery = false;
        this.addrDelivery = new Address();
    }
};
