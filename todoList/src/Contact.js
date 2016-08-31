let data = [];

export class Contact {

  constructor() {}

  getData() {
    return data;
  }

  setData(_data) {
    data = _data;
  }

  formatObject(name, lastname, telephone) {
    return {
      name : name,
      lastname : lastname,
      telephone : telephone
    };
  }

}
