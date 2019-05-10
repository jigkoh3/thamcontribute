
import { PersonalInfo, Address } from './personalInfo';

export class ContributeInfoItem {
    id: string;
    amount: number;
    account: string;
    transferDate: Date;
    imgIDUrl: string;
    imgSlipUrl: string;
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
    status: ContributeStatus;
};
