class Product {
    constructor(id) {
        this.id = id;
    }
}

//information formulaire de contact
class FormContent {
    constructor(lastName, firstName, email, address, city) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.address = address;
        this.city = city;
    }
}

//information commande
class OrderInfo {
    constructor(formInformation, idOrder) {
        this.formInformation = formInformation;
        this.idOrder = idOrder;
    }
}

