export class Address {
    addr: string;               // บ้านเลขที่/หมู่/หมู่่บ้าน
    alley: string;              // ซอย
    street: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;

    constructor() {
        this.addr = "";
        this.alley = "";
        this.street = "";
        this.subdistrict = "";
        this.district = "";
        this.province = "";
        this.postcode = "";
    }
};

export class PersonalInfo {
    prefix: string;
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    line: string;
    facebook: string;
    address: Address;

    constructor() {
        this.prefix = "";
        this.id = "";
        this.firstName = "";
        this.lastName = "";
        this.phone = "";
        this.email = "";
        this.line = "";
        this.facebook = "";
        this.address = new Address();
    }
};

