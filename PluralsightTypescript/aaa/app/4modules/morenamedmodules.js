var MyModule;
(function (MyModule) {
    var AnotherClassOfMine = (function () {
        function AnotherClassOfMine(someObject) {
            this.someObject = someObject;
        }
        return AnotherClassOfMine;
    })();
    MyModule.AnotherClassOfMine = AnotherClassOfMine;
})(MyModule || (MyModule = {}));
//# sourceMappingURL=morenamedmodules.js.map