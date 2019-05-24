
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
        this.amount = 0;
        this.account = "";
        this.transferDate = new Date();
        this.imgIDUrl = "";
        this.imgSlipUrl = "";
    }
};

export class ContributeStatus {
};

export class ContributeInfo {
    //personalInfo: PersonalInfo;
    useAddrDelivery: boolean;
    addrDelivery: Address;
    onlyParticipate: boolean;                       // ลงขันส่วนร่วมอย่างเดียว
    investContribute: ContributeInfoItem;           // !! ควรจะเปลี่ยนเป็น Array ของ ContributeInfoItem
    participateContribute: ContributeInfoItem;
    //status: ContributeStatus;

    // constructor() {
    //     this.personalInfo = new PersonalInfo();
    //     this.onlyParticipate = false;
    //     this.investContribute = new ContributeInfoItem();
    //     this.participateContribute = new ContributeInfoItem();
    //     this.useAddrDelivery = false;
    //     this.addrDelivery = new Address();
    // }
};
