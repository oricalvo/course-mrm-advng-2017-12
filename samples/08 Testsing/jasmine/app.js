class Contact {
    constructor(name) {
        if(!name) {
            throw new Error("Name must be non empty");
        }
    }
}
