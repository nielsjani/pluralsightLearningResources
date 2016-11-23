var MyModule;
(function (MyModule) {
    var MyClass = (function () {
        function MyClass(isHappy) {
            this.isHappy = isHappy;
        }
        return MyClass;
    })();
    MyModule.MyClass = MyClass;
})(MyModule || (MyModule = {}));
//# sourceMappingURL=namedmodules.js.map