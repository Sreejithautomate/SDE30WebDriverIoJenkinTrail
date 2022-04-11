

// describe.skip('Test_Suite', () => {



//     it('test_case-01', () =>
//     {
//         console.log("Create Contact");

//     });

//     it('test_case-02', () =>
//     {
//         console.log("Create Contact");
//     });
// });



describe('Test_Suite', () => {
   before(function(){console.log(" launch Browser");
                     console.log("Enter the url")});
    after(function () {
        console.log("close the browser")});

    beforeEach(function (){
        console.log("login to application")});

        afterEach(() => {
            console.log("logout from application")
        });

    it('test_case-01', () =>
    {
        console.log("Create Contact");

    });

    it('test_case-02', () =>
    {
        console.log("Create Contact");
    });
});