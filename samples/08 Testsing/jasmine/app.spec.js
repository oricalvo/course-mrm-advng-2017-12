describe("Contact", function() {

    it("should throw an exception if name parameter is empty", function() {
        expect(()=> {
            const c = new Contact();
        }).toThrow();
    });

    it("should throw an exception if name parameter is empty", function() {

        expect(()=> {
            const c = new Contact();
        }).toThrow();

    });

    it("should wait for server response and then reenable the refresh button", async function(done) {

        try {
            await service.doReload();

            expect(button.disable).toBe(true);

            done();
        }
        catch(err) {
            expect(false).toBe(true);

            done();
        }

    });

});
