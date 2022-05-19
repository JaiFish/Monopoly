
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Asset/SpriteAtlasAsset.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31e45KA+8xHI5Rn2Ztjff8f', 'SpriteAtlasAsset');
// Script/Asset/SpriteAtlasAsset.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpriteAtlasAsset = /** @class */ (function () {
    function SpriteAtlasAsset() {
        this.typePath = "Image/";
        this.filePath = [
            "Station/Station",
            "Station/Station_Gary",
            "Station/UIBtnStatoin",
            "Station/StationInfo1",
            "Station/StationInfo2",
            "Bear",
            "MapPoint",
            "Cloud",
            "TrainType",
            "Feature",
            "Setting",
            "Props/GetProps",
            "Props/Props",
        ];
    }
    SpriteAtlasAsset.prototype.loadAsset = function (_Asset) {
        var _this = this;
        this.checkAssetState = false;
        var formatArr = [];
        for (var index = 0; index < this.filePath.length; index++) {
            formatArr.push(this.typePath + this.filePath[index]);
        }
        cc.resources.load(formatArr, cc.SpriteAtlas, function (err, data) {
            data.forEach(function (_SpriteAtlas) {
                _SpriteAtlas.getSpriteFrames().forEach(function (_spriteFrame) {
                    // console.log(_spriteFrame);
                    _Asset.set(_spriteFrame.name, _spriteFrame);
                });
            });
            _this.checkAssetState = true;
        });
        return this;
    };
    return SpriteAtlasAsset;
}());
exports.default = new SpriteAtlasAsset();

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxBc3NldFxcU3ByaXRlQXRsYXNBc3NldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQUE7UUFFSSxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBQzVCLGFBQVEsR0FBYTtZQUNqQixpQkFBaUI7WUFDakIsc0JBQXNCO1lBQ3RCLHNCQUFzQjtZQUN0QixzQkFBc0I7WUFDdEIsc0JBQXNCO1lBQ3RCLE1BQU07WUFDTixVQUFVO1lBQ1YsT0FBTztZQUNQLFdBQVc7WUFDWCxTQUFTO1lBQ1QsU0FBUztZQUNULGdCQUFnQjtZQUNoQixhQUFhO1NBQ2hCLENBQUM7SUFtQk4sQ0FBQztJQWxCRyxvQ0FBUyxHQUFULFVBQVUsTUFBd0I7UUFBbEMsaUJBZ0JDO1FBZkcsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUE7UUFDNUIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFBO1FBQ2xCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN2RCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1NBQ3ZEO1FBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBMkI7WUFDMUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFlBQVk7Z0JBQ3JCLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZO29CQUMvQyw2QkFBNkI7b0JBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQTtnQkFDL0MsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBQ0Qsa0JBQWUsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElBc3NldCBmcm9tIFwiLi4vSW50ZXJmYWNlL0lBc3NldFwiO1xyXG5cclxuXHJcbmNsYXNzIFNwcml0ZUF0bGFzQXNzZXQgaW1wbGVtZW50cyBJQXNzZXQge1xyXG4gICAgY2hlY2tBc3NldFN0YXRlOiBib29sZWFuO1xyXG4gICAgdHlwZVBhdGg6IHN0cmluZyA9IFwiSW1hZ2UvXCI7XHJcbiAgICBmaWxlUGF0aDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgXCJTdGF0aW9uL1N0YXRpb25cIixcclxuICAgICAgICBcIlN0YXRpb24vU3RhdGlvbl9HYXJ5XCIsXHJcbiAgICAgICAgXCJTdGF0aW9uL1VJQnRuU3RhdG9pblwiLFxyXG4gICAgICAgIFwiU3RhdGlvbi9TdGF0aW9uSW5mbzFcIixcclxuICAgICAgICBcIlN0YXRpb24vU3RhdGlvbkluZm8yXCIsXHJcbiAgICAgICAgXCJCZWFyXCIsXHJcbiAgICAgICAgXCJNYXBQb2ludFwiLFxyXG4gICAgICAgIFwiQ2xvdWRcIixcclxuICAgICAgICBcIlRyYWluVHlwZVwiLFxyXG4gICAgICAgIFwiRmVhdHVyZVwiLFxyXG4gICAgICAgIFwiU2V0dGluZ1wiLFxyXG4gICAgICAgIFwiUHJvcHMvR2V0UHJvcHNcIixcclxuICAgICAgICBcIlByb3BzL1Byb3BzXCIsXHJcbiAgICBdO1xyXG4gICAgbG9hZEFzc2V0KF9Bc3NldDogTWFwPHN0cmluZywgYW55Pikge1xyXG4gICAgICAgIHRoaXMuY2hlY2tBc3NldFN0YXRlID0gZmFsc2VcclxuICAgICAgICBsZXQgZm9ybWF0QXJyID0gW11cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5maWxlUGF0aC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgZm9ybWF0QXJyLnB1c2godGhpcy50eXBlUGF0aCArIHRoaXMuZmlsZVBhdGhbaW5kZXhdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChmb3JtYXRBcnIsIGNjLlNwcml0ZUF0bGFzLCAoZXJyLCBkYXRhOiBBcnJheTxjYy5TcHJpdGVBdGxhcz4pID0+IHtcclxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKF9TcHJpdGVBdGxhcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBfU3ByaXRlQXRsYXMuZ2V0U3ByaXRlRnJhbWVzKCkuZm9yRWFjaChfc3ByaXRlRnJhbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKF9zcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX0Fzc2V0LnNldChfc3ByaXRlRnJhbWUubmFtZSwgX3Nwcml0ZUZyYW1lKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tBc3NldFN0YXRlID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTcHJpdGVBdGxhc0Fzc2V0KCk7XHJcbiJdfQ==